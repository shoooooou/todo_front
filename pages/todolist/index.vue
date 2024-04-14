<template>
  <div>
    <main class="container">
      <h1>Kanban TODO App</h1>
      <div class="kanban-board">
        <div class="kanban-column">
          <h2>Todo</h2>
          <div class="kanban-item">タスク1</div>
          <div class="kanban-item">タスク2</div>
        </div>
        <div class="kanban-column">
          <h2>In Progress</h2>
          <div class="kanban-item">タスク3</div>
        </div>
        <div class="kanban-column">
          <h2>Done</h2>
          <div class="kanban-item">タスク4</div>
        </div>
      </div>
    </main>
  </div>
</template>

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
