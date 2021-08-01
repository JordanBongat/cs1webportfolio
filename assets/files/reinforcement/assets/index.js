console.log("Welcome Batch 122");

// DO NOT CHANGE ANYTHING ON THIS MODULE 
const submitMessage = () => {
	let message; 

	 if (confirm(`Submit a screenshot in HO of your final Output and send a copy of the repo in WD078-6-C2: Reinforcement 3`)) {
   		message = "Make sure to follow instruction well!";
 	 } else {
     	message = "Press Send for Submission Instruction!";
 	 }
 	 document.getElementById("message").innerHTML = message;
}

