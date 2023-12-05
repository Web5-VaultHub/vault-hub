"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useDID, useProfile } from "src/components/utils/hooks";

export default function Home() {
  const userDid = useDID();
 // const profile = useProfile(userDid);
 // console.log(profile);
  return (
    <main className={styles.main}>
      <h1>HOME</h1>

      {/* <FileUploader onFileSelect={handleFileSelect} /> */}
    </main>
  );
}
