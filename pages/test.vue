<template>
  <div>
      <h1>DS.vue</h1>
      <form >
          <input type="text" id="nickName" name="nickName" placeholder="nickName" v-model="user.nickName">
          <button  @click.prevent="join">join</button>
      </form>
  </div>
</template>

<script>


export default {
    data(){
        return {
            user: {
                id: null , nickName: null
            }
        }
    },
    methods: {
        join(){
            if(this.user.nickName){
                this.fb_add_user(this.user);
            } else {
                alert('닉네임을 입력해주세요.');
            }
        }
    }
   
}
</script>

<style>

</style>