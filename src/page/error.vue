<template>
  <div class="error-page">
    <h1>404</h1>
    <h2>Page Not Found</h2>
  </div>
</template>

<script>
export default{
    mounted(){
        console.log("error!~~~~~~~~~~");
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    html,body{height:100%;}
  .error-page {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-weight: normal;
    line-height: 4rem;
    // height: 16rem;
    // height: 100%;
    // padding-top: torem(281);
    text-align: center;
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 1.6rem;
    }
  }
</style>
