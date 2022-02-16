/*Aigerim Zhusubalieva, az2177
Assignment 1, CommLab Spring 2022
Script*/

// Enlarging the images when hovering over them in the home page

var obj1 = document.getElementById("obj1");
var obj2 = document.getElementById("obj2");
var obj3 = document.getElementById("obj3");

obj1.addEventListener('mouseenter', function(){
	obj1.style.flex = "2";
	obj2.style.flex = "1";
	obj3.style.flex = "1";
});
obj1.addEventListener('mouseleave', function(){
	obj1.style.flex = "1";
	obj2.style.flex = "2";
	obj3.style.flex = "1";
});

obj3.addEventListener('mouseenter', function(){
	obj1.style.flex = "1";
	obj2.style.flex = "1";
	obj3.style.flex = "2";
});
obj3.addEventListener('mouseleave', function(){
	console.log('entered/hovering')
	obj1.style.flex = "1";
	obj2.style.flex = "2";
	obj3.style.flex = "1";
});