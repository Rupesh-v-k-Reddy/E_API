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
	const id = req.params
	const vals = id.split("=")
	const params = {
		TableName : process.env.USERS_Table,
		Key :{
			["userId"]:vals[1]
		}
	}
	try{
		const response = await docClient.get(params).promise()
		if (response){
			return res.json({response})
		}
		return res.status(500).json({success: false, message: 'Error fetching DB user' })
	}
	catch(e){
		console.error(e)
		return{
			success: false,
			data: null,
		}
	}
}


export {
	readAllUsers,
	readUserById
} 


