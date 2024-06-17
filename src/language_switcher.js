function switchLanguage(lang) {
  const enContent = document.querySelectorAll(".content-en");
  const deContent = document.querySelectorAll(".content-de");

  if (lang === "en") {
    enContent.forEach((element) => {
      element.style.display = "block";
    });
    deContent.forEach((element) => {
      element.style.display = "none";
    });
  } else if (lang === "de") {
    enContent.forEach((element) => {
      element.style.display = "none";
    });
    deContent.forEach((element) => {
      element.style.display = "block";
    });
  }
}

// Default to German
switchLanguage("de");
