btn = document.getElementsByClassName("form_btn")
form = document.getElementsByClassName('form')

inputemail = document.getElementById("email")

document.forms.connection_form.onsubmit = function(e){
    e.preventDefault();

    //var userEmail = document.forms.connection_form.email.value;
    //var userFio = document.forms.connection_form.fio.value;
    //var TemaMsg = document.forms.connection_form.t_txt.value;
    //var MsgText = document.forms.connection_form.msg_txt.value;

    //var FormValue = "Почта: "  + userEmail + "\nФИО: " + userFio + "\nТема сообщения:" + TemaMsg + "\nСообщение:\n" + MsgText

    //var xhr = new XMLHttpRequest();

    //xhr.open('POST', '/index.html');
    //xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

    //xhr.send(FormValue)

    let registerForm = document.forms["connection_form"];
    
    let userEmail = connection_form.elements["email"].value;
    let userFio = registerForm.elements["fio"].value;
    let TemaMsg = registerForm.elements["t_txt"].value;
    let MsgText = registerForm.elements["msg_txt"].value;
    
    console.log("собрали инфу")

            // сериализуем данные в json
    let user = JSON.stringify({userEmail: userEmail, userFio: userFio, TemaMsg: TemaMsg, MsgText: MsgText});
    let request = new XMLHttpRequest();

            // посылаем запрос на адрес "/user"
    request.open("POST", "/index.html", true);   
    request.setRequestHeader("Content-Type", "application/json");
    request.addEventListener("load", function () {
                // получаем и парсим ответ сервера
        let receivedUser = JSON.parse(request.response);
        console.log(receivedUser.userEmail, receivedUser.userFio);   // смотрим ответ сервера
    });
    
    request.send(user);
    console.log("Отправили инфу")
};