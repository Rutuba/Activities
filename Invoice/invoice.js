
//currency change
$("#currency").on("change",function(){
	//alert("hello");
	var cur = $("#currency").val();
	$(".curr").html(cur);
	$("#btnCurr").html(cur);
});
// function nLine(){
// 	var txt = "<tr id=\"items\" class=\"items\"><td class=\"product\">";
// 		txt+= "<input type=\"text\" placeholder=\"Item Name\" id=\"name\">"; 
// 		txt+= "<button class=\"clone\" id=\"clone\" onclick=\"cloneRow()\"> ";
// 		txt+= "<i class=\"fa fa-files-o\"></i> </button> </td>";
// 		txt+= "<td style=\"width:10%\" id=\"qtd\"> <input type=\"number\" min=1 ";
// 		txt+= "style=\"width:90%\" id=\"qty\" class=\"qty\" value=\"1\" onchange=\"updateRowAmount()\">";
// 		txt+= "</td><td style=\"width:10%\" id=\"ptd\"><input type=\"text\" style=\"width:90%\" id=\"price\" ";
// 		txt+= "class=\"price\" value=\"0.00\" onkeyup=\"updateRowAmount()\"></td>";
// 		txt+= "<td style=\"width:20%\" id=\"rtd\"> ";
// 		txt+= "<label id=\"curr\" class=\"curr\">--</label> ";
// 		txt+= "<input type=\"text\" id=\"rowAmt\" value=\"00.00\" class=\"rowAmt\" disabled> ";
// 		txt+= "</td> <td> <button class=\"remove\" id=\"remove\" onclick=\"removeRow()\">X</button>";
// 		txt+= "</td> </tr>";
// 		$(table tbody).append(txt);
// }

//new Line
function newLine(){
	var lastrow = $('.items:last');
	console.log(lastrow)
	var newrow = lastrow.clone();
	newrow.find('#name').val("");
	newrow.find('#rowAmt').text("0.00");
	newrow.find('#qty').val("1");
	newrow.find('#price').val("00.00");
	newrow.find('#rowAmt').val("00.00");
	newrow.insertAfter(lastrow);
	updateTotal();
}

//clone function
function cloneRow() {
	//console.log("in, : ", event.target.tagName);
	var tmp= event.target;
	var row ;
	if(tmp.tagName == "I")
		row = tmp.parentElement.parentElement.parentElement// find row to copy
	else
		row = tmp.parentElement.parentElement
	var table = document.getElementById("ptable"); // find table to append to
	var clone = row.cloneNode(true); // copy children too
	table.appendChild(clone); // add new row to end of table
	//table.insertAfter(clone,row);
	updateTotal();
}


function updateRowAmount(){
	var tbl = document.getElementsByClassName('ptable')[0];
	var rows = tbl.getElementsByClassName('items');
	for(var i=0;i<rows.length ; i++){
		var rtd = rows[i];
		var qty=rtd.getElementsByClassName('qty')[0];
		var price=rtd.getElementsByClassName('price')[0];
		var amt = (qty.value )* (price.value) ;
		rtd.getElementsByClassName('rowAmt')[0].value = amt;
		//console.log("qty :" ,qty.value , "\nPrice : ",price.value , "\namt : ",amt)
	}
	updateTotal();
}

//on change of tax
function updateTax(){
	total = parseFloat(document.getElementById('subtotal').textContent)
	console.log(document.getElementById('subtotal').text);
	var tax = Math.round(total * parseFloat(document.getElementById('per').value) )/ 100;
	var final = (Math.round((total + tax)*100 ))/100;
	$("#tax").html(tax);
	$("#total").html(final);
	$("#btnAmt").html(final);
	console.log("sub total : " , total , "\n tax : ",tax ,"\n total : ",final);	
}

//updates the sub total and total
function updateTotal(){
	var tbl = document.getElementsByClassName('ptable')[0];
	var rows = tbl.getElementsByClassName('items');
	let total = 0;
	for(var i=0;i<rows.length ; i++){
		var rtd = rows[i];
		let amt=rtd.getElementsByClassName('rowAmt')[0].value;
		//console.log(amt);
		total = total + parseFloat(amt);
	}
	//put updated value
	$("#subtotal").html(total);
	var tax = Math.round(total * parseFloat(document.getElementById('per').value) )/ 100;
	var final = (Math.round((total + tax)*100 ))/100;
	$("#tax").html(tax);
	$("#total").html(final);
	$("#btnAmt").html(final);
	console.log("sub total : " , total , "\n tax : ",tax ,"\n total : ",final);	
}

//jsPDF//onclick="convertHTMLToPDF()"
function convertHTMLToPDF() {
	const { jsPDF } = window.jspdf;
 	var doc = new jsPDF('l', 'mm', [1000, 900]);//[1200, 1810]);, [900, auto]
	//var doc = new jsPDF();
	var pdfjs = document.querySelector('#mainbody');
	doc.html(pdfjs, {
		callback: function(doc) {
			doc.save("invoice.pdf");
		},
		x: 10,
		y: 10
	});
}

function removeRow(){
	var tmp= event.target;
	var row =tmp.parentElement.parentElement;
	row.remove();
	updateTotal();
	console.log("done");
}


