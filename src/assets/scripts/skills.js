import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

// Skills Carousel - GSAP Animation & Interaction
document.addEventListener("DOMContentLoaded", function () {
  const skillsGallery = document.querySelector(".skills-gallery");
  if (!skillsGallery) return;

  const cards = gsap.utils.toArray(".skills-cards li"),
    spacing = 0.1,
    snap = gsap.utils.snap(spacing),
    snapTime = (rawTime) => {
      let snappedTime = snap(rawTime),
        offset = snappedTime - rawTime;
      if (Math.abs(offset) > spacing / 2) {
        snappedTime =
          rawTime < snappedTime ? snappedTime - spacing : snappedTime + spacing;
      }
      return gsap.utils.wrap(0, seamlessLoop.duration(), snappedTime);
    },
    animateFunc = (element) => {
      const tl = gsap.timeline();
      tl.fromTo(
        element,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          zIndex: 100,
          duration: 0.5,
          yoyo: true,
          repeat: 1,
          ease: "power1.in",
          immediateRender: false,
        },
      ).fromTo(
        element,
        { xPercent: 400 },
        {
          xPercent: -400,
          duration: 1,
          ease: "none",
          immediateRender: false,
        },
        0,
      );
      return tl;
    },
    seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc),
    playhead = { offset: 0 },
    wrapTime = gsap.utils.wrap(0, seamlessLoop.duration()),
    scrub = gsap.to(playhead, {
      offset: 0,
      onUpdate() {
        seamlessLoop.time(wrapTime(playhead.offset));
      },
      duration: 0.5,
      ease: "power3",
      paused: true,
    });

  // Set initial state for all cards
  gsap.set(".skills-cards li", { xPercent: 400, opacity: 0, scale: 0 });

  function scrollToOffset(offset) {
    let snapped = snapTime(offset);
    scrub.vars.offset = snapped;
    scrub.invalidate().restart();
  }

  // Button controls
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  if (nextBtn) {
    nextBtn.addEventListener("click", () =>
      scrollToOffset(scrub.vars.offset + spacing),
    );
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () =>
      scrollToOffset(scrub.vars.offset - spacing),
    );
  }

  // Auto-play carousel
  const cardElements = document.querySelectorAll(".skills-cards li");
  const cardCount = cardElements.length;
  let currentIndex = 0;

  function updateCardPositions() {
    cardElements.forEach((card, index) => {
      card.classList.remove("active");
      if (index === currentIndex) {
        card.classList.add("active");
      }
    });
  }

  const autoPlayInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % cardCount;
    updateCardPositions();
    scrollToOffset(scrub.vars.offset + spacing);
  }, 1500);

  updateCardPositions();

  // Dragging functionality
  Draggable.create(".skills-drag-proxy", {
    type: "x",
    trigger: ".skills-cards",
    onPress() {
      this.startOffset = scrub.vars.offset;
    },
    onDrag() {
      scrub.vars.offset = this.startOffset + (this.startX - this.x) * 0.001;
      scrub.invalidate().restart();
    },
    onDragEnd() {
      scrollToOffset(scrub.vars.offset);
    },
  });

  function buildSeamlessLoop(items, spacing, animateFunc) {
    let overlap = Math.ceil(1 / spacing),
      startTime = items.length * spacing + 0.5,
      loopTime = (items.length + overlap) * spacing + 1,
      rawSequence = gsap.timeline({ paused: true }),
      seamlessLoop = gsap.timeline({
        paused: true,
        repeat: -1,
        onRepeat() {
          this._time === this._dur && (this._tTime += this._dur - 0.01);
        },
      }),
      l = items.length + overlap * 2;

    for (let i = 0; i < l; i++) {
      let index = i % items.length;
      let time = i * spacing;
      rawSequence.add(animateFunc(items[index]), time);
      i <= items.length && seamlessLoop.add("label" + i, time);
    }

    rawSequence.time(startTime);
    seamlessLoop
      .to(rawSequence, {
        time: loopTime,
        duration: loopTime - startTime,
        ease: "none",
      })
      .fromTo(
        rawSequence,
        { time: overlap * spacing + 1 },
        {
          time: startTime,
          duration: startTime - (overlap * spacing + 1),
          immediateRender: false,
          ease: "none",
        },
      );
    return seamlessLoop;
  }

  // Cleanup
  window.addEventListener("beforeunload", () => {
    clearInterval(autoPlayInterval);
  });
});
