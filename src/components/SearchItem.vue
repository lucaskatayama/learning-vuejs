<template>
  <span class="row">
    <!--Poster-->
    <div class="col-md-1 col-sm-2 no-padding">
      <img :src="Poster" v-if="Poster !== 'N/A'" alt="Poster" class="poster" />
      <img src="static/no-poster.jpg" v-if="Poster === 'N/A'" alt="Poster" class="poster" />
    </div>
    <!--Info-->
    <div class="col-md-11 col-sm-10 text-left">
      <div class="title">{{ Title }}</div>
      <div class="year">{{ Year }}</div>
    </div>
  </span>
</template>


<script>
  export default {
    props: ['data'],
    data() {
      return {
        ...this.data,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .poster {
    max-height: 8em;
    max-width: 6em;
    display: block;

  }
  .title {
    text-align: left;
    font-size: 1.2em;
  }
  .row {
    margin: 2em 0;
  }
  .no-padding {
    padding: 0;
  }
</style>
