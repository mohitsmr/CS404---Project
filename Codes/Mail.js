/* Team - 5 */

#!/usr/bin/env node
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'beagleboneiitmandi@gmail.com',
        pass: 'iitmandi'
        }
});

var mailOptions = {
    from: 'beagleboneiitmandi@gmail.com',
    to: 'ankur.sardar.as@gmail.com',
    subject: 'Door Alert',
    text: 'The Door Is Open',
    html: '<b>DOOR OPEN</b><p>Please close the door</p>'
    };

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        }else{
            console.log('Message Sent: ' + info.response);
            }
        });