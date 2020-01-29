<template>
<div>
    <van-nav-bar
        title="视频详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
    />
    <video class="vidio" :src="url" controls width="100%" autoplay></video>
    <video class="video" src="http://vodkgeyttp9c.vod.126.net/vodkgeyttp8/68sKFbGS_1328070069_hd.mp4?ts=1580266123&rid=47115DC667964F5C42BDE925D7219E80&rl=3&rs=hPezgwwwzgXCyngmenhazotKzqcCXPfF&sign=dba504ea936dbc81cb8c40b9357d6445&ext=NnR5gMvHcZNcbCz592mDGUGuDOFN18isir07K1EOfL0f2%2FmIwLuRqBaiaReiRsR2XUDg0kbbtwe1%2BFF7mhIV6u81Obb0y8BYclGpVqeKoBjTYLip7%2FxKYhTcTjBSRFjT6EYZ90BGAPrdWenLUvubOL3EHt5ZwjdF5SYNxtflcSbFJ%2FDcA02RO%2FsicNGtcLTxrOS7nkgOGaqG3L%2B5p6KO1l8bJkcn5sIfUFk2jbuTOzIc44Kls%2Fugk%2FXZwba6BoOb" controls width="100%" autoplay></video>
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
        console.log(this.videoid)
        axios.get('http://localhost:3000/video/url?id='+this.videoid).then(res=>{
            console.log(res)
            this.url=res.data.urls[0].url
        })
    }
}
</script>