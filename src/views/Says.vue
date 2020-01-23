<template>
    <div class="says">
        <van-nav-bar
            left-text="评论"
            left-arrow
            @click-left="onClickLeft"
        />
        <ul class="box">
            <li v-for="item in sayslist" :key="item.id">
                <span>{{item.content}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            singid:'',
            sayslist:''
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
    }
}
</script>
<style scoped>
.box{
    width: 100%;
    height: 70%;
    overflow: auto;
    background-color: #94ff00
}
.box li{
    margin: 10px
}
</style>