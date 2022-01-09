import express from "express";
import path from 'path';
import bodyParser from "body-parser";
import TelegramBot from "node-telegram-bot-api";

const token = '2131814982:AAEjqyxZz0hy0I19bm6daMvdhIrqsFcJNXk'
const bot = new TelegramBot(token, { polling: true })

const __dirname = path.resolve()

const PORT = process.env.PORT ?? 3000
const app = express()

app.use(express.static(path.resolve(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }));
	
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

const jsonParser = express.json();
  
app.post("/index.html", jsonParser, function (request, response) {
    console.log(request.body);
    if(!request.body) return response.sendStatus(400);
    let tg_msg = 'Почта: ' + request.body.userEmail + "\nФИО: " + request.body.userFio + "\nТема сообщения: " + request.body.TemaMsg  + "\nТекст сообщения: \n" + request.body.MsgText;

    bot.sendMessage('816283979', tg_msg)

    response.json(request.body); 
    
});



app.listen(PORT)