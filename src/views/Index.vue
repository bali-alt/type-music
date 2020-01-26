<template>
    <div class="index">
        <div class="box">
            <router-link to='/user'>我的</router-link>
            <router-link to='/find'>发现</router-link>
            <router-link to='/yuncun'>云村</router-link>
            <router-link to='/video'>视频</router-link>
        </div>
        <router-view></router-view>

        <van-icon name="search" @click="tosearch" class="search"/>
        <van-icon name="wap-nav" class="about" @click="changeFlag"/>
        <About class="my" v-show="flag"></About>
        <div class="myright" v-show="flag" @click="changeFlag"></div>

        <!-- 歌曲播放 -->
        <!-- :desc="singsong.ar[0].name" 是歌曲的作者没没有加上 -->
        <!-- <div class="sing">
            <van-card
                :desc="singsong.ar[0].name"
                :title="singsong.name"
                :thumb="singsong.al.picUrl"
            />
        </div>
        <audio id="mp3" :src="singurl" controls="controls" autoplay class="audio"></audio> -->
    </div>
</template>
<script>
import About from '../views/About'
import axios from 'axios'
export default {
    data(){
        return {
            flag:false,
        }
    },
    methods:{
        tosearch(){
            this.$router.push({
                name:'search'
            })
        },
        changeFlag(){
            this.flag=!this.flag
            //console.log(111)
        }
    },
    created(){

    },
    components:{
        About
    }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0
}
.box{
    width: 60%;
    margin-left: 20%;
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.box a{
    color:#333
}
.router-link-active{
    font-size: 20px;
    color: black;
    font-weight: 700
}
.search{
    position: fixed;
    top: 15px;
    right: 15px;
}
.about{
    position: fixed;
    top: 15px;
    left: 15px;
}
.my{
    height: 100%;
    width: 80%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    background-color: #94ff00
}
.myright{
    width: 20%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #ccc;
    opacity: 0.3;
    z-index: 100
}

</style>