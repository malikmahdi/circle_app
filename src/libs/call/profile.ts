import APIConfig from "../api";

export const getProfile = async (token: string) => {
  return await APIConfig.get("profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// type TKey = "bio" | "avatar" | "cover";

type TBody = {
  [key: string]: string | File | null | undefined;
};

interface IBody extends TBody {
  bio?: string | null;
  avatar?: File | null | string;
  cover?: File | null | string;
  fullname?: string | null;
  username?: string | null;
}

export const updateProfile = async (token: string, body: IBody) => {
  const formData = new FormData();
  Object.keys(body).map((key) => {
    if (body[key]) {
      formData.append(key, body[key] as Blob);
    }
  });

  try {
    const res = await APIConfig.patch("profile", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
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
