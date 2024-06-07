const mongooes = require("mongoose");
const type = require("mongoose/lib/schema/operators/type");
let staffShceme = new mongooes.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Name required. Please provide."],
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email required. Please provide."],
    lowercase: true,
  },
  password: {
    type: String,
    unique: true,
    required: [true, "Password required. Please provide."],
  },
  department: {
    type: String,
    trim: true,
    required: [true, "Department required. Please provide."],
  },
  gender: {
    type: String,
  },
  position: {
    type: String,
    trim: true,
    required: [true, "Position required. Please provide."],
  },
  location: {
    type: String,
    trim: true,
    required: [true, "Location required. Please provide."],
  },
  monday: {
    type: { String },
    trim: true,
  },
  tuesday: {
    type: { String },
    trim: true,
  },
  wednesday: {
    type: { String },
    trim: true,
  },
  thursday: {
    type: { String },
    trim: true,
  },
  friday: {
    type: { String },
    trim: true,
  },
  saturday: {
    type: { String },
    trim: true,
  },
  image: {
    type: String,
    required: true,
    // required: [true, "Image required. Please Upload."],
  },
  status: {
    type: String,
    default: "present",
  },
  date: [
    {
      type: String,
    },
  ],
  count: {
    totalPresent: {
      type: Number,
      default: 0,
    },
    totalAbsent: {
      type: Number,
      default: 0,
    },
  },
  //   ratingsAverage: {
  //     type: Number,
  //     default: 0,
  //   },
  //   ratingsQuantity: {
  //     type: Number,
  //     default: 0,
  //   },
  //   price: {
  //     type: Number,
  //     required: [true, "A tour must have a price"],
  //   },
  //   priceDiscount: Number,
  //   summary: {
  //     type: String,
  //     trim: true,
  //     required: [true, "A tour must have a summary"],
  //   },
  //   description: {
  //     type: String,
  //     trim: true,
  //   },
  //   imageCover: {
  //     type: String,
  //     required: [true, "A tour must have a cover image"],
  //   },
  //   images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startDates: [Date],
});

const Tour = mongooes.model("Staffs", staffShceme);

module.exports = Tour;
