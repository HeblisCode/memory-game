# Memory Cat

### [Live View](#)<br>

### How to play <br>

This application puts your memory to the test. You are presented with
multiple images of cats. The images get shuffled every-time they are
clicked. You CAN NOT click on any image more than once or else your
score resets to zero. The main objective is to get the highest score as
possible.<br>

### Features <br>

The app is built using Create React App and fetches the cat images using Pexels API. After each click, the cards are flipped and shuffled while you can't see them. When the game is over the Gameboard component fades away leaving the Gameover component with a transition controlled by the react-spring library.<br>

### Future projects <br>

- Learn more about react-spring
- Hide the gameboard component while the cards are loading after a difficulty change
- Highlight the card clicked in green/red to let the user immediately know if their choice was correct or not
