var SectionLen = 595 + 20;// Length + Margin-bottom

$(document).ready(function() {
  $('.scroll-btn').click(function() {
    var scroll = new Scroll(document.body);
    var scrollIndex = $(this).attr('scroll-index');
    scroll.to(0, SectionLen * scrollIndex).then(function() {

    });
  })
});
