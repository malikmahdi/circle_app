// import React, { ChangeEvent, useState } from "react";
// import ApiConfig from "../libs/api";
// import { IThreadCard, IThreadPost } from "../types/Thread";
// import { useMutation, useQuery } from "@tanstack/react-query";
// import IThread from "../interface/Thread";

// const UseThread = () => {
//   const [form, setForm] = React.useState<IThread>({
//     content: "",
//     image: "",
//   });

//   // const {
//   //   data: getThreads,
//   //   isLoading,
//   //   isError,
//   //   refetch,
//   // } = useQuery<IThreadCard[]>({
//   //   queryKey: ["thread"],
//   //   queryFn: async () => {
//   //     try {
//   //       const response = await ApiConfig.get("/threads");
//   //       return response.data;
//   //     } catch (error) {
//   //       throw error;
//   //     }
//   //   },
//   // });

//   const {
//     data: getThreads,
//     isLoading,
//     isError,
//     refetch,
//   } = useQuery<IThreadCard[]>({
//     queryKey: ["thread"],
//     queryFn: async () => {
//       try {
//         const { data } = await ApiConfig.get("/threads");
//         return data;
//       } catch (error) {
//         throw error;
//       }
//     },
//     // await ApiConfig.get("/threads").then((res) => res.data),
//   });

//   const { mutateAsync } = useMutation({
//     mutationFn: async () => {
//       const formData = new FormData();
//       formData.append("content", form.content);
//       formData.append("image", form.image);

//       await ApiConfig.post("/threads", formData);
//     },
//     onSuccess: () => refetch(),
//   });

//   const handlePost = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     mutateAsync();
//   };

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, files, value } = e.target;

//     if (files) {
//       return setForm({
//         ...form,
//         [name]: files[0],
//       });
//     }

//     setForm({ ...form, [name]: value });
//   };

//   return {
//     form,
//     getThreads,
//     handleChange,
//     handlePost,
//     isLoading,
//     isError,
//   };
// };

// export default UseThread;

// // import React, { ChangeEvent, useState } from "react";
// // import ApiConfig from "../libs/api";
// // import { IThreadCard, IThreadPost } from "../types/Thread";
// // import { useQuery } from "@tanstack/react-query";

// // const UseThread = () => {
// //   const [threads, setThreads] = useState<IThreadCard[]>();
// //   const [isLoading, setIsLoading] = useState<boolean>(true);
// //   const [form, setForm] = React.useState<IThreadPost>({
// //     content: "",
// //     image: "",
// //   });

// //   const getThreads = async (): Promise<void> => {
// //     try {
// //       const response = await ApiConfig.get("/threads");
// //       setThreads(response.data);
// //       setTimeout(() => {
// //         setIsLoading(false);
// //       }, 2000);
// //     } catch (error) {
// //       throw error;
// //     }
// //   };

// //   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handlePost = async () => {
// //     try {
// //       setIsLoading(false);
// //       const config = {
// //         headers: {
// //           "Content-type": "application/json",
// //         },
// //       };
// //       await ApiConfig.post("/threads", form, config);
// //       getThreads();
// //       setIsLoading(true);
// //     } catch (error) {
// //       throw error;
// //     }
// //   };

// //   return {
// //     isLoading,
// //     threads,
// //     getThreads,
// //     handleChange,
// //     handlePost,
// //   };
// // };

// // export default UseThread;
