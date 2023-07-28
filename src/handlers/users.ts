import docClient from "../db"

const readAllUsers = async(req,res)=>{
    const params = {
		TableName: process.env.USERS_TABLE,
	};
	try {
		const response = await docClient.scan(params).promise();
        if (response){
            return res.json({  response })
        }
		return res
		.status(500)
		.json({ success: false, message: 'Error fetching DB users' });
	} catch (e) {
		return {
			success: false,
			data: null,
		};
	}
}


const readUserById = async(req,res)=>{
	const id = req.params.id
	const params = {
		TableName : process.env.USERS_Table,
		Key :{
			["userId"]:id
		}
	}
	try{
		const response = await docClient.get(params).promise()
		if (response && response.Item) {
      return res.json({ response: response.Item }); // Access the 'Item' property from the response
    }
		return res.status(404).json({ success: false, message: 'User not found' });
	}
	catch(e){
		console.error(e)
		return res.status(500).json({ success: false, message: 'Error fetching DB user' });
	}
}

const updateUserEmail =async(req,res)=>{
	const id = req.params.id
	const email = req.body.email
	const attribute = "emailId"
	const params = {
		TableName:process.env.USERS_Table,
		Key :{
			["userId"]:id
		},
		UpdateExpression : `set ${attribute} = :value`,
		ExpressionAttributeValues: {':value': email},
		ReturnValues: 'ALL_NEW',
	}
	try{
		const response = await docClient.update(params).promise()
		return res.json({"UpdatedItem" :response.Attributes})
	}
	catch(e){
		throw e
	}
}


export {
	readAllUsers,
	readUserById,
	updateUserEmail
} 


