<template>
    <div class="videodetail">
        <van-nav-bar
            title="搜索详情"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <video class="vidio" :src="url" controls width="100%" autoplay></video>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            videoid:'',
            url:''
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
            console.log(res)
            this.url=res.data.data.url
        })
    }
}
</script>