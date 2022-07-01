//! Best Way For Fetching API
async function fetchData() {
  try {
    const myData = await fetch("https://api.adviceslip.com/advice");
    // console.log(await myData.json());
    let myAdvice = await myData.json();
    const id = document.querySelector(".advice-id");
    id.innerText = `Advice #${myAdvice.slip.id}`;
    const quote = document.querySelector(".quote");
    quote.innerText = `" ${myAdvice.slip.advice} "`;
  } catch (rej) {
    rej;
  }
}
fetchData();

const btn = document.querySelector(".dice");
btn.addEventListener("click", () => {
  fetchData();
});
