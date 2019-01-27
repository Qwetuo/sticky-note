# sticky-note

Getting Started
 ------
 Amendments branch is deployed on: [https://new-sticky-note.netlify.com/](https://new-sticky-note.netlify.com/)
 Master branch is deployed on: [https://sticky-note.netlify.com/](https://sticky-note.netlify.com/)
 
Installing / Running AMENDMENTS branch locally
* `git clone -b amendments https://github.com/Qwetuo/sticky-note`
* open `index.html` file in your browser

Installing / Running MASTER branch locally
* `git clone https://github.com/Qwetuo/sticky-note`
* open `index.html` file in your browser

Requirements
 ------
 ### Functionality:

 * Edit the title and content of the notes
    - created a yellow sticky note with 2 textarea for user to input title and content
 * Add new notes
    - also added a button that appends a new sticky note
 * Delete notes
    - at the top right of each note is a button that user can click to remove the particular note from the page
 * Save all his notes
    - did not have enough time to enable saving of notes. Notes created will not be around once page is closed.
    - UPDATED on amendments branch: user can click on the save button and notes will be saved in browser's localStorage and be rendered whenever they open up the app using the same browser.
 * Filter notes on title thanks to a search bar
    - added a search bar with two buttons. First, the search button, which takes the value from the search input box and filter for (note) titles with a match (case-insensitive). Second, the undo button, which undo any search and shows all the notes again.

  ### Others:

  * Built using only vanilla JS, HTML and CSS
  * Make a responsive view
    - works on small screens but view not optimized
    - UPDATED on amendments branch: have updated css to provide clearer view on smaller devices.
  * Make a cross-browsers application
    - tested to be working on Chrome and Safari
    - not working on Internet Explorer (did not hit me that IE does not support ES6 syntax)
    - UPDATED on amendments branch: made fully functional on IE11, except, saving on IE11 does not work when app is accessed through local filesystem.
  * Write clean code
  * Use git
  * Write short and clean documentation.

Author
 ------
 Chew Min Zhuang \
 Master branch: Coded in about 3 hours
 Amendments branch: extra 2 to 3 hours