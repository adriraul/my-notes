import express from 'express';
import { DataSource } from 'typeorm';
import dataSourceOptions from './ormconfig';
import cors from 'cors';
import noteRoutes from './routes/NoteRoutes';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', noteRoutes);

export const appDataSource = new DataSource(dataSourceOptions);

async function startServer() {
    try {
        await appDataSource.initialize();
        console.log('Connected to database');

        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    } catch (error) {
        console.error('Error connecting to database', error);
    }
}

startServer();