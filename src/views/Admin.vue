<template>
    <main>
        <b-nav id="nav">
            <b-nav-item :to="{ name: 'admin' }">Admin</b-nav-item>
            <b-nav-item :to="{ name: 'admin_products' }">Products</b-nav-item>
        </b-nav>
        <router-view/>
    </main>
</template>

<script>
  export default {
    name: "Admin"
  }
</script>

<style scoped>

</style>