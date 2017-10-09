/* スクロールでcss適用(headernav) */
$(function() {
  var $win = $(window),
      $nav = $('#headernav'),
      navHeight = $nav.outerHeight(),
      navPos = $nav.offset().top,
      fixedClass = 'active';
        infixedClass = 'inactive';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > navPos ) {
      $nav.addClass(fixedClass);
		$nav.removeClass(infixedClass);
    } else {
      $nav.removeClass(fixedClass);
		$nav.addClass(infixedClass);
    }
  });
});


/* menu表示 */
function menu() {
    document.getElementById('headernav').classList.toggle('active2');
    document.getElementById('sp-menubtn').classList.toggle('active2');
}


/* モーダルウィンドウ表示 */
function info(num) {
    document.getElementById('info-container').classList.add('active');
    classremove();
    document.getElementById('info' + num).classList.add('active');
}

function remove() {
    document.getElementById('info-container').classList.remove('active');
    classremove();
}

function classremove() {
    var element = document.getElementsByClassName("info-contents");
        for (var i=0;i<element.length;i++) {
          element[i].classList.remove('active');
        }
}