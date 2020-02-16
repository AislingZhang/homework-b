
const mongoose=require('mongoose');

let AlbumsSchema={album_id:Number,album_name: String,public_time:String,week:Number,price:Number,cover:String,singers:[{singer_id:Number,singer_name:String}]};
let SingersSchema={singer_id:Number,singer_name:String};
let UsersSchema={user_id:Number,username:String,password:String};

mongoose.model("albums",AlbumsSchema);
mongoose.model('singers',SingersSchema);
mongoose.model('users',UsersSchema);