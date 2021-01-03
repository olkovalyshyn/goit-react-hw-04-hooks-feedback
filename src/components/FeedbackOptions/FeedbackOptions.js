import React from "react";

import s from "./FeedbackOptions.module.css";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map((option) => (
    <button
      key={option}
      className={s.styleBtn}
      type="button"
      name={option}
      onClick={() => {
        onLeaveFeedback(option);
      }}
    >
      {option}
    </button>
  ));
}
