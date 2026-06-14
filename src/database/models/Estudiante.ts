import { Schema, model, Types } from "mongoose";

export interface IEstudiante {
  usuario_id: Types.ObjectId;
  curso_id: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

const EstudianteSchema = new Schema<IEstudiante>(
  {
    usuario_id: {
      type: Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },

    curso_id: {
      type: Schema.Types.ObjectId,
      ref: "Curso",
      required: true,
    },
  },
  { timestamps: true }
);

// Un estudiante no puede estar inscrito dos veces en el mismo curso
EstudianteSchema.index({ usuario_id: 1, curso_id: 1 }, { unique: true });

export default model<IEstudiante>("Estudiante", EstudianteSchema);
