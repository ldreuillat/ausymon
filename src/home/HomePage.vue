<template>
  <div class="home">
    <div>
      <AusyUniversity msg="Welcome to Ausy University" />
      <img class="geek" src="../assets/geek-home.png" aria-hidden="true" alt="Geek" />
    </div>
    <div>
      <router-link class="hire-them-all" to="/selection">AUSYMON – Embauchez les tous!</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}
.geek {
  margin-bottom: 20px;
  height: 300px;
}
.hire-them-all {
  color: black;
  font-weight: bold;
  background-color: red;
  padding: 1em 1.5em;
  text-decoration: none;
}
a:hover {
  color: white;
  cursor: pointer;
}
</style>
