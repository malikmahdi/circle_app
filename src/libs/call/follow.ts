import APIConfig from "../api";

export const follow = async (userId: number) => {
  return await APIConfig.post(
    "follow",
    { followingId: userId },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
};

export const getFollowingById = async (followingId: number) => {
  return await APIConfig.post(
    "following-by-id",
    { followingId },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
};

export const getFollowing = async () => {
  return await APIConfig.get("following", {
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  });
};

export const getFollower = async () => {
  return await APIConfig.get("follower", {
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  });
};
