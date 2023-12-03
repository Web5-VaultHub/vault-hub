import { useEffect, useState } from "react";
import useWeb5, { useDID, useProfile } from "../utils/hooks";
import UploadPhoto from "./upload";
import { Web5 } from "@web5/api";

export default function Photos() {
  const did = useDID();

  const [photos, setPhotos] = useState<[]>();

  const retrievePhotos = async () => {
    try {
      let photoList: any = [];
      const { web5 } = await Web5.connect();

      const { records } = await web5.dwn.records.query({
        from: did,
        message: {
          filter: {
            schema: "http://example.com/vaulthub-imagess",
            dataFormat: "application/json",
          },
        },
      });
      for (let record of records) {
        const data = await record.data.json();
        const image = { record, data, id: record.id };
        console.log(image);
        //   photoList.value.push(image);
      }
      console.log(photoList);
    } catch (error) {
      console.log("Error retrieving data from DWN:", error);
      // Handle the error appropriately
    }
  };

  useEffect(() => {
    retrievePhotos();
  }, [retrievePhotos]);

  return <UploadPhoto />;
}
