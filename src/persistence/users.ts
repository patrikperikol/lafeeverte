import { sql } from "../utils/sql.js";
import { db } from "./db.js";

async function create(email: string, password_hash: string, first_name: string, last_name: string): Promise<any> {
    const { client } = await db.connect();

    try {
        const query = {
            text: sql`
                INSERT INTO users (email, password_hash, first_name, last_name)
                VALUES ($1, $2, $3, $4);
            `,
            values: [email, password_hash, first_name, last_name]
        }
        const res = await client.query(query);

        if (!res.rows[0]) {
            throw new Error("failed to insert user");
        }
        return res.rows[0];
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        client.release();
    }
}

async function get(email: string): Promise<any> {
    const { client } = await db.connect();

    try {
        const query = {
            text: sql`
                SELECT email, first_name, last_name, created_at, updated_at
                FROM users WHERE email = $1
            `,
            values: [email]
        }
        const res = await client.query(query);

        if (!res.rows[0]) {
            throw new Error("user not found");
        }
        return res.rows[0];
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        client.release();
    }
}

export const users = {
    create,
    get
}

