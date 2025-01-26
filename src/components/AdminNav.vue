<template>
  <div>
    <nav>
      <router-link to='/'>Accueil</router-link>
      &nbsp;
      <router-link to='/admin/dashboard'>Dashboard</router-link>
      &nbsp;
      <router-link to='/admin/users/index'>User list</router-link>
      &nbsp;
      <router-link to='/admin/users/edit/25'>User 25</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AdminNav",
}
</script>

<style scoped>
nav{
  display: flex;
  flex-direction: column;
}
</style>

