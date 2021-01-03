import React from "react";

import s from "./Statistics.module.css";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <ul className={s.markers}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li className={s.totalForm}>Total: {total}</li>
        <li className={s.totalForm}>
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
      ;
    </div>
  );
}
