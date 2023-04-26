// Action Creators
// Create action creators as defined in tests

// Action Types
const ADD_QUOTE = "quotes/add";
const UPDATE_QUOTE_VOTES = "quotes/UPDATE_QUOTE_VOTES";
const UPVOTE_QUOTE = "quotes/upvote";
const DOWNVOTE_QUOTE = "quotes/downvote";
const REMOVE_QUOTE = "quotes/remove";

// Action Creators
export function addQuote(quote) {
  return { 
    type: ADD_QUOTE, 
    payload: quote 
  };
}

export function updateQuoteVotes(id, votes) {
  return { 
    type: UPDATE_QUOTE_VOTES, 
    payload: { id, votes } 
  };
}

export function upvoteQuote(id) {
  return {
    type: UPVOTE_QUOTE,
    payload: id
  };
}

export function downvoteQuote(id) {
  return {
    type: DOWNVOTE_QUOTE,
    payload: id
  };
}

export function removeQuote(id) {
  return {
    type: REMOVE_QUOTE,
    payload: id
  };
}

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_QUOTE:
      return [...state, action.payload];
    case UPDATE_QUOTE_VOTES:
      return state.map((quote) => {
        if (quote.id === action.payload.id) {
          return { ...quote, votes: action.payload.votes };
        }
        return quote;
      });
    case UPVOTE_QUOTE:
      return state.map((quote) => {
        if (quote.id === action.payload) {
          return { ...quote, votes: quote.votes + 1 };
        }
        return quote;
      });
    case DOWNVOTE_QUOTE:
      return state.map((quote) => {
        if (quote.id === action.payload && quote.votes > 0) {
          return { ...quote, votes: quote.votes - 1 };
        }
        return quote;
      });

    case REMOVE_QUOTE:
      return state.filter((quote) => quote.id !== action.payload);

    default:
      return state;
  }
}
