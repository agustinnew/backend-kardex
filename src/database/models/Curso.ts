import { Schema, model } from "mongoose";

export const NIVELES = ["PRIMARIA", "SECUNDARIA"] as const;
export const TURNOS  = ["MAÑANA", "TARDE", "NOCHE"] as const;

export type Nivel = (typeof NIVELES)[number];
export type Turno = (typeof TURNOS)[number];

export interface ICurso {
  grado: string;
  nivel: Nivel;
  turno: Turno;
  createdAt?: Date;
  updatedAt?: Date;
}

const CursoSchema = new Schema<ICurso>(
  {
    grado: { type: String, required: true },

    nivel: {
      type: String,
      enum: NIVELES,
      required: true,
    },

    turno: {
      type: String,
      enum: TURNOS,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<ICurso>("Curso", CursoSchema);
