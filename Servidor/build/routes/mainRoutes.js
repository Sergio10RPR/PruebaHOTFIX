"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mainControlador_1 = require("../controllers/mainControlador");
class MainRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', mainControlador_1.indexController.index);
    }
}
const mainRoutes = new MainRoutes();
exports.default = mainRoutes.router;
