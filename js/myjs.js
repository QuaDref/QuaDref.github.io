"use strict";

//  Выделить дни матчей
let a = document.getElementsByClassName("datepicker--cell-day");

function week() {
  let date = new Date();
  date.setDate(1);
  let dayPosition = date.getDay();
  let addCell;

  if (dayPosition == 0) {
    addCell = 6;
  } else {
    addCell = dayPosition - 1;
  }

  a.item(addCell + 8).innerHTML = `9*`;
  a.item(addCell + 9).innerHTML = `10*`;
  a.item(addCell + 10).innerHTML = `11*`;

  return date.toLocaleString("ru", { month: "long" });
}
setTimeout(week, 100);

//  Показать матч в выбраный день
let day = document.querySelector("#date");

day.onclick = function(event) {
  let d = event.target.getAttribute("data-date");

  let game = document.createElement("div");
  game.className = "game z-depth-1";
  let length = document.getElementById("date").children.length;
  console.log(document.getElementById("date").children);

  const date9 = `<strong>9 ${week()} 2019</strong> <h4>Программная инженерия</h4> <p>Подготовить презентации студентам:</p> 
  <p>-Севастьянов/Тупиков</p> <p>-Танишева</p> <p><a href="file/topics.pdf" target="_blank">Открыть список</a> 
  <p><a href="file/A Student Guide to Object-Oriented Development.pdf" target="_blank">Открыть книгу</a>`;
  const date10 = `<strong>10 ${week()} 2019</strong> <h4>Вычислительные системы, сети и телекоммуникации</h4> <p>Сделать отчет по 1 лабораторной работе</p>
  <p><a href="file/VSST_Lab_work_1.pdf" target="_blank">Открыть 1 лабораторную работу</a> <h4>Программирование и поддержка веб. приложений</h4> <p>Выполнить первые 4 лаб. работы</p> 
  <p><a href="https://drive.google.com/drive/u/1/folders/1VYykfJ_xncyboiQ4yIhtyBKv7BREz1p8" target="_blank">Открыть гугл-диск</a>`;
  const date11 = `<strong>11 ${week()} 2019</strong> <h4>Обработка изображения и мультимедиа</h4> <p>Выполнить лаб. работу: скачать программу</p> 
  <p><a href="https://drive.google.com/drive/u/1/folders/1bzAiIjPW6byUu_nSCZWbciQxP_x-_IVi" target="_blank">Ссылка на гугл-диск</a> 
  <p><a href="https://matlab.ru/education/student-trial" target="_blank">Инструкция по установки программы MatLab</a> 
  <h4>Теория программирования</h4> <p>Выполнить лаб. работу</p> 
  <p><a href="file/TP/TP_Lab_work_1.pdf" target="_blank">Лаб. работа №1</a>
  <p><a href="file/TP/!Правила оформления отчетов по лабораторным работам.pdf" target="_blank">Правила оформления</a>
  <p><a href="file/TP/Post.exe" target="_blank">Пограмма для скачивания</a>`;

  switch (d) {
    case "9":
      if (length < 2) {
        game.innerHTML = date9;
        date.appendChild(game);
      } else {
        document.querySelector(".game").innerHTML = date9;
      }
      break;

    case "10":
      if (length < 2) {
        game.innerHTML = date10;
        date.appendChild(game);
      } else {
        document.querySelector(".game").innerHTML = date10;
      }
      break;

    case "11":
      if (length < 2) {
        game.innerHTML = date11;
        date.appendChild(game);
      } else {
        document.querySelector(".game").innerHTML = date11;
      }
      break;
  }
  setTimeout(week, 100);
};
