<template>
  <div>
    <ul class="menu">
      <li>
        <router-link :to="{ name: 'Use' }">Consignes d'utilisation</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Glossary' }">Glossaire</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Copyright' }">Copyright</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'ShowUsages',
};
</script>

<style>
.menu {
  display: flex;
  justify-content: space-around;
  margin: 0 100px;
  font-size: 20px;
}
ul {
  list-style-type: none;
}
blockquote {
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  quotes: "\201C""\201D""\2018""\2019";
}
blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}
blockquote p {
  display: inline;
}
</style>
