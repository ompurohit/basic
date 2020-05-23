const express = require('express');
const app = express();

//using pug configrations
app.set('views','./public/pug-engine');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index',{title: "use pug engine", message: "In Node js"});
});
//use perameter
app.get('/add/:num1-:num2', (req, res) => {
    res.render('about', {'title': 'calculation', add: parseInt(req.params.num1) + parseInt(req.params.num2), sub: parseInt(req.params.num1) - parseInt(req.params.num2), mul: parseInt(req.params.num1) * parseInt(req.params.num2),
        dev: parseInt(req.params.num1) / parseInt(req.params.num2)});
});

// using middleware
// var requestTime = function (req, res, next) {
//     req.requestTime = Date.now()
//     next()
// }

// app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/public/pages'));

// app.get('/user', (req, res) => {
//     var responseText = 'Hello World!<br>'
//     responseText += '<small>Requested at: ' + req.requestTime + '</small>'
//     res.send(responseText);
// });
app.listen(3000, () => console.log("Server running at: http://localhost:3000"));