const time=new Date().getHours();
let welcome;
if(time >=6&& time<12){
welcome="Good morning";
}else if(time >=12 && time <18){
    welcome="Good Evining";
}else{
    welcome="Good night";
}

 document.getElementById('demo').innerHTML= welcome;

let day;
switch(new Date().getDay()){
    case 0:
        day="Today is sunday";
        break;
        case 1:
            day="Today is monday";  
            case 2:
                day="Today is Tusday";
                break;
                case 3:
                    day="Today is Wednesday";
                    break;
                    case 4:
                        day="Today is Thursday";
                        break;  
                        case 5:
                        day="Today is friday and holyday";
                        break;  
                        case 6:
                        day="Today is Satarday";
                         

}
document.getElementById('demos').innerHTML= "," + day;

//  let text ="";
//  for(let i=1; i <=10; i++){
//     if(i===5)break;
//     text += i + "<br>";
//  }
//  document.write(text);

//  let x="20";
//  console.log(typeof x);
//   var riche=true;
//   var poor=false;
//   console.log(typeof riche); 

// let myName="my name is kamlesh";
// let sonName="my son name is spondon";
// document.write(myName.toUpperCase() +'<br>');
// document.write(sonName.split('son'));
// console.log(sonName.split('son'));

// let nambur=10;
// let nambur1="10.5";
// nambur1=parseInt(nambur1);
// document.write(nambur + nambur1);

// let x=0.1;
// let y=0.2;
// let totall=x +y;

// document.write(totall.toFixed(5));

let biscute=10;
let wellcome;
if(biscute <=10){
 welcome="i will eat biscute";
}else{
    welcome="just i will tea";
}
document.write(welcome);