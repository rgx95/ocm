
    /* allow user to scroll through mouse-wheel */

    let wheel = 0;

    const checkWheel = (event) => {
      wheel += event.deltaY
      if (wheel > 650) {        
        wheel = 0
        if (currentFrame != lastFrame) {
          scrollDown()
        }
      } else if (wheel < -650) {        
        wheel = 0
        if (currentFrame != 0) {          
          scrollUp()
        }
      }
    }

    
    /* control the Frame scrolling */

    $('#scrollUp').hide();

    let currentFrame = 0;
    const lastFrame = $('.main').children().length - 1;

    const scrollDown = () => {
      if (++currentFrame > lastFrame) {
        currentFrame = lastFrame;
        return;
      }

      if (currentFrame == lastFrame) {
        $('#scrollDown').hide()        
      } else {
        $('#scrollDown').show()
        $('#scrollUp').show()
        $('#ocm').fadeOut(500)
      }

      $('.main').animate({scrollTop: $(window).height() * currentFrame + 32 * currentFrame},'500');
    }

    const scrollUp = () => {
      if (--currentFrame < 0) {
        currentFrame = 0;
        return;
      }

      if (currentFrame == 0) {
        $('#scrollUp').hide()
        $('#ocm').fadeIn(500)
      } else {
        $('#scrollUp').show()
        $('#scrollDown').show()
      }

      $('.main').animate({scrollTop: $( window ).height() * currentFrame + 32 * currentFrame },'500');
    }
