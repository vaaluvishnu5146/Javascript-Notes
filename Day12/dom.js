const P = document.getElementById("demo");

setTimeout(() => {
  P.innerText = "TADA!!!";
  P.style.color = "red";
}, 5000);

/**
 * GET THE DOM ELEMENT USING ID
 * AND GET THE VALUE FROM THE INPUT
 * AND SHOW THE VALUE IN PARAGRAPH
 */

function handleSavePlayer() {
  // STEP1: GET INPU VALUE BY ELEMENTS ID:
  const input = document.getElementById("favorite_cricketer");
  const outputEl = document.getElementById("output_name");
  outputEl.innerText = input.value;
}
