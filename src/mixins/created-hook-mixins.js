export default {
  data() {
    return {
      msg: '',
    };
  },
  created() {
    console.log('Component yet created!');
    const reloadDate = new Date();
    this.msg = `Page rechargée à ${reloadDate.toLocaleString('fr-FR')}`;
  },
};
