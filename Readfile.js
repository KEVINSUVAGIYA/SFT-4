var fs = require("fs");
console.log(" Writing into an file ");

// Sample.txt is an empty file
// fs.writeFile(
// "./Text.txt",
// "Let's write a few sentences in the file",
// function (err) {
// 	if (err) {
// 	return console.error(err);
// 	}

	// If no error the remaining code executes
	// console.log(" Finished writing ");
	console.log("Reading the data that's written");

	// Reading the file
	fs.readFile("Text.txt", function (err, data) {
	if (err) {
		return console.error(err);
	}
	var words = data.toString().split(" ");
	// console.log(words)
    // let count=[];
    // let counts = [];
    // document.getElementById("ans").innerHTML = i+1 + "-word " +findt(words);
    findt(0,words)

    
    
});
// }
// );

function findt(i, words) {

  let processedWords = [];

  for (i; i < words.length; i++) {
    count = words[i].split("");
    for (let k = 0; k < count.length; k++) {
      for (let j = k + 1; j < count.length; j++) {
        if (count[k] == count[j]) {
          let ans = "";
          for (let m = 0; m < count.length; m++) {
            if (count[m] == count[k]) {
              ans += m + " ";
            }
          }
          if (processedWords.indexOf(words[i]) === -1) {
            console.log("the " + i + " word : --" + words[i] + "-- => " + count[k] + ":" + ans);
            processedWords.push(words[i]);
          }
        }
      }
    }
  }
}