import api from "../services/api.js";

const initialState = {
  eventList: api.getEventList()
};

export default function (state = initialState, action) {
  if (action.type === "FETCH_ALL_EVENTS") {
    return {
      ...state
    };
  }

  if (action.type === "ADD_EVENT") {
    return {
      ...state,
      eventList: [...state.eventList, action.payload]
    };
  }

  return state;
}
