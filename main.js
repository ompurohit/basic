const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult, sanitize,  matchedData } = require('express-validator');
const app = express();
app.set('views','./public/pages');
app.set('view engine','twig');

// parse application/ x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('home', { title: "Home page"})
})
app.post('/',[
    check('username','Error occured in username').trim().isEmail().normalizeEmail(),
    check('password','Error occured in password').trim().isLength({min:5}),
    check('rpassword').custom((value, { req }) => {
        if(value !== req.body.password){
            throw new Error("Password does not match");
        }else{
            return true;
        }
    })
] ,(req, res) => {
    const errors = validationResult(req);
    if(! errors.isEmpty()){
        const user = matchedData(req);
        res.render('home',{ title: "create new user", errors: errors.mapped(), user: user})
    }else{
        const user = matchedData(req);
        res.render('about', { title: "about page", message: "Welcome user", user: user})
    }
})
app.listen(3000, () => console.log("Server running at: http://localhost:3000"));