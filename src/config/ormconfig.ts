import { ConnectionOptions, DatabaseType } from 'typeorm'

let type: DatabaseType

switch (process.env.TYPEORM_CONNECTION) {
  case "mysql": type = "mysql"; break;
  default: type = "mysql";
}

const config: ConnectionOptions = {
  type,
  host: process.env.MYSQL_ROOT_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_ROOT_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  logging: ["info"],
  logger: "advanced-console",
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  // Needs to be set false in production
  synchronize: true,
}

export default config
