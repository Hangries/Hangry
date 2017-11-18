const $ = require('jquery');

const APIcall = {
  fetch: function(data, endpoint, callback) {
    $.ajax({
      type: 'GET',
      url: 'https://pure-peak-97033.herokuapp.com' + endpoint || 'http://127.0.0.1:8080' + endpoint,
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
      url: 'https://pure-peak-97033.herokuapp.com' + endpoint || 'http://127.0.0.1:3000' + endpoint,
      data: data,
      success: callback,
      error: function() {
        console.log('GET has failed');
      }
    });
  }
};

module.exports = APIcall;
