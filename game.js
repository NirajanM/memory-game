//Icons for the game
var emojis = ["🎉", "😂", "👽", "🎄", "🎁", "🍓", "💐", "🌵",
       "🌴", "🛺", "⛅","🌈", "☂", "🌊", "😀", "🐤", "👩‍💻", "🎃"];

//Shuffling above array
function shuffleIcons(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i+1));               
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }   
  return arr;
}
//var arr =shuffleIcons(emojis);
//console.log(arr)

//Resizing Screen
window.onresize = init;
function init() {
   W = innerWidth;
   H = innerHeight;
   $('body').height(H+"px");
   $('#ol').height(H+"px");
}

//Showing instructions
window.onload = function() {
  $("#ol").html(`<center><div id="inst"><br/><br/><br/><h3>Welcome !</h3>Instructions For Game<br/><br/>
  <li>Make pairs of similiar blocks by flipping them.</li><li>To flip a block you can click on it.</li>
  <li>If two blocks you clicked are not similar, they will be flipped back.</li>
  <p style="font-size:18px;">Click one of the following mode to start the game.</p></div>
  <button onclick="start(3, 4)">3 x 4</button> <button onclick="start(4, 4)" style="w">4 x 4</button>
  <button onclick="start(4, 5)">4 x 5</button> <button onclick="start(5, 6)">5 x 6</button>
  <button onclick="start(6, 6)">6 x 6</button></center>`);

  $("#restartGameButton").click(restartGame);
}

//Starting the game
function start(r,l) {
  //Timer and moves
  min=0, sec=0, moves=0;
  $("#time").html("Time: 00:00");
  $("#moves").html("Moves: 0");
  time = setInterval(function() {
    sec++;
    if(sec==60) {
        min++; sec=0;
    }
    if(sec<10) 
        $("#time").html("Time: 0"+min+":0"+sec);
    else 
      $("#time").html("Time: 0"+min+":"+sec);
  }, 1000);
  rem=r*l/2, noItems=rem;
  mode = r+"x"+l;
  //Generating item array and shuffling it
  var items = [];
  for (var i=0;i<noItems;i++)
      items.push(emojis[i]);
  for (var i=0;i<noItems;i++)
      items.push(emojis[i]);
  var tmp, c, p = items.length;
  if(p) while(--p) {
      c = Math.floor(Math.random() * (p + 1));
      tmp = items[c];
      items[c] = items[p];
      items[p] = tmp;
  }
  
  //Creating table
  $("table").html("");
  var n=1;
  for (var i = 1;i<=r;i++) {
      $("table").append("<tr>");
      for (var j = 1;j<=l;j++) {
         $("table").append(`<td id='${n}' onclick="change(${n})"><div class='inner'><div class='front'></div><div class='back'><p>${items[n-1]}</p></div></div></td>`);
         n++;
       }
       $("table").append("</tr>");
  }
  
  //Hiding instructions screen
  $("#ol").fadeOut(500);
}


//Function for flipping blocks
function change(x) {
  //Variables
  
  //Dont flip for these conditions
  
  //Flip

}

//Function for hide the instructions
function hideInstructions(){
  $("#ol").hide()
}

//Function for show the instructions
function showInstructions(){
  $("#ol").show()
}

//Function for hide the instructions
function toggleInstructions(){
  $("#ol").toggle()
}

//Function for restart game
function restartGame(){
  //Show instructions and game modes again
  showInstructions()
  //Hide the initGameButton
  $("#restartGameButton").css("visibility","hidden")
}

//Function for showing restart button
function showRestartButton(){
  $("#restartGameButton").css("visibility","visible")
}




