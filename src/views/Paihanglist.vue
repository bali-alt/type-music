<template>
    <div class="paihanglist">
            <van-nav-bar
                title="排行分类"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
            />
        <ul class="top">
            <li
            v-for="(item,index) in paihanglist"
            :key="item.id"
            class="paihangli"
            @click="topaihangdetail(index,item.name)"
            >
                <img :src="item.coverImgUrl"/>
                <div>{{item.name}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            paihanglist:''
        }
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        },
        topaihangdetail(index,name){
            this.$router.push({
                name:'paihangdetail',
                query:{
                    index:index,
                    name:name
                }
            })
        }
    },
    mounted(){
        axios.get('http://localhost:3000/toplist').then(res=>{
            //console.log(res)
            this.paihanglist=res.data.list
        })
    }
}
</script>
<style scoped>
.paihanglist{
    overflow: hidden;
    margin-bottom: 800px;
}
.top{
    margin-top: 46px
}
img{
    width: 100px;
    height: 100px;
}
ul{
    width: 100%;
    height: 100%;
    overflow: auto
}
.paihangli{
    width: 90%;
    height: 100px;
    margin-left: 5%;
    display: flex;
    background-color: #eee;
    overflow: auto;
    margin: 15px 5%
}
.paihangli div{
    flex: 1;
    height: 100px;
    margin-left: 10px;
    line-height: 100px;
    font-size: 20px;
}
.top[data-v-4199045e] {
    margin-top: 0px;
}
</style>