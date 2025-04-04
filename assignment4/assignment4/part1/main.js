alert("Running Test")
console.log("Console Log Test")


// Variables and Definitions
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// Text Strings

let storyText = ('It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.');

const insertX = ["Willy the Goblin" , "Big Daddy" , "Father Christmas"]
const insertY = ["the soup kitchen" , "Disneyland" , "the White House"]
const insertZ = ["spontaneously combusted" , "melted into a puddle on the sidewalk" , "turned into a slug and crawled away"]


// Event Listener and Function Definitions
randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  console.log("Does the result work?");

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);
  
  let name = "Bob";

  if(customName.value !== '') {
    name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    weight = Math.round(300/14) + " stone";
    temperature =  Math.round((94-32)*(5/9)) + " centigrade";
    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}