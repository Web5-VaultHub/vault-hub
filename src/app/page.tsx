"use client";
import { Web5 } from "@web5/api";
import Image from "next/image";
import styles from "./page.module.css";
import FileUploader from "src/components/FileUploader";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetch = async () => {
      const { web5, did: newDID } = await Web5.connect();
      const { records } = await web5.dwn.records.query({
        from: localStorage.getItem("userDID"),
        message: {
          filter: {
            schema: "http://example.com/user-profile-object",
            dataFormat: "application/json",
          },
        },
      });
      console.log(records);
    };
    fetch();
  }, []);

  const handleFileSelect = async (file: File): Promise<void> => {
    console.log("Selected file:", file);
    const record = await createMessage(file);
    console.log(record);
    // Perform actions with the selected file, such as uploading or processing
  };
  // Create a mixed record
  async function createMessage(file: File) {
    let base64Image = null;
    const { web5, did: newDID } = await Web5.connect();
    console.log(web5);
    if (file) {
      const binaryImage = await file.arrayBuffer();
      base64Image = btoa(
        new Uint8Array(binaryImage).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );
    }

    const messageData = {
      username: localStorage.getItem("userDID"),
      // message: messageText,
      image: base64Image,
    };

    const { record } = await web5.dwn.records.create({
      data: messageData,
      message: {
        schema: "http://example.com/user-profile-object",
        dataFormat: "application/json",
      },
    });

    return record;
  }
  return (
    <main className={styles.main}>
      <h1>HOME</h1>

      <FileUploader onFileSelect={handleFileSelect} />
    </main>
  );
}
