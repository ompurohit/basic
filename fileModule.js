const fs = require("fs");
// console.log(fs);
/**ascronys call */
// fs.readFile(__dirname+'/readme.text','utf8',(err,res)=>{
//     if(err) throw err;
//     console.log(res.toString());
    
// });
// console.log("file readed successfully");

/**syncronus call */
// try {
//     const data = fs.readFileSync(__dirname+'/readme.text','utf8');
//     console.log(data.toString());
    
// } catch (error) {
//     console.log(err);
    
// }
// console.log("File readed successfully");

//delete file
fs.unlink(__dirname+'/readme.text',(err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("file deleted successfull");
    
})

