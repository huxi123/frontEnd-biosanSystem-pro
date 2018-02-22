


// LiftEffect({
// 	"control1": ".lift2", 						  //侧栏电梯的容器
// 	"control2": "#ccc",                           //需要遍历的电梯的父元素
// 	"target": [".dianti1",".dianti2",".dianti3"], //监听的内容，注意一定要从小到大输入
// 	"current": "xuanzhong", 						  //选中的样式
//  "scrollContainer":"",
//  offset			//偏移量
// });
function AutoScrollAnimation(options){
	this.array = [];
	this.options = Object.assign({},options);
	this.offset = this.options.offset || 140;
}

AutoScrollAnimation.prototype = {
	init:function(){
		this.computeArray();
		this.listenContainer();
		this.listenChildren();
	},
	computeArray:function(){
		let target=this.options.target;
		var array = [];
		for(var i =0; i<target.length;i++){
			var t = $(target[i]).offset().top + $(this.options.scrollContainer).scrollTop();
			array.push(t);
		}
		this.array=array;
		return array;
	},
	selected:function(index){
		$(this.options.control2).children().eq(index).addClass(this.options.current).siblings().removeClass(this.options.current);
	},
	check:function(){
		var that  = this;
		var wst = $(that.options.scrollContainer).scrollTop();

		// if(wst >= $(that.options.target[0]).offset().top-100){
		// 	$(that.options.control1).fadeIn(500);
		// }else{
		// 	$(that.options.control1).fadeOut(500);
		// }
		if(wst < 10){
			that.selected(0);
			return;
		}
		var key =0;
		var flag = true;
		for(var i =0; i<that.array.length; i++){
			key++;
			if(flag){

				if(wst >= that.array[that.array.length-key]-177){ //300
					var index = that.array.length-key;
					flag = false;
				}else{
					flag=true;
				}
				
			}
		}
		that.selected(index);
	},
	listenContainer:function(){
		var that = this;
		$(that.options.scrollContainer).on("scroll",that.check.bind(that));
	},
	listenChildren:function(){
		var that = this;
		$(that.options.control2).children().on("click",function(){
				$(that.options.scrollContainer).off("scroll");
				var index = $(this).index();

				that.selected(index);

				var flag = true;
				for(var i =0; i<that.array.length; i++){
				
					if(flag){
			
						if(index == i){
							$(that.options.scrollContainer).stop().animate({
								"scrollTop": that.array[i] - that.offset
							},500,function(){
								$(that.options.scrollContainer).on("scroll",that.check.bind(that));
							});
							flag = false;
						}else{
							flag=true;
						}
						
					}
				}
				
		});
	}
}




export default AutoScrollAnimation