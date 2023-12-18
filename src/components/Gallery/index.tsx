"use client";
import React, { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import useWeb5, { useDID, useProfile } from "../utils/hooks";
import UploadPhoto from "./upload";
import style from "./style.module.scss";
import EmptyState from "../reusable/EmptyState";
import { BeatLoader } from "react-spinners";
import Wrapper from "../Wrapper";

export default function Photos() {
  const did = useDID();
  const { web5, loading } = useWeb5();
  const [photos, setPhotos] = useState<any[]>();
  const [pageLoading, setPageLoading] = useState(true);
  const [open, setOpen] = useState([false]);

  useEffect(() => {
    if (photos && photos.length > 0) setOpen(Array(photos.length).fill(false));
  }, [photos]);

  const toggleDropdown = (index: number) => {
    setOpen(open?.map((state, i) => (i === index ? !state : state)));
  };

  useEffect(() => {
    const retrievePhotos = async () => {
      setPageLoading(true);
      try {
        const photoList: any[] = [];
        const { records } = await web5.dwn.records.query({
          from: did,
          message: {
            filter: {
              schema: "http://vaulthub.xyz/images",
              dataFormat: "application/json",
            },
          },
        });

        if (records) {
          let recordId = records.map((record: any) => {
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
            const dataWithId = { ...data, recordId: recordId[i] };
            photoList.push(dataWithId);
          }
          console.log(photoList);
          setPhotos(photoList);
        }
      } catch (error) {
        console.log("Error retrieving data from DWN:", error);
      } finally {
        setPageLoading(false);
      }
    };
    retrievePhotos();
  }, [loading, web5]);

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
    const fileName = `IMG${currentDate}_${
      photos ? photos.length + 1 : 1
    }.${fileType}`;

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
            schema: "http://vaulthub.xyz/images",
            dataFormat: "application/json",
          },
        });
        const addPhoto = await record?.data.json();
        if (photos) setPhotos([...photos, addPhoto]);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  const handleDelete = async (recordId: string) => {
    try {
      await web5.dwn.records.delete({
        message: {
          recordId: recordId,
        },
      });
      setPhotos(photos?.filter((photo) => photo.recordId !== recordId));
    } catch (error) {
      console.error("Delete photo", error);
    }
  };

  return (
    <Wrapper
      pageTitle="Gallery"
      upload={photos?.length == 0 ? false : true}
      handleUpload={handleUpload}
    >
      <>
        {loading ? (
          <BeatLoader size={15} color="#000" />
        ) : !photos || photos.length <= 0 ? (
          <EmptyState
            imgSrc="/images/gallery.svg"
            infoText="You have not added any photos yet."
            fileBtn={true}
            handleUpload={handleUpload}
          />
        ) : (
          <div className={style.photosWrapper}>
            {photos.map((photo: any, index: number) => (
              <div key={index} className={style.photo}>
                {photo.image ? <img alt="" src={photo.image} /> : null}

                <div className={style.dropdown}>
                  <button
                    className={style.dropdownBtn}
                    type="button"
                    onClick={() => toggleDropdown(index)}
                  >
                    <img src="/images/ellipsis.svg" alt="..." />
                  </button>

                  {open[index] && (
                    <div className={style.dropdownContent}>
                      <button>
                        <img src="/images/download.svg" alt="" />
                        <span> Download</span>
                      </button>
                      <button>
                        <img src="/images/share.svg" alt="..." />
                        <span>Share</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(photo.recordId)}
                      >
                        <img src="/images/delete.svg" alt="" />
                        <span> Delete</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    </Wrapper>
  );
}
