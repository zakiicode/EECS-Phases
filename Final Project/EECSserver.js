var codes = {}; // an empty JS object, later it's going to store the code for each end-user

var express = require('express');
var app = express();
var idCounter = 0;

app.post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("New express client");
    console.log("Received: ");
    console.log(JSON.parse(req.query['data']));
    var z = JSON.parse(req.query['data']);
    
    if (z['action'] == "evaluatesing") {
        /* the response will have 6 parts: request action, whether won or not, number of exact matches,
        number of colors that are correct, number of wrong colors, and the answer if the game ended */
        var p1= z['choice'];
        var win = false;
        var pc = Math.floor(Math.random()*3+1);

        // 1 is rock, 2 is paper, 3 is scissors
        if ((p1 == 1 && pc == 2)||(p1 == 2 && pc == 3)||(p1 == 3 && pc == 1)){
            win = false;
            }
        else if((pc == 1 && p1 == 2)||(pc == 2 && p1 == 3)||(pc == 3 && p1 == 1)){
            win = true;
        }
        else if((pc ==p1)){
        // console.log("tie");
           win="tie";
        }
        var jsontext = JSON.stringify({
            'name':z['name'],
            'p1win':win,
            /*TODO 3 ... type of action */
            'action':'evaluatesing'
        });
        console.log(jsontext);
        res.send(jsontext);
    } 
    else if(z['action'] == "evaluate"){
        var p1= z['choice'];
        var p2= z['choice2'];
        var win = false;
        if ((p1 == 1 && p2 == 2)||(p1 == 2 && p2 == 3)||(p1 == 3 && p2 == 1)){
        
            win = false;
        }
        else if((p2 == 1 && p1 == 2)||(p2 == 2 && p1 == 3)||(p2 == 3 && p1 == 1)){
            win = true;
        }
        else if((p2 == p1)){
            win="tie";
        }
            var jsontext = JSON.stringify({
            'name':z['name'],
            'name2':z['name2'],
            'p1win':win,
            /*TODO 3 ... type of action */
            'action':'evaluate'
        });
        console.log(jsontext);
        res.send(jsontext);
    }
    else {
        res.send(JSON.stringify({ 'msg': 'error!!!' }));
    }
}).listen(3000);
console.log("Server is running!");

/*
 * Evaluate the client's attempting code
 * @param code is the server generated code for this client
 * @param attempt_code is the client attempted code in this request
 * @return num_match, num_containing, num_not_in

function evaluate(p1, p2) {
    var p1win =false;
    var pc = Math.floor(Math.random()*3+1);
    //console.log(pc);
    if(p2==0){
        // 1 is rock, 2 is paper, 3 is scissors
        if ((p1 == 1 && pc == 2)||(p1 == 2 && pc == 3)||(p1 == 3 && pc == 1)){
            p1win = false;
            }
        else if((pc == 1 && p1 == 2)||(pc == 2 && p1 == 3)||(pc == 3 && p1 == 1)){
            p1win = true;
        }
        else if((pc ==p1)){
        // console.log("tie");
           p1win="tie";
        }
        return p1win;
 }
 else{
        // 1 is rock, 2 is paper, 3 is scissors
    if ((p1 == 1 && p2 == 2)||(p1 == 2 && p2 == 3)||(p1 == 3 && p2 == 1) && PCSCORE<3){
        
        p1win = false;
    }
    else if((p2 == 1 && p1 == 2)||(p2 == 2 && p1 == 3)||(p2 == 3 && p1 == 1)&&P1SCORE<3){
        p1win = true;
    }
    else if((p2 == p1) && P1SCORE<3&&PCSCORE<3){
        p1win="tie";
    }
        return p1win;

 }
  
} */