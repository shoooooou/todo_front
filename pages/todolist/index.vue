<template>
  <div>
    <main class="container">
      <h1>TODO App</h1>
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
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import draggable from "vuedraggable";
import type { Task } from "../../types/code";
import {taskService} from "../../server/TaskService";

const tasks: Task[] = await taskService.getTaskList("0000000001");

const todoTasks = ref<Task[]>(tasks.filter((task) => task.statusCd === "1"));
const inProgressTasks = ref<Task[]>(tasks.filter((task) => task.statusCd === "2"));
const doneTasks = ref<Task[]>(tasks.filter((task) => task.statusCd === "3"));
</script>

<style scoped lang="scss">
.container {
  background-color: #1a2a44; /* 紺背景 */
  color: #fff; /* 白文字で読みやすく */
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
</style>