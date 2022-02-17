const express = require('express');
const controladorAsignacion = require('../controller/asignacion.controller');
const api = express.Router();
const md_autentificacion = require('../middlewares/autentificacion');

api.post('/agregarAsignaciones', md_autentificacion.Auth, controladorAsignacion.agregarAsignacion);
api.get('/obtenerAsignaciones', md_autentificacion.Auth, controladorAsignacion.buscarAsignacion);
api.put('/editarAsignaciones/:idAsignaciones', md_autentificacion.Auth, controladorAsignacion.editarAsignacion);
api.delete('/eliminarAsignaciones/:idAsignaciones', md_autentificacion.Auth, controladorAsignacion.eliminarAsignacion);

module.exports = api;