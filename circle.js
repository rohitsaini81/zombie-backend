import axios from 'axios';
import mongoose from 'mongoose';
import Book from './models/db.js';
import dotenv from 'dotenv';
import { dbcon, dbclose, uri } from './models/db_server.js';
import { timeapi, nowTime } from './clock.js';
dotenv.config();
console.log(2)
var today = new Date();
var setdate = today.toLocaleDateString();
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



// Dl_Satta ------------------>
const DL_Satta = async () => {
  console.log("DL_Satta");
  if (dlSattaCalled) {
    return false;
  }

  const obj = {name:"DL_Satta",today:"00",yesterday:"-0",date:setdate}
  createdata(obj);
  dlSattaCalled = true;
  sleep(60000)
  disawarCalled = false;
  return true;
};
// DL_bazar ------------------>
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
  yesterday:res[1][0].yesterday,
  date:setdate
}
// console.log(obj)
createdata(obj)
}).catch((e)=>console.log(e));
  sleep(60000)
  dlSattaCalled = false;
  return true;
};
// Shree_Ganesh ------------------>
const Shree_Ganesh = () => {
  if (shreeGaneshCalled) {
    return false;
  }
  console.log("Shree_Ganesh");
  shreeGaneshCalled = true;
  methA().then((res) => { const obj ={
    name:res[1][1].name,
    today:res[1][1].today,
    yesterday:res[1][1].yesterday,
    date:setdate
  }
  // console.log(obj)
  createdata(obj)
}).catch((e)=>console.log(e));
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
      "yesterday": res[0][1].faridabad,
      "date": setdate
    }
    // console.log(obj)
    createdata(obj)
    
  }).catch((e)=>console.log(e));


  sleep(60000)
  shreeGaneshCalled = false;
  return true;
};
// Gaizyabad ------------------>
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
      "yesterday": res[0][1].gaziabad,
      "date": setdate
    }
    // console.log(obj)
    createdata(obj)
  }).catch((e)=>console.log(e));

  sleep(60000)
  faridabadCalled = false;
  return true;
};
// Gali ------------------>
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
      "yesterday": res[0][1].gali,
      "date": setdate
    }
    // console.log(obj)
    createdata(obj)
    }).catch((e)=>console.log(e));

  sleep(60000)
  gajiyabadCalled = false;
  return true;
};
// Disawer ----------->
const Disawar = () => {
  if (disawarCalled) {
    return false;
  }
  console.log("Disawar");
  disawarCalled = true;
  methA().then((res) => {
    today = new Date();
    setdate = today.toLocaleDateString();
    const yest = res[0][0]
    console.log(yest);
    const obj = {
      "name": "disawar",
      "today": res[0][0].disawer,
      "yesterday": res[0][1].yesterday,
      "date": setdate
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

  { name: "DL_bazar", time: "3.01" },//-3.00 
  { name: "Shree Ganesh", time: "4.50" },//-4.50

  { name: "Faridabad", time: "6.00" },//-6.00
  { name: "Gajiyabad", time: "9.00" },//-9.00 
  { name: "Gali", time: "11.30" },//-11.30
  { name: "Disawar", time: "5.00" },//-5.00
];



// readdatabase();

timeapi()
sleep(5000).then(()=>{console.log(nowTime," ",setdate)})
const now = new Date()
function displayCurrentTime() {
  let timeString = now.toLocaleTimeString();
  const a = timeString.split(':');
  const currentTime = `${a[0]}.${a[1]}`;
  const AM = a[2].includes('AM');
  timeString = nowTime;
  // console.log(timeString,AM)


 
  const matchingNames = data.filter((item) => item.time === currentTime);

  if (!AM && matchingNames.length > 0) {
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