'use strict';

var self = post;
module.exports = self;

var FirebaseAdapter = require('../../common/FirebaseAdapter.js');
var firebaseAdapter = new FirebaseAdapter();

function post(req, res) {
  var message = req.body;
  firebaseAdapter.sendMessage(message,
    function (err) {
      if (err)
        return res.status(400).send(err);

      return res.status(200).send({});
    }
  );
}
