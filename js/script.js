"use strict";

const header = document.querySelector(".header");
const heroSection = document.querySelector(".section-hero");


// todo: Implementing navigation Using the Intersection Observer  :>
function navigationObserver() {
  const headerHeight = header.getBoundingClientRect().height;

  const observerCallbackFun = function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) header.classList.add("fixed-nav");
    else header.classList.remove("fixed-nav");
  };

  const options = {
    root: null,
    threshold: 0.1,
    rootMargin: `-${headerHeight}px`,
  };
  const observer = new IntersectionObserver(observerCallbackFun, options);
  observer.observe(heroSection);
}

//! Implementing the smooth scrolling :>

//using event delegation :
function smoothScroll() {
  const nav = document.querySelector(".nav");

  nav.addEventListener("click", function (event) {
    if (event.target.classList.contains("nav-link")) {
      event.preventDefault();

      const id = event.target.getAttribute("href");
      const section = document.querySelector(id);

      section.scrollIntoView({ behavior: "smooth" });

      //  window.scrollTo({
      //   top: section.getBoundingClientRect().top + window.pageYOffset ,
      //   left: section.getBoundingClientRect().left  + window.pageXOffset,
      //   "behavior" : "smooth"
      //  });
    }
  });
}

navigationObserver();
smoothScroll() ;
