let a = parseInt(prompt('Enter the number '));
let x=1;


document.write(`table ${a} <br>`)

 while (x<21)
    {
        let c = x * a;
		 
		x= (x<10) ? ("0"+x) : x
		
		document.write(`${x} *  ${a}  =  ${c} <br>`)
		
		x++;
		
		

    }
	
	