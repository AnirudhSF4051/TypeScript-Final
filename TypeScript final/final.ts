export{};
let image: HTMLImageElement=document.getElementById("image") as HTMLImageElement;
let content: HTMLParagraphElement=document.getElementById("content") as HTMLParagraphElement;
class Image
{
    url:string;
    caption:string;
    constructor(Url:string,Caption:string)
    {
        this.caption=Caption;
        this.url=Url;
    }
}
let image1=new Image('image1.jpg','Waterfalls');
let image2=new Image('image2.jpg','Autumn');
let image3=new Image('image3.jpg','Cat');
let image4=new Image('image4.jpg','Bali');
let image5=new Image('image5.jpg','Rhino');
let image6=new Image('image6.jpg','River');
let image7=new Image('image7.jpg','Agriculture');

let imageArray:Image[]=[];

imageArray[0]=image1;
imageArray[1]=image2;
imageArray[2]=image3;
imageArray[3]=image4;
imageArray[4]=image5;
imageArray[5]=image6;
imageArray[6]=image7;

let start:number=0;

function next()
{
    start++;
    if(start>imageArray.length-1)
    {
        start=0
    }
    image.src=imageArray[start].url;
    content.innerHTML=imageArray[start].caption;
    
}

function previous()
{
    start--;
    if(start<0)
    {
        start=imageArray.length-1;
    }
    image.src=imageArray[start].url;
    content.innerHTML=imageArray[start].caption;
    
}





