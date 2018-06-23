<!doctype html> 
<html> 
<head>  
<meta charset="utf-8"> 
<title>Лабораторная 2</title> 
</head> 
<body> 
<script type="text/javascript"> 
function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

alert( sumTo(100) );
</script> 
</body> 
</html>
