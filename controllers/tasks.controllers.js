import { Task } from "../db/relations.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll({
            where: {status: true},
            attributes: ["taskName", "done"]
        });
        return res.json(tasks);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOne({
            where: { id },
            // solo devuelv el nombre y estado de la tarea:
            attributes: ["taskName", "done"],
        });
        return res.json(task)
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const createTask = async (req, res) => {
    try {
        const { taskName, done, project_id } = req.body;
        const newTask = await Task.create({ taskName, done, project_id });
        return res.status(201).json(newTask);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOne({
            where: { id },
        });
        if (!task)
            return res.status(500).json({msg: 'Task does not exist'})
        task.set(req.body);
        await task.save();
        return res.json(task);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const deleteTask = async(req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByPk(id)
        if (!task)
            return res.status(500).json({msg: 'Task does not exist'})
        await task.update({status: false})
        await task.save()
        return res.json(task)
    } catch (error) {
        
    }
};
