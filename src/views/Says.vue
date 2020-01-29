<template>
    <div class="says">
        <van-nav-bar
            left-text="评论"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="top">
            <!-- <ul class="box">
                <li v-for="item in sayslist" :key="item.id">
                    <p>{{item.content}}</p>
                    <p>{{item.time | glq}}</p>
                </li>
            </ul> -->

            <ul>
                <li v-for="item in sayslist" :key="item.id" class="mvsaysli">
                    <div>
                        <img :src="item.user.avatarUrl"/>
                        <div class="time">
                            <div>{{item.user.nickname}}</div>
                            <div>{{item.time | glq}}</div>
                        </div>
                    </div>
                    <div>{{item.content}}</div>
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
            singid:'',
            sayslist:'',
            nowTime:'',
            timelist:[]
        }
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        }
    },
    mounted(){
        this.singid=this.$store.state.sing
        axios.get('http://localhost:3000/comment/music?limit=50&id='+this.singid).then(res=>{
            console.log(res)
            this.sayslist=res.data.comments
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
                return year + "." + month + "." + date +"."+" "+hh+":"+mm+':'+ss ;
        }
    }
}
</script>
<style scoped>
.says{
    overflow: hidden;
    margin-bottom: 80px
}
.top{
    margin-top: 46px
}
.box{
    width: 100%;
    height: 70%;
    float: left;
}
.top li{
    margin: 10px;
    padding: 10px;
    width: 80%;
    letter-spacing: 2px;
    border-bottom: 1px solid #ccc;
    line-height: 24px
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
.mvsaysli{
    width: 80%;
    margin-left: 10%;
    margin-top: 20px
}
.mvsaysli div:first-of-type{
    width: 100%;
    height: 40px;
    display: flex
}
.mvsaysli div:first-of-type img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    float: left;
    display: block
}
.mvsaysli div:first-of-type .time{
    width: 80%;
    float: left;
    margin-left: 10px;
    height: 40px;
    margin-top: 0
}
.mvsaysli div:first-of-type .time div:first-of-type{
    width: 100%;
    height: 26px;
    font-size: 14px;
    display: block;
    color: #333;
    line-height: 26px;
    overflow: hidden;
}
.mvsaysli div:first-of-type .time div:last-of-type{
    width: 100%;
    height: 14px;
    font-size: 12px;
    display: block;
    color: #333;
    line-height: 14px;
}
/* .mvsaysli div:first-of-type span:first-of-type{
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
    overflow: auto;
    height: 40px;
    line-height: 40px;
    display: block;
    float: left;
    font-size: 12px;
    color: #333;
    margin-left: 10%
} */
.mvsaysli div:last-of-type{
    width: 100%;
    margin-top: 5px;
    font-size: 18px;
    color: #000;
    font-weight: 600;
    line-height: 30px
}
</style>