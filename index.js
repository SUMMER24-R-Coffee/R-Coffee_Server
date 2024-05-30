const express =require('express')
const handlebars = require('express-handlebars')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const flash = require('express-flash')
const session = require('express-session')

const app=express()
const port=3000;

const route =require('./src/routers/index')

app.use(methodOverride('_method'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'src')))
app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan("combined"))

app.use(
    session({
        secret: 'get-message',
        resave: true,
        saveUninitialized: true,
    })
)
app.use(flash())
app.engine('hbs', handlebars.engine({
    defaultLayout: false,
    extname:'.hbs',
    layoutsDir:__dirname +'\\src\\views\\',
    partialsDir: __dirname +'\\src\\views\\partials',
    runtimeOptions:{
        allowProtoPropertiesByDefault:true,
        allowProtoMethodsByDefault:true,
    },
    helpers:{
        sum: (a, b) => a+b,
        eq: (a, b) => a === b, 
        ifCond: (v1, operator, v2, options) => {
            switch (operator) {
                case '==':
                    return (v1 == v2) ? options.fn(this) : options.inverse(this);
                case '===':
                    return (v1 === v2) ? options.fn(this) : options.inverse(this);
                default:
                    return options.inverse(this);
            }
        },
        json:  (context) => JSON.stringify(context),
        or: function () {
            const args = Array.prototype.slice.call(arguments, 0, -1);
            return args.some(Boolean);
        }, 
        gt: (a, b) => a > b,   
        formatCurrency: (number, currencyCode) => {
            const formatter = new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: currencyCode,
            });
            return formatter.format(number);
        },                                  
             
    }
}))

app.set('view engine', 'hbs')
app.set('views',__dirname+ '\\src\\views\\')

route(app)

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})