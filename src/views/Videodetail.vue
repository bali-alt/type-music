<template>
    <div class="videodetail">
        <van-nav-bar
            title="搜索详情"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <video class="vidio" :src="url" controls width="100%" autoplay></video>
        <h3>MV评论</h3>
        <ul>
            <li v-for="item in mvsyaslist" :key="item.id" class="mvsaysli">
                <div>
                    <img :src="item.user.avatarUrl"/>
                    <span>{{item.user.nickname}}</span>
                    <span>{{item.time | glq}}</span>
                </div>
                <div>{{item.content}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            videoid:'',
            url:'',
            mvsyaslist:''
        }
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        }
    },
    mounted(){
        this.videoid=this.$route.query.id
        axios.get('http://localhost:3000/mv/url?id='+this.videoid).then(res=>{
            //console.log(res)
            this.url=res.data.data.url
        })
        axios.get('http://localhost:3000/comment/mv?limit=50&id='+this.videoid).then(res=>{
            //console.log(res)
            this.mvsyaslist=res.data.comments
        })
    },
    filters:{
        glq(timeStamp){
                // let timeStamp=res.data.comments[i].time
                let year = new Date(timeStamp).getFullYear();
                let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
                let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
                let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
                let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
                let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
                return year + "年" + month + "月" + date +"日"+" "+hh+":"+mm+':'+ss ;
        }
    }
}
</script>
<style scoped>
.videodetail{
    margin-bottom: 80px
}
.mvsaysli{
    width: 80%;
    margin-left: 10%;
    margin-top: 20px
}
.mvsaysli div:first-of-type{
    width: 100%;
    height: 40px;
    
}
.mvsaysli div:first-of-type img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    float: left;
    display: block
}
.mvsaysli div:first-of-type span:first-of-type{
    width: 30%;
    overflow: hidden;
    height: 40px;
    line-height: 40px;
    display: block;
    float: left;
    font-size: 14px;
    color: #333;
    margin-left: 10%
}
.mvsaysli div:first-of-type span:last-of-type{
    width: 30%;
    overflow: hidden;
    height: 40px;
    line-height: 40px;
    display: block;
    float: left;
    font-size: 12px;
    color: #333;
    margin-left: 10%
}
.mvsaysli div:last-of-type{
    width: 100%;
    margin-top: 5px;
    font-size: 18px;
    color: #000;
    font-weight: 600;
    line-height: 30px
}
h3{
    margin-left: 20px
}
.van-nav-bar {
    position: relative;
    height: 46px;
    line-height: 46px;
    text-align: center;
    background-color: #fff;
    -webkit-user-select: none;
    user-select: none;
    position: fixed;
    width: 100%;
}
.vidio{
    margin-top: 46px
}
</style>