import { PropsWithChildren } from "react";
import s from "./Card.module.css";

const Card = ({ children }: PropsWithChildren) => {
  return <div className={s.card}>{children}</div>;
};

export default Card;
