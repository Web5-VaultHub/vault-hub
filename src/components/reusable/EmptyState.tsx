import style from "./style.module.scss";
interface EmptyStateProps {
  imgSrc: string;
  infoText: string;
  btnValue?: string;
  handleChange?: () => {};
}

export default function EmptyState({
  imgSrc,
  infoText,
  btnValue,
  handleChange,
}: EmptyStateProps) {
  return (
    <div className={style.emptyContainer}>
      <div className={style.content}>
        <img src={imgSrc} />
        <p className={style.infoText}>{infoText}</p>
        {btnValue && (
          <button
            className={style.actionBtn}
            type="button"
            onChange={handleChange}
          >
            {btnValue}
          </button>
        )}
      </div>
    </div>
  );
}
