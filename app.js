var greet="Hello Bootcampers";
//console.log(greet.length);

var myarray=["Jan","Feb","March"];
//console.log(myarray.length);

var str="Welcome to Myanmar IT Consulting";
var pos=str.search("xyz");
//console.log(pos);

//search
//shi nay yin position 
//-1

//slice()
/*var str="Apple, Banana, Kiwi";
var res=str.slice(-19,-13);
console.log(res);*/

//substring()
/*var str="Apple, Banana, Kiwi";
var res=str.substring(7);
console.log(res);*/

//replace()
/*var str="Welcome Boootcampers";
var res=str.replace("Welcome","Hello");
console.log(res);*/

//Number methods
//let x=123;
//tostring();
/*var y=x.toString();
console.log(typeof y);*/

//tofixed()
/*var x=9.656;
console.log(x.toFixed(0));*/

//Number
/*var x=false;
console.log(Number(x));*/

//parseInt()
/*var x=10.6789;
console.log(parseInt("10 years"))*/


//Array Method
/*var months=["Feb","Jan","March"];
var stringmonth=months.toString();
console.log(typeof stringmonth);*/

//join();
/*var months=["Feb","Jan","March"];
var stringmonth=months.join("*");
console.log(stringmonth);*/

//push() and pop();
var months=["Jan","Feb","March","April","May","June","July"];
months.forEach( function(element, index) {
	//console.log(element);
});

/*months.push("April");
console.log(months);

months.pop();
console.log(months);

months.shift();
console.log(months);

months.unshift("Jan");
console.log(months);

console.log(months[0]);
months[0]="January";
console.log(months);*/

//splice();
/*months.splice(1,1,"May","Mibn","mmmm");
console.log(months);*/

/*var array=["May","June","July"];
var myarray=months.concat(array);
console.log(myarray);*/

/*var person={firstname:"John",lastname:"Doe"};*/
//console.log(person.firstname);


//asssoc
//object
//operateors
//conditional statement
//looping


/*var firstname=20;
var lastname="Aung";
var yes=false;

var name=firstname+yes;
console.log(name);*/

/*var FirstName="Mg Mg";//pascale case;
var first_name="Mg Mg"//underscore convention
var firstName="Mg Mg"//camel case;
var First_Name="Mg Mg"//snake case;const */

/*let name;//declare
let age=20;

name=age>20?"Mg Mg":"Aung Aung";
console.log(name);*/


//object

/*let person={
	name:"Mg Mg",
	age :20,
	married:false,
	family:["U Ba","Daw Mya","su su"],
}
//console.log(typeof person);
var json=JSON.stringify(person);
//console.log(json);

//console.log(typeof json);
var obj=JSON.parse(json);
console.log(obj);
console.log(typeof obj)*/

/*console.log(person.myfunction());
*/

//const name="mg mg";// not variable re assign
//console.log(name);
/*const person={
	name:"Mg Mg",
	age :20,
	married:false,
	family:["U Ba","Daw Mya","su su"],
};

const array=["min","pike","Hmu"];
array[1]="lin";
//console.log(array);

person.name="Aung Aung";
//console.log(person)

//+,-,*,/,%
let num1=10;
let num2=5
//console.log(num1%num2);

//num1+=1;

console.log(++num1);
console.log(--num2);*/

//==,===,!=,>=,<=,>,<

/*var x=4!=5;
console.log(x);*/

/*var num=20;
var num1="20";

console.log(num==num1);*/

//&& ,//
//&& all condition is true;
//  or// one condition is true;

//conditional statement
//if,if else,if else if else,switch
/*if(4<5){
console.log("answer is right");	
}else{
console.log("answer is wrong");
}*/


/*if(4<5 && 3>2){
	console.log("answer is right");
}*/


/*var age=20;
if(age==11){
	console.log("your age is 11");
}else if(age==15){
	console.log("your age is 15");
}else if(age==20){
	console.log("your age is 20")
}
else{
	console.log("your age is 50");
}*/


