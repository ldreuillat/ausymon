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
    this.$emit('meetingAdded', this.$store.state.interviews.length);
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
    allInterviews() {
      return this.$store.state.interviews;
    },
  },
  methods: {
    addToMeetings() {
      const geek = this.currentGeek;
      const meeting = this.meetDate.toLocaleDateString('fr-FR');
      let available = false;

      this.allInterviews.forEach((element) => {
        if (element.name === geek.name) {
          available = true;
          this.$noty.error(`Un entretien est déjà créé pour le candidat : ${geek.name}`);
        }
      });

      if (available === false) {
        this.$store.commit('addInterview', { ...geek, meeting });
        this.meetings.push({ ...geek, meeting });
        this.$emit('meetingAdded', this.allInterviews.length);
      }
    },
  },
};
</script>

<style>
</style>
