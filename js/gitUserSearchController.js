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

// '264601a743391608b4223c49a37cfd1b93dff5c5'
