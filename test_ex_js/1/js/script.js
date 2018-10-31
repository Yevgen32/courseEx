// Вывести таблицу 10 × 10, заполненую числами от 1 до 100
document.write("<table>");
var num = 1;
for (var i = 0; i < 10; i++){
	document.write("<tr>");
	for (var j = 0; j < 10; j++){
		document.write("<td>" + num++ + "</td>");
	}
	document.write('</td>');
}
document.write("</table>");
