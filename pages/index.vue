<template>
  <div class="login-container">
    <form @submit.prevent="login">
      <h2>ログイン画面</h2>
      <input v-model="username" type="text" placeholder="ユーザー名" required />
      <input
        v-model="password"
        type="password"
        placeholder="パスワード"
        required
      />
      <button type="submit">ログイン</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");

const login = () => {
  if (username.value && password.value) {
    alert(`ようこそ、${username.value}さん！`);
  } else {
    alert("ユーザー名とパスワードを入力してください。");
  }
};
</script>

<style scoped>
h2 {
  color: #3ac2d3;
}
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

input {
  margin: 10px 0;
  padding: 10px;
  width: 200px;
  border: 1px solid #ddd;
  border-radius: 3px;
}

button {
  padding: 10px 20px;
  background-color: #26c6df;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #1c779e;
}
</style>
