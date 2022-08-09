import { Project } from "../db/relations.js";

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll({
            where: {
                status: true,
            },
            attributes: ["projectName", "priority", "description"],
        });
        return res.json(projects);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const getProject = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.findOne({
            where: {
                id,
            },
            attributes: ["projectName", "priority", "description"],
        });
        if (!project)
            return res.status(404).json({ msg: "Project does not exist" });
        return res.json(project);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const createProject = async (req, res) => {
    const { projectName, priority, description } = req.body;
    try {
        const newProject = await Project.create({
            projectName,
            priority,
            description,
        });
        return res.json(newProject);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.findOne({
            where: {
                id,
            },
        });
        if (!project)
            return res.status(404).json({ msg: "Project does not exist" });
        // actualiza solo lo que le paso por el body (le puedo enviar solo el name, description o solo el name)
        project.set(req.body);
        await project.save();
        return res.json(project);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const deleteProject = async (req, res) => {
    try {
        const {id} = req.params;
        const project = await Project.findByPk(id);
        if (!project)
            return res.status(404).json({ msg: "Project does not exist" });
        await project.update({ status: false });
        await project.save();
        return res.json(project);
    } catch (error) {
        return res.status(500).json({ error });
    }
};
