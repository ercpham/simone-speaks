# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Eric Pham**

Time spent: **7** hours spent in total

Link to project: (https://glitch.com/edit/#!/memory-game-ericpham)

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [ ] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Change the formatting to make the app look like the original game
- [x] Added a progress ring to show time remaining
- [x] Removed outline and replace focus for accessibility
- [x] Use Google Fonts

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![Walkthrough](https://cdn.glitch.com/7b700e19-d08c-4465-a2df-63e6685f2e20%2Fsimone-says.gif?v=1616533567986)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   
   I used various StackOverflow pages in debugging parts of my code.
   I referred to the W3Schools for reference on HTML/CSS.
   For the progress circle, I referred to this site: https://css-tricks.com/building-progress-ring-quickly/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   
   A challenge that I encountered when creating this submission was formatting the game the way I wanted to.
   I tried to mimic the "Simon" game as much as possible, and this proved to be challenging, and I found myself
   getting stuck on centering the inner circle and the buttons.
   
   I overcame it by thinking through these questions:
   
   **What exactly is the problem?**
   
   The problem was that the buttons were slightly off of the center of the outer circle, 
   and the inner circle was completely in one corner
   
   **What do I think I need to change?**
   
   It looks like I might need to change position or margin
   
   **What does it look like after making changes?**
   
   After changing the position, I'm able to kind of line it up with the center, 
   but it's not perfect and changing just the numbers doesn't sound 
   like a good idea for maintaining the code
   
   I feel like margin would be the better bet, but I'm not sure what exactly to change about the margin.
   I was able to figure this out by referring to StackOverflow pages, as well as W3Schools references 
   for centering items, and after some time playing around, I was able to get it to work.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   
   **How is HTML, CSS, and Javascript written and documented in the real workplace?**
   
   I'm able to create something that works, but I understand that code is much more than 
   what the outside looks like. The code itself needs to be maintained. I tried to be consistent,
   but I'm unsure about how the code itself should look
   
   **What exactly goes on behind the scenes?**
   
   I'm able to write code that creates the output I want, but I don't really have a deep understanding
   about what really is going on. How does the computer go from code to application?
   
   **Should I spend time getting good at just front-end or back-end, or is it better to have fullstack flexibility, though with less expertise?**
   
   **How can I make web development a career?**

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   
   I would make the app more accessible. Right now, you can tab through the buttons, but 
   mouse clicks are the only way to actually active the buttons. A blind person would not
   be able to play the app as it is right now, so more features need to be added to accomodate
   for that.
   
   I would spend time making the code look nice and maintainable. I tried to take out as 
   many magic numbers from the code as possible, but I know there's some stray ones here 
   and there, and it would take time to carefully look through all the code.
   
   I would add ways to let the user change the speed and time, and pattern length. 
   Right now they are just determined by constants in the code. 
   
   I would allow more than 4 buttons. After formatting the 4 current buttons, I quickly
   saw how difficult it would be to add more buttons while keep everything circular. 
   The game logic is in a place to deal with it, but I'm not sure how I would add more buttons
   cleanly.

## License

    Copyright Eric Pham

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
