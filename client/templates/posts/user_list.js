Template.userList.helpers({
  users () {
    return Users.find({}, {sort: {score: -1}})
  }
})

Template.userList.events({
  clickBtn () {
    Users.update(this._id, {$inc: {score: 1}})
  }
})
