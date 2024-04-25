import { Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { useAppSelector } from "../store/rootReducer";
import APIConfig from "../libs/api";

interface ILikeButtonProps {
  threadId: number;
}

const LikeButton: React.FC<ILikeButtonProps> = ({ threadId }) => {
  const { token } = useAppSelector((state) => state.auth);
  const [liked, setLiked] = useState(false);

  const getLike = async () => {
    try {
      const res = await APIConfig.get(`like/${threadId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setLiked(res.data.data.like === null ? false : true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = async () => {
    try {
      const res = await APIConfig.post(
        `like`,
        {
          threadId: threadId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(res);
      await getLike();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLike();
  }, []);

  return (
    <>
      <Button
        aria-label="delete"
        bg={"white"}
        fontSize={"2xl"}
        width={""}
        _hover={{ backgroundColor: "none" }}
        onClick={() => handleLike()}
      >
        <FaHeart color={liked ? "red" : "gray"} />
      </Button>
    </>
  );
};

export default LikeButton;
