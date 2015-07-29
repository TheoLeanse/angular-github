githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {
  var vm = this;
  var searchResource = $resource('https://api.github.com/search/users');
  vm.doSearch = function() {
    vm.searchResult = searchResource.get(
      { q: vm.searchTerm,
        access_token: githubSecret }
    );
  };
}]);
