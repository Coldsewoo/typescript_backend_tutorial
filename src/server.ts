import 'dotenv/config'
import validateEnv from './utils/validateEnv'
import App from './app';

// Controllers
import MessageController from "./routes/message/message.controller"

validateEnv();

const app = new App([
  new MessageController(),
])
app.listen()