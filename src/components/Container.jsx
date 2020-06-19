import React, { useEffect } from "react";
import { connect } from "react-redux";
import Quote from "./Quote";
import QuoteInput from "./QuoteInput";
import Timer from "./Timer";
import style from "./common.module.scss";

import {
  handleTyping,
  incrementTime,
  typingSpeed,
  getRandomQuote,
  resetTime,
} from "../reducers/typingReducer";

const Container = (props) => {
  let {
    getRandomQuote,
    typingField,
    quote,
    typingSpeed,
    time,
    totalWordsCount,
    handleTyping,
    speed,
    resetTime,
    incrementTime,
  } = props;
  useEffect(() => {
    getRandomQuote();
  }, []);
  useEffect(() => {
    if (typingField === quote) {
      getRandomQuote();
      let speedResult = Math.floor(time / totalWordsCount);
      typingSpeed(speedResult);
    }
  }, [typingField]);
  return (
    <div className={style.container}>
      <Timer
        speed={speed}
        incrementTime={incrementTime}
        resetTime={resetTime}
        typingField={typingField}
        quote={quote}
        time={time}
      />
      <Quote quote={quote} typingField={typingField} />
      <QuoteInput handleTyping={handleTyping} typingField={typingField} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  typingField: state.typingReducer.typingField,
  time: state.typingReducer.time,
  speed: state.typingReducer.speed,
  quote: state.typingReducer.quote,
  totalWordsCount: state.typingReducer.totalWordsCount,
});
export default connect(mapStateToProps, {
  handleTyping,
  incrementTime,
  typingSpeed,
  getRandomQuote,
  resetTime,
})(Container);
