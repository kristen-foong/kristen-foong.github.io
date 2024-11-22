import './css/App.css';
import './css/menu.css';
import './css/intro.css';
import './css/socials.css';
import './css/experiences.css';
import './css/projects.css';

import Intro from './components/intro';
import Experience from './components/experience';
import Menu from './components/Menu';
import Socials from './components/socials';
import Projects from './components/projects';

function App() {

  return (
    
    <div>
      <div className="cursor"></div>
      <Menu />
      <Socials />
      <div className="body">
        <Intro />
        <Experience/>
        <Projects />
      </div>
    </div>
  );
}

export default App;

waitForElementToExist('.cursor').then(element => {
  /* Cursor code from Wxrcxrz on CodePen, 
  https://codepen.io/wxrcxrz/pen/zYMXWKM */
  const cursor = document.querySelector('.cursor');
  const cursorActive = document.querySelectorAll('.cursor-activate');
  
  // we set up a way to look for mouse movements
  document.addEventListener("mousemove", (event) => {
    // we set the coordinates to match the cursor
    cursor.style.left = `${event.clientX - 10}px`;
    cursor.style.top = `${event.clientY - 10}px`;
  });
  
  //iterate through all the 'activateCursor' elements and add an listener to each one
  for (let i = 0; i < cursorActive.length; i++) {
    // change the size of the cursor while hovering over activation elements
    cursorActive[i].addEventListener("mouseover", (e) => {
      cursor.style.transform = 'scale(3, 3)';
    });
    // change the cursor back to normal on mouse out
    cursorActive[i].addEventListener("mouseout", (e) => {
      cursor.style.transform = 'scale(1, 1)';
    });
  }
});

/* await from bobby hadz https://bobbyhadz.com/blog/javascript-wait-for-element-to-exist */
function waitForElementToExist(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
    });
  });
}
