<template>
  <div class="text-center">
    <div class="row">
      <h1>
        <i class="fa fa-ticket"></i>Search for Movies
      </h1>
    </div>
    <div class="row">
      <div class="col-lg-offset-4 col-lg-4">
        <input class="form-control"
              placeholder="Search"
              v-model="searchFor"
              @keyup.enter="search" />
      </div>
    </div>
    <div class="row space-top">
      <button class="btn btn-default" @click="search">
        <i class="fa fa-search"></i>
        Search
      </button>
    </div>

  </div>
</template>

<script>
import { router } from '@/router';

export default {
  name: 'hello',
  data() {
    return {
      searchFor: '',
    };
  },
  methods: {
    search() {
      router.push({ name: 'results', query: { q: this.searchFor } });
    },
  },
};
</script>
<style>
.space-top {
  padding-top: 10px;
}
</style>
