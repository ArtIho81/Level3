import { error } from "console";

const enum Button {
  Plus = "Plus",
  Minus = "Minus",
}

const plusButton = document.getElementById("plus_btn")!;
plusButton.addEventListener("click", async () => {
  const clicks = await sendRequest(Button.Plus);
  plusButton.textContent = `${Button.Plus} ${clicks} 12`;
});

const minusButton = document.getElementById("minus_btn")!;
minusButton.addEventListener("click", async () => {
  const clicks = await sendRequest(Button.Minus);
  minusButton.textContent = `${Button.Minus} ${clicks}`;
});

function sendRequest(buttonType: Button) {
    return fetch("http://localhost:3003/button-click", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      button: buttonType,
    }),
  })
    .then((response) => response.json())
    .then((data) => data.button)
    .catch((error) => console.log(error));
}
