module.exports = mdiconsConfig;

/** @ngInject */
function mdiconsConfig($mdIconProvider) {
  $mdIconProvider
    .defaultIconSet('./app/assets/mdi/mdi.svg');
}
