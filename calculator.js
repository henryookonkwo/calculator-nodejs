const express = require("express")
const bodyParser = require("body-parser"); 

const app = express()

//Using URLencoded, we get acccess to the form data
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000

app.get("/", (req, res) => {
    // res.send("Hello World!");
    // To add HTML page we use the sendFile method
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    console.log(req.body); //logs the form data
    console.log(req.body.num1);

    let num1 = Number(req.body.num1);

    let result = num1 + num2;

    res.send("The result of the calculation is " + result);
});


app.get("/bmicalculator", (req,res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");

});

app.post("/bmicalculator", (req,res) => {
    console.log(req.body);
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let bmiResult = weight/ (height*height);
    res.send("Your BMI is " + bmiResult);
});


  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })