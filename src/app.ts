import 'dotenv/config'
import validate from "./utils/validateEnv"
validate();

console.log(process.env.APP_PORT)
console.log(process.env.APP_NUMBER)
console.log(process.env.APP_BOOL)
console.log(typeof process.env.APP_PORT)
console.log(typeof process.env.APP_NUMBER)
console.log(typeof process.env.APP_BOOL)
console.log(typeof Number(process.env.APP_PORT))
console.log(process.env.APP_BOOL === "true")