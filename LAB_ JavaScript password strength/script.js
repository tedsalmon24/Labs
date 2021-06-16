function isStrongPassword(passwd){
 
var isStrong=false;

if(passwd.length>=8 && passwd.indexOf("password")==-1){
     
for(var i=0;i<passwd.length;i++){
  
var charCode=passwd.charCodeAt(i);
if(charCode>=65 && charCode<=90){
isStrong=true;
}
}
}

return isStrong;
}
