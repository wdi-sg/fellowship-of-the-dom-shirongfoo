console.log('Linked.')

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
]

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
]

var lands = ['The Shire', 'Rivendell', 'Mordor']
var body = document.querySelector('body')

// Part 1

function makeMiddleEarth () {
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var middleEarth = document.createElement('section')
  middleEarth.id = 'middle-earth'

  lands.forEach(function (land) {
    var landArticle = document.createElement('article')
    var landTitle = document.createElement('h1')
    landTitle.textContent = land
    landArticle.appendChild(landTitle)
    middleEarth.appendChild(landArticle)
  })
  body.appendChild(middleEarth)
}

makeMiddleEarth()

// Part 2
var theShire = document.querySelector('article:first-child')
function makeHobbits () {
  var unorderedList = document.createElement('ul')
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  hobbits.forEach(function (eachHobbit) {
    var ulArticle = document.createElement('li')
    ulArticle.textContent = eachHobbit// <li>hobbitname</li>
    unorderedList.appendChild(ulArticle) // <ul><li></li></ul>
    ulArticle.className = 'hobbit'
  })

  theShire.appendChild(unorderedList)
}

makeHobbits()

// Part 3

function keepItSecretKeepItSafe () {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var theRing = document.createElement('div')
  theRing.id = 'the-ring'
  theRing.class = 'magic-imbued-jewelry'

  theRing.addEventListener('click', function () {
    nazgulScreech()
  })
  var frodo = document.querySelector('li:first-child')
  frodo.appendChild(theRing)
}
keepItSecretKeepItSafe()

// Part 4

function makeBuddies () {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var aside = document.createElement('aside')
  // var buddies = [
  //   'Gandalf the Grey',
  //   'Legolas',
  //   'Gimli',
  //   'Strider',
  //   'Boromir'
  // ];
  var unorderedList = document.createElement('ul')
  var ulArticle = document.createElement('li')
  var unorderedList = document.createElement('ul')

  buddies.forEach(function (eachBuddy) {
    unorderedList.id = 'buddyList'
    var ulArticle = document.createElement('li')
    ulArticle.textContent = eachBuddy // <li>Gandalf The Grey</li>
    unorderedList.appendChild(ulArticle) // <ul><li></li></ul>
  })
  aside.appendChild(unorderedList)
  var rivendell = document.querySelector('article:nth-child(2)')
  rivendell.appendChild(aside)
}

makeBuddies()
// Part 5

function beautifulStranger () {
  // change the 'Strider' textnode to 'Aragorn'
  // var buddies = [
  //   'Gandalf the Grey',
  //   'Legolas',
  //   'Gimli',
  //   'Strider',
  //   'Boromir'
  // ];
  var strider = document.querySelector('aside ul li:nth-child(4)')
  strider.textContent = 'Aragorn'
}

beautifulStranger()

// Part 6

function leaveTheShire () {
  // assemble the hobbits and move them to Rivendell
  // var hobbits = [
  //   'Frodo Baggins',
  //   'Samwise \'Sam\' Gamgee',
  //   'Meriadoc \'Merry\' Brandybuck',
  //   'Peregrin \'Pippin\' Took'
  // ]
  var hobbits = document.querySelectorAll('.hobbit')
  var rivendell = document.querySelector('article:nth-child(2)')
  hobbits.forEach(function (hobbit) {
    rivendell.appendChild(hobbit)
  })
}

leaveTheShire()

// Part 7
var rivendell = document.querySelector('article:nth-child(2)')
var rivendellPeople = document.querySelectorAll('li')
function forgeTheFellowShip () {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party

  var theFellowship = document.createElement('div')
  theFellowship.id = 'theFellowship'
  theFellowship.textContent = 'the-fellowship'
  rivendell.appendChild(theFellowship)

  rivendellPeople.forEach(function (person) {
    theFellowship.appendChild(person)
    alert(person.textContent + ' has been added to the fellowship!')
  })
}

forgeTheFellowShip()
// Part 8

function theBalrog () {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  var gandalfTheGrey = rivendellPeople[0]
  gandalfTheGrey.textContent = 'Gandalf the Whie'
  gandalfTheGrey.style.backgroundColor = 'white'
  gandalfTheGrey.style.border = '1px grey solid'
}

theBalrog()
// Part 9

function hornOfGondor () {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  alert('the horn of gondor has been blown')
  var boromir = rivendellPeople[4]
  boromir.style.textDecoration = 'line-through'
  boromir.parentNode.removeChild(boromir)
}

hornOfGondor()

// Part 10
var mordor = document.querySelector('article:nth-child(3)')
var frodo = rivendellPeople[5]
var sam = rivendellPeople[6]
function itsDangerousToGoAlone () {
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  mordor.appendChild(frodo)
  mordor.appendChild(sam)
  var div = document.createElement('div')
  div.id = 'mount-doom'
  mordor.appendChild(div)
}

itsDangerousToGoAlone()

// Part 11

function weWantsIt () {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var gollumDiv = document.createElement('div')
  gollumDiv.id = 'gollum'
  mordor.appendChild(gollumDiv)
  var theRing = document.querySelector('#the-ring')
  gollumDiv.appendChild(theRing)
  var mountDoom = document.querySelector('#mount-doom')
  mountDoom.appendChild(gollumDiv)
  console.log(mordor)
}
weWantsIt()
// Part 12

function thereAndBackAgain () {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  var gollum = document.querySelector('#gollum')
  gollum.parentElement.removeChild(gollum)
  var hobbits = document.querySelectorAll('.hobbit')
  var hobbitUnorderedList = document.createElement('ul')


  hobbits.forEach(function(hobbit){
    var li = document.createElement('li')
    li.textContent = hobbit.textContent
    hobbitUnorderedList.appendChild(li)

  })
  mordor.removeChild(frodo)
  mordor.removeChild(sam)
  theShire.appendChild(hobbitUnorderedList)
}

thereAndBackAgain()
