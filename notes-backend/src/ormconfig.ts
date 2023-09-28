import { DataSourceOptions } from 'typeorm';
import { Note } from './entities/Note';

const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "my-notes",
  synchronize: true,
  logging: true,
  entities: [Note],
};

export default dataSourceOptions;