import { Request, Response, NextFunction } from 'express'
import { HttpException } from "../exceptions/HttpException"

function errorMiddleware(error: HttpException, req: Request, res: Response, next: NextFunction) {
  const { status, message, type } = error
  res.status(status).json({ message, type })
}

export default errorMiddleware