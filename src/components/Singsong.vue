<template>
    <div>
        <div class="sing">
            <van-card
                :desc="singsong.ar[0].name"
                :title="singsong.name"
                :thumb="singsong.al.picUrl"
                @click="tosingdetail"
                v-show="flag"
            />
        </div>
        <div class="singdetail" v-show="!flag">
            <van-nav-bar
                left-arrow
                @click-left="onClickLeft"
                :title="singsong.name"
            />
            <div class="main">
                <div class="main_bottom">
                    <img :src="singsong.al.picUrl" id="smallImg"/>
                </div>
                <div class="text">{{initNum}}</div>
            </div>
            
            <!-- <div>
                <div v-html="singtext"></div>
            </div> -->
            <!-- <div slot="tags" class="custom">
          <span class="nowTime">{{nowTime}}</span>
          <van-slider v-model="value" class="slider" @change="onChange" />
          <span class="totalTime">{{totalTime}}</span>
          <van-icon name="play" v-show="showShade" class="playIcon" @click.stop="playMusic" />
          <van-icon name="pause" v-show="!showShade" class="pauseIcon" @click.stop="timeOut" />
          <van-icon name="weapp-nav" class="musicList" @click.stop="listFlag=!listFlag" />
        </div> -->
        </div>
        <audio id="mp3" :src="singurl" controls="controls" autoplay class="audio"></audio>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return {
      singsong:{
                ar:[{
                    name:'王一博'
                }],
                name:'原来你也在这里',
                al:{
                    picUrl:'https://p2.music.126.net/lqL0xtUVSMY7zpeJPhogEw==/109951164623102435.jpg'
                }
            },
            singurl:"http://m7.music.126.net/20200122142024/c25bfabcf059f92b9056fff3b7d6269b/ymusic/0e59/515e/5209/93e968a365f4836e75cbecf8133aad99.flac",
            singid:'1396237984',
            singtext:'',
            wordsTime:'',
            nowTimeSecond:'',
            flag:true,


            details: { name: "", al: "", ar: [{ name: "" }] },
            songWords: [],
            musicSrc: "",
            wordsTime: [],
            initNum: '',
            show: false,
            timer: null,
            showShade: false,
            count: 0,
            value: 0,
            nowTimeSecond: 0,
            totalTimeSecond: 0,
            nowTime: "0:00",
            totalTime: "0:00",
            listFlag: false
    }
  },
  mounted(){
    // this.$store.state.sing
    // localStorage.getItem('sing')
    // console.log(document.getElementById("mp3").currentTime)
        this.singid=this.$store.getters.getsingid
        axios.get('http://localhost:3000/song/detail?ids='+this.singid).then(res=>{
            console.log(res.data)
            if(res.data.songs[0]){
                this.singsong=res.data.songs[0]
            }
        })
        axios.get('http://localhost:3000/song/url?id='+this.singid).then(res=>{
            console.log(res)
            if(res.data.data[0].url){
              this.singurl=res.data.data[0].url
            }
        })
        axios.get('http://localhost:3000/lyric?id='+this.singid).then(response=>{
            //this.singtext=res.data.lrc.lyric
            console.log(response)
            if (
            response.data.lrc &&
            response.data.lrc.lyric !== "" &&
            response.data.lrc.lyric.includes("[") &&
            response.data.lrc.lyric.includes("]")
        ) {
            //过滤数组中的空元素
            let arr = response.data.lrc.lyric.split("\n").filter((v, i) => {
                return v !== "";
            });
            // console.log(arr)
            //获取时间
            let arr0 = arr.map((v, i) => {
                return v.slice(v.lastIndexOf("[") + 1, v.lastIndexOf("]"));
            });
            let arr1 = arr.map((v, i) => {
                return v.split("]")[0].slice(1);
            });

            let getSecond = function(arr) {
                arr = arr.map((v, i) => {
                return v.split(":");
            });
              //转化为秒
            arr = arr.map((v, i) => {
                return v[0] * 60 + parseFloat(v[1]);
            });
            return arr;
            };
            arr0 = getSecond(arr0);
            arr1 = getSecond(arr1);
            //获取歌词
            let musicWords = arr.map((v, i) => {
            return v.slice(v.lastIndexOf("]") + 1);
            });
            let obj0 = {};
            let obj1 = {};
            for (let i = 0; i < arr0.length; i++) {
                obj0[arr0[i]] = musicWords[i];
                obj1[arr1[i]] = musicWords[i];
            }
            Object.assign(obj0, obj1);
            // console.log(obj0)
            this.wordsTime = Object.keys(obj0);
            this.singtext = Object.values(obj0);
            } else {
            this.wordsTime = [1000];
            this.singtext = ["没有获取到歌曲信息~"];
            }
          // console.log(this.wordsTime);
          // console.log(this.songWords);
        })

        this.showWords()
  },

  // updated(){
  //   axios.get('http://localhost:3000/song/detail?ids='+this.singid).then(res=>{
  //           console.log(res.data)
  //           if(res.data.songs[0]){
  //               this.singsong=res.data.songs[0]
  //           }
  //       })
  //       axios.get('http://localhost:3000/song/url?id='+this.singid).then(res=>{
  //           console.log(res)
  //           if(res.data.data[0].url){
  //             this.singurl=res.data.data[0].url
  //           }
  //       })
  // },
  watch: {
    // shipStatusArr: {
    //   handler(newValue, oldValue) {
    //     console.log(newValue, oldValue)
    //   },
    //   deep: true,
    //   immediate: true
    // }
    //  singid: function (newValue, oldVal) {
    //     console.log( newValue, oldVal )
    // }
},
methods:{
    onClickLeft(){
        this.flag=true
        document.querySelector('.audio')
        .style.width="70%"
        document.querySelector('#mp3')
        .style.height="30px"
        document.querySelector('#mp3')
        .style.position="fixed"
        document.querySelector('#mp3')
        .style.bottom="2px"
    },


    intoMinutes(time, result) {
      //分钟
      var minute = time / 60;
      var minutes = parseInt(minute);
      if (minutes < 10) {
        minutes = minutes;
      }
      //秒
      var second = time % 60;
      var seconds = Math.round(second);
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (result == "nowTime") {
        this.nowTime = minutes + ":" + seconds;
      }
      if (result == "totalTime") {
        this.totalTime = minutes + ":" + seconds;
      }
    },

    showWords(){
      //设置定时器通过歌曲的播放时间判断应该显示哪句歌词
        this.timer = setInterval(() => {
        //旋转图片
        if (!document.getElementById("mp3").paused) {
            document.getElementById("smallImg").style.transform =
            "rotate(" + this.count + "deg)";
            this.count++;
        }
        //获取当前的播放时间
        this.nowTimeSecond = document.getElementById("mp3").currentTime;
        this.intoMinutes(this.nowTimeSecond, "nowTime");
        //判断应该显示哪句歌词
        for (let i = 0; i < this.singtext.length; i++) {
          if (this.singtext[i + 1]) {
            if (
              this.nowTimeSecond >= this.wordsTime[i] &&
              this.nowTimeSecond <= this.wordsTime[i + 1]
            ) {
              this.initNum = this.singtext[i];
            }
          }
        }
        //设置滑块的进度
        // this.value = (this.nowTimeSecond / this.totalTimeSecond) * 100;
        // //当歌曲播放完随机播放列表中的歌曲
        // if (this.nowTimeSecond !== 0) {
        //   if (this.nowTimeSecond == this.totalTimeSecond) {
        //     this.$emit(
        //       "to-parent",
        //       this.list[parseInt(Math.random() * this.list.length)].id,
        //       this.list
        //     );
        //   }
        // }
      }, 100);
    },
    tosingdetail(){
        this.flag=false
        document.querySelector('.audio')
        .style.width="100%"
        document.querySelector('#mp3')
        .style.height="10%"
        document.querySelector('#mp3')
        .style.position="fixed"
        document.querySelector('#mp3')
        .style.bottom="150px"
    }

    },
    beforeDestroy() {
    clearInterval(this.timer);
  }
}
</script>

<style>
  .sing{
    width: 100%;
    height: 80px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #0094ff;
}
.audio{
    width: 70%;
    height: 30px;
    position: fixed;
    bottom: 2px;
    right: 5px;
    background-color: #fff;
    z-index: 1000
}
.main{
    width: 100%;
    height: 60%;
}
.main_bottom{
    width: 200px;
    height: 200px;
    background-color: #000;
    border-radius: 50%;
    margin-left: 80px
}
.main_bottom img{
    width: 70%;
    height: 70%;
    margin-left: 15%;
    margin-top: 15%;
    border-radius: 50%;
    transition: 1s 1s height ease;
}
.singdetail{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: #fff;
}
.text{
    text-align: center;
    color: orange;
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px
}
</style>
