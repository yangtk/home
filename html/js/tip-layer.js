  var tipLayer = {
          timer : null,
          timer1 : null,
          showTime : 2500,
          sm : function (txt,status){
                  var status = 'tip-tip';
                  var icon = $('.icon-status-tip');
                  var box = $('.tip-layer1');
                  var oTxt = $('.tip-txt');
                  var close = $('.tip-close');

                  //显示
                  box.addClass('dis-i-b');
                  oTxt.html(txt);
                  icon.addClass(status);

                  //关闭
                  close.click(function(){
                      tipRemove();
                  });

                  //定时器
                  clearTimeout(tipLayer.timer1);
                  tipLayer.timer1 = setTimeout(function(){
                      tipRemove();
                  },tipLayer.showTime);

                  //清除添加、关闭layer
                  function tipRemove(){
                      box.removeClass('dis-i-b');
                      icon.removeClass(status);
                  }
          },

          lg : function (txt1,status1,isBtn,txt2,Fn,Fn2,btn1Txt,btn2Txt){
                  var icon = $('.icon-status-tip2');
                  var box = $('.tip-layer2');
                  var btnBox = $('.tip-btn');
                  var oTxt1 = $('.tip-txt2');
                  var oTxt2 = $('.tip-txt3');
                  var btn1 = $('.tip-btn1');
                  var btn2 = $('.tip-btn2');
                  var aBtn = $('.btns-item button');
                  var close = $('.tip-close-position');
                  var backdrop = $('.tipLayer-backdrop');

                  //html清理回默认
                  tipRemove();

                  //显示
                  box.addClass('dis-i-b');
                  oTxt1.html(txt1);
                  icon.addClass(status1);
                  backdrop.addClass('dis-i-b');
                  $('body').addClass('modal-open');


                  
                  if(isBtn==2){
                      clearTimeout(tipLayer.timer);
                      btnBox.addClass('dis-i-b');
                      aBtn.addClass('dis-i-b');
                      oTxt2.html(txt2);
                      runFn();
                      btnsTxt();
                  }else if(isBtn == 1){
                      clearTimeout(tipLayer.timer);
                      btnBox.addClass('dis-i-b');
                      btn1.addClass('dis-i-b');
                      oTxt2.html(txt2);
                      runFn();
                      btnsTxt();

                  }else if(!isBtn){
                      close.addClass('dis-i-b')
                      //定时器
                      clearTimeout(tipLayer.timer);
                      tipLayer.timer = setTimeout(function(){
                          tipRemove();
                      },tipLayer.showTime);
                  }

                  //按钮文字
                  function btnsTxt (){
                      if(btn1Txt){
                          btn1.html(btn1Txt);
                      }
                      if(btn1Txt){
                          btn2.html(btn2Txt);
                      }
                  }

                  //清除添加、关闭layer
                  function tipRemove(){
                      btn1.html('确定');
                      btn2.html('取消');
                      box.removeClass('dis-i-b');
                      icon.removeClass(status1);
                      btnBox.removeClass('dis-i-b');
                      close.removeClass('dis-i-b');
                      aBtn.removeClass('dis-i-b');
                      backdrop.removeClass('dis-i-b');
                      $('body').removeClass('modal-open');
                  }

                  //关闭
                  close.click(function(){
                      tipRemove();
                  });
                  btn2.click(function(){
                      tipRemove();
                  });

                  //函数
                  function runFn (){
                      if(Fn){
                          btn1.unbind('click');
                          btn1.one("click", function(){
                              tipRemove();
                              return Fn();
                          })

                      }
                      if(Fn2){
                          if(Fn2 == 'close'){                              
                              btn2.unbind('click');
                              btn2.one("click", function(){
                                  tipRemove();
                                  box.removeClass('dis-i-b');                                  
                              })
                          }else{
                              btn2.unbind('click');
                              btn2.one("click", function(){
                                  tipRemove();
                                  return Fn2();
                              })
                          }
                      }
                  }




          }
  }


