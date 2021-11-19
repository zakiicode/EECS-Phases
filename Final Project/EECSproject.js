var P1SCORE= 0;
var PCSCORE= 0;
var url = "http://indigo.eecs.yorku.ca:3000/post";

window.onload = function(){
    $('.music').html('<audio controls autoplay loop> <source src="images/op1.mp3"  type="audio/mpeg"> </audio>');
    mainScreen();
}


function mainScreen(){

    var newImg = document.createElement("img");
    $(newImg).attr("id", "Title");
    $(newImg).attr("src", "images/Title.png");
    $("#title").append(newImg);
    var newImg = document.createElement("img");
    $(newImg).attr("id", "cont");
    $(newImg).attr("src", "images/continue.jpg");
    $(newImg).click( function(){ 
        createMenu();
        $(".music").css("visibility", "hidden");
    })
    $("#title").append(newImg);
    


}

/* 
 * Creating the menu 
 * one line to display the code images - "coderow"
 * 8 attempts
 * 1 accept button
 * 8 peg selections
 */
function createMenu(){
    $("#title").html("");

    //for(var i=1; i<=4; i++){
    var s = document.createElement("img");
    $(s).attr("id", "option1");
    $(s).attr("src", "images/option1.jpg");
    $(s).click( function() {
        game_mode(1);
    }); 
    $("#menu").append(s);

    var m = document.createElement("img");
    $(m).attr("id", "option2");
    $(m).attr("src", "images/option2.jpg");
    $(m).click( function() {
        game_mode(2);
    }); 
    $("#menu").append(m);
    
    var t = document.createElement("img");
    $(t).attr("id", "option3");
    $(t).attr("src", "images/option3.jpg");
    $(t).click( function() {
        game_mode(3);
    }); 
    $("#menu").append(t);
  
    var v = document.createElement("img");
    $(v).attr("id", "option4");
    $(v).attr("src", "images/option4.jpg");
    $(v).click( function() {
        game_mode(4);
    }); 
    $("#menu").append(v);
    
   // }
    
    
}

function game_mode(op){

    if(op == 1){
        character_select();
    }
    else if (op == 2){
        character_select();
    }
    else if (op == 3){
        training();
    }
    else if (op == 4){
        tutorial();
    }
}
function character_select(){
    $("#menu").html("");
    var char = document.createElement("img");
    $(char).attr("id", "char");
    $(char).attr("src", "images/charselect.png");
    $("#menu").append(char);
    var luffy = document.createElement("img");
    $(luffy).attr("id", "luffy");
    $(luffy).attr("src", "images/luffyhead.png");
    $(luffy).click( function() {
        var luff = document.createElement("img");
        $(luff).attr("id", "luff");
        $(luff).attr("src", "images/luffy.jpg");
        $("#menu").html("");
        $("#menu").append(luff);
        
        setTimeout(function() { 
            
            $(luff).hide();
            var name = "LUFFY";
            single(name);
        }, 2000 );
    }); 
    $("#menu").append(luffy);

    var zoro = document.createElement("img");
    $(zoro).attr("id", "zoro");
    $(zoro).attr("src", "images/zorohead.png");
    $(zoro).click( function() {
        var zor = document.createElement("img");
        $(zor).attr("id", "zor");
        $(zor).attr("src", "images/zoro.png");
        $("#menu").html("");
        $("#menu").append(zor);
        
        setTimeout(function() { 
            
            $(zor).hide();
            var name = "ZORO";
            single(name);
        }, 2000 );
    }); 
    $("#menu").append(zoro);
    
    var sanji = document.createElement("img");
    $(sanji).attr("id", "sanji");
    $(sanji).attr("src", "images/sanjihead.png");
    $(sanji).click( function() {
        var sanj = document.createElement("img");
        $(sanj).attr("id", "sanj");
        $(sanj).attr("src", "images/sanji.jpg");
        $("#menu").html("");
        $("#menu").append(sanj);
        
        setTimeout(function() { 
            
            $(sanj).hide();
            var name = "SANJI";
            single(name);
        }, 2000 );
    }); 
    $("#menu").append(sanji);
  
    var law = document.createElement("img");
    $(law).attr("id", "law");
    $(law).attr("src", "images/lawhead.png");
    $(law).click( function() {
        var la = document.createElement("img");
        $(la).attr("id", "la");
        $(la).attr("src", "images/law.jpg");
        $("#menu").html("");
        $("#menu").append(la);
        
        setTimeout(function() { 
            
            $(la).hide();
            var name = "LAW";
            single(name);
        }, 2000 );
    }); 
    $("#menu").append(law);
}
function single(name){
    var choose = document.createElement("img");
    $(choose).attr("id", "choose");
    $(choose).attr("src", "images/choose.png");
    $("#menu").append(choose);
    var rock = document.createElement("img");
    $(rock).attr("id", "rock");
    $(rock).attr("src", "images/rock.png");
    $(rock).click( function() {
       var dec= confirm("Are You Sure "+name+"?");
       if(dec == true){
           result(1,name);
       }
     //  else if(dec == false){
       //    console.log("not nice");
       //}
    }); 
    $("#menu").append(rock);
    var paper = document.createElement("img");
    $(paper).attr("id", "paper");
    $(paper).attr("src", "images/paper.png");
    $(paper).click( function() {
        var dec= confirm("Are You Sure "+name+"?");
        if(dec == true){
            result(2,name);
        }
      //  else if(dec == false){
        //    console.log("not nice");
        //}
     });
    $("#menu").append(paper);
    var sciss = document.createElement("img");
    $(sciss).attr("id", "sciss");
    $(sciss).attr("src", "images/scissors.png");
    $(sciss).click( function() {
        var dec= confirm("Are You Sure "+name+"?");
        if(dec == true){
            result(3,name);
        }
      //  else if(dec == false){
        //    console.log("not nice");
        //}
     });
    $("#menu").append(sciss);
    //console.log("single");
}
function multi(){
    $("#menu").html("");

    console.log("multi");

}
function training(){
    $("#menu").html("");

    console.log("training");

}
function tutorial(){
    $("#menu").html("");

    console.log("tutorial");

}

function result(p1,name){
    var pc = Math.floor(Math.random()*3+1);
    //console.log(pc);
    if(PCSCORE >= 3 || P1SCORE >=3){
        game_result(P1SCORE,PCSCORE);
        console.log("win");
    }
    // 1 is rock, 2 is paper, 3 is scissors
    else if ((p1 == 1 && pc == 2)||(p1 == 2 && pc == 3)||(p1 == 3 && pc == 1)&&PCSCORE<3){
        var doffy = document.createElement("img");
        $(doffy).attr("id", "doffy");
        $(doffy).attr("src", "images/doffy.png");
        var pcw = document.createElement("img");
        $(pcw).attr("id", "pcw");
        $(pcw).attr("src", "images/opwin.png");
        $("#menu").html("");
        $("#menu").append(pcw);
        $("#menu").append(doffy);
        

        
        setTimeout(function() {             
            $(doffy).hide();
            $(pcw).hide();
            PCSCORE++;
            console.log(PCSCORE);
            single(name);
        }, 2000 );
         }
    else if((pc == 1 && p1 == 2)||(pc == 2 && p1 == 3)||(pc == 3 && p1 == 1)&&P1SCORE<3){
        var chop = document.createElement("img");
        $(chop).attr("id", "chop");
        $(chop).attr("src", "images/chopper.png");
        var p1w = document.createElement("img");
        $(p1w).attr("id", "p1w");
        $(p1w).attr("src", "images/p1win.png");
        $("#menu").html("");
        $("#menu").append(p1w);
        $("#menu").append(chop);
        
        
        setTimeout(function() { 
            
            $(chop).hide();
            $(p1w).hide();
            P1SCORE++;
            console.log(P1SCORE);
            single(name);
        }, 2000 );
    }
    else if((pc == 1 && p1 == 1)||(pc == 2 && p1 == 2)||(pc == 3 && p1 == 3)&&P1SCORE<3&&PCSCORE<3){
        console.log("tie");
        var chop = document.createElement("img");
        $(chop).attr("id", "chop");
        $(chop).attr("src", "images/goingmerry.png");
        $("#menu").html("");
        $("#menu").append(chop);
        
        
        setTimeout(function() { 
            
            $(chop).hide();
            single(name);
        }, 2000 );
    }
   
}

function game_result(score1,score2){
    if(score1 >= 3){
        var p1win = document.createElement("img");
        $(p1win).attr("id", "p1win");
        $(p1win).attr("src", "images/p1dub.png");
        var op = document.createElement("img");
        $(op).attr("id", "op");
        $(op).attr("src", "images/onepiece.png");
        $("#menu").html("");
        $("#menu").append(p1win);
        $("#menu").append(op);

        
        
        setTimeout(function() { 
            
            $(op).hide();
            $(p1win).hide();
            PCSCORE =0;
            P1SCORE =0;
            mainScreen();
        }, 5000 );
    }
    else if(score2 >= 3){
        var pcwin = document.createElement("img");
        $(pcwin).attr("id", "pcwin");
        $(pcwin).attr("src", "images/opdub.png");
        var op = document.createElement("img");
        $(op).attr("id", "op");
        $(op).attr("src", "images/onepiece.png");
        $("#menu").html("");
        $("#menu").append(pcwin);
        $("#menu").append(op);

        
        
        setTimeout(function() { 
            
            $(op).hide();
            $(pcwin).hide();
            PCSCORE =0;
            P1SCORE =0;
            mainScreen();
        }, 5000 );
    }
}
