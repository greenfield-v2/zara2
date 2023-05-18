
import x  from '../model/user';


const getAllUsers=(req,res)=>{
    x.getAll((err,result)=>{
        if(err) res.json(err);
        res.json(result)
    })
}


const searchUsers = (req, res) => {
    const searchTerm = req.query.q; // Retrieve the search query from the URL query parameter 'q'
  
    x.user(searchTerm, (err, results) => {
      if (err) {
        console.error('Error searching users:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  };
export default {getAllUsers,searchUsers};
