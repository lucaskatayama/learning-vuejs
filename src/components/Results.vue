<template>
<div>
  <div class="row">
    <div class="col-md-4">
      <input class="form-control"
              placeholder="Search"
              v-model="query"
              @keyup.enter="changeSearch" />

    </div>
    <div class="col-md-2">
      <button class="btn btn-default" @click="changeSearch">
        <i class="fa fa-search"></i>
      </button>
    </div>

  </div>
  <div class="row">
    <div class="col-md-12" v-if="results.length !== 0">
      {{ `${results.length} results (${time}s)` }}
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <ul>
        <li v-for="result in results"
            class="search-item"
            @click="open(result.imdbID)"
        >
          <SearchItem :key="result.imdbID" :data="result" />
        </li>
      </ul>
      <div class="col-md-12" v-if="results.length === 0">
        No Results
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import moment from 'moment';
  import { search } from '@/services/search';
  import { router } from '@/router';
  import SearchItem from '@/components/SearchItem';

  export default {
    name: 'Results',
    components: {
      SearchItem,
    },
    data() {
      return {
        results: [],
        query: this.$route.query.q,
      };
    },
    async created() {
      await this.search();
    },
    methods: {
      open(me) {
        router.push({ name: 'information', params: { id: me } });
      },
      async search() {
        const start = new Date();
        const result = await search(this.$route.query.q);
        const end = new Date();
        this.results = result.data.Search;
        this.time = moment.duration(end - start).as('seconds');
      },
      changeSearch() {
        router.push({ name: 'results', query: { q: this.query } }, () => {
          this.search();
        });
      },
    },
  };
</script>
<style lang="scss" scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  .search-item {
    padding: 8px 0;
    &:hover {
      background-color: #ccc;
    }
  }
</style>
