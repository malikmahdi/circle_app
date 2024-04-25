// import React from "react";
// import { IUserRegister } from "../types/Auth";
// import { ApiConfig } from "../libs/api";
// import { useNavigate } from "react-router-dom";

// const useRegister = () => {
//   const navigate = useNavigate();

//   const [formRegister, setFormRegister] = React.useState<IUserRegister>({
//     name: "",
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     setFormRegister({ ...formRegister, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (): Promise<void> => {
//     try {
//       await ApiConfig.post("/auth/register", formRegister);

//       navigate("/auth/login");
//     } catch (error) {
//       throw error;
//     }
//   };

//   return {
//     formRegister,
//     handleChange,
//     handleSubmit,
//   };
// };

// export default useRegister;
