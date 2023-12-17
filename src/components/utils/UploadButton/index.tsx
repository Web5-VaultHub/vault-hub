import style from "./style.module.scss";

interface Upload {
    handleUpload?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function UploadButton({ handleUpload }: Upload) {
  return (
    <div className={style.uploadBtnWrapper}>
      <button className={style.uploadBtn}>Upload</button>
      <input type="file" name="myfile" onChange={handleUpload} />
    </div>
  );
}
