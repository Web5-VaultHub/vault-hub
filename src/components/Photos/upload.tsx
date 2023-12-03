"use client";
import { ChangeEvent, useState } from "react";
import useWeb5, { useDID } from "../utils/hooks";

export default function UploadPhoto() {
  const { web5 } = useWeb5();
  const userDID = useDID();
  const [base64Image, setBase64Image] = useState<any>();

  const imageUploadProtocol = {
    protocol: "http://vaulthub.web5",
    published: false,
    types: {
      image: {
        schema: "http://vaulthub.web5/image",
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
    const fileName = `IMG${currentDate}.${fileType}`;

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
            schema: "http://example.com/vaulthub-imagess",
            dataFormat: "application/json",
          },
        });

        console.log(await record.data.json());
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleUpload} />
    </div>
  );
}
