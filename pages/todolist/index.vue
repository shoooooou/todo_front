<template>
  <div>
    <main class="container">
      <h1>TODO App</h1>
      <div class="kanban-board">
        <draggable class="kanban-column" v-model="todoTasks" group="tasks">
          <template #item="{ element }">
            <div class="kanban-item">{{ element.name }}</div>
          </template>
          <h2>Todo</h2>
          <div v-for="task in todoTasks" :key="task.id" class="kanban-item">
            {{ task.name }}
          </div>
        </draggable>
        <draggable
          class="kanban-column"
          v-model="inProgressTasks"
          group="tasks"
        >
          <template #item="{ element }">
            <div class="kanban-item">{{ element.name }}</div>
          </template>
          <h2>In Progress</h2>
          <div
            v-for="task in inProgressTasks"
            :key="task.id"
            class="kanban-item"
          >
            {{ task.name }}
          </div>
        </draggable>
        <draggable class="kanban-column" v-model="doneTasks" group="tasks">
          <template #item="{ element }">
            <div class="kanban-item">{{ element.name }}</div>
          </template>
          <h2>Done</h2>
          <div v-for="task in doneTasks" :key="task.id" class="kanban-item">
            {{ task.name }}
          </div>
        </draggable>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import draggable from "vuedraggable";
// タスクデータを定義
const todoTasks = ref([
  { id: 1, name: "タスク1" },
  { id: 2, name: "タスク2" },
]);
const inProgressTasks = ref([{ id: 3, name: "タスク3" }]);
const doneTasks = ref([{ id: 4, name: "タスク4" }]);
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
