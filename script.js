const arr = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
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

  let newValue = Math.floor(Math.random() * 100);
  let colored = newValue >= 50 ? 'style="background-color: orange;"' : "";

  if (rows.length === 0 || rows[rows.length - 1].children.length >= 6) {
    table.innerHTML += `<tr><td ${colored}>${newValue}</td></tr>`;
  } else {
    rows[rows.length - 1].innerHTML += `<td ${colored}>${newValue}</td>`;
  }
}
