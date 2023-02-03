import style from "../Poster/style.module.css";

export function Poster({ image }) {
  return (
    <div className={style.pai}>
      <img className={style.picture} src={image} />
    </div>
  );
}
