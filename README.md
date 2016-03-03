# Project: SoundMood

## Scope
You have just been hired as a consultant for Sound Inc. A brand new streaming music service.
You have been tasked to create a webapp that can play songs based on how the user is feeling.
Your manager has given you a deadline of one week to complete this project and has provided you with a wireframe for the webapp.

## Project Criteria
Your Manager has laid out the following requirements for the project:

* This project must use the SoundCloud API
* The user must be able to input an array of moods and hear a song that reflects their mood
* The song title and artist must appear while the song is playing
* There must be a random button that will play a song based on a randomly chosen mood

## Learning Objectives
By the end of this project the employee will be able to...

* interpret API documentation
* use basic API calls

## References/Tools

* [SoundCloud API Documentation](https://developers.soundcloud.com/docs/api/guide)
* [https://www.youtube.com/watch?v=B9vPoCOP7oY](https://www.youtube.com/watch?v=B9vPoCOP7oY)

## Vocabulary

* API (Application Program Interface)
* Click Handler
* Documentation

***

## Instructions

You will notice that there are comments inside the script.js file that provide instructions for how components of this project should be made.


#### In order to make Soundmood functional you will need to complete the tasks below:

### 1) Fork this repo into your own CLoud9 workspace

### 2) Initialize the SoundCloud API client

1. Look up your 'client_id' in your old SoundCloud project, or...
2. Go to the [SoundCloud API Documentation](https://developers.soundcloud.com/docs/api/guide)
3. Find **Your Apps** in the Soundcloud API documentation right side navigation
4. Get your API token!

### 3) Play a track

Play a track using the SoundCloud API (Reading the Soundcloud documentation will help you figure out how to play a track)

1. Read the SoundCloud documentation to figure out how to **stream** (or play) a track
  ```
  HTTP API GUIDE -> Playing Sounds ->  Streaming sounds
  ```
2. Use `SC.stream` to play a track
  * Hint: you need to know something about the track, e.g. what's '12345' below?
  ```
  SC.stream('tracks/12345', function(player) {
    player.play(); // Starts to play the sound
    player.pause(); // Pauses the player
    player.seek(time); // Seeks to the position in the song (in milliseconds)
    player.currentTime(); // Returns the current position (in milliseconds)
    player.setVolume(volume); // Sets the volume (from 0 to 1)
    player.getVolume(); // Returns the current volume
    player.on(event, handler); // Subscribes the handler to the given event
  });
  ```
  * Read more here: [SoundCloud Player API](https://developers.soundcloud.com/docs/api/sdks#player)

### 4) Add click handlers

Add a click handler for the `#go` button -- make the `#go` button DO something by adding a click handler!

### 5) Find a track based on the user's mood and play it

Find a track based on the user’s mood and play it -- make the click handler play a song based on the user's input!

1. **Fill out the `goClicked()` function! It should:**
  1. Get the user's input from the `#mood` field
  2. Call `searchTracks(mood)`.
    * Hint: there are helper methods in `script.js` that you can use!
2. **Fill out `searchTracks(mood)`**
  1. Look at your old code and/or read the API documentation to find `SC.get`
  2. Fill out `searchTracks()` to find the track for the user's mood using `SC.get`
  4. Make sure to `console.log()` the response from the API so you can see what it returned!
  3. Get the track's `id`
  4. Call `playTrack(id)`
  5. BONUS: Update jumbotron `#songtitle` to display the song title
3. **Fill out `playTrack()`**
  1. Make sure to keep track of the song you are playing by storing it in `currentSong`
  2. Play the track for the given `id`

### 6) Randomization: Make the random button work!

1. Fill out the `moodList` array with 10 moods/emotions
  * ex. 'happy', 'sad'
2. Add `#random` button click handler
3. Fill out `randomClicked()` + `randomMood()`

## Bonus Criteria
Your Manager has offered a stipend a $500 for each of the bonus requirements listed below:

* Change the color of the jumbotron to match the user's mood
* Add Bootstrap typeahead to the `#mood` input field

## How to Submit
The final code for this project must be submitted via our exit slip.
