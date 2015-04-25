var ga = require('../src/index');

describe('When instantiation fails', function() {

	it('without `options` it should throw an exception', function() {
		try { new ga(); } catch(ex) {
			expect(ex).to.exist;
			expect(ex.message).to.equal('options are required');
		}
	});

	it('without `options.tid` it should throw an exception', function() {
		try { new ga({}); } catch(ex) {
			expect(ex).to.exist;
			expect(ex.message).to.equal('tid is required');
		}
	});

});

describe('When instantiating succesfully', function() {

	it('', function() {
		var g = new ga({ tid: 'UA-XXXXX-3' });
		g.pageview();

		
	});


});