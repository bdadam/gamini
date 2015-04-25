var req = require('./garequest');

/*
Params:
- v
- tid
- aip: anon IP
- cid
- uid: user ID (https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#uid)
- dr: document referrer (https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#dr)
- campaign [cn, cs, cm, ck, cc, ci, gclid, dclid]
- sr: screen resolution
- vp: viewport size
- t: 'pageview', 'screenview', 'event', 'transaction', 'item', 'social', 'exception', 'timing',
- ni: non-interaction
- dl, dh, dp, dt: doc. location, host, path, title
- linkid
- ec, ea, el, ev: event category, action, label, value
- sn, sa, st: social network, action (like, plus), action target
- cd1, cm1: custom dimenstion, metric
- xid, xvar: experiment id, variant

- exd, exf: exception

- timing




- z: cache buster
*/

module.exports = function GAMini(options) {
	var self = this;

    if (!options) { throw new Error('options are required'); }
    if (!options.tid) { throw new Error('tid is required'); }

	self.options = options;

	self.pageview = function(params) {
		//req('')
	};

	self.event = function(params) {};

	self.exception = function(params) {};

	self.timing = function(params) {};
};

function retrieveCampaignParams() {}
function retrieveClientId() {}
function handleViewport() {}