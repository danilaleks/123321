// Устанавливаем дату, до которой будет отсчет
var countDownDate = new Date("July 4, 2023 00:00:00").getTime();

// Обновляем отсчет каждую секунду
var x = setInterval(function() {

  // Получаем текущую дату и время
  var now = new Date().getTime();
  
  // Вычисляем расстояние между текущим временем и датой отсчета
  var distance = countDownDate - now;
  
  // Вычисляем дни, часы, минуты и секунды до 4 июля
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Выводим результаты в элемент с id="timer"
  document.getElementById("timer").innerHTML = days + "д " + hours + "ч "
  + minutes + "м " + seconds + "с ";
  
  // Если уже 4 июля, меняем фон страницы на белый и выводим изображение роз
  if (distance < 0) {
    clearInterval(x);
    document.body.classList.add('white-background');
    var flowers = document.createElement("IMG");
    flowers.setAttribute("src", "https://i.imgur.com/L6goZaR.jpg");
    flowers.setAttribute("id", "flowers");
    document.body.appendChild(flowers);
    alert("С днём рождения !!!");
  }
}, 1000);
