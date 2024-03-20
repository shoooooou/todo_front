<template>
  <div>
    <h1>TodoApp</h1>
    <h3>タスク名を入力して追加ボタンを入力してください！</h3>
    <input v-model="taskNameRef" type="text" /><button @click="addTask">
      追加
    </button>
    <ul v-for="taskName in taskNameListRef" key="taskName">
      <li>
        {{ taskName }} <button @click="completeTask(taskName)">完了</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// タスク名
const taskNameRef = ref<string>("");
// タスク一覧
// TODO:APIからタスク一覧を取得して初期値に設定したい
const taskNameListRef = ref<string[]>([]);

// タスク追加
// TODO:APIを呼び出してDBにタスク一覧を保存したい
const addTask = () => {
  // 空文字の場合は追加しない
  if (taskNameRef.value === "") return;
  taskNameListRef.value.push(taskNameRef.value);
  taskNameRef.value = "";
};
// タスク完了
// TODO:APIを呼び出してDBにタスク一覧を保存したい
const completeTask = (completeTaskName: string) => {
  taskNameListRef.value = taskNameListRef.value.filter(
    (taskName) => completeTaskName !== taskName
  );
};
</script>
