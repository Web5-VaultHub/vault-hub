import { useState, useEffect } from "react";
import style from "./style.module.scss";

interface Modal {
  closeModal: () => void;
  did: string;
}

export default function Modal({ closeModal, did }: Modal) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (copied) {
      timer = setTimeout(() => {
        setCopied(false);
      }, 1500);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [copied]);

  return (
    <div className={style.modalWrapper}>
      <div className={style.modalContent}>
        <button className={style.closeBtn} type="button" onClick={closeModal}>
          <img src="/images/times.svg" alt="" />
        </button>
        <h3>Save DID</h3>
        <p>Secure your DID for future purposes</p>
        <div className={style.codeBlock}>
          <p className={style.text}>{did}</p>
        </div>
        <button
          className={style.modalBtn}
          type="button"
          onClick={() => {
            navigator.clipboard.writeText("did copied");
            setCopied(true);
          }}
        >
          {!copied ? (
            <>
              <img src="/images/clipboard.svg" alt="" />
              <span>Copy</span>
            </>
          ) : (
            <span>Copied!</span>
          )}
        </button>
      </div>
    </div>
  );
}
