// import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
// import FollowButton from "./ButtonFollow";
// import { useEffect, useState } from "react";
// // import { useAppSelector } from "@/store";
// import { getUsers } from "../libs/call/user";

// interface UserCardProps {
//   fullname: string;
//   username: string;
//   avatar: string;
//   followingId: number;
// }

// const CardSuggested: React.FC<UserCardProps> = ({
//   fullname,
//   username,
//   avatar,
//   followingId,
// }) => {
//   const [users, setUsers] = useState();
//   const token = localStorage.getItem("token");

//   const _host_url = "http://localhost:5000/uploads/";

//   const getAllUsers = async () => {
//     try {
//       console.log(token);
//       const res = await getUsers(token);
//       setUsers(res.data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getAllUsers();
//   }, []);

//   return (
//     <Box
//       display="flex"
//       gap={4}
//       marginBottom="8px"
//       justifyContent={"space-between"}
//     >
//       <Flex gap={4}>
//         <Avatar width="42px" height="42px" src={_host_url + avatar} />
//         <Box display="flex" flexDir="column">
//           <Text fontWeight="semibold" color="white" fontSize="14px">
//             {fullname}
//           </Text>
//           <Text color="gray" fontSize="14px">
//             @{username}
//           </Text>
//         </Box>
//       </Flex>
//       <FollowButton followingId={followingId} />
//     </Box>
//   );
// };

// export default CardSuggested;
