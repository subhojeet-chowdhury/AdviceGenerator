const adviceID = document.querySelector(".advice_id");
const advice = document.querySelector(".advice");
const nextAdvice = document.getElementById("next_advice");
async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");

  const data = await response.json();
  return data;
}

function newAdvice() {
  getAdvice().then((data) => {
    data;
    adviceID.textContent = "#" + data.slip.id;
    advice.textContent = data.slip.advice;
  });
}

nextAdvice.addEventListener("click", () => {
  newAdvice();
});

newAdvice();
