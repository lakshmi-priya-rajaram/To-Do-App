function addTask() {
    const input = document.getElementById("taskInput");
    const list = document.getElementById("taskList");

    if (input.value.trim() === "") {
        alert("Enter a valid task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = input.value;

    li.onclick = () => li.remove(); // delete on click

    list.appendChild(li);
    saveTasks();
    input.value = "";
}

function saveTasks() {
    localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
}

window.onload = () => {
    document.getElementById("taskList").innerHTML = localStorage.getItem("tasks") || "";
};
