<template>
  <div>
    <main class="container">
      <header class="header">
        <h1>TODO App</h1>
        <button @click="showModal = true" class="add-task-button">
          <span class="plus-sign">+</span>
        </button>
      </header>
      <div class="kanban-board">
        <KanbanColumn
          title="Todo"
          v-model:tasks="todoTasks"
          item-key="sequenceNo"
          class="todo-column"
        />
        <KanbanColumn
          title="In Progress"
          v-model:tasks="inProgressTasks"
          item-key="sequenceNo"
          class="inprogress-column"
        />
        <KanbanColumn
          title="Done"
          v-model:tasks="doneTasks"
          item-key="sequenceNo"
          class="done-column"
        />
      </div>

      <!-- モーダルウィンドウ -->
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <h2>Add Task</h2>
          <input v-model="newTaskName" type="text" class="task-input" placeholder="Task name" />
          <div class="modal-buttons">
            <button @click="addTask" class="btn add-btn">Add</button>
            <button @click="showModal = false" class="btn cancel-btn">Cancel</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Task } from "../../types/code";
import { taskService } from "../../server/TaskService";

const tasks: Task[] = await taskService.getTaskList("0000000001");

const todoTasks = ref<Task[]>(tasks.filter((task) => task.statusCd === "0"));
const inProgressTasks = ref<Task[]>(
  tasks.filter((task) => task.statusCd === "1")
);
const doneTasks = ref<Task[]>(tasks.filter((task) => task.statusCd === "2"));

const showModal = ref(false);
const newTaskName = ref("");

const addTask = () => {
  if (newTaskName.value === "") {
    alert("タスク名を入力してください");
    return;
  }
  const newTask: Task = {
    taskName: newTaskName.value,
    statusCd: "0",
  };
  todoTasks.value.push(newTask);
  newTaskName.value = "";
  showModal.value = false;
};
</script>

<style scoped lang="scss">
.container {
  background-color: #1a2a44; /* 紺背景 */
  color: #fff; /* 白文字で読みやすく */
}

.header {
  display: flex;
  align-items: center;
  gap: 3px;
}

.add-task-button {
  background-color: #0f837f;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
}

.add-task-button:hover {
  background-color: #06566e;
}

.plus-sign {
  line-height: 1;
}

.kanban-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px; /* 余白を少し広く */
}

.kanban-column {
  background-color: #2c3e60; /* 濃いブルーのカラム背景色 */
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* 濃い影を追加 */
  border-radius: 8px;
  padding: 16px;
}

.kanban-item {
  background-color: #4a69bd; /* 明るいブルー */
  border: 1px solid #5d6d7e; /* 輪郭線をグレー系に */
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}

h1,
h2 {
  color: #dfe6e9; /* タイトルの色をオフホワイトに */
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: rgb(35, 69, 156);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.task-input {
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 5px;
  border: none;
}

.modal-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-btn {
  background-color: #3699c6;
  color: white;
}

.add-btn:hover {
  background-color: #18a6d1;
}

.cancel-btn {
  background-color: #c56764;
  color: white;
}

.cancel-btn:hover {
  background-color: #c9302c;
}
</style>
