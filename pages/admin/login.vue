<script setup lang="ts">
const loading = ref(false)
const email = ref('')
const password = ref('')

const client = useSupabaseClient()
const user = useSupabaseUser()

async function handleLogin() {
  try {
    loading.value = true
    const { error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })
    if (error)
      throw error
  }
  catch (error) {
    if (error instanceof Error) {
      // eslint-disable-next-line no-alert
      alert(error.message)
    }
  }
  finally {
    loading.value = false

    // Redirect to the admin dashboard
    if (user.value)
      navigateTo('/admin')
  }
}
</script>

<template>
  <form @submit.prevent="handleLogin">
    <div>
      <h1 un-text="2xl" un-font="bold" un-m="b-4">
        Admin
      </h1>
      <div>
        <label un-m="b-4" un-block>
          <p un-text="sm">Email</p>
          <input v-model="email" un-input required type="email" un-autofill="none" placeholder="Your email">
        </label>

        <label un-m="b-4" un-block>
          <p un-text="sm">Password</p>
          <input v-model="password" type="password" un-input required placeholder="Your password">
        </label>
      </div>
      <div>
        <button un-btn type="submit">
          Sign in
        </button>
      </div>
    </div>
  </form>
</template>
