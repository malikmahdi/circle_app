// import React from "react";
// import { IUserLogin, IUserRegister } from "../types/Auth";
// import { ApiConfig, setAuthToken } from "../libs/api";
// import { useNavigate } from "react-router-dom";
// import { AUTH_LOGIN } from "../store/rootReducer";
// import { UseDispatch, useDispatch } from "react-redux";

// const useLogin = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [formLogin, setFormLogin] = React.useState<IUserLogin>({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     setFormLogin({ ...formLogin, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (): Promise<void> => {
//     try {
//       const response = await ApiConfig.post("/auth/login", formLogin);
//       dispatch(AUTH_LOGIN(response.data));
//       navigate("/");
//     } catch (error) {
//       throw error;
//     }
//   };

//   return {
//     formLogin,
//     handleChange,
//     handleSubmit,
//   };
// };

// export default useLogin;
