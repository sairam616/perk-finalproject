function changeMode1()
{   
    /********************** DarkMode Styling  *********************/
    document.body.style.backgroundColor="black";
    document.getElementById('banner').src="./images/wall.jpg";

    document.querySelector('.title1').style.color="skyblue";
    document.querySelector('.title2').style.color="white";

    document.querySelector('.navbar').style.backgroundColor="black";
    document.querySelector('#dark').style.display="none";
    document.querySelector('#light').style.display="block";
    var x=document.querySelectorAll('.menu a');
    for(var i=0;i<x.length;i++)
    {
        x[i].style.color="white";
    }

    document.querySelector('#fitness').style.backgroundColor="black";
    document.querySelector('#fitness h1').style.color="white";
    var y=document.querySelectorAll('#fitness a');
    for(var i=0;i<y.length;i++)
    {
        y[i].style.color="white";
    }

    document.querySelector('#articles').style.backgroundColor="darkslategrey";
    document.querySelector('#articles h1').style.color="white";
    document.querySelector('#articles a').style.color="darkblue";

    document.querySelector('.bottom').style.backgroundColor="black";
}


function changeMode2()
{
    /********************** LightMode Styling  *********************/
    document.body.style.backgroundColor="white";

    document.getElementById('banner').src="./images/wall2.jpg";

    document.querySelector('.title1').style.color="darkblue";
    document.querySelector('.title2').style.color="darkred";

    document.querySelector('.navbar').style.backgroundColor="white";
    document.querySelector('#dark').style.display="block";
    document.querySelector('#light').style.display="none";
    var x=document.querySelectorAll('.menu a')
    for(var i=0;i<x.length;i++)
    {
        x[i].style.color="gray";
    }

    document.querySelector('#fitness').style.backgroundColor="white";
    document.querySelector('#fitness h1').style.color="black";
    var y=document.querySelectorAll('#fitness a');
    for(var i=0;i<y.length;i++)
    {
        y[i].style.color="black";
    }

    document.querySelector('#articles').style.backgroundColor="skyblue";
    document.querySelector('#articles h1').style.color="white";
    document.querySelector('#articles a').style.color="black";

    document.querySelector('.bottom').style.backgroundColor="white";
}