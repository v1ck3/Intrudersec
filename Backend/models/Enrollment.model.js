import mongoose from "mongoose";

const EnrollmentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true
    },

    progress: {
      type: Number,
      default: 0, // percentage
      min: 0,
      max: 100
    },

    status: {
      type: String,
      enum: ["active", "completed", "cancelled"],
      default: "active"
    },

    enrolledAt: {
      type: Date,
      default: Date.now
    },

    completedAt: {
      type: Date
    }
  },
  { timestamps: true }
);

// Prevent duplicate enrollment
EnrollmentSchema.index({ user: 1, course: 1 }, { unique: true });

export default mongoose.model("Enrollment", EnrollmentSchema);
