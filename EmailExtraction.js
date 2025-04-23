let fs = require('fs');
let fileName = "test.txt";

try {
    let data = fs.readFileSync(fileName, 'utf8');
    let text =data.toString();
    let counter = 0;
    for (let i=0; i<text.length; i++){
        if ((text.substring(i, i+13)==='@softwire.com')){
            counter++;
        }
    }
    console.log(counter);
}catch (e){
    console.log('Error: ', e.stack);
}
