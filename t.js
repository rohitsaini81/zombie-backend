const mongoose = require('mongoose');



const Book = require('./models/db.js');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const uri= "mongodb+srv://"+process.env.URI_PASS+"@cluster0.8t0hk4y.mongodb.net/"+process.env.DATABASE
app.use(cors())
app.use(bodyParser.json());



// Connect to the MongoDB database
const  dbcon=async(uri)=>{await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(console.log("db on !")).catch(e=>{console.log(e)})}



const readdata=async ()=>{
    try {
        const pro = await Book.find();
        res.json(pro);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}
readdata()
  dbcon(uri);
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });