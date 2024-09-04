const AsyncHandler = require("../../../middlewares/AsyncHandler");
const { CustomError } = require("../../../middlewares/CustomError");
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");
const { v4: uuid4 } = require("uuid");
const Requests = require("../models/RequestModel");
const mongoose = require("mongoose");
const PersonalDetails = require("../models/Personaldetails.model");
const cloudinary = require("../../../middlewares/CloudinarySetup");
const Employer = require("../models/JobEmployer.Model.js");
const Employee = require("../models/JobEmployee.model.js");
const { ObjectId } = mongoose.Types;

const UserSignup = AsyncHandler(async (req, res, next) => {
  const { Name, Email, Password, Mobile } = req.body;
  if (
    !Name ||
    !Email ||
    !Password ||
    !Mobile ||
    Name === "" ||
    Email === "" ||
    Password === "" ||
    Mobile === ""
  ) {
    throw new CustomError("No field can be empty!", 300);
  }
  const duplicateUser = await User.findOne({ Email });
  if (duplicateUser) {
    throw new CustomError("Already registered!", 301);
  }
  const salt = await bcrypt.genSalt(16);
  const CryptedPassword = await bcrypt.hash(Password, salt);
  const user = new User({
    Name,
    Email,
    Mobile,
    Password: CryptedPassword,
  });
  await user.save();
  const token = await jwt.sign({ id: user._id }, process.env.JWT_TOKEN_KEY, {
    expiresIn: "1d",
  });
  await res.cookie("authtoken", token, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 60 * 60), //60 mins
    sameSite: "lax",
    httpOnly: true,
    secure: true,
  });
  return res.json({ message: "Record saved!" });
});

const userDetailsRegister = AsyncHandler(async (req, res, next) => {
  const {
    Files,
    DOB,
    Hobbies,
    Interests,
    SmokingHabits,
    DrinkingHabits,
    Qualifications,
    Gender,
  } = req.body;
  if (
    !DOB ||
    !Hobbies ||
    !Interests ||
    !SmokingHabits ||
    !DrinkingHabits ||
    !Qualifications ||
    !Gender ||
    DOB === "" ||
    Hobbies === "" ||
    Interests === "" ||
    SmokingHabits === "" ||
    DrinkingHabits === "" ||
    Qualifications === "" ||
    Gender === ""
  ) {
    throw new CustomError("All fields are required!", 400);
  }
  const user = new PersonalDetails({
    DOB,
    Hobbies,
    Interests,
    SmokingHabits,
    DrinkingHabits,
    Qualifications,
    UserId: req.id,
    Gender,
  });

  const updatedFiles = await Promise.all(
    Files.map(async (file) => {
      const result = await cloudinary.uploader.upload(file.URL, {
        folder: "Images",
        public_id: `${file.Name}${user._id}`,
      });
      file.URL = result.secure_url;
      return file;
    })
  );
  user.Files = updatedFiles;
  await user.save();
  return res.json({ message: "Personal details are stored!", status: true });
});

const userJobStatus = AsyncHandler(async (req, res, next) => {
  const {
    JobStatus,
    CompanyName,
    Designation,
    Location,
    Title,
    Expertise_level,
  } = req.body;
  if (JobStatus === "Employer") {
    if (
      !JobStatus ||
      !CompanyName ||
      !Designation ||
      !Location ||
      JobStatus === "" ||
      CompanyName === "" ||
      Designation === "" ||
      Location === ""
    ) {
      return res.json({ message: "All fields are required!" });
    }
    const employer = new Employer({
      User: req.id,
      JobStatus,
      CompanyName,
      Designation,
      Location,
    });
    await employer.save();
    return res.json({ message: "Recorde saved!", employer });
  }
  if (JobStatus === "Employee") {
    if (!Title || !Expertise_level || Title === "" || Expertise_level === "") {
      return res.json({ message: "All fields are required!" });
    }
    const employee = new Employee({
      User: req.id,
      JobStatus,
      Title,
      Expertise_level,
    });
    await employee.save();
    return res.json({ message: "Recorde saved!", employee });
  }
  return res.json({ message: "Record not saved!" });
});

const UserLogin = AsyncHandler(async (req, res, next) => {
  const { Password, Email } = req.body;
  if (!Email || !Password || Password === "" || Email === "") {
    next(new CustomError("Allfields are required", 400));
    return;
  }
  const user = await User.findOne({ Email });
  if (!user) {
    next(new CustomError("No account found!", 401));
    return;
  }
  const comparePassword = await bcrypt.compare(Password, user.Password);
  if (!comparePassword) {
    next(new CustomError("Invalid email or password !", 401));
    return;
  }
  const token = await jwt.sign({ id: user._id }, process.env.JWT_TOKEN_KEY, {
    expiresIn: "1d",
  });
  await res.cookie("authtoken", token, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 60 * 60), //60 mins
    sameSite: "lax",
    httpOnly: true,
    secure: true,
  });
  return res.json({ message: "Logged in successfully", status: true });
});

const cookieValidation = AsyncHandler(async (req, res, next) => {
  const cookie = req?.headers?.cookie;
  if (!cookie) {
    next(new CustomError("No cookie has found!", 401));
    return;
  }
  const token = cookie.split("authtoken=")[1];
  if (!token) {
    next(new CustomError("No valid token has found!", 401));
    return;
  }
  const { id } = await jwt.verify(token, process.env.JWT_TOKEN_KEY);
  req.id = id;
  next();
});

const getUserProfile = AsyncHandler(async (req, res, next) => {
  const user = await PersonalDetails.findOne({
    UserId: req.id,
  }).populate("UserId");
  if (!user) {
    throw new CustomError("No user found!", 401);
  }
  return res.json({ message: "Details fetched!", user });
});

const editProfile = AsyncHandler(async (req, res, next) => {
  const { Files, ...body } = req.body;
  let updateData = {};
  let updatePersonalDetails = {};
  let newPersonalDetails;

  // Conditionally add fields to updateData if they exist in the request body
  for (const key in body) {
    if (body.hasOwnProperty(key)) {
      if (key === "Bio") {
        updatePersonalDetails[key] = body[key];
        continue;
      }
      updateData[key] = body[key];
    }
  }

  if (Files && Files.length > 0) {
    const arrayFilters = Files.map((file, index) => ({
      [`elem${index}.Name`]: file.Name,
    }));
    const updateOperations = Files.map((file, index) => ({
      [`Files.$[elem${index}]`]: file, // Update the entire file object or specific fields as needed
    }));
    updatePersonalDetails = {
      ...updatePersonalDetails,
      $set: Object.assign({}, ...updateOperations),
    };
    newPersonalDetails = await PersonalDetails.findOneAndUpdate(
      { UserId: req.id },
      updatePersonalDetails,
      {
        new: true,
        arrayFilters: arrayFilters,
      }
    );
    return res.json({ message: "Updated!", newPersonalDetails });
  }
  if (Object.keys(updateData).length > 0) {
    // Only call findByIdAndUpdate if there's something to update
    const updatedUser = await User.findByIdAndUpdate(
      req.id,
      { $set: updateData },
      { new: true } // Return the updated document , arrayFilters: arrayFilters
    );
    if (updatedUser) {
      return res.status(200).json({
        message: "User updated successfully",
        user: updatedUser,
      });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } else {
    return res
      .status(400)
      .json({ message: "No valid fields provided for update" });
  }
});

const matchedProfiles = AsyncHandler(async (req, res, next) => {
  const { gender, qualifications, location, age, page, count } = req.query;
  console.log(gender);
  const start = (page - 1) * count;
  const user = await PersonalDetails.findOne({ UserId: req.id }).populate(
    "UserId"
  );
  // console.log("Logged user:", user);
  const queryParameters = [
    {
      UserId: { $ne: req.id },
    },
  ];
  if (gender && gender !== "both") {
    queryParameters.push({
      Gender: { $eq: gender },
    });
  }
  if (qualifications) {
    queryParameters.push({
      Qualifications: user.Qualifications,
    });
  }
  const users = await PersonalDetails.find({
    $and: queryParameters,
  })
    .populate("UserId")
    .skip(start)
    .limit(count);
  if (!users) throw new CustomError("No matchin profile!", 401);

  return res.json({ message: "profiles fetched!", users });
});

const getUserIndividualProfile = AsyncHandler(async (req, res, next) => {
  const { userId } = req.params;
  const user = await PersonalDetails.findOne({
    UserId: userId,
  }).populate("UserId");
  if (!user) {
    throw new CustomError("No user found!", 401);
  }
  return res.json({ message: "Details fetched!", user });
});

module.exports = {
  UserSignup,
  UserLogin,
  cookieValidation,
  matchedProfiles,
  getUserProfile,
  userDetailsRegister,
  getUserIndividualProfile,
  editProfile,
  userJobStatus,
};
