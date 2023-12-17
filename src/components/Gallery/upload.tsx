"use client";
import { ChangeEvent, useState } from "react";
import style from "./style.module.scss";
import useWeb5, { useDID } from "../utils/hooks";


export default function UploadPhoto({ photos, setPhotos }: any) {
  const { web5 } = useWeb5();
  // const userDID = useDID();
  const imageUploadProtocol = {
    protocol: "http://vaulthub.web5",
    published: true,
    types: {
      image: {
        schema: "http://vaulthub.web/image",
        dataFormats: ["application/json"],
      },
    },
    structure: {
      image: {
        $actions: [{ who: "author", of: "image", can: "write" }],
      },
    },
  };
  
  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files || files.length === 0) {
      return;
    }

    const file = files[0];
    const fileType = file.name.split(".").pop();

    const currentDate = new Date()
      .toISOString()
      .split("T")[0]
      .replace(/-/g, "");
    const fileName = `IMG${currentDate}_${photos.length + 1}.${fileType}`;

    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Image = reader.result;
        if (!base64Image) {
          return;
        }
        const { record } = await web5.dwn.records.create({
          data: { name: fileName, image: base64Image },
          message: {
            schema: "http://example.com/vaulthub-images",
            dataFormat: "application/json",
          },
        });
        const addPhoto = await record?.data.json();
        setPhotos([...photos, addPhoto]);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <div className={style.title}>Upload</div>
        <input type="file" accept="image/*" onChange={handleUpload} />
      </div>
    </div>
  );
}
