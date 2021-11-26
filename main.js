var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
var block_image_object="";
var Image_object="";

function Lucario()
{
	fabric.Image.fromURL('LGedited.png', function(Img){
	block_image_object = Img;

    block_image_object.scaleToWidth(300);
    block_image_object.scaleToHeight(410);
    block_image_object.set({
        top:0,
        left:300
	});
    canvas.add(block_image_object);
    
    });
}
function Surya()
{
	fabric.Image.fromURL('SuryaT.png', function(Img){
	Image_object = Img;

    Image_object.scaleToWidth(200);
    Image_object.scaleToHeight(310);
    Image_object.set({
        top:100,
        left:-100
	});
    canvas.add(Image_object);
    
    });
}
function playSound(){
    Lucario();
	x.play();
}
function canvasImage(){
    Surya();
}