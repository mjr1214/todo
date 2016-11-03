$(function(){
	$('.header .right').on('touchend',function(){
		$('.add').removeClass('ann').addClass('ans');
	})
	$('.header1 .left').on('touchend',function(){
		$('.add').addClass('ann').removeClass('ans');
	})
   $('.header .left').on('touchend',function(){
   	  $('.menu').removeClass('an5').addClass('an4');
   })
   $('.menu .b').on('touchend',function(){
   	  $('.menu').removeClass('an4').addClass('an5');
   })

	//模拟数据库 
	var todo=[];
	var adress=0;
	var id=1;
	if(localStorage.data){
       todo=JSON.parse(localStorage.data);
      render()
	}else{
      localStorage.data=JSON.stringify(todo);
	}
	$('.add .yes').on('touchend',function(){
             var inputs=$('.input').val();
	             	todo.push({
	             	id:id,
			      	title:inputs,
			      	state:1,
			      	isDelete:0,
			      	leibie:adress})
			      	id++;
		localStorage.data=JSON.stringify(todo);
		 render()
		 
		$('.add').addClass('ann').removeClass('ans');
	});
	function render(){
		$('.body-left1 dl dd').remove();
		$('.body-left2 dl dd').remove();
		$('.body-right1 dl dd').remove();
		$('.body-right2 dl dd').remove();
  // console.log(1)
    $(todo).each(function(i,v){
    	if(v.leibie==0){
    		//appendto到第一个div的di里
    		//判断4次
    		$('<dd id='+v.id+'>'+v.title+'</dd>').addClass(function(){
      		if(v.state==0){
                return 'done'
      		}else{
      		  // console.log('done')
      		}
    	   }).appendTo('.body-left1 dl')
    	};
    	if(v.leibie==1){
    		//appendto到第一个div的di里
    		//判断4次
    		$('<dd id='+v.id+'>'+v.title+'</dd>').addClass(function(){
      		if(v.state==0){
                return 'done'
      		}else{
      		  // console.log('done')
      		}
    	 }).appendTo('.body-right1 dl')
    	};
    	if(v.leibie==2){
    		//appendto到第一个div的di里
    		//判断4次
    		$('<dd id='+v.id+'>'+v.title+'</dd>').addClass(function(){
      		if(v.state==0){
                return 'done'
      		}else{
      		  // console.log('done')
      		}
    	   }).appendTo('.body-left2 dl')
    	};
    	if(v.leibie==3){
    		//appendto到第一个div的di里
    		// 判断4次    		
        $('<dd id='+v.id+'>'+v.title+'</dd>').addClass(function(){
      		if(v.state==0){
                return 'done'
      		}else{
      		  // console.log('done')
      		}
    	 }).appendTo('.body-right2 dl');	
      };
	})
}
	// console.log(todo)
	var left=null;
	$('.body').on('touchstart','dd',function(e){
    left=e.originalEvent.changedTouches[0].pageX;
	})
	$('.body').on('touchmove','dd',function(e){
    var l=e.originalEvent.changedTouches[0].pageX;
    if(l-left>40&&l-left<90){
    	$(this).css({"transform":"translate3d("+(l-left)+"px,0,0)"}).addClass('done');
    	var i=$(this).index()-1;
    	todo[i].state=0;  //拖动完成之后要加done.修改state值是0，已经完场
    	// render();//调用render（）
		localStorage.data=JSON.stringify(todo);//把修改完的数据放在本地。
    }
    if(l-left>90){
    	$(this).css({"transition":"transform .8s ease","transform":"translate3d(3.6rem,0,0)"}).remove()
    	var index=$(this).attr("id")
    	console.log(index)
    	 todo=todo.splice(index,1)
    	localStorage.data=JSON.stringify(todo);
      $('.body').on("mousedown",false)
    }
	})
	$('.body').on('touchend','dd',function(e){
		$(this).css({"transition":"transform .8s ease","transform":"translate3d(0,0,0)"});
	})

	//选项卡
	$('.dian').each(function(i,v){
	      $('.dian').eq(i).on('click',function(){
			$('.add .one').css({"background":$(this).css("border-color")})
			$('.circle').each(function(i,v){
				$('.circle').css({"display":"none"})
				$('.zi').css({"display":"none"});
			})
			$('.circle').eq(i).css({"display":"block"});
            $('.zi').eq(i).css({"display":"block"});
            $('.zi').removeClass('active').eq(i).addClass('active');
            var c=($('.zi').removeClass('active').eq(i).addClass('active').index()-1)/2;
            adress=c;
            console.log(adress);
		 })
	})
 
	var date=["日","一","二","三","四","五","六",]
	console.log(date[1])
    var d=new Date()
	$('.date').text(d.getDate())
	console.log(d.getDay())

    $('.week1').text("周"+date[d.getDay()])
    $('.mouth').text(d.getFullYear()+"-"+(d.getMonth()+1))

    $('.in').on('touchstart',function(){
    	var i=$(this).index();
    	console.log(i)
    	$('.in').addClass('big')
    	$('.content').removeClass('lefttop righttop leftbottom rightbottom');
	    	if(i==0){
	      $('.content').addClass('lefttop');
	    }else if(i==1){
	      $('.content').addClass('righttop')
	    }else if(i==2){
	      $('.content').addClass('leftbottom')
	    }else{
	      $('.content').addClass('rightbottom')
	    }
    })



})