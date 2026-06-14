import { Schema, model, Types } from "mongoose";

export const TIPOS_ANOTACION = [
  "CONDUCTA",
  "ACADEMICO",
  "ASISTENCIA",
  "OTRO",
] as const;

export type TipoAnotacion = (typeof TIPOS_ANOTACION)[number];

export interface IKardex {
  tipo_anotacion: TipoAnotacion[];
  materia: string[];
  fecha: Date;
  detalle?: string;
  usuario_id: Types.ObjectId;
  estudiante_id: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

const KardexSchema = new Schema<IKardex>(
  {
    tipo_anotacion: {
      type: [String],
      enum: TIPOS_ANOTACION,
      default: [],
    },

    materia: {
      type: [String],
      default: [],
    },

    fecha: {
      type: Date,
      required: true,
    },

    detalle: {
      type: String,
    },

    usuario_id: {
      type: Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },

    estudiante_id: {
      type: Schema.Types.ObjectId,
      ref: "Estudiante",
      required: true,
    },
  },
  { timestamps: true }
);

export default model<IKardex>("Kardex", KardexSchema);
