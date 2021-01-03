import React from "react";
import s from "./Section.module.css";

export default function Section({ title, children }) {
  return (
    <div>
      <h2 className={s.title}>{title}</h2>
      {children}
    </div>
  );
}
