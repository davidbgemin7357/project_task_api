# Backend básico: node, express, sequelize, mysql/postgres

Tablas:
projects y tasks

** Sin token ni usuarios


Projects:
(get, post) http://localhost:3000/api/projects

`{
    "projectName":"deploy",
    "priority": 10,
    "description": "deploy code"
}`

(get, patch, delete) http://localhost:3000/api/projects/1


Tasks:
(get, post) http://localhost:3000/api/tasks

`{
    "taskName":"updating...",
    "done": false,
    "project_id": 1
}`

(get, patch, delete) http://localhost:3000/api/tasks/1