const tbody = document.querySelector("tbody");
const form = document.querySelector("form");
const submitButton = document.querySelector("#submit");
const cancelButton = document.querySelector("#cancel");

function addEmployee(employee) {
  const tr = document.createElement("tr");
  for (let key in employee) {
    const td = document.createElement("td");
    td.innerText = employee[key];
    tr.appendChild(td);
  }

  const options = document.createElement("td");
  let delBtn = document.createElement("button");
  let editButton = document.createElement("button");

  delBtn.innerText = "Delete";
  editButton.innerText = "Edit";

  delBtn.classList.add("delbtn");
  editButton.classList.add("editBtn");

  options.appendChild(delBtn);
  options.appendChild(editButton);

  tr.appendChild(options);
  tbody.appendChild(tr);

  editButton.addEventListener("click", onEditClick);

  delBtn.addEventListener("click", (event) =>
    event.target.parentNode.parentNode.remove()
  );
}

function onSubmitForm(event) {
  event.preventDefault();
  let employeeData = {
    name: form.name.value,
    email: form.email.value,
    company: form.company.value,
    gender: form.gender.value,
    salary: form.salary.value,
    role: form.role.value,
  };
  if (editOptions.isEditing) {
    editEmployee(employeeData);
  } else {
    addEmployee(employeeData);
  }
  form.reset();
}

form.addEventListener("submit", onSubmitForm);