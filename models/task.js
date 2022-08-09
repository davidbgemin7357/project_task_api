import { DataTypes } from "sequelize";
import { sequelize } from "../db/sequelize.js";

export default () =>
    sequelize.define(
        "task",
        {
            taskId: {
                primaryKey: true,
                field: "id",
                autoIncrement: true,
                unique: true,
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            taskName: {
                field: "name",
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            done: {
                field: "done",
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            status: {
                field: "status",
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: "tasks",
            timestamps: true,
        }
    );
