<!doctype html> 
<html> 
<head>  
<meta charset="utf-8"> 
<title>������������ 3</title> 
</head> 
<body> 
<script type="text/javascript"> 
function Calculator() {

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

var calculator = new Calculator();
calculator.read();

alert( "�����=" + calculator.sum() );
alert( "������������=" + calculator.mul() );
</script> 
</body> 
</html>
