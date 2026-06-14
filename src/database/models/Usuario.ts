import { Schema, model } from "mongoose";

export const ROLES = ["ADMIN", "DOCTOR", "ENFERMERIA", "PACIENTE"] as const;
export type Rol = (typeof ROLES)[number];

export interface IUsuario {
  nombre: string;
  apellido_paterno: string;
  apellido_materno?: string;
  carnet_identidad: string;
  rol: Rol;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const UsuarioSchema = new Schema<IUsuario>(
  {
    nombre:           { type: String, required: true },
    apellido_paterno: { type: String, required: true },
    apellido_materno: { type: String },

    carnet_identidad: { type: String, required: true, unique: true },

    rol: {
      type: String,
      enum: ROLES,
      required: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  { timestamps: true }
);

export default model<IUsuario>("Usuario", UsuarioSchema);
