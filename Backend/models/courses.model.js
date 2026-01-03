import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    courseId: {
      type: String,
      required: true,
      unique: true,
      index: true
    },

    title: {
      type: String,
      required: true,
      trim: true
    },

    slug: {
      type: String,
      required: true,
      unique: true
    },

    description: {
      type: String,
      required: true
    },

    category: {
      type: String,
      required: true
    },

    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner"
    },

    thumbnail: {
      type: String // image url or asset key
    },

    duration: {
      type: String
    },

    language: {
      type: String,
      default: "English"
    },

    price: {
      type: Number,
      default: 0
    },

    currency: {
      type: String,
      default: "USD"
    },

    isFree: {
      type: Boolean,
      default: false
    },

    rating: {
      type: Number,
      default: 0
    },

    studentsEnrolled: {
      type: Number,
      default: 0
    },

    enrollment: {
      isOpen: {
        type: Boolean,
        default: true
      },
      maxStudents: {
        type: Number,
        default: null
      }
    },

    features: [String],

    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "published"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Course", CourseSchema);
