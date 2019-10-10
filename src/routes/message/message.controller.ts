import express = require("express")
import { Request, Response, NextFunction } from "express"

// database
import { getRepository } from "typeorm"
import Message from "../../model/message.entity"

// interfaces
import Controller from "../../interfaces/controller.interface"

class MessageController implements Controller {
  public path = "/message"
  public router = express.Router()
  private messageRepository = getRepository(Message)

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.getAllMessages)
    this.router.get(`${this.path}/:id`, this.getMessagebyId)
    this.router.post(`${this.path}`, this.postMessage)
    this.router.put(`${this.path}/:id`, this.editMessage)
    this.router.delete(`${this.path}/:id`, this.deleteMessage)
  }

  private getAllMessages = async (req: Request, res: Response, next: NextFunction) => {
    const messages = await this.messageRepository.find({})
    res.send(messages)
  }

  private postMessage = async (req: Request, res: Response, next: NextFunction) => {
    const { title, message, author } = req.body
    const messageQuery = {
      title,
      message,
      author
    }
    const newMessage = this.messageRepository.create(messageQuery)
    await this.messageRepository.save(newMessage)
    res.send(newMessage)
  }

  private getMessagebyId = async (req: Request, res: Response, next: NextFunction) => {
    const messageId = parseInt(req.params.id)
    const message = await this.messageRepository.findOne({
      id: messageId
    })
    res.send(message)
  }

  private editMessage = async (req: Request, res: Response, next: NextFunction) => {
    const messageId = parseInt(req.params.id)
    await this.messageRepository.update({ id: messageId }, req.body)
    const updatedMessage = await this.messageRepository.findOne({ id: messageId })
    res.send(updatedMessage)
  }

  private deleteMessage = async (req: Request, res: Response, next: NextFunction) => {
    const messageId = parseInt(req.params.id)
    const messageToDelete = await this.messageRepository.findOne({ id: messageId })
    await this.messageRepository.remove(messageToDelete)
    res.sendStatus(200)
  }
}

export default MessageController