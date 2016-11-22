const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message.js')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = "Admin";
    var text = "Hello";
    var res = generateMessage(from, text);

    expect(res).toInclude({from, text})
    expect(res.createdAt).toBeA("number")
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Deb';
    var latitude = 15;
    var longitude = 19;
    var url = 'https://www.google.com/maps?=15,19';

    var message = generateLocationMessage(from, latitude, longitude);

    expect(message).toInclude({
      from,
      url
    })
    expect(message.createdAt).toBeA('number');
  });
});
