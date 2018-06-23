<!doctype html> 
<html> 
<head>  
<meta charset="utf-8">
<title>Лабораторная 3</title> 
</head> 
<body> 
<script type="text/javascript"> 
var ladder = {
  step: 0,
  up: function() {
    this.step++;
    return this;
  },
  down: function() {
    this.step--;
    return this;
  },
  showStep: function() {
    alert( this.step );
    return this;
  }
}

ladder.up().up().down().up().down().showStep();
</script> 
</body> 
</html>
