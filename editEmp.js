let editOptions = {
    isEditing: false,
    rowElement: null,
  };
  
  cancelButton.addEventListener("click", () => {
    editOptions = {
      isEditing: false,
      rowElement: null,
    };
  
    submitButton.innerText = "Add Employee";
    cancelButton.innerText = "Cancel";
  });
  
  function onEditClick(event) {
    const row = event.target.parentNode.parentNode;
    const cells = row.querySelectorAll("td");
  
    let employeeinfo = {
      name: cells[0].innerText,
      email: cells[1].innerText,
      company: cells[2].innerText,
      gender: cells[3].innerText,
      salary: cells[4].innerText,
      role: cells[5].innerText,
    };
  
    preFillForm(employeeinfo);
  
    editOptions = {
      isEditing: true,
      rowElement: row,
    };
  
    submitButton.innerText = "Update";
    cancelButton.innerText = "Cancel Changes";
  }
  
  function preFillForm(employee) {
    for (i in employee) {
      form[i].value = employee[i];
    }
  }
  
  function editEmployee(employee) {
    const rowElement = editOptions.rowElement;
    const cells = rowElement.querySelectorAll("td");
  
    cells[0].innerText = employee.name;
    cells[1].innerText = employee.email;
    cells[2].innerText = employee.salary;
    cells[3].innerText = employee.gender;
    cells[4].innerText = employee.company;
    cells[5].innerText = employee.role;
  
    submitButton.innerText = "Add Employee";
    cancelButton.innerText = "Cancel";
  
    editOptions = {
      isEditing: false,
      rowElement: null,
    };
  }