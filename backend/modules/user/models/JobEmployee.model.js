const mongoose = require("mongoose");

const jobEmployee = mongoose.Schema({
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user_detail",
  },
  JobStatus: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  Expertise_level: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("job_employee", jobEmployee);
