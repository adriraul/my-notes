import { DataSourceOptions } from 'typeorm';
import { Note } from './entities/Note';
import { config } from 'dotenv';
config();

const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT!, 10),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: "my-notes",
  synchronize: true,
  logging: true,
  entities: [Note],
};

export default dataSourceOptions;