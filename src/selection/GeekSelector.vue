<template>
  <div>
    <div class="left-row">
      <div class="part">
        <img src="../assets/geek-home.png" title="Galerie" alt="Galerie" />
        <button class="prev-selector">&#9668;</button>
        <button class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="right-row">
    </div>
  </div>
</template>

<script>
export default {
  name: 'GeekSelector',
};
</script>

<style>
.left-row {
  display:flex;
  justify-content: left;
}
.part {
  position: relative;
  width:255px;
  height:255px;
  border: 3px solid red;
  background-color: grey;
}
.part img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height:255px;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 261px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 261px;
}
</style>
