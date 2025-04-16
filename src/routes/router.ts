import express from "express";
const router = express.Router()

// middleware that is specific to this router
const timeLog = (req: any, res: any, next: () => void) => {
    console.log('Time: ', Date.now())
    next()
}
router.use(timeLog)

// define the home page route
router.get('/', (req, res) => {
    res.send('Home')
})

// define the about route
router.get('/about', (req, res) => {
    res.send('About')
})

export default router;

