import User from '../models/User.js';


//create new User
export const createUser = async (req, res) =>{

  const newUser = new User(req.body)

  try {
    const savedUser
 = await newUser.save()

    res.status(200).json({success:true, message:'successfully created', data:savedUser});
  } catch (err) {
    res.status(500).json({success:false, message:'failed to create.Try again'});
  }
};

//update User
export const updateUser = async(req, res) =>{
    const id = req.params.id
  try {
    const updatedUser
 = await User.findByIdAndUpdate(id, {
      $set: req.body
    }, {new: true})
    res.status(200).json({success:true, message:'successfully updated', data:updatedUser});
  } catch (err) {
    res.status(500).json({success:false, message:'failed to update'});
  }
};
//delete User
export const deleteUser = async(req, res) =>{
  const id = req.params.id
  try {
     await User.findByIdAndDelete(id);
    
    res.status(200).json({success:true, message:'successfully deleted'});
  } catch (err) {
    res.status(500).json({success:false, message:'failed to delete'});
  }
};
//get single User
export const getSingleUser = async(req, res) =>{
  const id = req.params.id
  try {
    const User = await User.findById(id);

    res.status(200).json({success:true, message:'successful', data:User});
  } catch (err) {
    res.status(404).json({success:false, message:'not found'});
  }
};
//get all User
export const getAllUser = async(req, res) =>{
  try {
    const user = await user.find({});
    res.status(200).json({success:true, count: user.length, message:'successful', data:user});
  } catch (err) {
    res.status(404).json({success:false, message:'not found'});
  }
};