<template>
  <div class="login-container">
    <form>
      <h2>アカウント登録</h2>
      <p>既にアカウント作成されている方は<NuxtLink to="/login">こちら</NuxtLink></p>
      <input v-model="username" type="text" placeholder="ユーザー名" required />
      <input
        v-model="password"
        type="password"
        placeholder="パスワード"
        required
      />
      <button @click="registerUser" :disabled="isDisabled" type="submit">アカウント登録</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { LoginUser } from "~/types/code";
import { authenticationService } from "~/server/AuthenticationService";

const username = ref("");
const password = ref("");

const isDisabled = computed(() => {
  return !username.value || !password.value;
})

const registerUser = async () => {
  const inputUser: LoginUser = {
    uid: username.value,
    password: password.value,
  };
  let isRegister;
  try {
    console.log("aiueoaiueo:");
    isRegister = await authenticationService.registerUser(inputUser);
  } catch (e) {
    // TODO: エラーページに遷移
    alert("エラー");
  }
  if (isRegister) {
    alert(`アカウント登録が完了しました。`);
  } else {
    alert(
      "アカウント登録に失敗しました。ユーザー名とパスワードを確認してください。"
    );
  }
};
</script>

<style scoped>
h2 {
  color: #3ac2d3;
  margin-bottom: 0;
}
p {
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
