const draw = () => {
	
	let data = {
		width: 300,
		height: 300,
		xStart : parseFloat(document.getElementById('xS').value),
		xEnd : parseFloat(document.getElementById('xE').value),
		yStart : parseFloat(document.getElementById('yS').value),
		yEnd : parseFloat(document.getElementById('yS').value)
	}

	const canvas = document.getElementById("Graph")
	const ctx = canvas.getContext('2d')
	ctx.beginPath()	
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.font = "10pt Arial"
	ctx.fillText("Graphia", 300, 280)
	ctx.fillText('f(x)', 25, 10)

	let formula = function(x){
		return eval(document.getElementById('formula').value)
	}

	let scaleLength = function(start,end){
		return Math.abs(start) + Math.abs(end);
	}

	let xHi= data.width / Math.abs(data.xStart) * data.xStart/scaleLength(data.xStart, data.xEnd);
	let yHi= data.height * data.yStart/scaleLength(data.yStart,data.yEnd)

	let x, View;
	let HI = scaleLength(data.xStart,data.xEnd)/scaleLength(data.yStart,data.yEnd);

	//目盛り
	if(data.xStart < data.xEnd && data.yStart < data.yEnd || "\d"){
		let x = data.width / 4
		let h = data.height
		let y = h + 10
		let XNDiv = []
		let YNDiv = []
		for (let p = 0; p <= 4; p++) {
			XNDiv[p] = data.xStart+scaleLength(data.xStart,data.xEnd)*p/4
			ctx.fillText(XNDiv[p], x, data.height + 20)
			x += data.width / 4

			YNDiv[p] = data.yStart+scaleLength(data.yStart, data.yEnd)*(4-p)/4;
			ctx.fillText(YNDiv[p], 0, y);
			y -= data.height / 4
		}
		ctx.fillText('x', x, data.height + 20)
	} else {
		document.getElementById("Error").innerHTML = "<p>Error</p>";
	}
	

	ctx.strokeRect(data.width / 4, 0, data.width, data.height)
	for(let e = 0; e <= data.width; e++) {
 		x = data.xStart+scaleLength(data.xStart,data.xEnd)*e/data.width 
		View = yHi+xHi*formula(x)*HI;
		Plot(e);
	}

	function Plot(e){
		e += data.width / 4
		if (-data.height <= View && View<=0){
			ctx.lineTo(e, data.height+View);
		}
		ctx.stroke()
	}

	ctx.closePath()
}

function imgSave(){
	canvas = document.getElementById('Graph')
    base64 = canvas.toDataURL("image/png")
    document.getElementById("imgSave").href = base64
}

function erase (){
	const canvas = document.getElementById("Graph")
	const ctx = canvas.getContext('2d')
	ctx.beginPath()
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.closePath()
	document.getElementById('formula').value = ''
}

window.onload = () => {
	document.getElementById('draw').addEventListener('click', draw)
	document.getElementById('erase').addEventListener('click', erase)
	document.getElementById('imgSave').addEventListener('click', imgSave)
}