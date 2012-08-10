(function () {
	var jsTest = ['Drupal', 
		'Tomato',
		'Mojo',
		'fn_register_hooks',
		'SUGAR',
		'YAHO',
		'jQuery',
		// jQuery.ui',
		'Typekit',
		'FB',
		'Ext',
		'Modernizr',
		'Raphael',
		'Cufon',
		'sIFR',
		'xtsite',
		'xtpage',
		'Piwik',
		'IPBoard',
		'MyBB',
		'clicky',
		'woopraTracker',
		'RightJS',
		'owa_baseUrl',
		'prettyPrint',
		's_account',
		'twttr',
		'cmCreatePageviewTag',
		'google_buzz__base_url',
		'gapi',
		'google',
		'google',
		'head',
		'swfobject',
		'ch_client',
		'ch_write_iframe',
		'jimdoData',
		'webs',
		'Backbone',
		'_',
		'Spine'];
		// TODO: To Detect versions, some of these should be objects, some functions...who cares...?
		for (var i = jsTest.length - 1; i >= 0; i--) {
			if(!window[jsTest[i]]) {
				window[jsTest[i]] = {
					//lazy version
					version: 3.14159,
					VERSION: 3.14159,
					_version: 3.14159,
					//underscore
					identity: function (a) {
						return a;
					},
					//backbone
					sync: function() {},
					//head
					js: '',
					//google loader
					maps: '',
					//googleMap
					load: '',
					//Plus1
					plusone: '',
					//FB
					api: '',
				}
			}
		};

		var x = document.createComment('<link rel="stylesheet" rel="author"/wp-content/bitrix/.opencms. a/theme/styles.php?theme=a".a ><a href="infusions/delivery/afr.php" >Powered by MODx</a> <!--End of copyright link     <script > .goog.require var smf_ var BLANK_URL = \'/js/blank.html\' ;Liferay.currentURL=<iframe src="http://a.tumblr.compowered by Contao vbmenu_control /Satellite? -legacycss/Asset">ref=http://fonts.googleapis.com/ index.php?route=product/product<form action="/idp/Authn/UserPassword" method="post">_eof //');
		var y = document.createElement('meta');
		y.name="generator";
		y.content="xoopsploneMediaWikiCMS Made SimpleSilverStripeMovable TypeAmirokoobibbPressdokuwikiTYPO3PHP-NukeDOtNetNuke";

		// ?getsatisfaction.com/feedbackgoogle-analytics.com/ga.jsquantserve.com/quant.jsprototype.js/components/com_uc_cart/goog/base.jsmootoolsdojo.jsscriptaculous.jsdisqus.com/forumswibiya.com/Loaders/api.recaptcha.net/mollom/mollom.jszp-core/jsmain.php?ag2_.pagead/show_ads.js/xenforo/Frameworks/Objective-J/Objective-J.js/avactis-themes/a/j/javascripts.jsaddthis.com/jsbuysellads.com/bsa.jsweebly.com/weebly/bootstrap-.jsaddthis.com/jsjavascripts/asterion.jsanalytics.yola.alfresco.js

		document.querySelector('head').insertBefore(x); 
		document.querySelector('head').insertBefore(y); 

		console.log(y);



})();
