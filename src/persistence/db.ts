import pg, { Pool, PoolClient } from "pg";
import dotenv from "dotenv";

dotenv.config();

let pool: Pool | undefined;

function init() {
    if (!pool) {
        if (!process.env.DATABASE_URL) {
            throw new Error("DATABASE_URL is not defined");
        }

        pool = new pg.Pool({
            connectionString: process.env.DATABASE_URL
        });
    }
}

async function shutdown() {
    if (pool) {
        await pool.end();
        pool = undefined;
    }
}

async function connect(): Promise<{ client: PoolClient }> {
    if (!pool) {
        throw new Error("Db not connected");
    }
    return { client: await pool.connect() };
}

export const db = {
    init,
    shutdown,
    connect
}

