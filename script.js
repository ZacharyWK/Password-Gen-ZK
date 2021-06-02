// Assignment Code //worked with instructor on 5-26-2021
var generateBtn = document.querySelector("#generate");

const lowercase = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,x,y,z";
const uppercase = lowercase.toUpperCase();
const special = "-,!,@,#,$,_";
const numeric = "0,1,2,3,4,5,6,7,8,9";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

let ylow=[];
let yup=[];
let yspec=[];
let ynum=[];

let darts;
let board=[];
let daBah=[];

let Numbahs;
let lafin;

function generatePassword(){
    
  var params = {};

    //user input
    params.low = confirm("Use lowercase?");
    params.up = confirm("Use UPERCASE?");
    params.spec = confirm("Use special characters? -!@#$_");
    params.num = confirm("Use numbers 0-9?"); 
    params.lan = prompt("Please choose length, 8 - 128",);
    
    console.log(params);
    
    if (params.low === true){ylow=lowercase.split(",")} 
    else {};
    if (params.up === true){yup=uppercase.split(",")}
    else {};
    if (params.spec === true){yspec=special.split(",")} 
    else {};
    if (params.num === true){ynum=numeric.split(",")}
    else {};
    if(params.lan > 7 && params.lan < 129){darts = params.lan}
    else{return "Input not in range."};

    console.log(ylow);
    console.log(yup);
    console.log(yspec);
    console.log(ynum);
    
    //array from choices
    daBah = daBah.concat(ylow,yup,yspec,ynum);

    //selector
    for (let index = 0; index < darts; index++) {
      Numbahs = daBah[Math.floor(Math.random()*daBah.length)];
      board.push(Numbahs)
    };
    
    console.log(board);

    lafin = board.join("");

    //result
    return lafin

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
