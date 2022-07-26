function sendFormSubmit(){
var timestamp = Math.round(+new Date());
localform.config({
eventInfo: 
{
eventName: 'Form Success',
target:location.href,
timestamp:timestamp.toString(),
},
category:
{
primaryCategory: 'Local-Request',
subCategory01: 'RFS',
subCategory02: 'Generic'
}
});
sendDTM.sendDTM(false);
}