export const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const scrollElement = document.querySelector(".js-scroll");
scrollElement.forEach((event) => observer.observe(event));

// This function reveals elements when you scroll on the page, it has style classes of .js-scroll and scrollHidden added to it
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        setActiveSection(entry.target.id);
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  const scrollElement = document.querySelectorAll(".js-scroll");
  scrollElement.forEach((event) => observer.observe(event));

  return () => {
    scrollElement.forEach((event) => observer.unobserve(event));
  };
}, []);
