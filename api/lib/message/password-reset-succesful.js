const sendEmail = require("../../config/sendEmail");

const clientURL = process.env.CLIENT_URL;

async function sendSuccessfulPasswordReset({ email, firstName }) {
  const loginURL = `${clientURL}/auth/login`;
  const message = `
   <div> 
     <p>Dear ${firstName},</p>
     <p>
       You have successfully reset your password 
       <a href="${loginURL}">Log in to your account.</a>
     </p>
     <br>
     <br>
     <p>JOB FINDER</p>
   </div>`;
  return sendEmail({
    to: email,
    subject: "Password reset successful",
    html: message,
  });
}
module.exports.sendSuccessfulPasswordReset = sendSuccessfulPasswordReset;
