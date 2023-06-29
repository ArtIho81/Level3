import express = require("express");


const PORT = 3003;
const counter: { [key: string]: number } = {
    plus: 0,
    minus: 0
}

const app = express();

app.use(express.json());
app.use(express.static("static"));

app.get("/", (req, res) => {
    res.json(counter)
})
app.post("/button-click", (req, res) => {
    try {
        console.log(req.body)
        const button: string = req.body.button;
        counter[button.toLowerCase()]++ 
        res.json({ button: counter[button.toLowerCase()] });
    } catch (error) {
        console.log(error);
    }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));