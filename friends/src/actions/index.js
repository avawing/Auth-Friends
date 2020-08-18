export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const login = () => {
    dispatch({type: LOGIN_REQUEST})
    axios
    .post('endpoint/here', userCredentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        props.history.push('/dashboard');
        dispatch({type: LOGIN_SUCCESS})
        }
      )
      .catch(e => {
          dispatch({type: LOGIN_FAILURE, payload: e})
      })
  }