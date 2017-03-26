<template>
  <div id="app">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <router-link to="/" class="navbar-brand">
            <img class="logo" src="static/logo.png"/>
            Moogle
          </router-link>
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
              <a>
                <i class="fa fa-info-circle"></i>
              </a>
            </router-link>
            <router-link :to="{name: 'contact'}" tag="li" active-class="active" exact>
              <a>
                <i class="fa fa-envelope"></i>
              </a>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
    <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss" scoped>
#app {
  margin-top: 50px;
  .navbar-brand {
    .logo {
      float: left;
      height: 36px;
      margin-top: -8px;
    }
  }
  main.container {
    padding-top: 10px;
  }
}

</style>
