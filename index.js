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
    runtimeOptions:{
        allowProtoPropertiesByDefault:true,
        allowProtoMethodsByDefault:true,
    },
    helpers:{
        sum: (a, b) => a+b,
    }
}))

app.set('view engine', 'hbs')
app.set('views',__dirname+ '\\src\\views\\')

route(app)

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})