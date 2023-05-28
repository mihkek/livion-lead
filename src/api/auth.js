import axios from "./axios";

const register = (email, type, name, phone, referal_code) => {
  return axios.post("users/create", {
    email: email,
    type: type,
    name: name,
    phone: phone,
    referal_code: referal_code,
  });
};

export default { register };
