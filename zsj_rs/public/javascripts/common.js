// banner部分
var mySwiper = new Swiper('.swiper-container', {
        autoplay: 1000, //可选选项，自动滑动
        // 点击后继续轮播
        autoplayDisableOnInteraction : false,
        // 左右按钮
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        // 分页器
        pagination : '.swiper-pagination',
        paginationClickable :true,

  })
// $(".cate_cons").css("display","none");
// // 轮播图上滑动切换菜单
// $(".cate_list").tab({
//     tips: false,//是否有滑动条  默认为true
//     event : "mouseover",//滑动条触发方式  默认mouseover，接受标准事件
//     swiper : false,//滑动条是否有动画  默认true
//     tipsPosition: "bottom",//滑动条出现的位置  默认top 接受bottom
//     callback: function(index, str) { //触发选项卡时的事件，传回该元素的index值，从0开始，及该元素的文本内容
//     $(".cate_cons").css("display","block");
//     $(".cate_con").eq(index).css("display","block").siblings(".cate_con").css("display","none");;
//     } 
// });
$(".cate_list li").mouseover(function(){
    $(".cate_cons").css("display","block");
     $(".cate_con").eq($(this).index()).css("display","block").siblings(".cate_con").css("display","none");
});
$(".cate_list li").mouseout(function(){
    $(".cate_cons").css("display","none");
})
// 鼠标滑动切换菜单
$(".p_w_menu").tab({
    tips: true,//是否有滑动条  默认为true
    event : "mouseover",//滑动条触发方式  默认mouseover，接受标准事件
    swiper : false,//滑动条是否有动画  默认true
    tipsPosition: "bottom",//滑动条出现的位置  默认top 接受bottom
    callback: function(index, str) { //触发选项卡时的事件，传回该元素的index值，从0开始，及该元素的文本内容
    $("#p_w_cont ul").eq(index).show().siblings("#p_w_cont ul").hide();

    } 
});
