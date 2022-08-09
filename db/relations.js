import project_model from "../models/project.js";
import task_model from "../models/task.js";

export const Project = project_model();
export const Task = task_model();

Project.hasMany(Task, {
    foreignKey: {
        name: "project_id",
        allowNull: false
    }
})

Task.belongsTo(Project, {
    foreignKey: "project_id"
})



// Project.sync({force: true})
// Task.sync({force: true})