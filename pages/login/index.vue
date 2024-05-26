<template>
  <div class="login-container">
    <form>
      <h2>ログイン画面</h2>
      <h3>
        アカウント登録していない方は<NuxtLink to="/signUp">こちら</NuxtLink>
      </h3>
      <input
        v-model="usernameRef"
        type="text"
        placeholder="ユーザー名"
        required
      />
      <input
        v-model="passwordRef"
        type="password"
        placeholder="パスワード"
        required
      />
      <button @click="login" type="submit">ログイン</button>
    </form>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { authenticationService } from "~/server/AuthenticationService";
  import type { LoginUser } from "~/types/code";

  const usernameRef = ref("");
  const passwordRef = ref("");
  const router = useRouter();

  const login = async () => {
    const inputUser: LoginUser = {
      uid: usernameRef.value,
      password: passwordRef.value,
    };
    let isLogin;
    try {
      isLogin = await authenticationService.login(inputUser);
    } catch (e) {
      // TODO: エラーページに遷移
      alert("エラー");
      console.log(e);
    }
    if (isLogin) {
      alert(`ようこそ、${inputUser.uid}さん！`);
      router.push("/todolist");
    } else {
      alert("ログインに失敗しました。ユーザー名とパスワードを確認してください。");
    }
  };
</script>

<style scoped>
h2 {
  color: #3ac2d3;
}
h3 {
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
