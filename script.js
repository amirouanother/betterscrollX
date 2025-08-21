const bgInput = document.getElementById("bgInput");
const textInput = document.getElementById("textInput");
const fontSize = document.getElementById("fontSize");
const fontFamily = document.getElementById("fontFamily");
const tickerText = document.getElementById("tickerText");
const preview = document.getElementById("preview");

bgInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (ev) => {
      let img = preview.querySelector("img");
      if (!img) {
        img = document.createElement("img");
        preview.prepend(img);
      }
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  }
});

textInput.addEventListener("input", () => {
  tickerText.textContent = textInput.value;
});

fontSize.addEventListener("input", () => {
  tickerText.style.fontSize = fontSize.value + "px";
});

fontFamily.addEventListener("change", () => {
  tickerText.style.fontFamily = fontFamily.value;
});
