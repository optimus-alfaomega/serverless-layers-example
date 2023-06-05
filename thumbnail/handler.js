const AWS = require ('aws-sdk');
const util = require ('util');
const sharp = require ('sharp');
const s3= new AWS.S3();

module.exports.thumbnailGenerator = async (event, context) => {
/*
  console.log("Reading option from event:\n", util.inspect(event , {depth: 5}));
  const srcBucket = event.Records[0].s3.bucket.name;
  console.log(event.Records[0].s3.object)
  const srcKey = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g," "));
  console.log(srcKey)
  
  const typeMatch = srcKey.match(/\.([^.]*)$/);
   
  if(!typeMatch){
    console.log("Could not determinate the image type");
  }

*/
console.log("srcKey")
  
}
/*
    const reziser= async (imgBody, newSize, dstBucket, fileKey) => {

const nameFile = fileKey.split('/')[1]
const dstKey = `resized/${newSize}-${nameFile}`
let buffer = null
try{
buffer = await sharp(imgBody).resize(newSize).toBuffer();

}catch (error){

console.log(error);
return;

}

try {
const destparams = {
    Bucket : dstBucket,
    Key : dstKey,
    Body: buffer,
    ContentType: "image"
};

 await s3.putObject(destparams).promise();


} catch(error){

console.log(error);
return;
};



console.log('Succesfully resized' + dstBucket + '/' + filekey + 'and uploaded to' + dstBucket + '/' + dstKey);


}
*/
