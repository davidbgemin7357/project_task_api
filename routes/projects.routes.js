import { Router } from "express";
import {getProject, getProjects, createProject, updateProject, deleteProject} from '../controllers/projects.controller.js'

export const router = Router();

router.get("/", getProjects);
router.get("/:id", getProject);
router.post("/", createProject);
router.patch("/:id", updateProject);
router.delete("/:id", deleteProject);
