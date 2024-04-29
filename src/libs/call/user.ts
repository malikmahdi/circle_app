import APIConfig from "../api";

interface ILoginBody {
  username: string;
  password: string;
}

interface IRegisterBody {
  fullname: string;
  username: string;
  email: string;
  password: string;
}

export const LoginApi = async (body: ILoginBody) => {
  return await APIConfig.post("login", body);
};

export const RegisterApi = async (body: IRegisterBody) => {
  // const formData = new FormData();

  // formData.append("fullname", body.fullname);
  // formData.append("username", body.username);
  // formData.append("email", body.email);
  // formData.append("password", body.password);

  return await APIConfig.post("register", body);
};

export const getUsers = async () => {
  return await APIConfig.get("users", {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};
