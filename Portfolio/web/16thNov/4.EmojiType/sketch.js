var emojis;

function preload() {
	emojis = loadJSON('emojis.json');
}

function setup() {

	var result = select ("#result");
	var input = select("#input");

	input.changed(emojify);

	function emojify(){
		var words = input.value().split (" ");

		var new_result = "";

		for(var i= 0; i<words.length; i++){

			var tempWord = words[i].replace(/\W/g,"" );

			if(emojis.hasOwnProperty(tempWord)) {
				console.log ('yes');

				var newWord = emojis[tempWord];
				newWord+= words[i].replace(/\w/g,"" );
				new_result += newWord; 
				new_result += " ";


			}

			else{
			 new_result += words[i];
			 new_result += " ";

			}


		}
		console.log (new_result);
		result.html(new_result);

	}

}