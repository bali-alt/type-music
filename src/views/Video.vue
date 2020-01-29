<template>
    <div class="video">

        <van-tabs type="card">
            <van-tab title="MV">
                <van-search placeholder="搜索MV" v-model="value" @input="searchmv" @keyup.enter="huoqu(value)"/>
                <ul v-show="flag" class="guan">
                    <li v-for="item in list" :key="item.id" @click="huoqu(item.keyword)">
                        {{item.keyword}}
                    </li>
                </ul>
                <div class="mvlist">
                    <div v-for="item in mvList" :key="item.id" class="cover" @click="tovideodetail(item.id)">
                        <img :src="item.cover"/>
                        <span>{{item.name}}</span>
                    </div>
                </div>
            </van-tab>
            <van-tab title="视频">
                <van-search placeholder="搜索视频" v-model="value1" @input="searchvideo"/>
                <ul v-show="flag" class="guan">
                    <li v-for="item in list" :key="item.id" @click="huoquvideo(item.keyword)">
                        {{item.keyword}}
                    </li>
                </ul>
                <div class="list" v-show="videoflag">
                    <div v-for="item in videoList" :key="item.id" class="cover" @click="tovideodetail(item.id)">
                        <img :src="item.cover"/>
                        <span>{{item.name}}</span>
                    </div>
                </div>
                <div v-show="!videoflag">
                    <div v-for="item in videoLists" :key="item.vid" class="cover" @click="tovideosing(item.vid)">
                        <img :src="item.coverUrl"/>
                        <span>{{item.title}}</span>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            mvList:'',
            videoList:'',
            value:'',
            flag:false,
            list:'',
            videoflag:true,
            videoLists:'',
            value1:''
        }
    },
    methods:{
        tovideosing(id){
            this.$router.push({
                name:'videosing',
                query:{
                    id:id
                }
            })
        },
        tovideodetail(id){
            this.$router.push({
                name:'videodetail',
                query:{
                    id:id
                }
            })
        },
        huoqu(index){
            axios.get("http://localhost:3000/search?keywords=" +index +"&type=1004").then(res=>{
                //console.log(res)
                this.value=index
                this.flag=false
                this.mvList=res.data.result.mvs
            })
        },
        huoquvideo(index){
            axios.get("http://localhost:3000/search?keywords=" +index +"&type=1014").then(res=>{
                //console.log(res)
                this.value1=index
                this.flag=false
                this.videoLists=res.data.result.videos
                this.videoflag=false
            })
        },
        searchmv(){
            if(this.value==''){
                    this.list=''
                    this.flag=false
                } else{
                    this.flag=true
                }
            axios.get('http://localhost:3000/search/suggest?keywords=' +this.value+'&type=mobile').then(res=>{
                //console.log(res)
                this.list=res.data.result.allMatch
            })
        },
        searchvideo(){
            if(this.value1==''){
                    this.list=''
                    this.flag=false
                } else{
                    this.flag=true
                }
            axios.get('http://localhost:3000/search/suggest?keywords=' +this.value1+'&type=mobile').then(res=>{
                //console.log(res)
                this.list=res.data.result.allMatch
            })
        }

        // //视频
        // searchvideo(){
        //     axios.get("http://localhost:3000/search?keywords=" +index +"&type=1004").then(res=>{
        //         console.log(res)
        //         this.value=index
        //         this.flag=false
        //         this.videoList=res.data.result
        //     })
        // }
    },
    mounted(){
        axios.get('http://localhost:3000/mv/all?area=内地').then(res=>{
            //console.log(res)
            this.mvList=res.data.data
        })
        axios.get('http://localhost:3000/mv/all?area=港台').then(res=>{
            //console.log(res)
            this.videoList=res.data.data
        })
    }
}
</script>
<style scoped>
.video{
    margin-top: 46px;
    margin-bottom: 100px;
    height: 2000px;
}
.mvlist{
    width: 100%;
    height: 100%;
    margin-bottom: 100px;
}
.cover{
    width: 45vw;
    height: 60vw;
    float: left;
    margin-left: 5%;
    margin-bottom:10px
}
.cover img{
    width: 40vw;
    height: 40vw;
    display: block;
    margin: 0 2.5vw
}
.cover span{
    margin: 0 2.5vw;
    color: orchid;
    font-size: 14px
}
.guan{
    width: 80%;
    position: fixed;
    top:120px;
    left: 8%;
    background: rgba(94,0,0,0.9);
    color: #fff;
}
.guan li{
    border-bottom: 1px solid #94ff00;
    padding: 10px
}
</style>