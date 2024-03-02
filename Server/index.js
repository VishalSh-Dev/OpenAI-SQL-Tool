import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const ports = process.env.PORT || 3005;
app.get('/', (req, res) => {
    res.send('Hello World! from API server')
});

app.listen(ports, () => {
    console.log(`Server is running on port ${ports}`)
})