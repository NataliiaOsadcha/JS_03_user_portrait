const ageValue = +prompt('What year were born?');
if (ageValue === 0) {
	alert("sorry you did not enter your age");
	message1 = (` `);
} else if (ageValue > 0) {
	message1 = (`You are ${2023 - ageValue}.`);
}

const cityValue = prompt('Were do you live?');
if (cityValue === null) {
	alert("sorry you did not enter your city");
	message2 = (` `);
}

const sportValue = +prompt('What is your favorite sport? If it is football - enter 1. If it is swim - enter 2. If it is karate - enter 3.');
if (sportValue === 0) {
	alert("sorry you did not enter your favorite sport");}
		   	
switch (cityValue) {
  case 'kyiv':
	message2  = (` You live in the capital of Ukraine!`);
	break;
  case 'washington':
	message2  = (` You live in the capital of USA!`);
	break;
  case 'london':
	message2  = (` You live in the capital of Great Britain!`);
	break;
  default:
	message2  = (` You live in ${cityValue}!`);
}    

switch (sportValue) {
  case 1:
    message3  = (` Do you wanna be Lionel Messi?`);
    break;
  case 2:
    message3  = (` Do you wanna be Michael Phelps?`);
    break;
  case 3:
    message3  = (` Do you wanna be Stanislav Goruna?`);
}    

alert(message1 + message2 + message3);
    


