import APIConfig from "../api";

export const getThreads = async () => {
  return await APIConfig.get("threads");
};

export const getThreadById = async (id: number) => {
  return await APIConfig.get(`thread/${id}`);
};

export const getThreadImages = async (threadId: number) => {
  return await APIConfig.get(`images/${threadId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getThreadProfile = async () => {
  return await APIConfig.get("thread", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getThreadUserId = async (id: number) => {
  return await APIConfig.get(`threadUser/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const createThread = async (body: {
  content: string;
  image: FileList | null;
  threadId?: number;
}) => {
  const formData = new FormData();

  if (body.image !== null) {
    for (let i = 0; i < body.image.length; i++) {
      formData.append("image", body.image[i]);
    }
  }

  if (body.threadId) {
    formData.append("threadId", body.threadId.toString());
  }

  formData.append("content", body.content);

  return await APIConfig.post("thread", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getReplies = async (id: number) => {
  return await APIConfig.get(`replies/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
