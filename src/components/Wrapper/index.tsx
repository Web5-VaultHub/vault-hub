"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import style from "./style.module.scss";
import useWeb5 from "../utils/hooks";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Modal from "../utils/Modal";
import UploadButton from "../utils/UploadButton";

interface WrapperProps {
  children?: ReactNode;
  pageTitle?: string;
  action?: string;
  newAction?: () => void;
  upload?: boolean;
  handleUpload?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Wrapper({
  children,
  pageTitle,
  newAction,
  action,
  upload,
  handleUpload
}: WrapperProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { did, loading } = useWeb5();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const showModal = Boolean(searchParams.get("new"));
    setShowModal(showModal);
  }, [searchParams.get("new")]);

  const handleCloseModal = () => {
    router.replace(pathname);
    setShowModal(false);
  };

  useEffect(() => {
    if (!loading) !did ? router.replace("/create-did") : null;
  }, [loading, did]);

  return (
    <>
      {showModal && <Modal closeModal={handleCloseModal} did={did} />}
      <main className={style.rowSection}>
        <Sidebar />
        <section className={style.mainSection}>
          <div className={style.header}>
            {pageTitle && <h3 className={style.pageTitle}>{pageTitle}</h3>}
            {upload ? <UploadButton handleUpload={handleUpload} /> : null}
          </div>
          {children}
        </section>
      </main>
    </>
  );
}
