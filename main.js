/*_1_______sigup form__________*/

function myfun(){
  
  var x= document.getElementById('name'). value;
  var y= document.getElementById('password').value;
  var conpass= document.getElementById('conpass').value;
  if(y===conpass){
    
     localStorage.setItem("nme",x);
      localStorage.setItem("pass",y);
      alert('register success..!');
      window.open('index2.html'); 
  }
  else{ alert("password doesnt match");}
  
}
var id=localStorage.getItem('nme');
var pass=localStorage.getItem('pass');

var otp = Math.floor((Math.random() * 100000) + 1);
document.getElementById("otp").innerHTML = "Enter Generated Numbe:" + otp;

/*var otpTest = document.getElementById('nom').value;
 if (otp === ot) {
 
 }
 else { alert('robot test failed'); }
 localStorage.setItem('ot'otp);
 var ot=localStorage.getItem('ot');
console.log('your id is :'+id+'.   & your password is:'+pass);*/

/*_2_________signin form________*/

function myfun2(){
  var a= document.getElementById('userId').value;
  var b=document.getElementById('userPass').value;
  if(id==a && pass===b && id!==''){
    alert('successfully login to the home page')
    window.open('index3.html');
  }
  else{
    window.alert("user id or password is wrong...!")
  }
}
function myfun3() {
  
 window.open('index.html');
}



/*________home page___________*/ 

