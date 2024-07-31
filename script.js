let codes = document.querySelectorAll(".code")

codes.forEach((code,index)=>{
codes.addEventListener("input", ()=>{
	if (code.value.length == 1) {
		if (index < codes.length-1) {
			codes[index+1].focus()
		}
	}
})

code.addEventListener("keydown", (e)=>{
	if (e.key == "Backspace") {
		if (index>0 && code.value.length == 0) {
			codes[index-1].focus()
		}
	}
})

})