import express from 'express';
const app = express();

import cors from 'cors';
import routes from './routes';

app.use(cors());
app.use(express.json());
app.use(routes);


const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});