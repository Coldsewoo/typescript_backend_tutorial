import express = require("express")
import { Request, Response, NextFunction } from "express"
import Controller from "../../interfaces/controller.interface"

class MessageController implements Controller {
  public path = "/message"
  public router = express.Router()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.getAllMessages)
  }

  private getAllMessages = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send("Get message from message route")
  }
}

export default MessageController