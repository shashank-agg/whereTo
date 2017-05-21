
const initialState = {
  username: '',
  password: ''
};

export default function (state = initialState, action) {

  switch (action.type) {
    case "SET_USERNAME":
      return {
        ...state,
        username: action.payload,
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };
  
    default:
      return state;
  }
}
