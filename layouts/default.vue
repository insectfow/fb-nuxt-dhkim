<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
export default {
  async mounted(){
    await this.fb_login();
  }
}
</script>
<style>

</style>
