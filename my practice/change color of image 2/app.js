const canvas=document.querySelector('canvas');
const ctx=canvas.getContext('2d');
const rgbValue=[];
function make(){
    const myimage = new Image();
    myimage.src="sofaset.png";
    myimage.onload=function(){
    canvas.width=myimage.width;
    canvas.height=myimage.height;
    ctx.drawImage(myimage,0,0,myimage.width,myimage.height)
      const imageData= ctx.getImageData(0 , 0 , canvas.width, canvas.height);
      const rgbArray=imageData.data;
      
      for(let i=0;i<rgbArray.length;i+=4){
        const rgb={
            r:rgbArray[i],
            g:rgbArray[i+1],
            b:rgbArray[i+2]
        }
        rgbValue.push(rgb);
      }
      for(let i=0;i<rgbValue.length;i++){
        if(rgbValue[i].r==70 || rgbValue[i].g==70 || rgbValue[i].g==70  ){
        console.log(rgbValue[i])
        }
      }
    }
    
}
make();
for(let i=0;i<rgbValue.length;i++){
      console.log(rgbValue[i])
      }























