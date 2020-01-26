<template>
    <div class="songfeilei">
        <van-nav-bar
            title="歌单分类"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div>
            <div class="songbox">
                <div v-for="item in songfeileilist" :key="item.id" class="listbox" @click="todetail(item.category,item.name)">
                    <div>{{item.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            songfeileilist:''
        }
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        },
        todetail(id,name){
            this.$router.push({
                name:'songfeileidetail',
                query:{
                    cat:id,
                    name:name
                }
            })
        }
    },
    mounted(){
        axios.get('http://localhost:3000/playlist/catlist').then(res=>{
            console.log(res)
            this.songfeileilist=res.data.sub
        })
    }
}
</script>
<style scoped>
.listbox{
    width: 30vw;
    height: 30vw;
    background-color: #0094ff;
    opacity: 0.7;
    float: left;
    margin: 1.667vw;
    color: #fff;
    text-align: center;
    line-height: 30vw;
    font-size: 24px;
    font-weight: 700
}
.listbox:nth-of-type(2n){
    color: #290211
}
</style>