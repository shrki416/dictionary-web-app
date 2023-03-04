# Frontend Mentor - Dictionary web app solution

This is a solution to the [Dictionary web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Search for words using the input field
- See the Free Dictionary API's response for the searched word
- See a form validation message when trying to submit a blank form
- Play the audio file for a word when it's available
- Switch between serif, sans serif, and monospace fonts
- Switch between light and dark themes
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./public/images/preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL/hub)
- Live Site URL: [Add live site URL here](https://aa-dictionary-web-app.vercel.app/)

## My process

This project is build with Next.js and Styled Components. The Dictionary API was used to fetch the data.

### Built with

- Semantic HTML5 markup - as much as possible
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Dictionary API](https://dictionaryapi.dev/) - API for fetching data
- [Howler.js](https://howlerjs.com/) - JS library for playing audio files
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

- This wasn't as easy and straight forward as I thought. I had to do a lot of research to get the desired result. I learned a lot of new things and I'm happy with the result. There are things that I want to improve in the future, of course but I'm happy with the result. Amongst the things I learned are: font optimization in NextJS, working with Audio files, using the Dictionary API, and implementing darkmode using styled-components.

### Continued development

- This application is built on Next.js and Styled Components. I want to continue learning and improving my skills in these technologies. I want to learn more about the best practices and how to optimize the application. The data fetching is predominantly done on the client side. I want to learn how to do it on the server side and utilize Next.js best features. I figured as I learn this deeper I will come back and improve and iterate on this project. Once NextJS 13 is stable I will migrate the project to it.

### Useful resources

- [Decrotative line](https://stackoverflow.com/questions/38202019/css-horizontal-line-on-one-side-of-text) - This helped me with placing a line after the text and giving me an idea on how to do it using pseudoelements.
- [Supress warning](https://stackoverflow.com/questions/70127003/howler-js-react-audiocontext-console-warning) - I used Howler.js to play the audio files. I had to suppress the warning for AudioContext since the library is already using it.
- [Font Optimization](https://blog.logrocket.com/next-js-font-optimization/) - This helped me with optimizing the fonts in Next.js.
- [Darkmode](https://medium.com/bigpanda-engineering/dark-theme-with-styled-components-a573dd898e2a) - This helped me with implementing the darkmode using styled-components.

## Author

- Website - [Ahmed Abdelaal](https://aa-dev.io)
- Frontend Mentor - [@shrki416](https://www.frontendmentor.io/profile/shrki416)
