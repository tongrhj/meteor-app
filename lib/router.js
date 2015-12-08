Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: '404',
  waitOn() { return Meteor.subscribe('posts') }
})

Router.route('/', {name: 'postsList'})

Router.route('/posts/:_id', {
  name: 'postPage',
  data() { return Posts.findOne(this.params._id) }
})

Router.onBeforeAction('dataNotFound', {only: 'postPage'})
