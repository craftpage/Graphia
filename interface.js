function A1(o){
	document.getElementById(o).style.display="block";
	switch(o){
		case 1:	A2(2);A2(4);A2(8);	break;
		case 2:	A2(1);A2(4);A2(8);	break;
		case 4:	A2(1);A2(2);A2(8);	break;
		case 8:	A2(1);A2(2);A2(4);	break;
	}
}

function A2(o){
	document.getElementById(o).style.display="none";
}

function D(A,B){
var Short = document.getElementById("formula");
	switch(A*10+B){
		case 0: Short.value += "0" ; break;
		case 1: Short.value += "1" ; break;
		case 2: Short.value += "2" ; break;
		case 3: Short.value += "3" ; break;
		case 4: Short.value += "4" ; break;
		case 5: Short.value += "5" ; break;
		case 6: Short.value += "6" ; break;
		case 7: Short.value += "7" ; break;
		case 8: Short.value += "8" ; break;
		case 9: Short.value += "9" ; break;

		case 21:Short.value +="Math.E";break;
		case 22:Short.value +="Math.PI";break;
		case 23:Short.value +="x";break;
		case 24:Short.value +=".";break;

		case 31: Short.value += "Math.sin(x)" ; break;
		case 32: Short.value += "Math.cos(x)" ; break;
		case 33: Short.value += "Math.tan(x)" ; break;
		case 34: Short.value += "Math.asin(x)" ; break;
		case 35: Short.value += "Math.acos(x)" ; break;
		case 36: Short.value += "Math.atan(x)" ; break;
		
		case 41: Short.value += "+" ; break;
		case 42: Short.value += "-" ; break;
		case 43: Short.value += "*" ; break;
		case 44: Short.value += "/" ; break;

		case 51: Short.value += "Math.sqrt(x)";break;
		case 52: Short.value += "Math.pow(,)";break;
		case 53: Short.value += "Math.exp(x)";break;
		case 54: Short.value += "Math.log(x)";break;

		case 70:Short.value += "Math.round()";break;
		case 71:Short.value += "Math.ceil()";break;
		case 72:Short.value += "Math.floor()";break;
	}
}