import getAll  from '../model/user';
const userSearch = require('../model/user');
const getAllUsers=(req,res)=>{
    getAll((err,result)=>{
        if(err) res.json(err);
        res.json(result)
    })
}
exports.searchUsers = (req, res) => {
    const searchTerm = req.query.q; 
  
    userSearch(searchTerm, (err, results) => {
      if (err) {
        console.error('Error searching users:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  };
export default getAllUsers;
