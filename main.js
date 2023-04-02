const requestApiURL = "https://api.adviceslip.com/advice";
const $buttonAdvice = document.querySelector(".advice-btn");

function getApiData() {
  const $textAdvice = document.querySelector(".advice");
  const $idNumberAdvice = document.querySelector(".advice-id");

  fetch(requestApiURL)
    .then((response) => response.json())
    .then((data) => {
      $idNumberAdvice.textContent = data.slip.id;
      $textAdvice.textContent = `“${data.slip.advice}”`;
    })
    .catch((error) => console.error("Failed", error));
}

$buttonAdvice.onclick = () => {
  getApiData();
};

getApiData();
