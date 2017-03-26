<template>
  <div id="app">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">

          <a class="navbar-brand" href="https://vuejs.org/" target="_blank">
            <img class="logo" src="https://vuejs.org/images/logo.png"/>
            VueJS
          </a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <router-link :to="{name: 'search'}" tag="li" active-class="active" exact>
              <a>
                <i class="fa fa-search"/>
                Search
              </a>
            </router-link>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <router-link :to="{name: 'about'}" tag="li" active-class="active" exact>
              <a>About</a>
            </router-link>
            <router-link :to="{name: 'contact'}" tag="li" active-class="active" exact>
              <a>Contact</a>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss" scoped>
#app {
  padding-top: 60px;
  .navbar-brand {
    .logo {
      float: left;
      height: 36px;
      margin-top: -8px;
    }
  }
}

</style>
