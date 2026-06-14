export { default as Usuario } from "./Usuario";
export { default as Estudiante } from "./Estudiante";
export { default as Curso } from "./Curso";
export { default as Kardex } from "./Kardex";

// Tipos
export type { IUsuario, Rol } from "./Usuario";
export type { ICurso, Nivel, Turno } from "./Curso";
export type { IEstudiante } from "./Estudiante";
export type { IKardex, TipoAnotacion } from "./Kardex";

// Constantes de enums
export { ROLES } from "./Usuario";
export { NIVELES, TURNOS } from "./Curso";
export { TIPOS_ANOTACION } from "./Kardex";
