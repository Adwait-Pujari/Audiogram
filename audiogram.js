// //Creating canvas
// let canvas = document.getElementById('grid1');
// let ctx = canvas.getContext("2d");

// canvas.addEventListener('click', handleCanvas1Click);

// //Global Constants
// const frequencyRange = [250, 500, 750, 1000, 1500, 2000, 3000, 4000, 6000, 8000];
// const maxFrequency = Math.max(...frequencyRange);
// const minFrequency = Math.min(...frequencyRange);
// const hearingLevelRange = [-10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
// const maxHearingLevel = Math.max(...hearingLevelRange);
// const minHearingLevel = Math.min(...hearingLevelRange);
// const rightEar = 'o';
// const leftEar = 'x';

// //NOTE: THE GRAPH START AND END POINTS ARE HARD-CODED
// //Graph start and end points
// const startValue = [119, 15];
// const endValue = [501, 415];
// let maxLength = 480;
// let displayValue = 'O';

// let lastClick = [0,0, displayValue];

// //Instances for calculating frequenecy and hearing value
// let displayCoordinates = [0,0];
// let oldRange = [380,400], newRange = [8000, 130];
// let oldMin = [120, 15], newMin = [0, -10];

// //LocalStorage
// let drawPoints = [];

 
// window.onload = function()
// {
//     displayImage();
// };

// //Display background image
// function displayImage(){
//     let background = new Image();
//     background.src = "audiogram_image.png";

//     background.onload = function(){
//         let gridRatio = document.getElementById('grid1');
//         gridRatio.width = background.width;
//         gridRatio.height = background.height; 
//         loadDrawPoints();

//         //Second Canvas
//         // let gridRatio2 = document.getElementById('grid2');
//         // gridRatio2.width = background.width;
//         // gridRatio2.height = background.height; 
//     };
    
// }

// //Onclick event
// function handleCanvas1Click(event) {
//     const rect = canvas.getBoundingClientRect();
//     let x = 0, y = 0;
//     x = Math.round(event.clientX - rect.left);
//     y = Math.round(event.clientY - rect.top);

//     displayCoordinates[0] = Math.round((((x - oldMin[0]) * newRange[0]) / oldRange[0]) + newMin[0]); 
//     displayCoordinates[1] = Math.round((((y - oldMin[1]) * newRange[1]) / oldRange[1]) + newMin[1]); 
//     console.log('The X value is ' + displayCoordinates[0]);
//     console.log('The Y value is ' + displayCoordinates[1]);
    

    
//     // Display the selected point
//     if(x >= startValue[0] && x <= endValue[0] && y >= startValue[1] && y <= endValue[1]){    
        

//         drawPoint(x, y, displayValue);

//         const Data = {x, y, displayValue};
//         drawPoints.push(Data);
//         saveDrawPoints();

//     }
// }

// //Draw lines between two points
// function drawLines(x, y)
// {
//     ctx.beginPath();
//     ctx.moveTo(lastClick[0], lastClick[1]);
//     ctx.lineTo(x,y);
//     ctx.stroke();
// }

// //To choose the letter to draw on the canvas. Used in the html code
// function confirmDisplayValue(value)
// {
//     displayValue = value;
//     lastClick = [0, 0];
// }

// //To draw the text/letter on the canvas
// function calculateInputText(variable, x, y)
// {
//     let fontSize = 30;
//     ctx.font =  fontSize +  "px Arial";
//     let textWidth = ctx.measureText(variable).width;
    
//     x -= (textWidth / 2);
//     y += (fontSize / 4);
    
//     ctx.fillText(variable, x, y);

// }

// //Functioning the clear button
// function clearAudiogram()
// {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     displayImage();
//     lastClick = [0,0];
//     drawPoints = [];    
//     localStorage.removeItem('drawData');
// }

// //Saving data to local storage
// function saveDrawPoints()
// {
//     localStorage.setItem('drawData', JSON.stringify(drawPoints));
// }

// //Loading the data after refreshing the website
// function loadDrawPoints()
// {
//     const storedData = localStorage.getItem('drawData');
//     if(storedData)
//     {
//         drawPoints = JSON.parse(storedData);
//         redrawPoints(drawPoints);
//     }
// }

// function redrawPoints(drawPoints)
// {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     // displayImage();
//     lastClick = [0,0, 'O'];

//     for (let i = 0; i < drawPoints.length; i++) {
//         data = drawPoints[i];
//         x = data.x;
//         y = data.y;
//         displayValue = data.displayValue;
//         if(displayValue != lastClick[2])
//         {
//             lastClick = [0, 0, displayValue];
//         }

//         drawPoint(x, y, displayValue);
//     };
// }

// function drawPoint(x, y, displayValue)
// {
//     if(displayValue == 'O' || displayValue == '<')
//     {
//         ctx.fillStyle = "red";
        
//     }
//     else if(displayValue == 'X' || displayValue == '>')
//     {
//         ctx.fillStyle = "blue";
        
//     }

//     if(lastClick[0] == 0 && lastClick[0] == 0){
//         lastClick = [x, y, displayValue];
//     }
//     else{
//         drawLines(x, y); 
//         lastClick = [x, y, displayValue];
//     }
    
//     calculateInputText(displayValue, x, y);

// }

// //Submit button to submit the JSON query. Printed in the console, can be returned and stored somewhere.
// function submit(){
//     if(drawPoints)
//         console.log(JSON.stringify(drawPoints));
// }


// /*
// //Disable function of multiple graph
// // function showSecondCanvas() {
// //     let canvas2 = document.getElementById('grid2');
// //     canvas2.style.display = 'block';
// //     let ctx2 = canvas2.getContext("2d");
// //   }

// //Code for multi graph
// function multiLayout()
// {
//     //clearAudiogram();
//     //showSecondCanvas();
// }



// function singleLayout()
// {
//     displayImage();
//     //Hiding Second Canvas
//     let hidCanvas2 = document.getElementById('grid2');
//     hidCanvas2.style.display = 'none';
// }

// */