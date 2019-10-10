import 'dotenv/config'
import validateEnv from './utils/validateEnv'
import App from './app';

//typeorm connection
import "reflect-metadata"
import { createConnection } from "typeorm"
import ormconfig from "./config/ormconfig"

// Controllers
import MessageController from "./routes/message/message.controller"

validateEnv();


(async () => {
  try {
    await createConnection(ormconfig)
    const app = new App([
      new MessageController(),
    ])
    app.listen()
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
})()
