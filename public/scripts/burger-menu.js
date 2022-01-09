let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

let conn_btn = document.querySelector('.m-conn-btn');
conn_btn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

let currentUrl = window.location.pathname;
console.log(currentUrl)

let d_m = document.getElementById('d_href_main');
let d_a = document.getElementById('d_href_about');
let d_f = document.getElementById('d_href_faq');
let d_r = document.getElementById('d_href_rev');
let d_art = document.getElementById('d_href_art');


if (currentUrl == "/index.html" || currentUrl == "/"){
	d_m.style.borderBottom = "1px solid #000"
}
else if (currentUrl == "/about.html"){
	d_a.style.borderBottom = "1px solid #000"
}
else if (currentUrl == "/faq.html"){
	d_f.style.borderBottom = "1px solid #000"
}
else if (currentUrl == "/reviews.html"){
	d_r.style.borderBottom = "1px solid #000"
}
else if (currentUrl == "/articles.html"){
	d_art.style.borderBottom = "1px solid #000"
}

let m_m = document.getElementById('m_href_main');
let m_a = document.getElementById('m_href_about');
let m_f = document.getElementById('m_href_faq');
let m_r = document.getElementById('m_href_rev');
let m_art = document.getElementById('m_href_art');

if (currentUrl == "/index.html" || currentUrl == "/"){
	m_m.style.backgroundColor = "#DB4BFF";
	m_m.style.color = "#fff"
}
else if (currentUrl == "/about.html"){
	m_a.style.backgroundColor = "#DB4BFF";
	m_a.style.color = "#fff"
}
else if (currentUrl == "/faq.html"){
	m_f.style.backgroundColor = "#DB4BFF";
	m_f.style.color = "#fff"
}
else if (currentUrl == "/reviews.html"){
	m_r.style.backgroundColor = "#DB4BFF";
	m_r.style.color = "#fff"
}
else if (currentUrl == "/articles.html"){
	m_art.style.backgroundColor = "#DB4BFF";
	m_art.style.color = "#fff";
}

//d_m.getAttribute("href")
let form_сonn = document.getElementsByClassName("form");

function btn_send_q() {
    //let form_сonn = document.querySelector('.form')[0];
	//form_conn.setAttribute("disabled", "");
}

function btn_send(){
	document.getElementById('form_btn').setAttribute("value", "ОТПРАВЛЕНО!");
	setTimeout(btn_send_q, 1500);
}
var h_hght = 25; // высота шапки
        var h_mrg = 10;     // отступ когда шапка уже не видна
        $(function(){
         $(window).scroll(function(){
            var top = $(this).scrollTop();
            var elem = $('#menu-btn');
            if (top+h_mrg < h_hght) {
             elem.css('top', (h_hght-top));
            } else {
             elem.css('top', h_mrg);
            }
          });
        });
