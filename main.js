window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");
  let empArr = [];
  let existingValue;
  let updatedValue;

  function storingInArray(newValue) {
    empArr.push(newValue);
    console.log(empArr);
  }

  function updatingArr(a, b) {
    console.log(a, b);
    let index = empArr.indexOf(b);
    console.log(index);
    if (index !== -1) {
      empArr[index] = a;
    } else {
      alert("something went wrong");
    }

    console.log(empArr);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    //24:35 https://youtu.be/MkESyVB4oUw

    const task = input.value;

    storingInArray(task);
    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");
    task_input_el.setAttribute("required", "required");

    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerText = "Edit";

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerText = "Delete";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = "";

    task_edit_el.addEventListener("click", (e) => {
      //mai har baar for loop laga kr event lagata tha isne na for lagaya na koi hor
      if (task_edit_el.innerText.toLowerCase() == "edit") {
        existingValue = task_input_el.value;
        console.log(existingValue);
        task_edit_el.innerText = "Save";
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
      } else {
        if (task_input_el.value == "") {
          alert("please fill the input");
        } else {
          updatedValue = task_input_el.value;
          task_edit_el.innerText = "Edit";
          task_input_el.setAttribute("readonly", "readonly");
          updatingArr(updatedValue, existingValue);
          // console.log(existingValue, updatedValue);
        }
      }
    });

    task_delete_el.addEventListener("click", (e) => {
      list_el.removeChild(task_el);
      let index = empArr.indexOf(task_input_el.value);
      if (index !== -1) {
        empArr.splice(index, 1);
      } else {
        alert("something went wrong");
      }
    });
  });
});
