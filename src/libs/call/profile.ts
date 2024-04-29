import APIConfig from "../api";

export const getProfile = async (token: string) => {
  return await APIConfig.get("profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

type TKey = "bio" | "avatar" | "cover";

type TBody = {
  [key: string]: string | File | null | undefined;
};

interface IBody extends TBody {
  bio?: string | null;
  avatar?: File | null;
  cover?: File | null;
}

export const updateProfile = async (token: string, body: IBody) => {
  const formData = new FormData();
  Object.keys(body).map((key) => {
    if (body[key] !== null && body[key] !== undefined) {
      formData.append(key, body[key] as Blob);
    }
  });

  try {
    const res = await APIConfig.patch("profile", formData, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProfileById = async (id: number) => {
  return await APIConfig.get(`profile/${id}`);
};
