
//currency change
$("#currency").on("change",function(){
	//alert("hello");
	var cur = $("#currency").val();
	$(".curr").html(cur);
	$("#btnCurr").html(cur);
});

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


//jsPDF
// function convertHTMLToPDF() {
// 	const { jsPDF } = window.jspdf;
// 	console.log("i'm here 1 ")
//   //   var doc = new jsPDF('l', 'mm', [1200, 1810]);
// 	var doc = new jsPDF('l', 'mm', [1200, 1800]);
// 	var pdfjs = document.querySelector('#mainbody');
// 	console.log("i'm here 2")
// 	doc.html(pdfjs, {
// 		callback: function(doc) {
// 			doc.save("output.pdf");
// 		},
// 		x: 10,
// 		y: 10
// 	});
// 	console.log("i'm here 3")
// }
