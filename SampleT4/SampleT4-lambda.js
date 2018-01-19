let AWS = require('aws-sdk');
const s3 = new AWS.S3();
exports.handler = function (event, context, callback) {



	s3.getBucketLocation({
		'Bucket': "thuvva.test.s3.1"
	}).promise()
		.then(data => {
			console.log(data);           // successful response
			callback(null,data);
			/*
			data = {
				LocationConstraint: "us-west-2"
			}
			*/
		})
		.catch(err => {
			console.log(err, err.stack); // an error occurred
		});


	callback(null, 'Successfully executed');
}