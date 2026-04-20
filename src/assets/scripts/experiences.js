(function () {
  const timelineContainer = document.getElementById("timelineContainer");
  const timelineProgress = document.getElementById("timelineProgress");

  if (timelineContainer && timelineProgress) {
    timelineContainer.addEventListener("scroll", () => {
      const scrollWidth =
        timelineContainer.scrollWidth - timelineContainer.clientWidth;
      const scrolled = (timelineContainer.scrollLeft / scrollWidth) * 100;
      timelineProgress.style.width = scrolled + "%";
    });
  }
})();
