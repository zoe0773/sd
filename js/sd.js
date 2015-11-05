window.onload = function(){
	var box,imgs,imgWidth,exposeWidth,boxWidth,slide;

	//获得容器对象
	box = document.getElementById('container');

	//获取图片对象集合  NodeList
	imgs = box.getElementsByTagName('img');

	//单张图片的宽度
	imgWidth = imgs[0].offsetWidth;//476	
	//alert(typeof imgWidth);//number类型

	//设置掩藏门体露出的宽度--单张堆叠宽度
	exposeWidth = 160;

	//设置容器的宽度
	boxWidth = imgWidth + (imgs.length-1)*exposeWidth;//956
	//alert(typeof boxWidth);//number类型
	box.style.width = boxWidth + 'px'; //956px  
	//alert(typeof box.style.width) //返回的值是string类型
	
	//设置每道门的初始位置(以上图片堆叠状态)		
	function setImagsPos(){
		for (var i = 1; i < imgs.length; i++) {
		//相对于容器的绝对定位
		imgs[i].style.left = imgWidth + exposeWidth * (i-1) + 'px';		
		}
    }
    setImagsPos();
    //alert(imgs[2].style.left);

    //设置每道门打开时应移动的距离
    slide = imgWidth - exposeWidth;

    //鼠标经过门体时向左滑动，绑定事件
    for (var i = 0; i < imgs.length; i++) {
    	(function(a){
    		imgs[a].onmouseover = function(){
    			//先将门体复位
    			setImagsPos();    			
    			for (var j = 1; j <= a; j++) {
    				//原来左偏移的基础上减每道门打开时应移动的距离--将图片全部呈现出来
    				imgs[j].style.left = parseInt( imgs[j].style.left ) - slide + 'px';
    			}
    		};
    	})(i);    	
    }



}
