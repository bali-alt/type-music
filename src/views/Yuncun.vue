<template>
    <div class="yuncun">
        <div class="main">
            <!-- <div class="left">
                <ul>
                    <li
                    v-for="item in items"
                    :key="item.pst"
                    >
                    {{item.text}}
                    </li>
                </ul>
            </div> -->
            <van-sidebar v-model="activeKey" v-for="item in items" :key="item.pst">
                <van-sidebar-item :title="item.text" />
            </van-sidebar>
            <div class="right">
                <div v-for="item in singerList" :key="item.id" class="right_div">
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
            activeKey:0,
            singerList:'',
            items: [
        { text: "入驻歌手", pst: "5001" },
        { text: "华语男歌手", pst: "1001" },
        { text: "华语女歌手", pst: "1002" },
        { text: "华语组合/乐队", pst: "1003" },
        { text: "欧美男歌手", pst: "2001" },
        { text: "欧美女歌手", pst: "2002" },
        { text: "欧美组合/乐队", pst: "2003" },
        { text: "日本男歌手", pst: "6001" },
        { text: "日本女歌手", pst: "6002" },
        { text: "日本组合/乐队", pst: "6003" },
        { text: "韩国男歌手", pst: "7001" },
        { text: "韩国女歌手", pst: "7002" },
        { text: "韩国组合/乐队", pst: "7003" },
        { text: "其他男歌手", pst: "4001" },
        { text: "其他女歌手", pst: "4002" },
        { text: "其他组合/乐队", pst: "4003" }
        ]
        }
    },
    mounted(){
        axios.get('http://localhost:3000/artist/list?cat=5001').then(res=>{
            console.log(res)
            this.singerList=res.data.artists
        })
    }
}
</script>
<style scoped>
.yuncun{
    height: 100%;
}
/* .main{
    width: 100%;
    height: 100%;
    display: flex;
}
.main .left{
    flex: 2;
    height: 100%;
    overflow: auto;
}
.main .right{
    flex: 5;
    height: 100%;
    overflow: auto;
}
.right_div{
    height: 30px;
} */
</style>