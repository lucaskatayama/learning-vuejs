<template>
  <div class="item">
    <!--Poster-->
    <div class="row">
      <div class="col-md-12 text-center">
        <img :src="Poster" v-if="Poster !== 'N/A'" alt="Poster" class="poster" />
      </div>
    </div>
    <!--Info-->
    <div class="row">
      <div class="text-enter">
        <div class="title text-center">{{ Title }}</div>
        <div class="year text-center">{{ Year }}</div>
      </div>
    </div>
  </div>
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
    max-height: 16em;
    max-width: 12em;
    display: inline;
  }
  .title {
    font-size: 1.2em;
  }
  .row {
    margin: 1em 0;
  }
  .no-padding {
    padding: 0;
  }
</style>
