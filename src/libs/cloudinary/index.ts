import { v2 } from "cloudinary";

const cloudinary = v2;

export default new (class Cloudinary {
  config() {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });
  }
})();

// cloudinary.config({
//   secure: true,
// });

// console.log(cloudinary.config());

// const uploadImage = async (imagePath: string) => {
//   const options = {
//     use_filename: true,
//     unique_filename: false,
//     overwrite: true,
//   };

//   try {
//     const result = await cloudinary.uploader.upload(imagePath, options);
//     return result.public_id;
//   } catch (error) {
//     console.error(error);
//   }
// };
