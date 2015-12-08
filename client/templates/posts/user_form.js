Template.userForm.events({
  'submit form': function (event) {
    event.preventDefault
    const form = event.target
    Users.insert({name: form.userName.value})
    form.userName.value = ''
    console.log('form submitted')
  }
})
