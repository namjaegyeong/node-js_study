<template>

<div>

  <div class="body">
        <div id="whole-board">
            <div id="whole-body">
                <div id="blog-title"></div><hr>
	                <div id="wrapper" class="clearfix">
                        <div id="blog-profile"> 
                            <p class="image"> 
                                <img src="https://blogpfthumb-phinf.pstatic.net/MjAyMTA3MjJfNjYg/MDAxNjI2ODgyNjkyMzk5.Mhj8l2Dx4uis6PDjY2UTIRiCg43DsRTZ5lJLgUPdBvkg.AFsW9HRej-_z0SOWahl4RnysN5s9BaLqXwGrsHeLbVEg.GIF.jg9407/Gabumon_t.gif?type=w161" alt="프로필 이미지">
                            </p> 
                        </div> 
                        <div> 
                            <div class="emo"> <img src="https://itemimgs.pstatic.net/personacon/45/65/6545.gif" width="19" height="19" class="pers" alt=""> </div> 
                            <div class="nick"> 
                                <strong class="itemfont col" id="nickNameArea"> jg9407 </strong> 
                            </div> 
                        </div> 
                    </div> 
                    <div id="post-admin"> 
                        <img src="https://blogimgs.pstatic.net/nblog/spc.gif" width="1" height="1" class="write" alt="">
                        <div>
                            <div id="center">
                                <input type="text" v-model="title" > <br>
                                <input type="text" v-model="text" > <br>
                                <button @click="addTodo"> add </button>
                            </div>
                          <ul>
                            <li v-for="(item,index) in todoList" :key=index >
                              <h5>{{item.title}}</h5>
                              <p>{{item.text}}</p>
                              <button @click="delTodo(index)" > X </button>        
                            </li>
                          </ul>
                        </div>
                    </div> 
                </div> 
            </div> 
        </div>
</div>



    
</template>

<script>
import {pullAt} from 'lodash';
export default {
    name : "TextBox",
    data() {
        return {
            title : '',
            text : '',
          todoList : [
          {
            title : '2021/08/20',
            text : 'html과 css를 작업하였다.'
          },
          {
            title : '2021/08/21',
            text : 'vue를 작업하였다. '
          },
          {
            title : '2021/08/22',
            text : 'vue에 html,css를 적용하였다.'
          }
          ]
        }
    },
    methods : {
    addTodo() {
      this.todoList.push({
        title : this.title,
        text : this.text
      })
    },
    delTodo(index) {
      console.log(index)
      pullAt(this.todoList,[index])
    }
    },
    created() {
    }
};

</script>

<style scoped>

            .body {
                background-image: url('../image/img2.png');
                background-color: rgb(247, 247, 247);
            }

            #whole-board{
                width: 950px;
    		      margin: 0 auto;
    		      padding-bottom: 30px;
            }

            #whole-body {
                padding: 0 8px;
                background: url(https://blogimgs.pstatic.net/nblog/skins/wholebox/0126_b982.gif);
            }

            #blog-title {
                height: 210px;
                background-image: url('../image/img1.png');
            }
            
            #wrapper {
                width: 966px;
                padding-top: 8px;
            }

            .clearfix {
                display: block;
            }

            #blog-profile {
                overflow: visible;
            }

            #post-area {
                width: 100%;
            }

            #post-admin {
                width: 300px;
                margin: 0 auto;
                padding: 0 0 6px 0;
                text-align: center;;
            }

            .clearfix {
                display: block;
            }

            .blind {
                display: block;
                overflow: hidden;
                position: absolute;
                left: -9999px;
                width: 0;
                height: 0;
                font-size: 0;
                line-height: 0;
            }

            .post {
                border-width: 0px;
                border-style: solid;
                border-color: rgb(0, 0, 0);
            }

            .emo {
                float: left;
                width: 23px;
            }

            .nick {
                float: left;
                width: 120px;
                font-size: 12px;
                line-height: 1.4em;
                word-break: break-all;
            }
            #center {
                text-align:center;
            }
    
</style>