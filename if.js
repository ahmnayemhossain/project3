const paymentSuccess = true;
const marks = 90;

function enroll(callback){
    document.getElementById('demo1').innerHTML = 'payment progrssing';

    setTimeout(()=>{
        if(paymentSuccess){
            callback();
        }else{
            document.getElementById('demo2').innerHTML = 'Payment faild';
        }
    },200)  
} 

function progress(callback){
    document.getElementById('demo3').innerHTML = 'course on progress';
    setTimeout(() => {
        if(marks >= 80){
            callback()
        } else{
            document.getElementById('demo4').innerHTML = 'not eligibel for certificate';
        }
    },3000);
}

function getCertificate(){
    document.getElementById('demo4').innerHTML = 'Preparing your certificate!';

    setTimeout(() => {
        document.getElementById('demo4').innerHTML = 'congrat! you got the certificate'
    }, 1000);
}

enroll(()=>{
    progress(getCertificate)
});
// progress(getCertificate);