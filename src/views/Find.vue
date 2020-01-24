<template>
    <div class="find">
        <!-- 轮播图 -->
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in bannerList" :key="item.bannerId">
                <img :src="item.pic" @click="tosing(item.targetId)"/>
            </van-swipe-item>
        </van-swipe>

        <!-- 宫格 -->
        <!-- <van-grid :column-num="5">
            <van-grid-item icon="calender-o" style="color:red;background:red" text="每日推荐" />
            <van-grid-item icon="ecard-pay" text="歌单" />
            <van-grid-item icon="bar-chart-o" text="排行榜" />
            <van-grid-item icon="play-circle-o" text="电台" />
            <van-grid-item icon="video-o" text="直播" />
        </van-grid> -->
        <div class="gong">
            <div>
                <div class="icon">
                    <van-icon name="calender-o" size="24px" color="#fff"/>
                </div>
                <p>每日推荐</p>
            </div>
            <div>
                <div class="icon">
                <van-icon name="ecard-pay" size="24px" color="#fff"/>
                </div>
                <p>歌单</p>
            </div>
            <div>
                <div class="icon">
                <van-icon name="bar-chart-o" size="24px" color="#fff"/>
                </div>
                <p>排行榜</p>
            </div>
            <div>
                <div class="icon">
                <van-icon name="play-circle-o" size="24px" color="#fff"/>
                </div>
                <p>电台</p>
            </div>
            <div>
                <div class="icon">
                <van-icon name="video-o" size="24px" color="#fff"/>
                </div>
                <p>直播</p>
            </div>
        </div>


        <!-- 歌单 -->

        <h3>精品歌单</h3>

        <ul class="songsheet">
            <li
            v-for="item in songsheetList"
            :key="item.id"
            @click="tosongsheetdetail(item.id)">
                <img :src="item.coverImgUrl"/>
                <span>{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            bannerList:'',
            songsheetList:''
        }
    },
    mounted(){
        axios.get('http://localhost:3000/banner?type=2').then(res=>{
            //console.log(res)
            this.bannerList=res.data.banners
        }),
        axios.get('http://localhost:3000/top/playlist/highquality?limit=6')
        .then(res=>{
            console.log(res)
            this.songsheetList=res.data.playlists
        })
    },
    methods:{
        tosing(id){
            //console.log(id)
            if(id){
                this.$store.commit('tosing',id)
                window.location.reload()
            }
        },
        tosongsheetdetail(id){
            this.$router.push({
                name:'songsheetdetail',
                query:{
                    id:id
                }
            })
        }
    }
}
</script>
<style scoped>
img{
    width: 100%;
    height: 100%;
}
.gong{
    height: 72px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
    color: #333
}
.gong div{
    width: 20%;
    height: 72px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content:space-around
}
.gong div p{
    margin: 0;
    padding: 0
}
.gong div .icon{
    width: 40px;
    height: 40px;
    background-color: red;
    margin-left: 25%;
    border-radius: 50%
}
.songsheet{
    height: 30%;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    white-space: nowrap;
}
.songsheet li{
    width: 30%;
    height: 100%;
    margin: 10px
}
.songsheet li img{
    width: 100px;
    height: 100px;
}
.songsheet li span{
    display: block;
    height: 28px;
    font-size: 13px;
    width: 100px;
    line-height: 14px;
    overflow: hidden;
    white-space:normal;
    word-break : break-all;
    word-wrap: break-word;
}
::-webkit-scrollbar {
  display: none;
}
h3{
    margin-left: 10px
}
</style>