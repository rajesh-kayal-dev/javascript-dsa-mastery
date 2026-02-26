function MultiplicationTable(tableOf, tableTill){
	for (let i = 0; i <= tableTill; i++) {
		console.log(`${tableOf} * ${i} = ${i * tableOf}`);
	}
}
MultiplicationTable(4,10)