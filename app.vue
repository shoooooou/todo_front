<template>
  <div>
    <h1>TodoApp</h1>
    <h3>タスク名を入力して追加ボタンを入力してください！</h3>
    <input v-model="inputTaskNameRef" type="text" /><button @click="addTask">
      追加
    </button>
    <ul v-for="task in taskListRef" key="task">
      <li>
        {{ task.taskName }} <button @click="completeTask(task)">完了</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { getTaskList } from "~/server/TaskService";
import type { Task } from "~/types/code";
// タスク名
const inputTaskNameRef = ref<string>("");
// タスク一覧
const taskListRef = ref<Task[]>([]);
  try {
    // TODO: uidをユーザに合わせて設定したい
    const taskList: Task[] = await getTaskList("0000000001");
    taskListRef.value = taskList;
  } catch (e) {
    console.log(e);
  }

// タスク追加
// TODO:APIを呼び出してDBにタスク一覧を保存したい
const addTask = () => {
  // 空文字の場合は追加しない
  if (inputTaskNameRef.value === "") return;
  // TODO: uidをユーザに合わせて設定したい
  const addTask: Task = {
    uid: "0000000001",
    taskName: inputTaskNameRef.value,
  };
  taskListRef.value.push(addTask);
  inputTaskNameRef.value = "";
};

// タスク完了
// TODO:APIを呼び出してDBにタスク一覧を保存したい
// TODO:同じタスク名が削除されてしまうのを解消したい
const completeTask = (completeTask: Task) => {
  taskListRef.value = taskListRef.value.filter(
    (task) => task.taskName !== completeTask.taskName
  );
};
</script>
