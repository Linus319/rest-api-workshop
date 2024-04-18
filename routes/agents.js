import express from 'express';

import apiCaller from '../util/apiCaller.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await apiCaller();

        res.status(202).json({
            msg: 'Hello from Agent Routes'
        });
    } catch(err) {
        res.status(500).json({
            msg: "... data retrieval failed"
        });
    }
});

export default router;