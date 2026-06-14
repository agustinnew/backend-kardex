import { Request, Response, NextFunction } from "express";

type ApiErrorLike = {
  status: number;
  code?: string;
  name?: string;
  message: string;
};

const isApiError = (error: any): error is ApiErrorLike => {
  return (
    error &&
    typeof error === "object" &&
    typeof error.status === "number" &&
    typeof error.message === "string"
  );
};

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction
) => {


  // 🔐 Ocultar errores en login (opcional pero PRO)
  if (req.originalUrl.includes("/auth/signin")) {
    return res.status(401).json({
      message: "Credenciales incorrectas",
    });
  }


  // ⚠️ Errores controlados (ApiError)
  if (isApiError(err)) {
    return res.status(err.status).json({
      message: err.message,
      code: err.code,
      name: err.name,
    });
  }


  console.error(err);


  // ❌ Error inesperado
  return res.status(500).json({
    message: "Error interno del servidor",
  });
};
