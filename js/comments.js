function getReports() {
  $('.comments').empty();
  $.ajax({
    url: "get_comments.php",
    type: "GET",
    data: {},
    success: function (response) {

      let data = JSON.parse(response)
      let len = Object.keys(data).length
      console.log(data)

      for (let item in data) {
        let id = data[item].id;

        $('<div>', {
          class: 'comment',
          id: `${id}`
        }).appendTo('.comments');

        $('<h3>', {
          class: 'comment__name',
          text: data[item].name
        }).appendTo(`.comments #${id}`);

        $('<p>', {
          class: 'comment__text',
          text: data[item].text
        }).appendTo(`.comments #${id}`);


      }

    }
  })
}

getReports()

$('.add-comment__add').click(function () {
  let name = $('.add-comment__name').val()
  let text = $('.add-comment__text').val()
  console.log(name, text)
  if (name.length > 0 && text.length > 0) {
    $.ajax({
      url: "add_comment.php",
      type: "POST",
      data: {
        "name": name,
        "text": text
      },
      success: function (response) {
        alert("Запись успешно добавлена");
        getReports()
      }
    })
  } else {
    alert("Необходимо заполнить все поля!");
  }

});