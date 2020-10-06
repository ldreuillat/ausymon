<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link class="header-link" :to="{ name: 'Home' }" exact>
              <img class="logo" src="./assets/ausyball.png" alt="Logo" />
              Hire them all
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="header-link"
              :to="{ name: 'GeekSelector' }"
              exact
            >
              <img class="logo" src="./assets/candidate.png" alt="Logo" />
              Sélection
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="header-link" :to="{ name: 'ShowUsages' }" exact>
              <img class="logo" src="./assets/usages.png" alt="Logo" />
              Usages
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="header-link" :to="{ name: 'ShowInterviews' }" exact>
              <AgendaCount :count="globalNbInterviews" />
            </router-link>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <router-view
        @geekMeetingAdded="
          (interviews) => (this.globalNbInterviews = interviews)
        "
      />
      <br/><br/>
      <div class="intro-footer">
        <router-view name="footer" />
      </div>
    </main>
  </div>
</template>

<script>
import AgendaCount from './agenda/AgendaCount.vue';

export default {
  name: 'App',
  components: {
    AgendaCount,
  },

  created() {
    this.$store.dispatch('getInterviews');
  },
  computed: {
    globalNbInterviews: {
      get() {
        return this.$store.state.interviews.length;
      },
      set(nbInterviews) {
        return nbInterviews;
      },
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
body {
  background: linear-gradient(to bottom, red, yellow);
  background-attachment: fixed;
}
main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 500px;
}
header {
  background-color: yellow;
  width: 1084px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid black;
}
.logo {
  vertical-align: middle;
  height: 50px;
}
.header-link {
  color: black;
  font-weight: bold;
  text-decoration: none;
}
.header-link:hover {
  color: red;
  cursor: pointer;
}
.router-link-active {
  border-radius: 5px;
  padding: 2px;
  color: yellow;
  background-color: red;
}
.intro-footer {
  position: relative;
  width: 100%;
  top: 30px;
  left: 0px;
  color: yellow;
  background-color: red;
  padding: 3px;
}
</style>
