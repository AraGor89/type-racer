import React from "react";
import style from "./common.module.scss";

const QuoteInput = ({ handleTyping, typingField }) => {
  const onChange = (e) => {
    handleTyping(e.target.value);
  };
  return (
    <textarea
      className={style.quoteInput}
      autoFocus
      onChange={onChange}
      value={typingField}
    ></textarea>
  );
};
export default QuoteInput;
