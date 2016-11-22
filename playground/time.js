const moment = require('moment');

var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
