// Filtro do Portfolio
$('.filter-btn').on('click', function() {
  // botoes atribuidos a ID
  let type = $(this).attr('id');
  // caixas onde estao cada projeto
  let boxes = $('.project-box');

  // removendo e adicionando a class active
  $('.main-btn').removeClass('active');
  $(this).addClass('active');

  if(type == 'frango-btn') {
    eachBoxes('frango', boxes);
  } else if(type == 'massa-btn') {
    eachBoxes('massa', boxes);
  } else if(type == 'vegetariano-btn') {
    eachBoxes('vegetariano', boxes);
  } else {
    eachBoxes('all', boxes)
  }  
});

// aparecer e esconder as boxes
function eachBoxes(type, boxes) {
  if(type == 'all') {
    $(boxes).fadeIn(); //aparecer
  } else {
    $(boxes).each(function () {
      if(!$(this).hasClass(type)) {
        $(this).fadeOut('slow'); //sumir
      } else {
        $(this).fadeIn();
      }
    });
  }
}