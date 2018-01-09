function display(){
	var p_price=document.getElementById("p_price").value;
	var p_quan=document.getElementById("p_quantity").value;
	var total=p_price*p_quan;
	var country=document.getElementById("country").value;
	var discountAmount=total;
	if(total > 10000)
	{
		if(country=="INDIA"||country=="india")
			discountAmount=total-(total*0.1);
		else if(country=="USA"||country=="usa")
			discountAmount=total-(total*0.05);
		
	}
	var c_name=document.getElementById("c_name").value;
	var p_name=document.getElementById("p_name").value;
	
	var w=window.open("","_self")
	w.document.writeln("<html><head><title>Transaction Display Page</title></head><body bgcolor='LightBlue'>");
	w.document.writeln("<h1 align='center'> Transcation Details</h1><table border=2><tr><td>Customer name </td><td>" + c_name + "</td></tr>");
	w.document.writeln("<tr><td>Product name </td><td> " + p_name + "</td></tr>");
	w.document.writeln("<tr><td>Total amount </td><td> " + total
+"</td></tr>");
	w.document.writeln("<tr><td>Total amount after discount </td> <td>" + discountAmount + 
"</td></tr>");
	w.document.writeln("</table></body></html>");
	
	
	
}

