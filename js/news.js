let current = 0;
let id = 0;


function loadData() {
  $.get("get_news.php", {
      kol: 3,
      tek: current
    },
    function (data) {
      let result = JSON.parse(data);
      console.log(result[0])
      for (let art of result) {
        $('<div>', {
          class: 'post',
          id: `${id}`
        }).appendTo('.posts');

        $('<img>', {
          class: 'post__image',
          src: `${art.img}`
        }).appendTo(`#${id}`);

        $('<h2>', {
          class: 'post__head',
          text: `${art.head}`
        }).appendTo(`#${id}`);

        $('<p>', {
          class: 'post__text',
          text: `${art.text}`
        }).appendTo(`#${id}`);

        id++;
      }

      let len = Object.keys(result).length;
      current += len;
      id = current;

    });

}


loadData()

$('#get-news').click(function () {
  loadData()
})