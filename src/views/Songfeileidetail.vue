<template>
    <div class="songfeileidetail">
        <van-nav-bar
            :title="name"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <van-card
            v-for="item in songfeileidetailList"
            :key="item.id"
            :desc="item.name"
            :thumb="item.coverImgUrl"
            @click="tosongsheet(item.id)"
        />
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            name:'',
            songfeileiid:'',
            songfeileidetailList:''
        }
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        },
        tosongsheet(id){
            this.$router.push({
                name:'songsheetdetail'
            })
            this.$store.commit('tosong',id)
        }
    },
    mounted(){
        //console.log(this.$route.query.name)
        this.name=this.$route.query.name
        this.songfeileiid=this.$route.query.cat
        axios.get('http://localhost:3000/top/playlist?limit=20&order=new&cat:'+this.songfeileiid)
        .then(res=>{
            console.log(res)
            this.songfeileidetailList=res.data.playlists
        })
    }
}
</script>