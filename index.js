const fs = require("fs");
const axios = require("axios");

const getData = async () => {
  try {
    const res = await axios.get("http://jsonplaceholder.typicode.com/posts");

    //Convert the data to a JSON object
    const data = JSON.stringify(res.data);
    //Wirte the data to a file
    fs.writeFileSync(`${__dirname}/result/posts.json`, data, "utf-8");
    console.log("Data succesfully written to file..");
  } catch (error) {
    console.log(error);
  }
};

getData();
