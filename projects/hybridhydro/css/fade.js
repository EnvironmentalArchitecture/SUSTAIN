const header = document.querySelector(".container .section-zero");
const sectionOne = document.querySelector(".container .section-one");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("navScrolled");
    } else {
      header.classList.remove("navScrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);