const arr = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100)); // Массив 30 случайных чисел от 0 до 99
let table = document.getElementById("table");

for (let i = 0; i < 5; i++) {
  table.innerHTML += "<tr></tr>";
  const tr = table.getElementsByTagName("tr")[i];
  for (let j = 0; j < 6; j++) {
    let index = i * 6 + j;
    let value = arr[index];
    let colored = value >= 50 ? 'style="background-color: orange;"' : "";
    tr.innerHTML += `<td ${colored}>${value}</td>`;
  }
}

function foo() {
  let rows = table.getElementsByTagName("tr");

  let newValue = Math.floor(Math.random() * 100); // Генерация случайного числа от 0 до 99
  let colored = newValue >= 50 ? 'style="background-color: orange;"' : "";

  if (rows.length === 0 || rows[rows.length - 1].children.length >= 6) {
    // Если таблица пустая или последняя строка заполнена, добавляем новую строку
    table.innerHTML += `<tr><td ${colored}>${newValue}</td></tr>`;
  } else {
    // Добавляем ячейку в последнюю строку
    rows[rows.length - 1].innerHTML += `<td ${colored}>${newValue}</td>`;
  }
}
