<!doctype html> 
<html> 
<head> 
<meta charset="utf-8">
<title>��� 1</title> 
</head> 
<body> 
<script type="text/javascript" > 
var login = prompt('������� �����', '');
if (login == "�����") {
var pass = prompt('������� ������', '');
if (pass=="������ ���������")
{
  alert( '����� ����������' );
} else if(pass==null)
{alert( '���� �������' );
}
else { 
alert( '� ��� �� ����' );}
}
else if (login == null) {
  alert( '���� �������' );
} 
else {
  alert( '� ��� �� ����' );
}
</script> 
</body> 
</html>
