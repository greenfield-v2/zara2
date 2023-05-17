import getAll  from '../model/user';
const getAllUsers=(req,res)=>{
    getAll((err,result)=>{
        if(err) res.json(err);
        res.json(result)
    })
}

export default getAllUsers;
// module.exports={getAllUsers}