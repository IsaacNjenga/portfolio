import ResumeModel from "../models/resume.js";

const fetchResume = async (req, res) => {
  try {
    const resume = await ResumeModel.find({});
    return res.status(200).json({ success: true, resume });
  } catch (error) {
    console.error("Error", error);
    return res.status(500).json({ error: error.message });
  }
};

const fetchFile = async (req, res) => {
  try {
    const file = await ResumeModel.findById(req.params.id);
    if (!file) {
      return res.status(404).send("File not found");
    }
    res.setHeader("Content-Type", file.contentType);
    res.send(file.data);
  } catch (error) {
    console.error("Error", error);
    return res.status(500).json({ error: error.message });
  }
};
export { fetchResume, fetchFile };
