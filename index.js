import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let items = [];


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true }));

app.get("/" , (req, res) => {
    res.render("index.ejs");
});

app.post("/submit" , (req, res) => {

    let item = req.body.List;
    items.push(item);
    res.render("index.ejs" , {checklist: items});
    
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

function pushData() {
        let view = document.getElementById("view");
        let newTd = document.createElement("li");
        var inputText = document.getElementById("inputText").value;
        var node = document.createTextNode(inputText);
        newTd.appendChild(node);
        view.appendChild(newTd);
    }