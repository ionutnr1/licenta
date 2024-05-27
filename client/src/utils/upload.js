import axios from "axios";

const upload = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "servup");

    try{
        const res = await axios.post(
          "https://upload-request.cloudinary.com/ionutn1/e292d9df2c37bf8faea23d90df13c1b6/upload",
          data
        );
        const {url} = res.data;
        return url;
    }
    catch (err){
        console.log(err)
    }
};

export default upload;