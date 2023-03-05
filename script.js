
const form  =  document.querySelector('#mainform');
const qr = document.getElementById('qrcode');
console.log(qr);
const onSubmit=(e)=>{
    e.preventDefault();

    const url=document.getElementById('url').value;
    const size=document.getElementById('size').value;

    if(url===''){
        alert("please enter a valid url");
    }else{
        console.log(url);
        clearUI();
        generateQR(url,size);
        setTimeout(() => {
            const saverul=qr.querySelector('img').src;
            createSaveBtn(saverul);
        }, 50);
    }

};

const generateQR=(url,size)=>{
    const qrcode=new QRCode('qrcode',{
        text:url,
        width:size,
        height:size,
    })
};
const clearUI=()=>{
    qr.innerHTML='';
    const down=document.getElementById('save-link');
    if(down) down.remove();
}

const createSaveBtn=(saveurl)=>{
    const link=document.createElement('a');
    link.id='save-link';
    link.classList='saveBtn';

    link.href=saveurl;
    link.download='qrcode';
    link.innerHTML='Save Image';
    document.getElementById('generated').appendChild(link);

}
form.addEventListener('submit',onSubmit);