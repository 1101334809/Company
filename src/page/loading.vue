<template>
    <section class="loading">loading
    </section>
</template>

<script>
export default{
    mounted(){
        console.log("loading!~~~~~~~~~~");
    }
}
</script>

<style>
html,body{
    height: 100%;
}
.loading{
    height: 100%;
    font-size: 20px;
    color:brown;
}
</style>