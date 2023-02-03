import style from "../card/style.module.css";

export function Card({ title, description, act }) {
  return (
    <div className={style.card}>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={act}>Ver Poster!</button>
    </div>
  );
}
