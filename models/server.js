import express from "express";
import cors from "cors";
import { sequelize } from "../db/sequelize.js";

// routes:
import {router as routerProject} from "../routes/projects.routes.js";
import {router as routerTask} from "../routes/tasks.routes.js";

// import * as prueba from "../db/relations.js";

export default class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8000;

        this.projectpath = '/api/projects';
        this.taskpath = '/api/tasks';

        // connection to db:
        this.connectDB();

        // middlewares:
        this.middlewares();

        // routes:
        this.router();
    }

    // connection to db:
    async connectDB() {
        try {
            await sequelize.sync({
                force: false,
            });
            console.log("Database connected");
        } catch (error) {
            console.log("Could not connect to database");
        }
    }

    // middlewares:
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    // routes:
    router() {
        this.app.use(this.projectpath, routerProject)
        this.app.use(this.taskpath, routerTask)
    }

    listen() {
        this.app.listen(this.port, async () => {
            console.log(`Servidor corriendo en el puerto: ${this.port}`);
        });
    }
}
