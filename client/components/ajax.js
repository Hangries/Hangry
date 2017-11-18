const $ = require('jquery');

const APIcall = {
  fetch: function(data, endpoint, callback) {
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:8080' + endpoint || 'https://pure-peak-97033.herokuapp.com/' + endpoint,
      data: data,
      success: callback,
      error: function() {
        console.log('GET has failed');
      }
    });
  },

  post: function(data, endpoint, callback) {
    $.ajax({
      type: 'POST',
      url: 'http://127.0.0.1:3000' + endpoint || 'https://pure-peak-97033.herokuapp.com/' + endpoint,
      data: data,
      success: callback,
      error: function() {
        console.log('GET has failed');
      }
    });
  }
};

module.exports = APIcall;
