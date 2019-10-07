import express = require("express")
import morgan = require("morgan")
import cors = require("cors")
import bodyParser = require("body-parser")

// Controllers interface
import Controller from "./interfaces/controller.interface"

export default class App {
  public app: express.Application

  constructor(Controllers: Controller[]) {
    this.app = express()

    this.initializeMiddlewares()
    this.initializeControllers(Controllers)
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

  private initializeControllers(Controllers: Controller[]) {
    Controllers.forEach((controller: Controller) => {
      this.app.use('/', controller.router)
    })
  }
}