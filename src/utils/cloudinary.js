import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_SECRET,
    api_secret:process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary=async(localFilePath)=>{
    try{
        if(!localFilePath) return null 
        const response= await cloudinary.uploader.upload(localFilePath,{
            resource_type:'auto'
        })
        console.log("file is uploaded in Cloundinary",response.url);
        return response;
    }catch(error){
        fs.unlinkSync(localFilePath) //remove the locally saved temp file 
        return null;
    }
}


export {uploadOnCloudinary}



cloudinary.v2.uploader.upload(
    'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
        public_id: 'shoes',
    }
)
.catch((error) => {
    console.log(error);
});