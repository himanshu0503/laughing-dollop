'use strict';

var self = FirebaseAdapter;
module.exports = self;

var firebaseAdmin = require('firebase-admin');

function FirebaseAdapter() {
  var serviceAccount = require('../keys/serviceAccountKey.json');

  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: 'https://test-notifications-210209.firebaseio.com'
  });
}

FirebaseAdapter.prototype.sendMessage = function (message, callback) {
  console.log(message);
  firebaseAdmin.messaging().send(message).then((response) => {
    console.log('Successfully sent message:', response);
    return callback();
  }).catch((error) => {
    console.log('Error sending message:', error);
    return callback(error);
  });
};
