module.exports = mdThemeConfig;

/** @ngInject  */
function mdThemeConfig($mdThemingProvider) {
	$mdThemingProvider.definePalette('myPrimary', {
		50: '000000',
		100: '000000',
		200: '000000',
		300: '000000',
		400: '000000',
		500: '00416A', // CBP's 'brand-primary' color
		600: '000000',
		700: '000000',
		800: '000000',
		900: '000000',
		A100: '1460AA', // CBP's 'brand-info' color
		A200: '1460AA',
		A400: '1460AA',
		A700: '1460AA',
		contrastDefaultColor: 'light'
	});
	$mdThemingProvider.theme('default')
		.primaryPalette('myPrimary')
		.accentPalette('grey'); // should be changed to the CBP approved gray colors
}
