const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const asignacionSchema = new Schema({
   idCursoMaestro: { type: Schema.Types.ObjectId, ref: 'Cursos' },
   idAlumnoCurso: { type: Schema.Types.ObjectId, ref: 'Usuario' },
   maxAsiganciones: Number
})
module.exports = mongoose.model('Asignacion', asignacionSchema);