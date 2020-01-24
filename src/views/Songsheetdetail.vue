<template>
    <div class="songsheetdetail">
        <van-nav-bar
            left-text="歌单"
            left-arrow
            @click-left="onClickLeft"
        />
        <div>
            <img :src="songsheetdetail.avatarUrl" class="pimg"/>
            <ul>
                <li v-for="item in songsheetdetail.expertTags" :key="item.id">
                    {{item}}
                </li>
            </ul>
        </div>
        <div>
            <ul>
                <li v-for="(item,index) in songList" :key="item.id">
                    <div>{{index+1}}</div>
                    <div>
                        <span>{{item.name}}</span>
                        <span>{{item.ar[0].name}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            songid:'',
            songsheetdetail:'',
            songList:''
        }
        
    },
    mounted(){
        console.log(this.$route.query.id)
        this.songid=this.$route.query.id
        axios.get('http://localhost:3000/playlist/detail?id='+this.songid).then(res=>{
            console.log(res)
            this.songsheetdetail=res.data.playlist.creator
            this.songList=res.data.playlist.tracks
        })
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
.pimg{
    display: block;
    width: 200px;
    height: 200px;
}
</style>