import axios from "./axios";

const register = (email, type, name, phone) => {
  return axios.post("users/create", {
    email: email,
    type: type,
    name: name,
    phone: phone,
  });
};

export default { register };
