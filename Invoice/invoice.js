$(document).ready(function(){

	//currency change
	$("#currency").on("change",function(){
		var cur = $("#currency").val();
		$(".curr").html(cur);
		$("#btnCurr").html(cur);
	});

	//new Line
	$("#new").click(function(){
		//alert("hello");
		var lastrow = $('#items:last');
		var newrow = lastrow.clone();
		newrow.find('#rowAmt').text("0.00");
		newrow.find('#qty').val("1");
		newrow.find('#price').val("00.00");
		newrow.insertAfter(lastrow);
	});

	//clone
	// $(".clone").click(function(){
	// 	//alert("hello");
	// 	var lastrow = $('#items:last');
	// 	var newrow = lastrow.clone();
	// 	newrow.insertAfter(lastrow);
	// });

	$(".qty").bind("input" , function(){
		var qty = $(this).val();
		var price = ($(this).parent().parent()).children('#ptd').children('#price').val();
		var amt = Math.round(qty * price * 100)/100;
		($(this).parent().parent()).children('#rtd').children('#rowAmt').val(amt);
		//alert("Qty : " + qty  + "   -> price : " + price + " -> Amt : "+amt);
	});

	$(".price").keyup(function(){
		var p = $(this).val();
		var qty = ($(this).parent().parent()).children('#qtd').children('#qty').val();
		var amt = Math.round(qty * p * 100)/100;
		($(this).parent().parent()).children('#rtd').children('#rowAmt').val(amt);//=amt;
		//alert("Qty : " + qty  + "   -> price : " + p + " -> Amt : "+amt);
	});

	// function updatePrice(){
	// 	var p = $(this).val();
	// 	var qty = ($(this).parent().parent()).children('#qtd').children('#qty').val();
	// 	var amt = Math.round(qty * p * 100)/100;
	// 	($(this).parent().parent()).children('#rtd').children('#rowAmt').val()=amt;
	// 	alert("Qty : " + qty  + "   -> price : " + p + " -> Amt : "+amt);
	// }
});



