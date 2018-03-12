let webapp1 = {
  id: 1,
  title: 'WebApp 1',
  desc: 'The first WebApp.',
  complete: true
}

let webapp2 = {
  id: 2,
  title: 'WebApp 2',
  desc: 'The second WebApp.',
  complete: true
}

let webapp3 = {
  id: 3,
  title: 'WebApp 3',
  desc: 'The third WebApp.',
  complete: false
}

let webapps = [
  webapp1,
  webapp2,
  webapp3
]

console.log("The following webapps are not complete: ");
for(var i = 0; i < webapps.length; i++) {
  if(!webapps[i].complete) {
    console.log(webapps[i].title);
  }
}
