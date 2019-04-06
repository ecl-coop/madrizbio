var $navbar = $("#navbar");
var $objetivos= $("#objetivos");
var $contacto= $("#contacto");

$objetivos.waypoint(function(direction){
    if(direction == "down"){
        $navbar.addClass("sticky");
    } else {
        $navbar.removeClass("sticky");
    }
    }, {offset:"10%"});
$contacto.waypoint(function(direction){
    if(direction == "up"){
        $navbar.addClass("sticky");
    } else {
        $navbar.removeClass("sticky");
    }
}, {offset:"20%"});