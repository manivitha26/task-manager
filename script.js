const api = "http://localhost:5000/api/tasks";

async function loadTasks() {
  const res = await fetch(api);
  const tasks = await res.json();
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(t => {
    const li = document.createElement("li");
    li.innerHTML = `
      <b>${t.title}</b> - ${t.status}
      <button onclick="deleteTask('${t._id}')">❌</button>
    `;
    list.appendChild(li);
  });
}

document.getElementById("taskForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const task = {
    title: title.value,
    description: description.value,
    status: status.value
  };

  await fetch(api, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(task)
  });

  loadTasks();
});

async function deleteTask(id) {
  await fetch(`${api}/${id}`, { method: "DELETE" });
  loadTasks();
}

loadTasks();
