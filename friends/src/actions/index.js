import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const POST_FRIEND_START = "POST_FRIEND_START";
export const POST_FRIEND_SUCCESS = "POST_FRIEND_SUCCESS";
export const POST_FRIEND_FAIL = "POST_FRIEND_FAIL";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_FAIL = "FETCH_FRIENDS_FAIL";

export const login = (userCredentials) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  axios
    .post("http://localhost:5000/api/login", userCredentials)
    .then((res) => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: LOGIN_FAILURE, payload: e });
    });
};

export const fetchFriends = () => (dispatch) => {
  dispatch({ type: FETCH_FRIENDS_START });
  axiosWithAuth()
    .get("http://localhost:5000/api/friends")
    .then((res) => {
      dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch((e) => {
      dispatch({
        type: FETCH_FRIENDS_FAIL,
        payload: `So no one told you life was gonna be this way? ${e}`,
      });
    });
};

export const postFriend = (newFriend) => (dispatch) => {
  dispatch({type: POST_FRIEND_START})
  axiosWithAuth()
  .post('http://localhost:5000/api/friends', newFriend)
  .then(res => {
    dispatch({type: POST_FRIEND_SUCCESS, payload: res.data})
  })
  .catch(e => {
    dispatch({type: POST_FRIEND_FAIL, payload: `You're still in bed at ten? ${e}`})
  })
}
