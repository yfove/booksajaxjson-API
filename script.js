function bookSearch(){
  // console.log('this function runs')
  var search = document.getElementById('search').value
  document.getElementById('results').innerHTML = ""
  console.log(search)
  // taking user input and storing it in variable

  $.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=" + search, //takes in whatever the user adds
    dataType: "json",

    success: function(data) {
      for(i = 0; i < data.items.length; i++){
        results.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "</h2>"
        results.innerHTML += "<h2>" + data.items[i].volumeInfo.description + "</h2>"
        // results.innerHTML += "<src>" + data.items[i].volumeInfo.imageLinks.thumbnail + "</src>"
      }
      // console.log(data)
    },

    type: 'GET'
  });

}

document.getElementById('button').addEventListener('click', bookSearch, false)