<!doctype html> 
<html> 
<head>  
<title>������������ 3</title> 
</head> 
<body> 
<meta charset="utf-8"> 
<script type="text/javascript"> 
var calculator = {
sum: function(){
return this.a + this.b;
},
mult: function (){
return this.a * this.b;
},
read: function(){
this.a = +prompt('������ �����=', 0);
this.b = +prompt('������ �����=', 0);
}
}
calculator.read();
if (((checkInp(calculator.a) && checkInp(calculator.b))) ==false)
{alert("������");}
else{
alert(calculator.sum());
alert(calculator.mult());
};
function checkInp(elem){
return !(isNaN(+elem) || elem === '' || elem === null);
}
</script> 
</body> 
</html>
