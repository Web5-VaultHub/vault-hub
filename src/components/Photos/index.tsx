import { useCallback, useEffect, useState } from "react";
import useWeb5, { useDID, useProfile } from "../utils/hooks";
import UploadPhoto from "./upload";
import { Web5 } from "@web5/api";
import style from "./style.module.scss"

export default function Photos() {
  const did = useDID();
  // const { web5 } = useWeb5();
  const [photos, setPhotos] = useState([]);

  const retrievePhotos = async () => {
    try {
      const { web5 } = await Web5.connect();
      const photoList: any[] = [];

      const { records } = await web5.dwn.records.query({
        message: {
          filter: {
            schema: "http://example.com/vaulthub-imagess",
            dataFormat: "application/json",
          },
        },
      });
      let recordId = records.map((record) => {
        return record.id;
      });

      for (let i = 0; i < recordId.length; i++) {
        let { record } = await web5.dwn.records.read({
          message: {
            filter: {
              recordId: recordId[i],
            },
          },
        });
        const data = await record.data.json();
        photoList.push(data);
      }
      console.log(photoList);
      setPhotos(photoList);

      /*   for (let record of records) {
        const data = await record.data.json();
        const list = { record, data, id: record.id };
        console.log(list)
       // setProfile(list);
      }*/
    } catch (error) {
      console.log("Error retrieving data from DWN:", error);
    }
  };

  useEffect(() => {
    retrievePhotos();
  }, [retrievePhotos]);

  return (
    <div>
      <>
        <UploadPhoto />
        {!photos || photos.length < 0 ? (
          <p>No photos</p>
        ) : (
          <div className={style.photosWrapper}>
            {photos.map((photo: any, index: number) => (
              <div key={index} className={style.photo}  >
                <img alt="" src={photo.image} />
              </div>
            ))}
          </div>
        )}
      </>
    </div>
  );
}

