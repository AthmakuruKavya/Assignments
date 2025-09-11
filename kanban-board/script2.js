const nameInput = document.querySelector("#name");
const descriptionInput = document.querySelector("#description");

const submitBtn = document.querySelector("#Submit-btn");

submitBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    console.log(nameInput.value);
    console.log(descriptionInput.value);

    fetch(`http://localhost:8000?name=${nameInput.value}&description=${descriptionInput.value}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
})