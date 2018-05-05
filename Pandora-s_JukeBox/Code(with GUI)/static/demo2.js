(function() {
    var API_URL = '/api/v1.0/';
    //var bands = [];

    /*var bandSelect = document.getElementById('bandSelect');
    var userSelect = document.getElementById('userSelect');
    var bandList = document.getElementById('bandList');
    var userList = document.getElementById('userList');
    var userInput = document.getElementById('userInput');
    var userResp = document.getElementById('userResp');
    */
    var getRecommendationsBtn=document.getElementById('getRecommendationsBtn');
    var playBtn=document.getElementById('playBtn');
    var stopBtn=document.getElementById('stopBtn');
    var likeBtn=document.getElementById('likeBtn');
    var dislikeBtn=document.getElementById('dislikeBtn');
    var playBtn=document.getElementById('playBtn1');
    var stopBtn=document.getElementById('stopBtn1');
    var likeBtn=document.getElementById('likeBtn1');
    var dislikeBtn=document.getElementById('dislikeBtn1');
    var playBtn=document.getElementById('playBtn2');
    var stopBtn=document.getElementById('stopBtn2');
    var likeBtn=document.getElementById('likeBtn2');
    var dislikeBtn=document.getElementById('dislikeBtn2');
    var playBtn=document.getElementById('playBtn3');
    var stopBtn=document.getElementById('stopBtn3');
    var likeBtn=document.getElementById('likeBtn3');
    var dislikeBtn=document.getElementById('dislikeBtn3');
    var playBtn=document.getElementById('playBtn4');
    var stopBtn=document.getElementById('stopBtn4');
    var likeBtn=document.getElementById('likeBtn4');
    var dislikeBtn=document.getElementById('dislikeBtn4');
    var playBtn=document.getElementById('playBtn5');
    var stopBtn=document.getElementById('stopBtn5');
    var likeBtn=document.getElementById('likeBtn5');
    var dislikeBtn=document.getElementById('dislikeBtn5');
    var status_flag=new String(string);
    var sf1=new String(string);    
    var sf2=new String(string);
    var sf3=new String(string);
    var sf4=new String(string);
    var sf5=new String(string);
    var sf6=new String(string);

    /*var getSimilarBtn = document.getElementById('getSimilarBtn');
    var addUserBtn = document.getElementById('addUserBtn');
    var getUserForm = document.getElementById('getUserForm');*/

    getRecommendationsBtn.style.position='absolute';
    getRecommendationsBtn.style.top = 500 + 'px';
    getRecommendationsBtn.style.left = 550 + 'px';
    getRecommendationsBtn.style.width = 180+'px';
    getRecommendationsBtn.style.height = 50+'px';
    getRecommendationsBtn.style.fontSize=15+'px';
   var text = document.createElement('div');
    text.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
    text.style.width = 100;
    text.style.height = 100;
    text.style.color="white";
    text.style.fontSize=20+'px';
    //text2.style.backgroundColor = "blue";

    text.innerHTML = "1)";
    text.style.top = 150 + 'px';
    text.style.left = 130 + 'px';
    document.body.appendChild(text);

    var text1 = document.createElement('div');
    text1.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
    text1.style.width = 100;
    text1.style.height = 100;
    text1.style.color="white";
    text1.style.fontSize=20+'px';
    //text2.style.backgroundColor = "blue";

    text1.innerHTML = "2)";
    text1.style.top = 225 + 'px';
    text1.style.left = 130 + 'px';
    document.body.appendChild(text1);

    var text2 = document.createElement('div');
    text2.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
    text2.style.width = 100;
    text2.style.height = 100;
    text2.style.color="white";
    text2.style.fontSize=20+'px';
    //text2.style.backgroundColor = "blue";

    text2.innerHTML = "3)";
    text2.style.top = 300 + 'px';
    text2.style.left = 130 + 'px';
    document.body.appendChild(text2);

    var text3 = document.createElement('div');
    text3.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
    text3.style.width = 100;
    text3.style.height = 100;
    text3.style.color="white";
    text3.style.fontSize=20+'px';
    //text2.style.backgroundColor = "blue";

    text3.innerHTML = "4)";
    text3.style.top = 150 + 'px';
    text3.style.left = 650 + 'px';
    document.body.appendChild(text3);

    var text4 = document.createElement('div');
    text4.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
    text4.style.width = 100;
    text4.style.height = 100;
    text4.style.color="white";
    text4.style.fontSize=20+'px';
    //text2.style.backgroundColor = "blue";

    text4.innerHTML = "5)";
    text4.style.top = 225 + 'px';
    text4.style.left = 650 + 'px';
    document.body.appendChild(text4);

    var text5 = document.createElement('div');
    text5.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
    text5.style.width = 100;
    text5.style.height = 100;
    text5.style.color="white";
    text5.style.fontSize=20+'px';
    //text2.style.backgroundColor = "blue";

    text5.innerHTML = "6)";
    text5.style.top = 300 + 'px';
    text5.style.left = 700 + 'px';
    document.body.appendChild(text5);

 /* var bt = document.createElement('div');
   bt.playBtn.style.position = 'absolute';
    playBtnstyle.width = 100;
    bt.playBtn.style.height = 100;
    //text7.style.fontSize=20+'px';
    //text2.style.backgroundColor = "blue";

    //text7.innerHTML = "HELLO";
    bt.playBtn.style.top = 130 + 'px';
    bt.playBtn.style.left = 130 + 'px';
    document.body.appendChild(playBtn);
    document.body.appendChild(bt);*/
/*var bt = document.createElement('div');
bt.style.position = 'absolute';
bt.innerHTML='<input type='button' id='playBtn' class="btn btn-lg btn-default" value='Play'>';
  //playBtn = bt.createElement("button");
//playBtn.innerHTML = "Play";
bt.style.top = 130 + 'px';
    bt.style.left = 130 + 'px';
document.body.appendChild(bt);
*/

playBtn = document.createElement("button");
playBtn.innerHTML = "Play";
stopBtn = document.createElement("button");
stopBtn.innerHTML = "Stop";
likeBtn = document.createElement("button");
likeBtn.innerHTML = "Like";

dislikeBtn = document.createElement("button");
dislikeBtn.innerHTML = "Dislike";

playBtn1 = document.createElement("button");
playBtn1.innerHTML = "Play";
stopBtn1 = document.createElement("button");
stopBtn1.innerHTML = "Stop";
likeBtn1 = document.createElement("button");
likeBtn1.innerHTML = "Like";
dislikeBtn1 = document.createElement("button");
dislikeBtn1.innerHTML = "Dislike";

playBtn2 = document.createElement("button");
playBtn2.innerHTML = "Play";
stopBtn2 = document.createElement("button");
stopBtn2.innerHTML = "Stop";
likeBtn2 = document.createElement("button");
likeBtn2.innerHTML = "Like";
dislikeBtn2 = document.createElement("button");
dislikeBtn2.innerHTML = "Dislike";

playBtn3 = document.createElement("button");
playBtn3.innerHTML = "Play";
stopBtn3 = document.createElement("button");
stopBtn3.innerHTML = "Stop";
likeBtn3 = document.createElement("button");
likeBtn3.innerHTML = "Like";
dislikeBtn3 = document.createElement("button");
dislikeBtn3.innerHTML = "Dislike";

playBtn4 = document.createElement("button");
playBtn4.innerHTML = "Play";
stopBtn4 = document.createElement("button");
stopBtn4.innerHTML = "Stop";
likeBtn4 = document.createElement("button");
likeBtn4.innerHTML = "Like";
dislikeBtn4 = document.createElement("button");
dislikeBtn4.innerHTML = "Dislike";

playBtn5 = document.createElement("button");
playBtn5.innerHTML = "Play";
stopBtn5 = document.createElement("button");
stopBtn5.innerHTML = "Stop";
likeBtn5 = document.createElement("button");
likeBtn5.innerHTML = "Like";
dislikeBtn5 = document.createElement("button");
dislikeBtn5.innerHTML = "Dislike";

getRecommendationsBtn.addEventListener ("click", function() {
//-----------------------------------------------
playBtn.innerHTML = "Play";
playBtn.style.position = 'absolute';
playBtn.style.width = 100;
playBtn.style.height = 100;
playBtn.style.top=150 + 'px';
playBtn.style.left=400 + 'px';

document.body.appendChild(playBtn);

likeBtn.innerHTML = "Like";
likeBtn.style.position = 'absolute';
likeBtn.style.width = 100;
likeBtn.style.height = 100;
likeBtn.style.top=150 + 'px';
likeBtn.style.left=450 + 'px';
document.body.appendChild(likeBtn);
likeBtn.disabled=false;

dislikeBtn.innerHTML = "Dislike";
dislikeBtn.style.position = 'absolute';
dislikeBtn.style.width = 100;
dislikeBtn.style.height = 100;
dislikeBtn.style.top=150 + 'px';
dislikeBtn.style.left=500 + 'px';

dislikeBtn.disabled=false;
document.body.appendChild(dislikeBtn);
//-----------------------------------------------

//-----------------------------------------------
playBtn1.innerHTML = "Play";
playBtn1.style.position = 'absolute';
playBtn1.style.width = 100;
playBtn1.style.height = 100;
playBtn1.style.top=225 + 'px';
playBtn1.style.left=400 + 'px';

document.body.appendChild(playBtn1);

likeBtn1.innerHTML = "Like";
likeBtn1.style.position = 'absolute';
likeBtn1.style.width = 100;
likeBtn1.style.height = 100;
likeBtn1.style.top=225 + 'px';
likeBtn1.style.left=450 + 'px';
document.body.appendChild(likeBtn1);
likeBtn1.disabled=false;

dislikeBtn1.innerHTML = "Dislike";
dislikeBtn1.style.position = 'absolute';
dislikeBtn1.style.width = 100;
dislikeBtn1.style.height = 100;
dislikeBtn1.style.top=225 + 'px';
dislikeBtn1.style.left=500 + 'px';

dislikeBtn1.disabled=false;
document.body.appendChild(dislikeBtn1);
//-----------------------------------------------

//-----------------------------------------------
playBtn2.innerHTML = "Play";
playBtn2.style.position = 'absolute';
playBtn2.style.width = 100;
playBtn2.style.height = 100;
playBtn2.style.top=300 + 'px';
playBtn2.style.left=400 + 'px';

document.body.appendChild(playBtn2);

likeBtn2.innerHTML = "Like";
likeBtn2.style.position = 'absolute';
likeBtn2.style.width = 100;
likeBtn2.style.height = 100;
likeBtn2.style.top=300 + 'px';
likeBtn2.style.left=450 + 'px';
document.body.appendChild(likeBtn2);
likeBtn2.disabled=false;

dislikeBtn2.innerHTML = "Dislike";
dislikeBtn2.style.position = 'absolute';
dislikeBtn2.style.width = 100;
dislikeBtn2.style.height = 100;
dislikeBtn2.style.top=300 + 'px';
dislikeBtn2.style.left=500 + 'px';

dislikeBtn2.disabled=false;
document.body.appendChild(dislikeBtn2);
//-----------------------------------------------


//-----------------------------------------------
playBtn3.innerHTML = "Play";
playBtn3.style.position = 'absolute';
playBtn3.style.width = 100;
playBtn3.style.height = 100;
playBtn3.style.top=150 + 'px';
playBtn3.style.left=950 + 'px';

document.body.appendChild(playBtn3);

likeBtn3.innerHTML = "Like";
likeBtn3.style.position = 'absolute';
likeBtn3.style.width = 100;
likeBtn3.style.height = 100;
likeBtn3.style.top=150 + 'px';
likeBtn3.style.left=1000 + 'px';
document.body.appendChild(likeBtn3);
likeBtn3.disabled=false;

dislikeBtn3.innerHTML = "Dislike";
dislikeBtn3.style.position = 'absolute';
dislikeBtn3.style.width = 100;
dislikeBtn3.style.height = 100;
dislikeBtn3.style.top=150 + 'px';
dislikeBtn3.style.left=1050 + 'px';

dislikeBtn3.disabled=false;
document.body.appendChild(dislikeBtn3);
//-----------------------------------------------

//-----------------------------------------------
playBtn4.innerHTML = "Play";
playBtn4.style.position = 'absolute';
playBtn4.style.width = 100;
playBtn4.style.height = 100;
playBtn4.style.top=225 + 'px';
playBtn4.style.left=950 + 'px';

document.body.appendChild(playBtn4);

likeBtn4.innerHTML = "Like";
likeBtn4.style.position = 'absolute';
likeBtn4.style.width = 100;
likeBtn4.style.height = 100;
likeBtn4.style.top=225 + 'px';
likeBtn4.style.left=1000 + 'px';
document.body.appendChild(likeBtn4);
likeBtn4.disabled=false;

dislikeBtn4.innerHTML = "Dislike";
dislikeBtn4.style.position = 'absolute';
dislikeBtn4.style.width = 100;
dislikeBtn4.style.height = 100;
dislikeBtn4.style.top=225 + 'px';
dislikeBtn4.style.left=1050 + 'px';

dislikeBtn4.disabled=false;
document.body.appendChild(dislikeBtn4);
//-----------------------------------------------

//-----------------------------------------------
playBtn5.innerHTML = "Play";
playBtn5.style.position = 'absolute';
playBtn5.style.width = 100;
playBtn5.style.height = 100;
playBtn5.style.top=300 + 'px';
playBtn5.style.left=950 + 'px';

document.body.appendChild(playBtn5);

likeBtn5.innerHTML = "Like";
likeBtn5.style.position = 'absolute';
likeBtn5.style.width = 100;
likeBtn5.style.height = 100;
likeBtn5.style.top=300 + 'px';
likeBtn5.style.left=1000 + 'px';
document.body.appendChild(likeBtn5);
likeBtn5.disabled=false;

dislikeBtn5.innerHTML = "Dislike";
dislikeBtn5.style.position = 'absolute';
dislikeBtn5.style.width = 100;
dislikeBtn5.style.height = 100;
dislikeBtn5.style.top=300 + 'px';
dislikeBtn5.style.left=1050 + 'px';

dislikeBtn5.disabled=false;
document.body.appendChild(dislikeBtn5);
//-----------------------------------------------
});
//********************************************
var t=true;
playBtn.addEventListener ("click", function() {
   if(t==true){
playBtn.innerHTML = "Stop";
}
else{
    playBtn.innerHTML="Play";
}
t=!t;
});
if(!t){
	sf1.concat("P");	
}
//********************************************
var t1=true;
playBtn1.addEventListener ("click", function() {
   if(t1==true){
playBtn1.innerHTML = "Stop";
}
else{
    playBtn1.innerHTML="Play";
}
t1=!t1;
});
if(!t1){
	sf2.concat("P");	
}

//********************************************
var t2=true;
playBtn2.addEventListener ("click", function() {
   if(t2==true){
playBtn2.innerHTML = "Stop";
}
else{
    playBtn2.innerHTML="Play";
}
t2=!t2;
});
if(!t2){
	sf3.concat("P");	
}

//********************************************
var t3=true;
playBtn3.addEventListener ("click", function() {
   if(t3==true){
playBtn3.innerHTML = "Stop";
}
else{
    playBtn3.innerHTML="Play";
}
t3=!t3;
});
if(!t3){
	sf4.concat("P");	
}

//********************************************
var t4=true;
playBtn4.addEventListener ("click", function() {
   if(t4==true){
playBtn4.innerHTML = "Stop";
}
else{
    playBtn4.innerHTML="Play";
}
t4=!t4;
});
if(!t4){
	sf5.concat("P");	
}

//********************************************
var t5=true;
playBtn5.addEventListener ("click", function() {
   if(t5==true){
playBtn5.innerHTML = "Stop";
}
else{
    playBtn5.innerHTML="Play";
}
t5=!t5;
});
if(!t5){
	sf6.concat("P");	
}
//*********************************************
likeBtn.addEventListener ("click", function() {
    //if()
   likeBtn.innerHTML="Liked";
   dislikeBtn.disabled=true;
   sf1.concat("L");
   //document.getElementById('dislikeBtn').disabled = true;
});

dislikeBtn.addEventListener ("click", function() {
   dislikeBtn.innerHTML="Disliked";
   likeBtn.disabled = true;
   sf1.concat("D");
});

//*********************************************
likeBtn1.addEventListener ("click", function() {
    //if()
   likeBtn1.innerHTML="Liked";
   dislikeBtn1.disabled=true;
   //document.getElementById('dislikeBtn').disabled = true;
    sf2.concat("L");
});

dislikeBtn1.addEventListener ("click", function() {
   dislikeBtn1.innerHTML="Disliked";
   likeBtn1.disabled = true;
    sf2.concat("D");
});
//*********************************************
likeBtn2.addEventListener ("click", function() {
    //if()
   likeBtn2.innerHTML="Liked";
   dislikeBtn2.disabled=true;
    sf3.concat("L");
   //document.getElementById('dislikeBtn').disabled = true;
});

dislikeBtn2.addEventListener ("click", function() {
   dislikeBtn2.innerHTML="Disliked";
   likeBtn2.disabled = true;
    sf3.concat("D");
});
//*********************************************
likeBtn3.addEventListener ("click", function() {
    //if()
   likeBtn3.innerHTML="Liked";
   dislikeBtn3.disabled=true;
    sf4.concat("L");
   //document.getElementById('dislikeBtn').disabled = true;
});

dislikeBtn3.addEventListener ("click", function() {
   dislikeBtn3.innerHTML="Disliked";
   likeBtn3.disabled = true;
    sf4.concat("D");
});

//*********************************************
likeBtn4.addEventListener ("click", function() {
    //if()
   likeBtn4.innerHTML="Liked";
   dislikeBtn4.disabled=true;
    sf5.concat("L");
   //document.getElementById('dislikeBtn').disabled = true;
});

dislikeBtn4.addEventListener ("click", function() {
   dislikeBtn4.innerHTML="Disliked";
   likeBtn4.disabled = true;
    sf5.concat("D");
});

//*********************************************
likeBtn5.addEventListener ("click", function() {
    //if()
   likeBtn5.innerHTML="Liked";
   dislikeBtn5.disabled=true;
    sf6.concat("L");
   //document.getElementById('dislikeBtn').disabled = true;
});

dislikeBtn5.addEventListener ("click", function() {
   dislikeBtn5.innerHTML="Disliked";
   likeBtn5.disabled = true;
    sf6.concat("D");
});
    var init = function() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', API_URL + 'band/');
        xhr.addEventListener('load', function() {
            bands = JSON.parse(this.responseText).bands;
            console.log('Received response');

            bands.forEach(function(band) {
                var optionElem1 = document.createElement('option');
                var optionElem2 = document.createElement('option');
                optionElem1.textContent = optionElem2.textContent = band;

                bandSelect.appendChild(optionElem1);
                userSelect.appendChild(optionElem2);

            });
            $('.selectpicker').selectpicker('refresh');
        });
        xhr.send();

        console.log('Request sent');
    };

    var clearChildren = function(nodeElem) {
        while (nodeElem.children.length > 0) {
            nodeElem.removeChild(nodeElem.children[0]);
        }
    };

    var getRecommendationsBtn = function() {
        var band = bandSelect.selectedOptions[0].textContent;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', API_URL + 'band/' + band);
        xhr.addEventListener('load', function() {
            var respObj = JSON.parse(this.responseText);
            if (respObj.error) {
                console.error(respObj.error);
                return;
            }
           // add(playBtn);
            var similarBands = respObj.similar;
            console.log('Received similar bands');
            clearChildren(bandList);
            similarBands.slice(0, 5).forEach(function(recBand) {
                var listItem = document.createElement('li');
                listItem.textContent = recBand;
                listItem.className = 'list-group-item';

                bandList.appendChild(listItem);
            });
            $('.selectpicker').selectpicker('refresh');
        });
        xhr.send();
    };

    var getUserRecs = function(e) {
        var id = parseInt(userInput.value, 10);
        var xhr = new XMLHttpRequest();
        xhr.open('GET', API_URL + 'user/' + id);
        xhr.addEventListener('load', function() {
            var respObj = JSON.parse(this.responseText);
            if (respObj.error) {
                console.error(respObj.error);
                return;
            }
            var similarBands = respObj.recommendations;
            console.log('Received similar bands');
            clearChildren(userList);
            similarBands.slice(0, 5).forEach(function(recBand) {
                var listItem = document.createElement('li');
                listItem.textContent = recBand;
                listItem.className = 'list-group-item';

                userList.appendChild(listItem);
            });
            $('.selectpicker').selectpicker('refresh');
        });
        xhr.send();

        e.preventDefault();
        return false;
    };

    var addUser = function() {
        var userLikes = [].slice.apply(userSelect.selectedOptions).map(function(elem) {
            return elem.textContent;
        });
        var obj = {
            likes: userLikes
        };

        var xhr = new XMLHttpRequest();
        xhr.open('POST', API_URL + 'user/');
        xhr.addEventListener('load', function() {
            var respObj = JSON.parse(this.responseText);
            if (respObj.error) {
                console.error(respObj.error);
                return;
            }
            userResp.textContent = 'User added. Your ID is: ' + respObj.user_id;
        });

        xhr.send(JSON.stringify(obj));
    };

    window.addEventListener('load', init);
    getRecommendationsBtn.addEventListener('click', getRecommendationsBtn);
    //getUserForm.addEventListener('submit', getUserRecs);
    //addUserBtn.addEventListener('click', addUser);
})();
