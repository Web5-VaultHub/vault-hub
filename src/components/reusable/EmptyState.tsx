import UploadButton from "../utils/UploadButton";
import style from "./style.module.scss";
interface EmptyStateProps {
  imgSrc: string;
  infoText: string;
  btnValue?: string;
  fileBtn?: boolean;
  handleClick?: () => {};
  handleUpload?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EmptyState({
  imgSrc,
  infoText,
  btnValue,
  handleClick,
  fileBtn,
  handleUpload,
}: EmptyStateProps) {
  return (
    <div className={style.emptyContainer}>
      <div className={style.content}>
        <img src={imgSrc} />
        <p className={style.infoText}>{infoText}</p>
        {fileBtn ? (
          <UploadButton handleUpload={handleUpload} />
        ) : (
          <button
            className={style.actionBtn}
            type="button"
            onChange={handleClick}
          >
            {btnValue}
          </button>
        )}
      </div>
    </div>
  );
}
