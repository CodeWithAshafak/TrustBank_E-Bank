const autoAccountNumber = ()=>{
  let  string = "1234567890"
  let ACNum = ""
  for(var i=0 ; i<11; i++){
    let myno = Math.floor(Math.random()*string.length)
    ACNum+=string.charAt(myno)
  }

 return ACNum;
  console.log(ACNum);
}



module.exports= {
  autoAccountNumber

}