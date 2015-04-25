var expect = window.chai.expect;

var uuid4 = require('../src/uuid4');

describe('When generating an UUID4', function() {

	var uid = uuid4();

	it('it must have the correct length (incl. dashes)', function() {
		expect(uid.length).to.equal(36);
	});

	it('it must have the correct length (excl. dashes)', function() {
		expect(uid.replace(/-/g, '').length).to.equal(32);
	});

	it('it must only contain [a-f0-9] characters and dashes', function() {
		expect(uid.replace(/[a-f0-9\-]/ig, '')).to.equal('');
	});
});