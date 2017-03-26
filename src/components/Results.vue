<template>
<div>
  <div class="row">
    <div class="col-md-6 col-sm-8">
      <input class="form-control"
              placeholder="Search"
              v-model="searchTerm"
              @keyup.enter="changeSearch" />

    </div>
    <div class="col-md-2 col-sm-2">
      <button class="btn btn-default" @click="changeSearch">
        <i class="fa fa-search"></i>
      </button>
    </div>

  </div>
  <div class="row">
    <div class="col-md-12" v-if="results.length">
      {{ `${results.length} results (${time}s)` }}
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <span v-for="result in results"
          class="search-item"
          @click="open(result.id)"
      >
        <SearchItem :key="result.id" :data="result" />
      </span>
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
        searchTerm: '',
      };
    },
    async created() {
      this.searchTerm = this.$route.query.q;
      await this.search();
    },
    methods: {
      open(me) {
        router.push({ name: 'information', params: { id: me } });
      },
      async search() {
        const start = new Date();
        this.results = await search(this.$route.query.q);
        const end = new Date();
        this.time = moment.duration(end - start).as('seconds');
      },
      changeSearch() {
        router.push({ name: 'results', query: { q: this.searchTerm } }, () => {
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
    cursor: pointer;
    padding: 8px 0;
    display: inline-flex;
    &:hover {
      background-color: #ccc;
    }
  }
</style>
