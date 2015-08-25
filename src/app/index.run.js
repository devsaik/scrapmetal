(function() {
  'use strict';

  angular
    .module('scrapmetal')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
