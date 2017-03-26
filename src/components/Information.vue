<template>
  <div class="row">
    <div class="col-md-4">
      <img :src="info.Poster" alt="Poster" class="poster" />
    </div>
    <div class="col-md-8">
      <h1>
        <a target="_blank" :href="info.Homepage">{{ info.Title }} </a>
        <small v-if="info.Year">({{info.Year}})</small>
      </h1>
      <p>
        <span class="label label-success"><i class="fa fa-star"/> {{ info.Rate }}</span>
        <span class="label label-info">{{ info.Runtime }}</span>
        <span class="label label-default">{{ info.Rate }}</span>
        <span>
          <a target="_blank" :href="`http://www.imdb.com/title/${info.imdbID}`">
            <img src="static/imdb.png" height="26" width="30"/>
          </a>
      </span>
      </p>

      <p>
        {{ info.Genres }}
      </p>
      <p class="plot">{{ info.Plot }}</p>
      <section class="videos">
        <iframe class="video" v-for="video in info.Videos" width="320" height="180" :src="`https://www.youtube.com/embed/${video.key}`" frameborder="0" allowfullscreen></iframe>
      </section>
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
      this.info = await info(this.$route.params.id);
    },
  };
</script>

<style lang="scss" scoped>
  .plot {
    font-size: 1.2em;
    font-family: Verdana, Helvetica, sans-serif;
  }
  .poster {
    max-width: 100%;
  }
  .videos {
    .video {
      display: inline;
      margin: 0 3px;
    }
  }
</style>
