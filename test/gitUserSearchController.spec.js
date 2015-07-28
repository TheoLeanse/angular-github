describe('GitUserSearchController', function () {
  beforeEach(module('GitUserSearch'));

  var ctrl;

  beforeEach(inject(function($controller) { // inject is a built in angular function to access angular app and controller from tests
    ctrl = $controller('GitUserSearchController');
  }));

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });
});
