import { cleanEnv, str, port, num, bool } from 'envalid'

function validateEnv() {
  cleanEnv(process.env, {
    APP_PORT: port(),
    APP_HOST: str(),
    MYSQL_ROOT_HOST: str(),
    MYSQL_ROOT_USER: str(),
    MYSQL_ROOT_PASSWORD: str(),
    MYSQL_DATABASE: str(),
    MYSQL_PORT: port(),
  })
}

export default validateEnv
