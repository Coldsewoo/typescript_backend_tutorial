export class HttpException extends Error {
  status: number
  message: string
  type: string

  constructor(status?: number, message?: string, type?: string) {
    super(message)
    this.status = status || 500
    this.message = message || "Internal Server Error"
    this.type = type || "UnexpectedError"
  }
}


export class NotFound extends HttpException {
  constructor() {
    super(404, "페이지가 존재하지 않습니다", "NotFoundError")
  }
}