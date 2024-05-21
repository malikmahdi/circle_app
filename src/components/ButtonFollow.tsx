import { Button, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { useAppSelector } from "../store/rootReducer";
import APIConfig from "../libs/api";
import { Link } from "react-router-dom";
import { follow } from "../libs/call/follow";

interface IFollowButtonProps {
  followingId: number;
  callback?: () => Promise<void>;
}

const FollowButton: React.FC<IFollowButtonProps> = ({
  followingId,
  callback,
}) => {
  const { user } = useAppSelector((state) => state.auth);
  const [followed, setFollowed] = useState<boolean>(false);

  const getFollow = async () => {
    try {
      const res = await APIConfig.get(`check-follow/${followingId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setFollowed(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFollow = async () => {
    try {
      const res = await APIConfig.post(
        `follow`,
        {
          followingId: followingId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (callback) {
        await callback();
      } else {
        getFollow();
      }

      // await getFollow();
    } catch (error) {
      console.log(error);
    }
    // try {
    //   const { data } = await follow(userId);
    //   console.log("data follow", data);
    //   await getFollow();
    //   // setFollowed(data);
    //   //   getFollow();
    // } catch (error) {
    //   console.log(error);
    // }
  };

  useEffect(() => {
    getFollow();
    // handleFollow;
  }, []);

  return (
    <>
      <Button
        aria-label="delete"
        bg={"none"}
        fontSize={"2xl"}
        width={""}
        _hover={{ backgroundColor: "none" }}
        onClick={handleFollow}
        color={"white"}
      >
        {followed ? "Following" : "Follow"}
      </Button>
      {/* <div onClick={() => handleFollow()}>
        {followed ? (
          <Button
            aria-label="delete"
            fontSize={"2xl"}
            width={""}
            _hover={{ backgroundColor: "none" }}
            onClick={handleFollow}
          >
            Following
          </Button>
        ) : (
          <Button
            aria-label="delete"
            fontSize={"2xl"}
            width={""}
            _hover={{ backgroundColor: "none" }}
            onClick={handleFollow}
          >
            Follow
          </Button>
        )}
      </div> */}
    </>
  );
};

export default FollowButton;

// import { useState } from "react";
// import { useAppDispatch } from "../store/rootReducer";
// import { follow } from "../libs/call/follow";

// const FollowButton = ({ followingId }: any) => {
//   const [postFollow, setPostFollow] = useState<boolean>(false);
//   const [followTrigger, setFollowTrigger] = useState<boolean>(false);

//   const dispatch = useAppDispatch();

//   const handleFollow = async () => {
//     try {
//       await follow(followingId);
//       setPostFollow(!postFollow);
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   };
// };

// export default FollowButton;
