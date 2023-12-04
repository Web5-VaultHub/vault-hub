import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import style from "./style.module.scss";

interface WrapperProps {
  children?: ReactNode;
  pageTitle?: string;
}

export default function Wrapper({ children, pageTitle }: WrapperProps) {
  return (
    <main className={style.rowSection}>
      <Sidebar />
      <section className={style.mainSection}>
        {pageTitle && <h3 className={style.pageTitle}>{pageTitle}</h3>}
        {children}
      </section>
    </main>
  );
}
