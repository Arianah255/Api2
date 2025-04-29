import mongoose from "mongoose"

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Task title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Task description is required"],
      trim: true,
    },
    isCompleted: {  
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)

const Task = mongoose.model("Task", taskSchema)

export default Task
