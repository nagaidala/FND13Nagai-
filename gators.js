'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let sub = document.getElementById('id-submit')

sub.addEventListener("click", () => {
	const numberOfGators = document.getElementById('number').value;


	if (isNaN(numberOfGators)) {
		alert('数字のみを入力してください');
	}

	if (numberOfGators <= 0 || Number.isInteger(numberOfGators)) {
		alert('自然数で入力してください')
	}


	let addGators = "";
	for (let i = 0; i < numberOfGators; i++) {
		addGators += '🐊';
	}
	document.getElementById("gatorPool").innerHTML = addGators
})
