import axios from 'axios';
import mongoose from 'mongoose';
import Book from './models/db.js';
import dotenv from 'dotenv';
console.log("clock on !")
dotenv.config();
const uri = `mongodb+srv://${process.env.URI_PASS}@cluster0.8t0hk4y.mongodb.net/${process.env.DATABASE}`;
const dbcon = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
const dbclose = async () => {
  try {
    await mongoose.connection.close();
    console.log("We are Disconnecting from MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

const readdata = async () => {
  try {
    const pro = await Book.find();
    console.log("readdata")
    console.log(pro)
  } catch (error) {
    console.log(500, "errorv ", error.message );
  }
};
const readdatabase = async () => {
  await dbcon(uri);
  await readdata();
  await dbclose();
};
const writedata = async (data)=>{
  try{
    const pro = await Book.create(data);
    console.log(pro)
  }
  catch(error){
    console.log(500, "errorv ", error.message );
}
}
const createdata= async (data)=>{
  await dbcon(uri);
  await writedata(data);
  await dbclose();
}
const putdata = async (id,data)=>{}



const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

let dlSattaCalled = false;
let dlBazarCalled = false;
let shreeGaneshCalled = false;
let faridabadCalled = false;
let gajiyabadCalled = false;
let galiCalled = false;
let disawarCalled = false;

const DL_Satta = async () => {
  if (dlSattaCalled) {
    return false;
  }

  await sleep(20000);
  console.log("sleep of ds");
  const obj = {name:"DL_Satta",today:"2.30",yesterday:"2.30"}

createdata(obj);
  console.log("DL_Satta");
  dlSattaCalled = true;
  sleep(60000)
  disawarCalled = false;
  return true;
};

const DL_bazar = async() => {
  if (dlBazarCalled) {
    return false;
  }
  console.log("DL_bazar");
  dlBazarCalled = true;
  let obj = {}
 await methA().then((res) => {const obj ={
  name:res[1][0].name,
  today:res[1][0].today,
  yesterday:res[1][0].yesterday
}
// console.log(obj)
createdata(obj)
}).catch((e)=>console.log(e));
//  createdata()
// obj = res[1][0]
  sleep(60000)
  dlSattaCalled = false;
  return true;
};

const Shree_Ganesh = () => {
  if (shreeGaneshCalled) {
    return false;
  }
  console.log("Shree_Ganesh");
  shreeGaneshCalled = true;
  methA().then((res) => { const obj ={
    name:res[1][1].name,
    today:res[1][1].today,
    yesterday:res[1][1].yesterday
  }
  // console.log(obj)
  createdata(obj)
}).catch((e)=>console.log(e));
  // obj =res[1][1]

  sleep(60000)
  dlBazarCalled = false;
  return true;
};
// ---------------------------->
const Faridabad = () => {
  if (faridabadCalled) {
    return false;
  }
  console.log("Faridabad");
  faridabadCalled = true;
  methA().then((res) => {
    const obj = {
      "name": "faridabad",
      "today": res[0][0].faridabad,
      "yesterday": res[0][1].faridabad

    }
    // console.log(obj)
    createdata(obj)
    
  }).catch((e)=>console.log(e));


  sleep(60000)
  shreeGaneshCalled = false;
  return true;
};

const Gajiyabad = () => {
  if (gajiyabadCalled) {
    return false;
  }
  console.log("Gajiyabad");
  gajiyabadCalled = true;
  methA().then((res) => {
    const obj = {
      "name": "gajiyabad",
      "today": res[0][0].gaziabad,
      "yesterday": res[0][1].gaziabad
    }
    // console.log(obj)
    createdata(obj)
  }).catch((e)=>console.log(e));

  sleep(60000)
  faridabadCalled = false;
  return true;
};

const Gali = () => {
  if (galiCalled) {
    return false;
  }
  console.log("Gali");
  galiCalled = true;
  methA().then((res) => {
    const obj = {
      "name": "gali",
      "today": res[0][0].gali,
      "yesterday": res[0][1].gali
    }
    // console.log(obj)
    createdata(obj)
    }).catch((e)=>console.log(e));

  sleep(60000)
  gajiyabadCalled = false;
  return true;
};

const Disawar = () => {
  if (disawarCalled) {
    return false;
  }
  console.log("Disawar");
  disawarCalled = true;
  methA().then((res) => {
    const yest = res[0][0]
    console.log(yest);
    const obj = {
      "name": "disawar",
      "today": res[0][0].disawer,
      "yesterday": res[0][1].yesterday
    }
    // console.log(obj)
    createdata(obj)
  }).catch((e)=>console.log(e));
  sleep(60000)
  galiCalled = false;
  return true;
};

const methA = async () => {
  let arr = [];
  const url = "https://hp-api-o04w.onrender.com/";
  try {
    const response1 = await axios.get(url+"A");
    const dataA = response1.data;
    console.log(response1.status, " ", response1.statusText);
    // 
    const response2 = await axios.get(url+"B");
    const dataB = response2.data;
    console.log(response2.status, " ", response2.statusText);
    arr.push(dataA);
    arr.push(dataB);
    return arr;
  } catch (e) {
    return("error");
  }
};
const data = [
  { name: "DL_Satta", time: "2.30" },//not working

  { name: "DL_bazar", time: "3.00" },//-3.00 
  { name: "Shree Ganesh", time: "4.50" },//-4.50

  { name: "Faridabad", time: "6.00" },//-6.00
  { name: "Gajiyabad", time: "9.00" },//-9.00 
  { name: "Gali", time: "11.30" },//-11.30
  { name: "Disawar", time: "5.00" },//-5.00
];



// readdatabase();


function displayCurrentTime() {
  const now = new Date();
  // const today = now.getDate() +" "+(now.getMonth()+1)+" "+now.getFullYear()
  // console.log(today)
  const timeString = now.toLocaleTimeString();
  const a = timeString.split(':');
  const currentTime = `${a[0]}.${a[1]}`;
  const AM = a[2].includes('AM');

  // console.log(timeString)
  // process.stdout.clearLine()
  // process.stdout.write
//("\n"+timeString")



 
  const matchingNames = data.filter((item) => item.time === currentTime);

  if (!AM && matchingNames.length > 0) {
    // console.log("it's morning ", AM);
    matchingNames.forEach((item) => {
      switch (item.name) {
        case "DL_Satta":
          if (DL_Satta()) {
            dlSattaCalled = true;
          }
          break;
        case "DL_bazar":
          if (DL_bazar()) {
            dlBazarCalled = true;
          }
          break;
        case "Shree Ganesh":
          if (Shree_Ganesh()) {
            shreeGaneshCalled = true;
          }
          break;
        case "Faridabad":
          if (Faridabad()) {
            faridabadCalled = true;
          }
          break;
        case "Gajiyabad":
          if (Gajiyabad()) {
            gajiyabadCalled = true;
          }
          break;
        case "Gali":
          if (Gali()) {
            galiCalled = true;
          }
          break;
      }
    });
  } else if (matchingNames.length > 0) {
    matchingNames.forEach((item) => {
      if (item.name === "Disawar") {
        if (Disawar()) {
          disawarCalled = true;
        }
      }
    });
  }
}

setInterval(displayCurrentTime, 1000);
