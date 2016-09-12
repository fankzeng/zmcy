<template>
    <div class="content">
	    <div v-for="item in items" class="content-list">
	       <img :src="item.data.thumbnail" @click='loadMore'>
	       <div>
	       	  <ul>
	       	  	<li><span></span>{{item.data.viewCount}}</li>
	       	  	<li><span></span>{{item.data.commentcount}}</li>
	       	  	<li><span></span>{{item.durations}}</li>
	       	  </ul>
            <h4>{{item.data.title}}</h4>
	       </div>
	    </div>
    </div>

</template>

<script>
    export default {
    	components:{},
    	data () {
    		return {
      			pageNo:0,
            pageSize:10,
            datas:[],
            data:[],
      			items:[],
      			commentcount:'',
      			viewcount:'',
      			durations:'',
            total:'',
            arr:[{durations:'aa',item:'aaa'},{durations:'bb',item:'bbb'}],
            minute:'',
            second:''
    		}
  		},
      //jsonp请求数据
  		ready (){
  			const self = this;
			this.$http.jsonp('http://127.0.0.1/project/vuejs/vue-cli/zmcy/static/all.php', {
			 	params:{
  					imieId:'771151417E03687F75D855F69DA18724',
  					pageNo:this.pageNo,
  					pageSize:this.pageSize,
  					callback:'JSON_CALLBACK'
  				}
			}).then(function(response) {
        		// self.items = JSON.parse(response.body).resources;
        		console.log(JSON.parse(response.bodyText).resources);
            //self.datas = response.body.resources;
            this.$set('datas', response.body.resources);
        		for (var i = 0; i < self.datas.length; i++) {
               self.total = self.datas[i].duration;
               self.minute = parseInt(self.total/60);
               self.second = self.total%60;
               if(self.minute==0){
                  self.minute = '00';
               }else if(self.minute<10){
                  self.minute = '0' + self.minute;
               }else{
                  self.minute = self.minute;
               }

               if(self.second==0){
                  self.second = '00';
               }else if(self.second<10){
                  self.second = '0' + self.second;
               }else{
                  self.second = self.second;
               }

               //self.durations = self.durations.concat(self.minute + ':' + self.second);
               //self.data = self.data.concat(self.datas[i]);
               self.items = self.items.concat({data:self.datas[i],durations:(self.minute + ':' + self.second)});
               //console.log(self.datas[i])
               
            }
            // console.log(self.items);
        	}, function(response) {
        	    console.log('请求失败');
        	});
  		},

  		methods:{
  			loadMore(){
  				this.pageNo =+10;
  			}
  		}
    }
</script>

<style>
	.content{
		width:100%;
		overflow-y:auto;
		position:absolute;
		top:90px;
	}
	.content-list{
		width:95.6%;
		height:182px;
		padding:2.2% 2.2% 0 2.2%;
		vertical-align: middle; 
		overflow:hidden;
    position: relative;
	}
	.content-list img{
		width:95.6%;
		border-radius:3px;
    position:absolute;
    z-index: -5;
	}
  .content-list>div{
    color:#fff;
    position: absolute;
    top:67%;
    z-index:2;
    width:95.6%;
  }

  .content-list>div>h4{
    font-weight: normal;
    margin-left:2%;
  }
  .content-list ul{
    overflow: hidden;
  }
  .content-list ul li{
    float: left;
    list-style: none;
    margin-left:3%;
  }
  .content-list ul li span{

  }

</style>

