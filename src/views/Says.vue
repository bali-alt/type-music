<template>
    <div class="says">
        <van-nav-bar
            left-text="评论"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="top">
            <ul class="box">
                <li v-for="item in sayslist" :key="item.id">
                    <p>{{item.content}}</p>
                    <p>{{item.time | glq}}</p>
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
        axios.get('http://localhost:3000/comment/music?id='+this.singid).then(res=>{
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
}
.top{
    margin-top: 26px
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
</style>