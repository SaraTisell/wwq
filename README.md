# WWQ - World Wide Quiz

World Wide Quiz or WWQ for short is a webapplication build with Javascript where the user will try their knowlegdge by answering 10 different questions of mixed genre. 

![Mockup](documents/readme_img/wwq-mockup.webp)

[WWQ live link](https://saratisell.github.io/wwq/)

## Features

### Site wide

#### Navigation

* Header
  * WWQ logo will contain a link to home page so the user easily can navigate back home from all pages.

* Body Homepage
  * The user will be able to open up a modal that will show the rules for the quiz.
  * A link to the quiz page will be placed under the rules button.

* Body Quizpage
  * When the user has completed the quiz links will be shown to give the user the opportunity to play again or go back to the home page.

* Footer 
  * The footer will contain social media links that will open in a new tab when clicked by user.
  * By open the link in a new tab will hinder the user to leave the WWQ site when exploring social media.

* Favicon
  * A favicon with an image of the erath from the logo will be added so the user will recognise the site in the tab.

 ![Favicon](documents/readme_img/world-wide-quiz-favicon.webp)

* 404 page
  * A custom designed 404 page to match the rest of the site will be implemeted.
  * A link back to the home page will be displayed on the 404 page so the user easily can navigate back to home page.

  ![404-page](documents/readme_img/wwq-404page.webp)

##### Home Page

*Content* 
* Welcome text and short description about the site.
* Button for opening the rules in an modal.
  * The user will be challenged with 10 different questions, where each question has three options and one correct answer.
  * The user has 10 seconds to answer each question before it self moving to the next question and no score will be collected.
  * If the user select the correct answer the score will be increased with 1 point.
  * If the user select the wrong answer the score will be decreased with 1 point.
  * The total score will be displayed after the quiz is completed.
* Link to go to the quiz page and start the quiz directly.
  

![WWQ-homepage](documents/readme_img/wwq-homepage.webp)

##### Quiz Page

*Content*
* Timer
  * Will start direct when a question is displayed and count down from 10.
  * Will make the quiz to move on to the next question when counted down to 0.
  * If the quiz is completed the results will be displayed.
* Question heding
  * Will show the user which question they are at.
* Question
  * The questions will be of mixed genre and displayed for the user.
* Options
  * Each question will have three options the user can choose from. only ONE is correct.
  * When one option is collected, the user will be moved to the next question.
  * If the user have answered all 10 questions and the quiz is completed the results will be displayed.


![Quiz page](documents/readme_img/wwq-quizpage.webp)

###### Results

*Content*
* After the quiz is completed the results will be displayed for the user.
* The users total score will be displayed.
* The user can either play the quiz again by clicking the link that will load the quiz page and the quiz will start over.
* Or click the link back to the home page.

![Results](documents/readme_img/wwq-results.webp)

### Features left to implement

* Function to save and display highscore from all users.
* Possibility for the user to create a username and save their quiz history and score.
* Add function to display which question the user answered corrct/wrong on the result section.
* Implement more questions.

## Design

### Wireframe
*As the site were build it come clear that the design could be improved to make it more user friendly.*

-Home page 
![Wireframe desktop home page](documents/readme_img/wireframe-wwq-homepage-desktop.webp)
![Wireframe tablet home page](documents/readme_img/wireframe-wwq-homepage-tablet.webp)
![Wireframe mobile home page](documents/readme_img/wireframe-wwq-homepage-mobile.webp)

-Quiz page
![Wireframe desktop quiz page](documents/readme_img/wireframe-wwq-gamepage-desktop.webp)
![Wireframe tablet quiz page](documents/readme_img/wireframe-wwq-gamepage-tablet.webp)
![Wireframe mobile quiz page](documents/readme_img/wireframe-wwq-gamepage-mobile.webp)

### Colorscheme

![WWQ colorscheme](documents/readme_img/world-wide-quiz-color-scheme.webp)

### Typography

Sans-serif font is used due to its advantage for accessibility and imported from Google fonts
* Prompt - For headings and content

### Responsiveness

* The WWQ site will be fully responsive and can be used on different devices and screen sizes.

## Technologies Used

* HTML
  * The main language to develope the structure of the website.
* CSS
  * Styling for the website was written with cusom CSS in seperate file style.css.
* Javascript
 * The functions were written with javascript. Functions for gquiz page were written in a seperate file. Functions for modal on home page were implemented by script tag at the bottom of the body.
* Codeanywhere
  * IDE used to develope website.
* Gitpod
  * IDE Used to develope website.
* Git
  * Used to push and commit code.
* GitHub
  * To source code and deploy using Git pages.
* Balsamiq
  * Used to design wireframes.
* Canva
  * Used to design logo, favicon and make colorscheme.
* Favicon.io
  * Used to create favicon file
* Pixelied.com
  * Used to convert png images to webp.
* Font Awesome
  * Used to implement icons.
* Google Fonts
  * Used to import fonts

### Languages
* HTML
  * To develope website structure.
* CSS
  * To give the site cusom styling.
* Javascript
  * To develope functions to the site.

## Testing

## Deployment
The site was deployed to GitHub pges thorugh these steps:
* In the GitHub repository, navigate to the Settings tab.
* From the menu on left select 'Pages'
* From the source section drop-down menu, select the Main Branch
* Click 'Save'
* A live link to the webpage will be found under environments

The live link is found here: https://saratisell.github.io/wwq/










## Credits
https://www.ef.com/wwen/blog/language/questions-virtual-pub-quiz/
For quiz questions content

https://www.shecodes.io/athena/52336-how-to-create-a-countdown-timer-in-javascript 
For timer function

https://www.codewithfaraz.com/content/161/build-a-quiz-application-with-html-css-and-javascript-step-by-step-guide
For question array syntax

https://byby.dev/js-add-event-listener
For add event listeners to buttons

https://www.codingnepalweb.com/quiz-app-with-timer-javascript/
To show result after quiz

Function to increse user score borrowed from Love Maths Walkthrough Project