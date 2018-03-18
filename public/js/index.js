$(function(){
  var $HEADERWRAP = $('.header-wrap')
  $(document).scroll(function () {
   if($(this).scrollTop()>70){
     console.log($(this).scrollTop())
     $HEADERWRAP.addClass('on')
   }else if($(this).scrollTop()<70){
     $HEADERWRAP.removeClass('on')
   }
  })

  // var $SERVICEBODY = $(".service-body")
  // var $FIRSTPAGEBODY = $(".firstpage-body")
  // var $shouye = $(".header-text-li-firstpage>a")

  // //点击切换
  // $(".fuwushang").click(function(){
  //   $SERVICEBODY.css({"display":"block"})
  //   $FIRSTPAGEBODY.css({"display":"none"})
  //   $shouye.css({"color":"black"})
  // }),
  //   $(".shouye").click(function (){
  //     $SERVICEBODY.css({"display":"none"})
  //     $FIRSTPAGEBODY.css({"display":"block"})
  //     $shouye.css({"color":"#e94840"})
  //   })
  //点击添加
//   var $SERVICEBUTTON = $(".service-button")
// //    var $SERVICEBOTTOM = $(".service-bottom")
//   var index = 0
//   $SERVICEBUTTON.click(function () {
//     index++
//     if(index === 3){
//       $SERVICEBUTTON.css({"display":"none"})
//     }
//   })
})
