//Todo app functions

var itemNum = 0;
var inputBox = document.getElementById("task-input-box");
var delAllBtn = document.getElementById("delete-all-btn");
delAllBtn.disabled = true;
delAllBtn.className += " disabled";

//Function to add task(s) to the list.

function addTask() {
				var isEmpty = true;
				var isNumber = true;
				
				if (inputBox.value.length !== 0) {
				   for (var i = 0; i <= inputBox.value.length; i++) {
												if (inputBox.value[i] !== " ") {
												   isEmpty = false;
								   }
								   if (inputBox.value != Number(inputBox.value)) {
												isNumber = false;
								   }
				   }
				}
				if (isEmpty) {
								inputBox.setAttribute("placeholder", "You entered nothing!");
				}
				else if (isNumber) {
								inputBox.setAttribute("placeholder", "Invalid task!");
								inputBox.value = "";
				}
				else {
								inputBox.setAttribute("placeholder", "");
								inputBox.setAttribute("placeholder", "");
				   var listItem = document.createElement("li");
								var mainDiv = document.createElement("div");
								mainDiv.setAttribute("class", "main-div");
								var subDiv1 = document.createElement("div");
								subDiv1.setAttribute("class", "sub-div1");
								var subDiv2 = document.createElement("div");
								subDiv2.setAttribute("class", "sub-div2");
								var task = document.createTextNode(inputBox.value);
								var editBtn = document.createElement("button");
								var editBtnVal = document.createTextNode("Edit");
								var deleteBtn = document.createElement("button");
								var deleteBtnVal = document.createTextNode("Delete");
								editBtn.setAttribute("id", "edit-btn");
								editBtn.setAttribute("onclick", "editTask(this)");
								deleteBtn.setAttribute("id", "delete-btn");
								deleteBtn.setAttribute("onclick", "removeTask(this)");
								listItem.setAttribute("id", "list-item");
				   subDiv1.appendChild(task);
								editBtn.appendChild(editBtnVal);
								subDiv2.appendChild(editBtn);
								deleteBtn.appendChild(deleteBtnVal)
								subDiv2.appendChild(deleteBtn);
								mainDiv.appendChild(subDiv1);
								mainDiv.appendChild(subDiv2);
								listItem.appendChild(mainDiv);
								var taskList = document.getElementById("task-list");
								taskList.appendChild(listItem)
								inputBox.value = "";
								delAllBtn.disabled = false;
								delAllBtn.className = "delete-all-btn";
				}
}


//Function to edit the task name

function editTask(editBtn) {
				var taskParent = editBtn.parentNode.previousSibling;
				var task = taskParent.childNodes[0];
				var taskValue = task.nodeValue;
				taskParent.removeChild(task);
				var inputBox = document.createElement("input");
				inputBox.setAttribute("id", "task-update-box");
				inputBox.setAttribute("type", "text");
				inputBox.setAttribute("value", taskValue);
				inputBox.setAttribute("maxlength", "40");
				taskParent.appendChild(inputBox);
				inputBox.focus();
				inputBox.select();
				task = document.createTextNode(inputBox.value);
				editBtn.childNodes[0].nodeValue = "Update";
				editBtn.setAttribute("onclick", "updateTask(this)");
				taskParent.style.paddingLeft = "0px";
}

//Function to update task name

function updateTask(updateBtn) {
								var taskParent = updateBtn.parentNode.previousSibling;
				var inputBox = taskParent.childNodes[0];
				
				var isEmpty = true;
				var isNumber = true;
				if (inputBox.value.length !== 0) {
				   for (var i = 0; i <= inputBox.value.length; i++) {
												if (inputBox.value[i] !== " ") {
												   isEmpty = false;
								   }
								   if (inputBox.value != Number(inputBox.value)) {
												isNumber = false;
								   }
				   }
				}
				if (isEmpty) {
								inputBox.setAttribute("placeholder", "You entered nothing!");
				}
				else if (isNumber) {
								inputBox.setAttribute("placeholder", "Invalid task!");
								inputBox.value = "";
				}
				else {
								inputBox.setAttribute("placeholder", "");
								inputBox.setAttribute("placeholder", "");
								var inputValue = document.createTextNode(inputBox.value);
								taskParent.removeChild(inputBox);
								taskParent.appendChild(inputValue);
								updateBtn.childNodes[0].nodeValue = "Edit";
								updateBtn.setAttribute("onclick", "editTask(this)");
				   taskParent.style.paddingLeft = "5px";
   }
}

//Function to remove task(s) from the list

function removeTask(deleteBtn) {
				var listParent = deleteBtn.parentNode.parentNode.parentNode;
				listParent.remove();
				var taskList = document.getElementById("task-list");
				if (taskList.childNodes.length <= 1) {
								delAllBtn.disabled = true;
      delAllBtn.className += " disabled";
				}
}


//Function to delete all tasks

function delAllTasks() {
				document.getElementById("task-list").innerHTML = "";
				delAllBtn.disabled = true;
   delAllBtn.className += " disabled";
}
