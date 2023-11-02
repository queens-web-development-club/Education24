const form = document.querySelector('#contact-form')

// Using an event listener and arrow function to make things easier
form.addEventListener('submit', (event) => {
  // Grab all of the values of the form from our submission
  const name = event.target.name.value
  const email = event.target.email.value
  const message = event.target.message.value
  const experience = event.target.experience.value

  // Grabs the error element from our site => it's how we display our error message on our site
  const errorElement = document.querySelector('#error')

  // We want to hold all of our errors somewhere
  let messages = []

  // This will check that the Name input isnt empty
  if (name === '' || name == null) {
    messages.push('Name is required')
  }

  // This will check that the Email input isnt empty, and contains an @ and .
  if (email === '' || email == null) {
    messages.push('Email is required')
  }

  if (email.includes('@') === false || email.includes('.') === false) {
    messages.push('Email is missing "." or "@"')
  }

  // This will check that the Message input isnt empty
  if (message === '' || message == null) {
    messages.push('Message is required')
  }

  // This will check that at leaast one radio input is checked
  if (experience === '') {
    messages.push('Experience rating required')
  }

  // This will push the error strings to the div with id of error
  if (messages.length > 0) {
    event.preventDefault()
    errorElement.style.display = 'inline'
    errorElement.innerText = messages.join(', ')
  }
})
