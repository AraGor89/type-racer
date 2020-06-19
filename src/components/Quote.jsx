import React from "react";
import style from "./common.module.scss";

const Quote = ({ quote, typingField }) => {
  let quoteSplitted = quote.split("");
  return (
    <div className={style.quoteDisplay}>
      {quoteSplitted.map((char, index) => {
        let styling;
        if (index < typingField.length) {
          styling =
            char === typingField[index] ? style.correct : style.incorrect;
        }
        return (
          <span className={styling} key={index}>
            {char}
          </span>
        );
      })}
    </div>
  );
};
export default Quote;
