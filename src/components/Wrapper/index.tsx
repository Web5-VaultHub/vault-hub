"use client";
import { ReactNode, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import style from "./style.module.scss";
import useWeb5 from "../utils/hooks";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Modal from "../utils/Modal";

interface WrapperProps {
  children?: ReactNode;
  pageTitle?: string;
  action?: string;
  newAction?: () => void;
}

export default function Wrapper({
  children,
  pageTitle,
  newAction,
  action,
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
  console.log(showModal);

  const handleCloseModal = () => {
    router.replace(pathname);
    setShowModal(false);
  };

  useEffect(() => {
    // if (!loading) !did ? router.replace("/create-did") : null;
  }, [loading, did]);

  return (
    <>
      {showModal && <Modal closeModal={handleCloseModal}  did={did} />}
      <main className={style.rowSection}>
        <Sidebar />
        <section className={style.mainSection}>
          <div className={style.header}>
            {pageTitle && <h3 className={style.pageTitle}>{pageTitle}</h3>}
            {action == "uploadGallery" && (
              <button
                className={style.newBtn}
                type="button"
                onClick={newAction}
              >
                New
              </button>
            )}
          </div>
          {children}
        </section>
      </main>
    </>
  );
}
