import Task from "../models/taskModel.js"

// Get all tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 })
    res.status(200).json(tasks)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Create a new task
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body

    if (!title || !description) {
      return res.status(400).json({ message: "Title and description are required" })
    }

    const newTask = await Task.create({
      title,
      description,
      isCompleted: false,
    })

    res.status(201).json(newTask)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get a single task by ID
export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)

    if (!task) {
      return res.status(404).json({ message: "Task not found" })
    }

    res.status(200).json(task)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Update a task
export const updateTask = async (req, res) => {
  try {
    const { title, description, isCompleted } = req.body
    const taskId = req.params.id

    const task = await Task.findById(taskId)

    if (!task) {
      return res.status(404).json({ message: "Task not found" })
    }

    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { title, description, isCompleted },
      { new: true, runValidators: true },
    )

    res.status(200).json(updatedTask)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Delete a task
export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id
    const task = await Task.findById(taskId)

    if (!task) {
      return res.status(404).json({ message: "Task not found" })
    }

    await Task.findByIdAndDelete(taskId)
    res.status(200).json({ message: "Task deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
