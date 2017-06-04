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
      eventList: [...state.eventList, {...action.payload, eventID: state.eventList.length}]
    };
  }
  if (action.type === "INCREASE_EVENT_INTEREST") {
    return {
      ...state,
      eventList: state.eventList.map((event) => {
        if (event.eventID === action.eventID) {
          return {
            ...event,
            interestedCount: event.interestedCount + 1
          }
        } else {
          return event;
        }
      })
    };
  }

  return state;
}
