const autoPassword = ()=>{
  let  string = "qwertyuiopasdfghjklmnbvcxz1234567890@#$%&QWERTYUIOPLKJHGFDSAZXCVBNM"
  let pass = ""
  for(var i=0 ; i<7; i++){
    let myno = Math.floor(Math.random()*string.length)
    pass+=string.charAt(myno)
  }

 return pass;
  console.log(pass);
}



module.exports= {
  autoPassword

}