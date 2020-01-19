<template>
    <div class="find">
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in bannerList" :key="item.bannerId">
                <img :src="item.pic" @click="tosing(item.targetId)"/>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            bannerList:''
        }
    },
    mounted(){
        axios.get('http://localhost:3000/banner?type=2').then(res=>{
            //console.log(res)
            this.bannerList=res.data.banners
        })
    },
    methods:{
        tosing(id){
            //console.log(id)
            if(id){
                this.$store.commit('tosing',id)
                window.location.reload()
            }
            
        }
    }
}
</script>
<style scoped>
img{
    width: 100%;
    height: 100%;
}
</style>