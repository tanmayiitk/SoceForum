var mongoose = require('mongoose');

// single server
var uri = 'mongodb://soce18:soce18iitk@ds147344.mlab.com:47344/soceforum';
mongoose.createConnection(uri, { server: { poolSize: 5 }});

// for a replica set
mongoose.createConnection(uri, { replset: { poolSize: 5 }});

// passing the option in the URI works with single or replica sets
var uri = 'mongodb://localhost/test?poolSize=4';
mongoose.createConnection(uri);

mongoose.connect('mongodb://soce18:soce18iitk@ds147344.mlab.com:47344/soceforum');

var Schema = mongoose.Schema;

var	replySchema = new Schema({
	author: { type: String, required: true },
	content: { type: String, required: true },
	dateCreated: { type: Date, default: Date.now }
});

var discussionSchema = new Schema({
	title: { type: String, required: true },
	tag: { type: String, required: true },
	content: { type: String, required: true },
	author: { type: String, required: true },
	dateCreated: { type: Date, default: Date.now },
    numberOfReplies: { type: Number, default: 0 },
	replies: [replySchema]
});

var Discussion = mongoose.model('discussion', discussionSchema);

// Export Models
exports.Discussion = Discussion;
