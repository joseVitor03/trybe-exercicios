"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateName = void 0;
var validateName = function (name) {
    if (name.length < 3) {
        throw new Error("nome menor que 3 caracteres");
    }
};
exports.validateName = validateName;
