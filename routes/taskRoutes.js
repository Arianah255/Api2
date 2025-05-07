import express from "express"
import { getTasks, createTask, getTaskById, updateTask, deleteTask } from "../controllers/taskController.js"

const router = express.Router()

// GET all tasks
router.get("/", getTasks)

// POST a new task
router.post("/", createTask)

// GET a single task
router.get("/:id", getTaskById)

// PUT update a task
router.put("/:id", updateTask)

// DELETE a task
router.delete("/:id", deleteTask)

export default router
