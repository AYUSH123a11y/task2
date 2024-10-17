var fe=document.getElementById('fnamee');
var se=document.getElementById('snamee');
var pe=document.getElementById('passworde');
var pce=document.getElementById('passwordce');

function Fname(){
    let fn=document.getElementById('fname');
    if(fn.value.length<5){
        fe.innerHTML='First Name should be min of 5 char';
        fn.style.border=".1rem solid red";
        return false;
    }
    fe.innerHTML='';
    fn.style.border=".1rem solid green";
    return true;
}

function sname(){
    let sn=document.getElementById('sname');
    if(sn.value.length<5){
        se.innerHTML='Last Name should be min of 5 char';
        sn.style.border=".1rem solid red";
        return false;
    }
    se.innerHTML='';
    sn.style.border=".1rem solid green";
    return true;
}

function Password(){
    let password=document.getElementById('password');
    let pv=password.value;
    if(pv.length<8){
        pe.innerHTML='Password must be at least 8 characters';
        password.style.border=".1rem solid red";
        return false;
    }
    for(let i = 0;i<password.value.length;i++){
        if(pv[i]!=="@"||pv[i]!=="#"||pv[i]!=="$"||pv[i]!=="%"||pv[i]!=="&"){
            pe.innerHTML=''; 
            password.style.border=".1rem solid green";
            return true;
        }
        else{
            pe.innerHTML='Password must contain at least one special character';
            password.style.border=".1rem solid red";
            return false;
        }
    }    
}

function PasswordC(){
    let password=document.getElementById('password');
    let pcv=document.getElementById('passwordc');
    if(pcv.value!==password.value || pcv.value.length==0){
        pce.innerHTML="Passwords don't match";
        pcv.style.border=".1rem solid red";
        return false;
    }
    pce.innerHTML='';
    pcv.style.border=".1rem solid green";
    return true;
}

var form=document.getElementById('form');
function Form(){
    let fb=true;
    if(!Fname()){
        fb=false;
    }
    if(!sname()){
        fb=false;
    }
    if(!Password()){
        fb=false;
    }
    if(!PasswordC()){
        fb=false;
    }
    if(fb){
        window.location.href='land.html';
        return false;
    } 
    return false;
}
