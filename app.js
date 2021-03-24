"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      // TODO: search by traits
      let
      break;
      default:
    app(people); // restart app
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");
  switch(displayOption){
    case "info":
    // TODO: get person's info
    displayPerson(person);
    break;
    case "family":
    // TODO: get person's family
    let foundFamily = displayFamily(person, people);
    displayPeople(foundFamily);
    break;
    case "descendants":
    // TODO: get person's descendants
    let foundDescendants = displayDescendants(person, people);
    displayPeople(foundDescendants);
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  foundPerson = foundPerson[0];
  return foundPerson;
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  personInfo += "id: " + person.id + "\n";
  personInfo += "gender: " + person.gender + "\n";
  personInfo += "dob: " + person.dob + "\n";
  personInfo += "height:" + person.height + "\n";
  personInfo += "weight:" + person.weight + "\n";
  personInfo += "eyeColor:" + person.eyeColor + "\n";
  personInfo += "occupation:" + person.occupation + "\n";
  personInfo += "parents:" + person.parents + "\n";
  personInfo += "currentSpouse:" + person.currentSpouse + "\n";
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}



function displayFamily(person, people){
  let parent = person.parents;
  let spouse = person.currentSpouse;
  let parentOne;
  let parentTwo;
  let family = []
  let counter = 0;
  for (let i = 0; i < parent.length; i++) {
      counter = i;
      switch(counter){
        case 0:
          parentOne = parent[i]
          break;
        case 1:
          parentTwo = parent[i];
          break;
      }
      counter++;
  }
  counter = 0;
  let foundSpouce = people.filter(function(person){
    if(person.id === spouse){
      return true;
    }
    else{
      return false;
    }
  });
  let  foundParentOne = people.filter(function(person){
  if(person.id === parentOne){
    return true;
  }
  else{ 
    return false
  }
  });
  let foundParentTwo = people.filter(function(person){
  if(person.id === parentTwo){
    return true;
  }
  else{
    return false;
  }
  });
if (foundSpouce.length > 0){
  family.push(foundSpouce[0]);
}
if (foundParentOne.length > 0){
  family.push(foundParentOne[0]);
}
if (foundParentTwo.length > 0){
  family.push(foundParentTwo[0]);
}
return family;
}




function displayDescendants(person, people){
  let children = [];
  let foundDescendants = searchParent(person, people, 22, children);
  foundDescendants = children;
  console.log(foundDescendants);
  return foundDescendants;
}

function searchParent(person, people, offSpring, array){
  let adult = people[offSpring-1];
  if (offSpring > 0){
    if (adult.parents[0] === person.id || adult.parents[1] === person.id){
      array.push(people[offSpring-1]);
    }
  }
  if (offSpring > 0){
    searchParent(person, people, offSpring-1, array);
  }
}



function displayEyeColor  (person, people){
  
}