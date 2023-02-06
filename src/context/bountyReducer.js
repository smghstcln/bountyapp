import {
    ADD_BOUNTY,
    REMOVE_BOUNTY,
    FETCH_BOUNTIES,
    BOUNTIES_ERROR
  } from "../types";
  
  export default (state, action) => {
    switch (action.type) {
      case ADD_BOUNTY:
        return {
          ...state,
          bounties: [...state.bounties, action.payload]
        };
      case REMOVE_BOUNTY:
        return {
          ...state,
          bounties: state.bounties.filter(
            bounty => bounty._id !== action.payload
          )
        };
      case FETCH_BOUNTIES:
        return {
          ...state,
          bounties: action.payload
        };
      case BOUNTIES_ERROR:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };
  