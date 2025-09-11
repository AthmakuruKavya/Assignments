let regFormContainer = document.getElementById("reg-form");
let regBtn = document.getElementById("reg-btn");

regBtn.addEventListener("click", function () {
    console.log("Butoon is clicked")
  //patient name field
  let labelName = document.createElement("label");
  labelName.textContent= "Name:";
  let patientName = document.createElement("input");
  patientName.setAttribute("type", "text");
  patientName.setAttribute("placeholder", "Enter full name");
  patientName.setAttribute("id", "patientname");
  labelName.setAttribute("for", "patientname");

  let nameContainer = document.createElement("div")
  nameContainer.append(labelName,patientName)

  //petient age field
  let labelAge = document.createElement("label");
  labelAge.textContent = "Age:"
  let patientAge = document.createElement("input");
  patientAge.setAttribute("type", "number");
  patientAge.setAttribute("id", "patientage");
  patientAge.setAttribute("for", "patientage");

  let ageContainer = document.createElement("div")
  ageContainer.append(labelAge, patientAge)

  regFormContainer.append(nameContainer, ageContainer)
});
