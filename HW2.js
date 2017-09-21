var dogs = ['Pug', 'Golden Retreiver', 'Black Lab', 'Dachshund', 'Beagle'];
var fav = 'Pug';
var input = prompt('What is your favorite dog breed?');
var randomDog = dogs[Math.floor(Math.random()*5)];
console.log('Your favorite breed is ' + fav + '? Mine is ' + randomDog);
if(randomDog.toLowerCase == input.toLowerCase)
{
	console.log("We're besties!");
}
else
{
	console.log("You're wrong!");
}