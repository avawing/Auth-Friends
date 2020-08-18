import axios from 'axios';

export const axiosWithAuth =() => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            Authorization: token,
        },
    });
};

axiosWithAuth().get('endpoint/path/here').then(data => console.log(res.data));

export const login = () => {
    axios.post('endpoint/here', userCredentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        props.history.push('/dashboard');
        }
      )
  }