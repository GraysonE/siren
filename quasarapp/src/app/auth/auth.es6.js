import axios from "axios";

const Auth = () => {

  const login = (credentials, redirect) => {
    // During this request Laravel will set an XSRF-TOKEN cookie containing the current CSRF token.
    // This token should then be passed in an X-XSRF-TOKEN header on subsequent requests,
    // which libraries like Axios and the Angular HttpClient will do automatically for you.
    axios.head('/sanctum/csrf-cookie')
      .then(r => {
        console.log(r)
        axios.post('/login', credentials).then(r => {
          console.log(r)

        })
      }).catch(err => {
      console.error(err)
    });
  }

  return {
    login(credentials, redirect) {
      return login(credentials, redirect);
    }
  }
}

export default Auth;
