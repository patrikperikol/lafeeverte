import express from "express";
import router from "./routes/router.js";
import { pool } from "./persistence/db.js";

const app = express();
const port = 3000;

app.use(router);

pool.query('SELECT NOW()')
    .then(res => {
        console.log('Database connected:', res.rows[0]);
    })
    .catch(err => {
        console.error('Database connection error:', err)
    });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
