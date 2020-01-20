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

</style>