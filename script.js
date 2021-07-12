#!/usr/bin/env node
const fs = require("fs");

// read file abc.txt in ut-8 format
let processData = process.argv;

if(processData[2] = "a"){
    let previousData = fs.readFileSync(processData[3], "utf-8");
    fs.writeFileSync(processData[3], previousData + "\n" + processData[4]);
}else if(processData[2] = "w"){
    fs.writeFileSync(processData[3], processData[4]);
}else{
    let data = " ";
    for(i = 2; i < processData.length; i++){
        
        //remove if empty lines
        if(processData.includes("ne")){
            i = i + 1;
            let tempData = fs.readFileSync(processData[i], "utf-8");
            let lines = tempData.split("\n");
            console.log(lines);
        }else{
                data += "\n" + fs.readFileSync(processData[i], "utf-8");
        }
    
}
console.log(data);
}








// fs.writeFileSync("def.txt", "I'm very good");