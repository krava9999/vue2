<template>
<div id="App" class="project">

<nav>
   <router-link to="/dashboard">Dashboard</router-link> /
    <router-link to="/about">about</router-link> / 
   <router-link to="/notfound">notfound</router-link> /
</nav>

    <main>
     <router-view/>
    </main>

</div>
</template>
 
<script>

export default {
  name:'App',
  components: { 
  },
  data() {
      return {
     page:1,
     
      }
  },
 

  created () {
      this.$store.dispatch('fetchData', this.page)
      this.$store.dispatch('loadCategories')
      
},

}

</script>

<style lang="scss">

</style>