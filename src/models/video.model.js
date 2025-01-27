import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema =new Schema(
    {
        videoFile:{
            type: String,//cloudinar url 
            required:true 
        },
        thumbnail:{
            type: String,//cloudinar url 
            required:true
        },
        title:{
            type: String,
            required:true
        },
        descriptions:{
            type: String,
            required:true
        },
        durations:{
            type: Number,//cloudinar url 
            required:true
        },
        thumbnail:{
            type: Number,//cloudinar url 
            default:0
        },
        isPublished:{
            type:Boolean,
            default:true
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }

    },
    {
       timestamps:true  
    }
)


videoSchema.plugin(mongooseAggregatePaginate)
export const Video=mongoose.model("Video",videoSchema)