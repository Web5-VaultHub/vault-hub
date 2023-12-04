import style from "./style.module.scss";

export default function CheckPill({ ...props }) {
  return (
    <label className={style.checkPill}>
      <input {...props} />
      <div className={style.checkMark}>{props.label}</div>
    </label>
  );
}
