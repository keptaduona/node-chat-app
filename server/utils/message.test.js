const expect = require('expect');
const {generateMessage} = require('./message.js')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = "Admin";
    var text = "Hello";
    var res = generateMessage(from, text);
    
    expect(res).toInclude({from, text})
    expect(res.createdAt).toBeA("number")
  });
});
