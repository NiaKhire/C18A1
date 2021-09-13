var n1 ; 
var a1;


function setup() {
  createCanvas(400,400);
 n1 = new Student("Nia", 12, 8) ;
 n1.show();

 a1 = [1,2,3,4,5,6,7,8,9,0];
 console.log(a1.length);
 a1.push(33);
 console.log(a1);
 a1.pop();
 console.log(a1);
}

function draw() 
{
  background(30);
  
}