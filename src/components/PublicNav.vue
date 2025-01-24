<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png">
    <nav>
      <router-link to="/">Accueil</router-link> |
      <router-link to="/cocktails">Cocktails</router-link> |
      <router-link to="/contact">Contact</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "PublicNav",
}
</script>

<style>
  img{
    position: absolute;
    right: 030px;
    height: 50px;
  }
</style>