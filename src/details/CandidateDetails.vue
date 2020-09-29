<template>
  <div>
    <table id="geek-info">
      <caption>Fiche candidat</caption>
      <tr>
        <th id="name">Nom</th>
        <th id="title">Titre</th>
        <th id="years">Experience</th>
        <th id="level">Niveau</th>
        <th id="salary">Salaire</th>
        <th id="profitability">Rentabilité</th>
      </tr>
      <tr>
        <td :style="levelStyle">{{currentGeek.name}}</td>
        <td>{{currentGeek.title}}</td>
        <td>{{currentGeek.years}} ans</td>
        <td><CandidateRating :level='currentGeek.level' /></td>
        <td>{{currentGeek.salary}} €</td>
        <td>
          <img v-if="profitabilityCandidate === 1" src="../assets/icon_sick.png" alt="Mauvaise" />
          <img v-if="profitabilityCandidate === 2" src="../assets/icon_medium.png" alt="Moyenne" />
          <img v-if="profitabilityCandidate === 3" src="../assets/icon_smile.png" alt="Bonne" />
        </td>
      </tr>
      <tr>
        <td colspan="6">
          <div class="date-meeting">
            <vc-date-picker v-model="meetDate" />
            <button v-on:click="addToMeetings()">Ajouter un entretien</button>
          </div>
        </td>
      </tr>
    </table>
    <table v-if="meetings.length > 0" id="geek-info">
        <caption>Liste des entretiens</caption>
        <tr>
          <th id="name">Nom</th>
          <th id="meeting">Date d'entretien</th>
        </tr>
        <tr v-for="(meet, index) in meetings" :key="index">
          <td>{{ meet.name }}</td>
          <td>{{ meet.meeting }}</td>
        </tr>
      </table>
  </div>
</template>

<script>
import CandidateRating from '../rating/CandidateRating.vue';

export default {
  name: 'CandidateDetails',
  components: { CandidateRating },

  props: ['currentGeek'],

  data() {
    return {
      meetDate: new Date(),
      meetings: [],
    };
  },
  created() {
    this.$emit('meetingAdded', 0);
  },
  computed: {
    levelStyle() {
      return {
        backgroundColor: this.currentGeek.level > 7 ? 'green' : 'yellow',
        color: this.currentGeek.level > 7 ? 'white' : 'black',
      };
    },
    profitabilityCandidate() {
      const ratio = this.currentGeek.salary / this.currentGeek.years;

      if (ratio > 10000) {
        return 1;
      }
      if (ratio <= 10000 && ratio > 5000) {
        return 2;
      }
      return 3;
    },
  },
  methods: {
    addToMeetings() {
      const geek = this.currentGeek;
      const meeting = this.meetDate.toLocaleDateString('fr-FR');
      let available = false;

      this.meetings.forEach((element) => {
        if (element.name === geek.name) {
          available = true;
        }
      });

      if (available === false) {
        this.meetings.push({ ...geek, meeting });
        this.$emit('meetingAdded', this.meetings.length);
      }
    },
  },
};
</script>

<style>
</style>
