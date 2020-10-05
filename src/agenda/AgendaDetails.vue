<template>
  <div>
    <table v-if="interviews.length > 0" id="geek-info">
        <caption>Liste des entretiens</caption>
        <tr>
          <th id="name">Nom</th>
          <th id="title">Poste</th>
          <th id="level">Niveau</th>
          <th id="meeting">Date d'entretien</th>
        </tr>
        <tr v-for="(interview, index) in interviews" :key="index">
          <td>{{ interview.name }}</td>
          <td>{{ interview.title }}</td>
          <td>{{ interview.level }}</td>
          <td>{{ interview.meeting }}</td>
        </tr>
      </table>
  </div>
</template>

<script>
export default {
  name: 'AgendaDetails',

  computed: {
    interviews() {
      return this.$store.getters.levelInterviews;
    },
  },
};
</script>

<style>

</style>
