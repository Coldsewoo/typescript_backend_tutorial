import express = require("express")
import { Request, Response, NextFunction } from "express"
import morgan = require("morgan")
import cors = require("cors")
import bodyParser = require("body-parser")

export default class App {
  public app: express.Application
  private router: express.Router
  private path: string

  constructor() {
    this.app = express()
    this.router = express.Router()
    this.path = "/"

    this.initializeMiddlewares()
    this.initializeRouter()
  }

  public listen() {
    const PORT: number = Number(process.env.PORT) || 5000
    this.app.listen(PORT, () => {
      console.log(`Server listening on PORT ${PORT}`)
    })
  }

  private initializeMiddlewares() {
    this.app.use(cors())
    this.app.use(morgan("tiny"))
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(bodyParser.json())
  }

  private initializeRouter() {
    this.app.use(this.router)
    this.router.get(`${this.path}`, this.getMain)
    this.router.post(`${this.path}`, this.postMain)
  }

  private getMain = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send("Backend Main Page")
  }

  private postMain = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json(req.body)
  }
}