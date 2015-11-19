/* Team - 5 */

#!/usr/bin/env node
var accountSid = 'AC4f4dcf0f1b78d4ef74e2e605b2d0acd1'; 
var authToken = '[AuthToken]'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
    to: "+919816923644", 
    from: "+12028310775", 
    body: "Hey Jenny! Good luck on the bar exam!", 
      
}, function(err, message) { 
    console.log(message.sid); 
});