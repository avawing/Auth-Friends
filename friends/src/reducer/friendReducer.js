const {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAIL,
  POST_FRIEND_START,
  POST_FRIEND_SUCCESS,
  POST_FRIEND_FAIL,
} = require("../actions");

const initialState = {
  friends: [],
  isLoading: false,
  errors: "",
};

function friendReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FRIENDS_START:
      return { ...state, isLoading: true };

    case FETCH_FRIENDS_SUCCESS:
      return { ...state, isLoading: false, friends: action.payload };

    case FETCH_FRIENDS_FAIL:
      return { ...state, isLoading: false, errors: action.payload };

    case POST_FRIEND_START:
      return { ...state, isLoading: true };

    case POST_FRIEND_SUCCESS:
      return {
        ...state,
        isLoading: false,
        friends: [...state.friends, action.payload],
      };

    case POST_FRIEND_FAIL:
      return { ...state, isLoading: false, errors: action.payload };

    default:
      return state;
  }
}

export default friendReducer;
