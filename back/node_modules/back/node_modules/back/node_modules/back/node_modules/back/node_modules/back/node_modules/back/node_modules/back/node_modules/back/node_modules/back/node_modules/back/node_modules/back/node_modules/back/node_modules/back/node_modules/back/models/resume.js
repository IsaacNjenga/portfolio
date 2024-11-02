import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    data: Buffer,
    contentType: String,
  },
  { collection: "resume", timestamps: true }
);

const ResumeModel = mongoose.model("resume", resumeSchema);
export default ResumeModel;
