<template>
  <div id="home">
    <b-nav id="nav">
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to="/about">About</b-nav-item>
      <b-nav-item to="/catalog">Catalog</b-nav-item>
    </b-nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {

  }
}
</script>
