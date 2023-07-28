import AWS from "aws-sdk"

AWS.config.update({
	region: 'ap-south-1',
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const docClient = new AWS.DynamoDB.DocumentClient()

const readAllUsers = async () => {
	const params = {
		TableName: "Users",
	};
	try {
		const response = await docClient.scan(params).promise();
		return response;
	} catch (e) {
		return {
			success: false,
			data: null,
		};
	}
};

export default readAllUsers
