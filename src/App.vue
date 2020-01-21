<template>
  <div id="app">
    <router-view/>
    <div class="sing">
            <van-card
                :desc="singsong.ar[0].name"
                :title="singsong.name"
                :thumb="singsong.al.picUrl"
                @click="tosingdetail(singsong.id)"
            />
    </div>
    <audio id="mp3" :src="singurl" controls="controls" autoplay class="audio"></audio>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return {
      singsong:{
                ar:[{
                    name:'默认'
                }],
                name:'默认',
                al:{
                    picUrl:'https://p2.music.126.net/lqL0xtUVSMY7zpeJPhogEw==/109951164623102435.jpg'
                }
            },
            singurl:'',
            singid:''
    }
  },
  mounted(){
    // this.$store.state.sing
    // localStorage.getItem('sing')
    this.singid=this.$store.getters.getsingid
        axios.get('http://localhost:3000/song/detail?ids='+this.singid).then(res=>{
            console.log(res.data)
            if(res.data.songs[0]){
                this.singsong=res.data.songs[0]
            }
        })
        axios.get('http://localhost:3000/song/url?id='+this.singid).then(res=>{
            console.log(res)
            if(res.data.data[0].url){
              this.singurl=res.data.data[0].url
            }
        })
  },
  // updated(){
  //   axios.get('http://localhost:3000/song/detail?ids='+this.singid).then(res=>{
  //           console.log(res.data)
  //           if(res.data.songs[0]){
  //               this.singsong=res.data.songs[0]
  //           }
  //       })
  //       axios.get('http://localhost:3000/song/url?id='+this.singid).then(res=>{
  //           console.log(res)
  //           if(res.data.data[0].url){
  //             this.singurl=res.data.data[0].url
  //           }
  //       })
  // },
  watch: {
    // shipStatusArr: {
    //   handler(newValue, oldValue) {
    //     console.log(newValue, oldValue)
    //   },
    //   deep: true,
    //   immediate: true
    // }
     singid: function (newValue, oldVal) {
        console.log( newValue, oldVal )
    }
},
methods:{
  tosingdetail(id){
    this.$router.push({
      name:'singdetail',
      query:{
        id:id
      }
    })
  }
}
}
</script>

<style>
  .sing{
    width: 100%;
    height: 80px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #0094ff;
}
.audio{
    width: 70%;
    height: 30px;
    position: fixed;
    bottom: 2px;
    right: 5px;
    background-color: #fff
}
</style>
