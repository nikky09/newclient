import axios from "./axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/auth/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    return res;
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    alert(err.response.data.message);
    console.log(err);
  }
};
