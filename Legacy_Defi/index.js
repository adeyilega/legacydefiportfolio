// Navigation Logic
let nav = document.querySelector('.Nav')
let navItem = document.querySelector('.Nav_item')
let listItem = document.querySelectorAll('.List_Item')
const menuButton = document.getElementById('menuButton');

nav.addEventListener('click', ()=>{
    navItem.classList.toggle('activate')
})

listItem.forEach(listItem => {
    listItem.addEventListener('click', ()=>{
        navItem.classList.remove('activate')
        menuButton.classList.remove('opened');
        menuButton.setAttribute('aria-expanded', false);
    })
})

function toggleMenu() {
    menuButton.classList.toggle('opened');
    menuButton.setAttribute('aria-expanded', menuButton.classList.contains('opened'));
  }


  // Service Hidden And Reveal logic
  let liProjectAds = document.querySelector('.Li_Project_Advisory')
  let liStraThin = document.querySelector('.Li_Strategic_Thinking')
  let liTeamBui = document.querySelector('.Li_Team_Building')
  let liStraThin2 = document.querySelector('.Li_Strategic_Thinking2')
  let projectAds = document.querySelector('.Project_Advisory')
  let StraThin = document.querySelector('.Strategic_Thinking')
  let teamBui = document.querySelector('.Team_Building')
  let StraThin2 = document.querySelector('.Strategic_Thinking2')

  liProjectAds.addEventListener('click', ()=>{
    projectAds.style.display = 'flex'
    StraThin.style.display = 'none'
    teamBui.style.display = 'none'
    StraThin2.style.display = 'none'
    projectAds.classList.add('slide-in')
  })

  liStraThin.addEventListener('click', ()=>{
    projectAds.style.display = 'none'
    StraThin.style.display = 'flex'
    teamBui.style.display = 'none'
    StraThin2.style.display = 'none'
    StraThin.classList.add('slide-in')
  })

  liTeamBui.addEventListener('click', ()=>{
    projectAds.style.display = 'none'
    StraThin.style.display = 'none'
    teamBui.style.display = 'flex'
    StraThin2.style.display = 'none'
    teamBui.classList.add('slide-in')
  })

  liStraThin2.addEventListener('click', ()=>{
    projectAds.style.display = 'none'
    StraThin.style.display = 'none'
    teamBui.style.display = 'none'
    StraThin2.style.display = 'flex'
    StraThin2.classList.add('slide-in')
  })


// Reveal Accordion Icon Logic
let experienceToggle = document.querySelectorAll('.toggleExperience')
let toggleIcon = document.querySelectorAll('.toggle_icon')
let isPlusList = Array.from({ length: experienceToggle.length }, () => false);

experienceToggle.forEach((iconToggle, index) => {
  iconToggle.addEventListener('click', () => {
    // Reset all icons to the default state
    toggleIcon.forEach((icon) => {
      icon.style.transform = 'rotate(0deg)';
    });

    // Toggle the state of the clicked toggleIcon
    isPlusList[index] = !isPlusList[index];

    // Update the icon state based on the isPlusList array
    toggleIcon[index].style.transform = isPlusList[index] ? 'rotate(180deg)' : 'rotate(0deg)';
  });
});

// Accordion Logic
let exWrapList = document.querySelectorAll('.Experience_Wrapper')
let exDetailsList = document.querySelectorAll('.Experience_Details')
let isExpandedList = Array.from({ length: exDetailsList.length }, () => false);

exWrapList.forEach((exWrap, index) => {
  let exDetail = exDetailsList[index]

  exWrap.addEventListener('click', () => {
    const isExpanded = isExpandedList[index];

    if (!isExpanded) {
      // Close all open Experience_Details
      exDetailsList.forEach((detail, i) => {
        if (i !== index) {
          detail.style.maxHeight = '0';
          isExpandedList[i] = false;
        }
      });

      // Close the clicked Experience_Detail
      exDetail.style.maxHeight = exDetail.scrollHeight + 'px'
    } else {
      exDetail.style.maxHeight = '0'
    }

    // Toggle the state of the clicked Experience_Detail
    isExpandedList[index] = !isExpanded;

    // Update the icon state based on the isPlusList array
    toggleIcon[index].style.transform = isPlusList[index] ? 'rotate(180deg)' : 'rotate(0deg)';
  })
})


document.addEventListener("DOMContentLoaded", function () {
  const countElement = document.querySelector(".Count1");
  const sectionElement = document.querySelector(".About_Project_Counter");

  let counting1 = false;
  let count = 0;
  const finalCount = 100; // Change to your desired final count
  const incrementAmount = 1; // Change the speed of counting1

  // Function to start counting1
  function startCounting1() {
      if (count < finalCount) {
          count += incrementAmount;
          countElement.textContent = count;
          requestAnimationFrame(startCounting1);
      } else {
          counting1 = false;
      }
  }

  // Function to reset the count to 0
  function resetCount() {
      count = 0;
      countElement.textContent = count;
  }

  // Function to check if the section is in the viewport
  function isInViewport() {
      const rect = sectionElement.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
  }

  // Event listener for scroll
  window.addEventListener("scroll", function () {
      if (isInViewport() && !counting1) {
          counting1 = true;
          startCounting1();
      } else if (!isInViewport()) {
          resetCount();
      }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const countElement = document.querySelector(".Count2");
  const sectionElement = document.querySelector(".About_Project_Counter");

  let counting1 = false;
  let count = 0;
  const finalCount = 2000; // Change to your desired final count
  const incrementAmount = 10; // Change the speed of counting1

  // Function to start counting1
  function startCounting1() {
      if (count < finalCount) {
          count += incrementAmount;
          countElement.textContent = count;
          requestAnimationFrame(startCounting1);
      } else {
          counting1 = false;
      }
  }

  // Function to reset the count to 0
  function resetCount() {
      count = 0;
      countElement.textContent = count;
  }

  // Function to check if the section is in the viewport
  function isInViewport() {
      const rect = sectionElement.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
  }

  // Event listener for scroll
  window.addEventListener("scroll", function () {
      if (isInViewport() && !counting1) {
          counting1 = true;
          startCounting1();
      } else if (!isInViewport()) {
          resetCount();
      }
  });
});


const backToTopButton = document.getElementById('Back_To_Top');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 1000) { // Adjust this value as needed
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.onload = function() {
  var inputFields = document.querySelectorAll('.Contact_Form input');
  inputFields.forEach(function(input) {
      input.blur(); // Remove focus from all input fields
  });
};