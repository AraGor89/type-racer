const initialState = {
  typingField: "",
  speed: 0,
  time: 0,
  quote: "",
  totalWordsCount: 1,
};

const typingReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPING:
      return {
        ...state,
        typingField: action.char,
      };
    case INCREMENT_TIME:
      return {
        ...state,
        time: state.time + 1,
      };
    case RESET_TIME:
      return {
        ...state,
        time: 0,
      };
    case SET_SPEED:
      return {
        ...state,
        speed: action.speed,
      };
    case SET_QUOTE:
      return {
        ...state,
        quote: action.quote,
      };
    case SET_TOTAL_WORDS_COUNT:
      return {
        ...state,
        totalWordsCount: action.wordsCount,
      };
    default:
      return state;
  }
};
export default typingReducer;

const RANDOM_QUOT_API = "https://api.quotable.io/random";
const TYPING = "TYPING";
export const handleTyping = (char) => ({ type: TYPING, char });
const INCREMENT_TIME = "INCREMENT_TIME";
export const incrementTime = () => ({ type: INCREMENT_TIME });
const RESET_TIME = "RESET_TIME";
export const resetTime = () => ({ type: RESET_TIME });
const SET_SPEED = "SET_SPEED";
export const typingSpeed = (speed) => ({ type: SET_SPEED, speed });
const SET_QUOTE = "SET_QUOTE";
const setQuote = (quote) => ({ type: SET_QUOTE, quote });
const SET_TOTAL_WORDS_COUNT = "SET_TOTAL_WORDS_COUNT";
const setWordsCount = (wordsCount) => ({
  type: SET_TOTAL_WORDS_COUNT,
  wordsCount,
});

export const getRandomQuote = () => (dispatch) => {
  fetch(RANDOM_QUOT_API)
    .then((response) => response.json())
    .then((data) => {
      dispatch(setQuote(data.content));
      dispatch(setWordsCount(data.content.match(/(\w+)/g).length));
      dispatch(handleTyping(""));
    });
};
