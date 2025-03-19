fetch("https://raw.githubusercontent.com/calcaire/qingshi/main/message.txt")
.then(response => response.text())
.then(text => { alert(text); });
