import express from "express";
import { controllers } from "../controllers/index.js";
const router = express.Router()

const timeLog = (req: any, res: any, next: () => void) => {
    console.log('Time: ', Date.now())
    next()
}
router.use(timeLog)


router.post('/users', controllers.users.create);
router.get('/users/:id', controllers.users.get);

export default router;

