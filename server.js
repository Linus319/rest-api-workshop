import express from 'express';
import cors from 'cors';

import agentRoutes from './routes/agents.js';

const app = express();
const PORT = 4000 | process.env.PORT;

// middleware
app.use(cors());

// routes
app.use('/agents', agentRoutes);
app.get('/', (req, res) => {
    res.status(200).json({
        'msg': "Hello World"
    })
});

const server = app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})