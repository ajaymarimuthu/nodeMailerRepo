const nodemailer=require("nodemailer");

require('dotenv').config();

const transporterObject=nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    port:465,
    secure:true,
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD,

    }
})

const sendEmail = async(mailDetails,callBack)=>{
    try {
        const info= await transporterObject.sendMail(mailDetails);
        callBack(info)
        
    } catch (error) {

        console.log(error);
        
    }
}


const HTML_TEMPLATE = (text) => {
    return `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>NodeMailer Email Template</title>
            <style>
              .container {
                width: 100%;
                height: 100%;
                padding: 20px;
                background-color: #f4f4f4;
              }
              .email {
                width: 80%;
                margin: 0 auto;
                background-color: #fff;
                padding: 20px;
              }
              .email-header {
                background-color: #333;
                color: #fff;
                padding: 20px;
                text-align: center;
              }
              .email-body {
                padding: 20px;
              }
              .email-footer {
                background-color: #333;
                color: #fff;
                padding: 20px;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="email">
                <div class="email-header">
                  <h1>Sample Mail from Nodemailer</h1>
                </div>
                <div class="email-body">
                  <p>${text}</p>
                </div>
                <div class="email-footer">
                  <p>You received the email</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `;
  };

  const message= "Hi Fellas--- Email from Nodemailer";
  const options={
    from:process.env.EMAIL,
    to:"prabaharan.cs@gmail.com",
    subject:"Send email in Node js with nodemailer using Gmail",
    text:message,
    html:HTML_TEMPLATE(message)
  }


  sendEmail(options,(info)=>{
    console.log("success"); 
  })

  module.exports={
    sendEmail,HTML_TEMPLATE
  }