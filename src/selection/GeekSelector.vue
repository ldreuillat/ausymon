<template>
  <div class="global-row">
    <div class="left-row">
      <div class="part">
        <img v-bind:src="selectedGeek.src" @click="showTechnoDetails()"
        title="Galerie" alt="Galerie" />
        <button class="first-selector" v-on:click="selectFirstGeek()">Début</button>
        <button class="prev-selector" v-on:click="selectPreviousGeek()">&#9668;</button>
        <button class="next-selector" v-on:click="selectNextGeek()">&#9658;</button>
        <button class="last-selector" v-on:click="selectLastGeek()">Fin</button>
      </div>
    </div>
    <CollapsibleSection>
    <div class="right-row">
      <CandidateDetails :currentGeek="selectedGeek"
        @meetingAdded="alertNewInterview($event)" />
      <table id="geek-info">
        <caption>Info de rechargement de la page</caption>
        <tr>
          <th id="msg">Message</th>
        </tr>
        <tr>
          <td>{{ this.msg }}</td>
        </tr>
      </table>
    </div>
    </CollapsibleSection>
  </div>
</template>

<script>

import availableCandidates from '../data/candidates';
import createdHookMixins from '../mixins/created-hook-mixins';
import CandidateDetails from '../details/CandidateDetails.vue';
import CollapsibleSection from '../shared/CollapsibleSection.vue';

function getPreviousGeekIndex(index) {
  const decrementedIndex = index - 1;

  return decrementedIndex < 0 ? 0 : decrementedIndex;
}
function getNextGeekIndex(index, length) {
  const incrementedIndex = index + 1;

  return incrementedIndex > length - 1 ? length - 1 : incrementedIndex;
}

export default {
  name: 'GeekSelector',

  beforeRouteLeave(to, from, next) {
    if (this.interviewPlaned) {
      next(true);
    } else {
      next(false);
    }
  },
  components: { CandidateDetails, CollapsibleSection },
  data() {
    return {
      interviewPlaned: false,
      availableCandidates,
      selectGeekIndex: 0,
      meetDate: new Date(),
      meetings: [],
    };
  },
  mixins: [createdHookMixins],
  computed: {
    selectedGeek() {
      return availableCandidates.geeks[this.selectGeekIndex];
    },
  },
  methods: {
    selectNextGeek() {
      this.meetDate = new Date();
      this.selectGeekIndex = getNextGeekIndex(
        this.selectGeekIndex,
        availableCandidates.geeks.length,
      );
    },
    selectPreviousGeek() {
      this.meetDate = new Date();
      this.selectGeekIndex = getPreviousGeekIndex(this.selectGeekIndex);
    },
    selectFirstGeek() {
      this.meetDate = new Date();
      this.selectGeekIndex = 0;
    },
    selectLastGeek() {
      this.meetDate = new Date();
      this.selectGeekIndex = availableCandidates.geeks.length - 1;
    },
    alertNewInterview(nbInterviews) {
      if (nbInterviews > 0) {
        this.interviewPlaned = true;
      }
      this.$emit('geekMeetingAdded', nbInterviews);
    },
    showTechnoDetails() {
      this.$router.push({
        name: 'TechnoDetails',
        params: {
          candidateId: this.selectGeekIndex,
        },
      });
    },
  },
};
</script>

<style lang="scss">
$font-stack: "Trebuchet MS", Arial, Helvetica, sans-serif;
$hover-color: #ddd;

.date-meeting {
  display: flex;
  width: 50%;
}
#geek-info {
  font-family: $font-stack;
  border-collapse: collapse;
  width: 100%;

  td,th {
    border: 1px solid $hover-color;
    padding: 8px;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: red;
    color: white;
  }

  tr:hover {
    background-color: $hover-color;
  }
}

.global-row {
  display: flex;
}
.left-row {
  justify-content: left;
}
.right-row {
  justify-content: left;
  margin-left: 100px;
}
.part {
  position: relative;
  width: 255px;
  height: 255px;
  border: 3px solid red;
  background-color: grey;

  img {
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 255px;
  }
}
.first-selector {
  position: absolute;
  z-index: 1;
  top: 258px;
  left: -3px;
  width: 130px;
}
.last-selector {
  position: absolute;
  z-index: 1;
  top: 258px;
  left: 128px;
  width: 130px;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 282px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 282px;
}
</style>
