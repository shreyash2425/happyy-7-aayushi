document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header h1");
    const aboutSection = document.querySelector(".about p");
  
    // Add interactive hover effect on header
    header.addEventListener("mouseover", () => {
      header.style.transform = "scale(1.1)";
    });
  
    header.addEventListener("mouseout", () => {
      header.style.transform = "scale(1)";
    });
  
    // Add sparkle animation to the text
    let sparkleIndex = 0;
    const sparkles = ["✨", "🌟", "💖", "💫", "🌸"];
    setInterval(() => {
      header.innerHTML = `happpyy 7 monthsss aayushii ${sparkles[sparkleIndex % sparkles.length]}`;
      sparkleIndex++;
    }, 1000);
  
    // Animate the text fade-in one letter at a time
    let text = aboutSection.textContent;
    aboutSection.textContent = "";
    let i = 0;
    const typewriterEffect = setInterval(() => {
      aboutSection.textContent += text[i];
      i++;
      if (i === text.length) clearInterval(typewriterEffect);
    }, 50);
  });
  