window.onload = function(){
	var Turntable = document.getElementById("content-middle-pattern-turntable");
	for (let i = 1; i < 8; i++) {
	    Turntable.innerHTML += `<g id='content-middle-pattern-turntable-tray${i}' style='transform-origin:155px 155px; transition: all 2s;' >${ Turntable.children[0].innerHTML }</g>`
	    setTimeout(() => {
			Turntable.children[i].style.transform = `rotate(${i * 45}deg)`
	    })
	}
}

function setTrayColor(TrayNum,Color){
	document.getElementById("content-middle-pattern-turntable-tray" + TrayNum).querySelector("g").setAttribute("fill",Color)
}


// 点击事件监听器
const ipc = require('electron').ipcRenderer;
window.addEventListener("click", function(e) {
	switch (e.target.id) {
		case "minimize":
			ipc.send("minimize")
			break;
		case "maximize":
			ipc.send("maximize")
			break;
		case "quit":
			ipc.send("quit")
			break;
		default:
			return;
	}
}, false);