<!doctype html> 
<html> 
<head> 
<meta charset="utf-8">
<title>Лаб 1</title> 
</head> 
<body> 
<script type="text/javascript" > 
var login = prompt('введите логин', '');
if (login == "Админ") {
var pass = prompt('введите пароль', '');
if (pass=="Черный Властелин")
{
  alert( 'Добро пожаловать' );
} else if(pass==null)
{alert( 'Вход отменен' );
}
else { 
alert( 'Я вас не знаю' );}
}
else if (login == null) {
  alert( 'Вход отменен' );
} 
else {
  alert( 'Я вас не знаю' );
}
</script> 
</body> 
</html>
