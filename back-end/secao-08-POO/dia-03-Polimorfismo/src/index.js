"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Clube_1 = require("./Clube");
var QuadraFutebol_1 = require("./QuadraFutebol");
var trybeClub = new Clube_1.default();
var trybeQuadra = new QuadraFutebol_1.default();
trybeClub.adicionarQuadra(trybeQuadra);
console.log(trybeQuadra.reservar(new Date('01/02/2024')));
