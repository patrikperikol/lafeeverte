import express from "express";
import router from "./routes/router.js";
import { db } from "./persistence/db.js";

const app = express();
const port = 3000;

app.use(router);

db.init();

const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

process.on("SIGINT", async () => {
    console.log("Server shutting down...");
    await db.shutdown();
    server.close(() => process.exit(0));
});

