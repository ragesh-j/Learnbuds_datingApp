const mongoose = require("mongoose");

const jobEmployerSchema = mongoose.Schema({
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user_detail",
  },
  JobStatus: {
    type: String,
    required: true,
  },
  CompanyName: {
    type: String,
    required: true,
  },
  Designation: {
    type: String,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("job_employer", jobEmployerSchema);
