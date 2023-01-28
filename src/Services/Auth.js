const BASE_URL = "http://localhost:8000/api/v1";
const login = async (values) => {
  console.log(values);
};

const Register = async (values) => {
  try {
    const registerData = await fetch(`${BASE_URL}/user/register`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
    return registerData;
  } catch (error) {
    return error;
  }
};

const authServices = { login, Register };

export default authServices;
