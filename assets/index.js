$(document).ready(function() {
  $('#fullpage-container').fullpage();

  $('.scroll-btn').click(function() {
    var scrollIndex = $(this).attr('scroll-index');
    $.fn.fullpage.moveTo(scrollIndex);
  });

  $('input[name="option"]').change(function() {
    var text = '';
    $('input[name="option"]').each(function() {
      var value = $(this).val();
      var dirty = $(this).prop('checked');
      var data = value.split(';');

      if(dirty) {
        text += `<tr>`;
        text += `<td>${data[0]}</td>`;
        text += `<td>${data[1]}</td>`;
        text += `</tr>`;
      }
    });

    $('#result-table tbody').html(text);
  });
});
