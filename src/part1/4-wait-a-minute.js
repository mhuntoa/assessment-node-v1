
function waitAMinute(num) {
	let hr = ~~(num/60)
	let min = num%60

	return (`${hr}:${min}`)
}

export default waitAMinute