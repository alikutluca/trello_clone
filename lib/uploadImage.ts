import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "6470b790b6efe13be8b1",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
