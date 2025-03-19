fetch("https://raw.githubusercontent.com/calcaire/哈哈哈/main/message.txt")
.then(response => response.text())
.then(text => { alert(text); });
