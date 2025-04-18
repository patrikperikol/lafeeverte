import { handlers } from "../handlers/index.js";

async function create(req, res) {
    try {
        const user = await handlers.users.create();
        res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "internal server error" });
    }
};

async function get(req, res) {
    try {
        const user = await handlers.users.get();
        res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "internal server error" });
    }
};


export const users = {
    create,
    get
}
