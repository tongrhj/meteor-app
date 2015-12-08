Template.loading.rendered = function () {
  if ( ! Session.get('loadingSplash') ) {
    this.loading = window.pleaseWait({
      logo: null,
      backgroundColor: 'orange',
      loadingHtml: spinner
    });
    Session.set('loadingSplash', true); // just show loading splash once
  }
};

Template.loading.destroyed = function () {
  if ( this.loading ) {
    this.loading.finish();
  }
};

var spinner = '<div class="sk-spinner sk-spinner-pulse"></div>';
