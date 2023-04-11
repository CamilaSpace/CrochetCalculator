//Camila Jimenez
//September 10, 2020
// I'm gonna try to make a program that will tell me the crochet pattern I need for a circle here I gooooooooooo

function circle()
{
    var round = document.getElementById("text1").value;
   // var round = prompt("What round are you on?");
        
    round = Number(round);
        
    if (round === 1)
    {
        alert("Make a magic circle and crochet 12 sc into magic circle");

    }else if (round === 2)
        {	
            alert("Crochet increases into every stitch");
                
        }else if (round === 3)
        {				
            alert("Crochet increases in every other stitch (sc,Inc, sc, Inc, sc)");
                
        }else if (round === 4)
        {			
            alert("Crochet increase in first stitch then two single crochet between every stitch. (Inc, sc, sc, inc, sc, sc, Inc)");
                    
        }else if(round%2===0)
        {
            alert("Increase, " +(round-2) + "sc...All around");
        }else{
            alert((round/2-(0.5)) + "sc, Increase (" + (round - 2) + "sc, increase...repeat 5 times.)" + (round/2-(1.5)) + "sc")
    }//OMG I'M SO SMART This is the forumla for the perfect CIRCLE ^^^

}


//	return 0;

