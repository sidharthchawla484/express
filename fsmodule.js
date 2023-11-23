const fs =require('fs');

//fs.readFile('file.txt' , 'utf8' , (err , data)=>{
  //  console.log(err , data)
//})

//in this out put comes in buffer
//const a1 = fs.readFileSync("file.txt")
//console.log(a1)

// in this out put comes assame as file writes
//const a2 = fs.readFileSync("file.txt")
//console.log(a2.toString())


//fs.write


//fs.writeFile('file.txt' , "good evening" , ()=>{
  //  console.log("written to file")
//})

//Sync
fs.writeFileSync('file.txt' , 'job practice') 
    console.log("changes file")

console.log('file reading complete')