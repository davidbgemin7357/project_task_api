import { DataTypes } from "sequelize";
import { sequelize } from "../db/sequelize.js";

export default () => {
    return sequelize.define(
        "project",
        {
            projectId: {
                type: DataTypes.INTEGER,
                field: "id",
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
                unique: true,
            },
            projectName: {
                type: DataTypes.STRING(45),
                field: "name",
                allowNull: false,
            },
            priority: {
                type: DataTypes.INTEGER,
                field: "priority",
            },
            description: {
                field: "description",
                type: DataTypes.STRING,
            },
            status: {
                field: "status",
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: "projects",
            timestamps: false,
        }
    );
};
