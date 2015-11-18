var b = require('bonescript');

setInterval(readTemp,2000);

function readTemp(x) {
    
b.analogRead('P9_35', printStatus);
}

function printStatus(x) {
    console.log('x.value = ' + x.value);
    //console.log('x.err = ' + x.err);
    if(x.value>0.7){
        console.log('Door is locked.');
        //setTimeout(readTemp, 250);
    }
    else if(x.value<0.7){
        console.log('1')
    }
   // break;
}

