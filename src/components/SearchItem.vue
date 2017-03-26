<template>
  <span class="row">
    <!--Poster-->
    <div class="col-md-1 no-padding">
      <img :src="Poster" v-if="Poster !== 'N/A'" alt="Poster" class="poster" />
      <img :src="NoPoster" v-if="Poster === 'N/A'" alt="Poster" class="poster" />
    </div>
    <!--Info-->
    <div class="col-md-9 text-left">
      <div class="title">{{ Title }}</div>
      <div class="year">{{ Year }}</div>
    </div>
  </span>
</template>


<script>
  import NoPoster from '@/assets/imgs/no-poster.jpg';

  export default {
    props: ['data'],
    data() {
      return {
        NoPoster,
        ...this.data,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .poster {
    height: 8em;
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
