<template>
  <div class="row">
    <div class="col-md-4">
      <img :src="info.Poster" v-if="info.Poster !== 'N/A'" alt="Poster" />
      <img src="static/no-poster.jpg" v-if="info.Poster === 'N/A'" alt="Poster" />
    </div>
    <div class="col-md-8">
      <h1><a target="_blank" :href="`http://www.imdb.com/title/${$route.params.id}`">{{ info.Title }} </a><small>({{info.Year}})</small></h1>
      <p>
        <span class="label label-success"><i class="fa fa-star"/> {{ info.imdbRating }}</span>
        <span class="label label-info">{{ info.Runtime }}</span>
        <span class="label label-default">{{ info.Rated }}</span>
      </p>
      <p>
        {{ info.Genre }}
      </p>
      <p class="plot">{{ info.Plot }}</p>
      <p>
        <span class="director">Director: </span><span>{{ info.Director }}</span>
      </p>
      <p>
        <span class="writer">Writer: </span><span>{{ info.Writer }}</span>
      </p>
      <p>
        <span class="actors">Stars: </span><span>{{ info.Actors }}</span>
      </p>
    </div>
  </div>
</template>


<script>
  import { info } from '@/services/search';

  export default {
    data() {
      return {
        info: {},
      };
    },
    async beforeCreate() {
      const resp = await info(this.$route.params.id);
      this.info = resp.data;
    },
  };
</script>

<style lang="scss" scoped>
  .plot {
    font-size: 1.2em;
    font-family: Verdana, Helvetica, sans-serif;
  }
  .actors, .director, .writer {
    font-weight: 900;
    font-family: Verdana, Helvetica, sans-serif;
    color: #999;
  }
</style>
