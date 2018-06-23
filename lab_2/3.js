<!doctype html> 
<html> 
<head>  
<meta charset="utf-8">
<title>Лабораторная 2</title> 
</head> 
<body> 
<script type="text/javascript"> 
function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

var x = prompt("x?", '');
var n = prompt("n?", '');

if (n <= 1) {
  alert('Степень ' + n +
    'не поддерживается, введите целую степень, большую 1'
  );
} else {
  alert( pow(x, n) );
}
</script> 
</body> 
</html>
