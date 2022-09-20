import { TypeOrmModuleOptions } from "@nestjs/typeorm";

function ormConfig(): TypeOrmModuleOptions {

  console.log('__dirname : ', __dirname)
  const commonConf = {
    SYNCRONIZE: false,
    ENTITES: [__dirname+'/../entities/*.entity.{js,ts}'],
    MIGRATIONS: [__dirname+'/migrations/**/*.entity.{js,ts}'],
    CLI: {
      migrationsDir: 'src/migrations',
    },
    MIGRATIONS_RUN: false,
  };

  const databaseConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: commonConf.ENTITES,
    synchronize: commonConf.SYNCRONIZE,
    logging: true,
    migrations: commonConf.MIGRATIONS,
    // cli: commonConf.CLI,
    migrationsRun: commonConf.MIGRATIONS_RUN,
  }
  
  console.log('process.env.DB_HOST : ', process.env.DB_HOST)

  return databaseConfig;
}

export { ormConfig }