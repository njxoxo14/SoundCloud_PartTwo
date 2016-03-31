// ==========================
//
//         Soundmood
//
// ==========================

/////////////////////////////////////check on jsbin
// ==============================
//
//   Initialize Soundcloud API
//
// ==============================

//
// # Initialize the Soundcloud API client with our client ID
//
SC.initialize({
  client_id: 'b43329eb065d6257f4349dc3daf1c426'
});


// ===========================
//
//        Document ready
//
// ===========================
//
// # Document ready
//
// $(document).ready() runs once the page DOM is ready for JavaScript
// to execute. A page can't be manipulated safely until the document is ready.
//
$(document).ready(function() {
  console.clear();
  $("#go").click(function(){
    goClicked();
  });
  $("#random").click(function(){
    randomClicked();
  });
  
  // Add click handlers to 'go' and 'random' buttons here.
});


// ======================================
//
//    Play a song for the user's mood
//
// ======================================

//
// # 'Go' button click handler
//
// 1. Get the user's mood from the form
// 2. Search Souncloud for a song for the mood
// 3. Update jumbotron #moodstatus to display the mood
//
function goClicked() {
  var moodGo = $("#go").attr("How are you feeling?");
  console.log("go Has activated");
  return searchTracks(moodGo);
  // TODO: fill this out
}

//
// # Search soundcloud tracks
//
// 1. Search soundcloud using the Soundcloud API to find a song that
// matches the user's mood.
// 2. Play the song
// 3. Update jumbotron #songtitle to display the song title
//
// * **mood**, the user's mood.
//
function searchTracks(mood) {
   var genreMood = genreForMood(mood);
  SC.get(
    {genre:genreMood},function(tracks){
      var i = Math.floor(Math.random() * tracks.length);
      var track = tracks[i];
      console.log(track.id);
       return playTrack(track.id);
    }
    
    );
  // TODO: fill this out
}

//
// # Play a track
//
// Play a Soundcloud track.
// If there is already a song playing, stop that song first.
//
// Use 'currentSong' to keep track of the song that is playing.
//
// * **trackid**, the ID of the track to play.
//
var currentSong = null; // The song that is currently playing
function playTrack(trackid) {
  if (currentSong != null) {
    SC.stream(trackid, function(sound) {
        sound.pause();
    });
    currentSong = null;
    // TODO: stop the current song
  }
  else{
    SC.stream(trackid, function(sound){
    sound.play();
  });
  currentSong= trackid; 
  }
  // TODO: stream the track based on the given id and update 'currentSong'.
}

//
// # Update Jumbotron
//
// Updates the header text to show the user's mood.
// (Optional: change the jumbotron's color)
//
// * **mood**, the user's mood
//
function updateJumboTron(mood) {
  $('#moodstatus').text('It sounds like you are in a ' + mood +  ' mood!!');
}


// =======================
//
//      Randomization
//
// =======================


//
// # 'Random' button click handler
//
// Pick a mood at random from moodList and find a track for that mood.
//
function randomClicked() {
  var mood =  randomMood();
  return searchTracks(mood);
  // TODO: fill this out
}
function genreForMood(mood){
  if(mood == "happy"){
    return "pop";
  }
  else if(mood == "sad"){
    return "";
  }
  else if(mood=="focused"){
    return "classical";
  }
  else if(mood == "mellow"){
    return "funk";
  }
  else if(mood == "angry"){
    return "heavy rock"; 
  }
  else if(mood == "calm"){
    return "alternative";
  }
  
}



//
// # Random Mood
//
// Returns a random mood from moodList.
//
// TODO: add moods to this list
var moodList = ["happy", "sad", "calm", "broody", "aggressive", "tired", "angry", "focused","depressed","mellow"];
function randomMood() {
  return moodList[Math.floor(Math.random()*10)];
  // TODO: fill this out
}



// ========================
//
//     BONUS CHALLENGES
//
// ========================

//
// 1. Change the color of the jumbotron to fit the given mood.
//
// 2. Add a typeahead to the input field that shows the moods in our mood array.
//

//
// 1. Change jumbotron color!
//
//
// # Change the color of the jumbotron
//
// Update the background-color of the jumbotron using jQuery
//
// * **color**, the color to change to
//
function changeColor(color) {
  $("body").css("background-color",color);
  // TODO: fill this out
}

//
// # Get the mood color
//
// 1. Choose a color for the given mood and return it
// ex. If 'happy', then return '#fffff' (white)
// 2. Make sure to return a default color
//
// * **mood**, the user's mood
//
// * returns a color's hex code
//
function getColor(mood) {
  var color;
  if(mood == "angry"){
    color = " #e60000";
  }
  else if(mood == "sad"){
    color = " #0000e6";
  }
  else if(mood == "calm"){
    color = "#4775d1";
  }
  else if(mood == "broody"){
    color = "#5c5c8a";
    
  }
  else if(mood == "aggressive"){
    color = "#ff3300";
  }
  else if(mood == "tired"){
    color = "#4d4d4d";
  }
  else if(mood == "happy"){
    color = " #ffff00";
  }
  else if(mood == "focused"){
    color = "#6600cc";
  }
  else if(mood == "depressed"){
    color = "#000066";
  }
  else if(mood == "mellow"){
    color = "#e6ac00";
  }
  else{
    color = "#ffffff";
  }
  return color;
  // TODO: fill this out
}


//
// 2. Typeahead
//
// Add a typeahead to the mood input field using the moodList as a source.
//
