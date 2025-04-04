const UserModel = require("../model/registerModel")
const autoPassword = require("../Middleware/autoPassword")
const autoAccountNumber = require("../Middleware/autoAccountNum")
const nodemailer = require("nodemailer")
const register = async (req,res)=>{
  try {


    let myPass = autoPassword.autoPassword()
    let ACNum = autoAccountNumber.autoAccountNumber()
    const {Fname,Lname,email,mobile,address,city,state,password} = req.body
    console.log(req.body);
    
    const userData = await UserModel.create({
      Fname: Fname,
      Lname: Lname,
      email: email,
      mobile:  mobile,
      address: address,
      city:  city,
      state: state,
      Account:ACNum ,
      password:myPass
    })


    const Transport =  nodemailer.createTransport({
       service:"gmail",
       auth:{
            user:"ashafak04@gmail.com",
            pass:"obbw bnmc jqlx necn"
           }
    });

   let mailDetails = {
    from:"ashafak04@gmail.com",
    to:email,
    subject: "TrustBank[fake] Customer Registration Successfull.",
    text:`Dear ${Fname} ${Lname} Your Account Successfully Created with Account Number ${ACNum}\nYour Password is ${myPass}.`
   }
   Transport.sendMail(mailDetails);
   console.log("mail send successfully");
   
   res.status(200).json({msg:"Successfully Registered.Please Check E-Mail for Account Number And Password"})
  } catch (error) {
    console.log(error);
    res.status(400).json({msg:"registration failed"})
  }
}


const login = async (req,res)=>{
   

    const { email, account, password} = req.body
    


    try {
    const data = await UserModel.findOne({email:email})

    if(!data){
      return res.status(400).send({msg:"Invalid Email"})
    }
    if(data.password!=password){
      return res.status(400).send({msg:"password not matched"})
    }
    if(data.Account!=account){
      return res.status(400).send({msg:"password not matched"})
    }
    
    res.status(200).json({msg:"Login Successfull"})
    
   } catch (error) {


    res.status(400).send({msg:"login Failed"})



    
   }

   
  
   
  


}

module.exports= {
  register,
  login
}