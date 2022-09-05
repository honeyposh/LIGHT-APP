const tubeLight=()=>{
	for (i= 1;i<=5;i++){
	let text=document.getElementById('bulbdata')
	let bid=document.getElementById('lightid'.concat(i));
	if(bid.src.match('lighton')){
		bid.src="lightoff.png"
		text.innerHTML="LIGHT OFF"
		text.style.color="black"
	}else{
		bid.src="lighton.jpg"
		text.innerHTML="LIGHT ON"
		text.style.color="red"
	}
 }

}