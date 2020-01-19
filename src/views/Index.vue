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
        <div class="sing">
            <van-card
                :desc="singsong.ar[0].name"
                :title="singsong.name"
                :thumb="singsong.al.picUrl"
            />
        </div>
        <audio id="mp3" :src="singurl" controls="controls" autoplay class="audio"></audio>
    </div>
</template>
<script>
import About from '../views/About'
import axios from 'axios'
export default {
    data(){
        return {
            flag:false,
            singsong:{
                ar:[{
                    name:'默认'
                }],
                name:'默认',
                al:{
                    picUrl:'https://p2.music.126.net/lqL0xtUVSMY7zpeJPhogEw==/109951164623102435.jpg'
                }
            },
            singurl:''
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
        var pid=this.$store.state.sing
        axios.get('http://localhost:3000/song/detail?ids='+pid).then(res=>{
            console.log(res.data)
            if(res.data.songs[0]){
                this.singsong=res.data.songs[0]
            }
        })
        axios.get('http://localhost:3000/song/url?id='+pid).then(res=>{
            console.log(res)
            this.singurl=res.data.data[0].url
        })
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