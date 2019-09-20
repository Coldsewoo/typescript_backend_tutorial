import { cleanEnv, str, port, num, bool } from 'envalid'

function validateEnv() {
  cleanEnv(process.env, {
    APP_NAME: str(),
    APP_PORT: port(),
    APP_HOST: str(),
    APP_NUMBER: num(),
    APP_BOOL: bool()
  })
}

export default validateEnv
