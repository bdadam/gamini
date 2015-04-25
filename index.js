var merge = require('amp-merge');

module.exports = function(options) {
    var self = this;

    if (!options) { throw new Error('options are required'); }
    if (!options.tid) { throw new Error('tid is required'); }

    self.options = options;


    self.pageview = function() {
        req({
            tid: options.tid,

        })
    };


    self.trackEvent = function() {};
};


function req(params) {
    params.v = 1;
}

/*
    Usage:

    var ga = new gamini({ tid: 'UA-XXXX-Y', cid: '35009a79-1a05-49d7-b876-2b884d0f825b' });
    ga.pageview();

    // ... later when user clicks a button ...

    ga.event({ category: 'videos', action: 'play', label: 'label', value: 1 })


*/