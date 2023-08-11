const htmlInput = document.getElementById("html-input");
const compilerOutput = document.getElementById("compiler-output");
// Save HTML input content to local storage
htmlInput.addEventListener("input", function() {
  localStorage.setItem("htmlCode", htmlInput.value);
});

// Retrieve HTML input content from local storage
window.addEventListener("load", function() {
  const savedHtmlCode = localStorage.getItem("htmlCode");
  if (savedHtmlCode) {
    htmlInput.value = savedHtmlCode;
    compilerOutput.srcdoc = savedHtmlCode;
  }
});

htmlInput.addEventListener("input", updateCompiler);

function updateCompiler() {
  const htmlCode = htmlInput.value;
  compilerOutput.srcdoc = htmlCode;
}