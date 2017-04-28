var cheerio = require("cheerio");
var html = `<html lang="en" class="flag-limitFabrikSave-on flag-moreFollowSuggestions-on flag-unfollowComments-on flag-scoopTool-on flag-videoVHSCover-on flag-videoVHSShareTools-on flag-videoVHSLive-on flag-videoVHSNewControls-on flag-videoVHSEmbeddedOnly-on flag-allTheEmphases-on flag-freeTrial-on flag-dedupeWhatsNext-on flag-trendingPageLinks-on flag-sprinklePaidPost-on flag-headerBidder-on flag-largeLedeXXL-on flag-standardizeWhatsNextCollection-on flag-onlyLayoutA-on flag-simple-on flag-simpleExtendedByline-on flag-collectionsWhatsNext-on flag-shareToolsUnderHeadline-on flag-mobileMediaViewer-on flag-storyPrint-on flag-podcastInLede-on flag-MovieTickets-on flag-requestTragedyAd-on flag-MoreInSubsectionFix-on flag-seriesIssueMarginalia-on flag-serverSideCollectionUrls-on flag-multipleBylines-on flag-minimalAds-on flag-adDisclaimer-on flag-inlineAdStyles-on flag-fabrikWebsocketsOnly-on flag-storyFlexFrames-on flag-translationLinks-on flag-phaseOneAds-on flag-papihttps-on flag-bugFixFullBleed-on flag-verticalFullBleed-on flag-updateRestaurantReservations-on flag-flexAdsPhase2-on flag-flexAdsonSectionBug-on flag-newsletterInlineModule-on flag-a9HeaderEnabled-on flag-removeInternationalEdition-on flag-clientSideABRA-on  desktop  section-world format-extra-long tone-news app-article page-theme-standard has-comments has-cover-media wf-active viewport-small viewport-small-10 viewport-small-20 viewport-medium viewport-medium-10 viewport-medium-20 viewport-medium-30 viewport-medium-31 viewport-medium-40 viewport-medium-50 viewport-medium-60 viewport-large viewport-large-10 viewport-large-11 viewport-large-20 viewport-large-21 viewport-large-30 viewport-large-40 viewport-large-41 has-js has-flexbox has-flexboxlegacy has-canvas has-canvastext has-webgl has-touch has-geolocation has-postmessage has-websqldatabase has-indexeddb has-hashchange has-history has-draganddrop has-websockets has-rgba has-hsla has-multiplebgs has-backgroundsize has-borderimage has-borderradius has-boxshadow has-textshadow has-opacity has-cssanimations has-csscolumns has-cssgradients has-cssreflections has-csstransforms has-csstransforms3d has-csstransitions has-fontface has-generatedcontent has-video has-audio has-localstorage has-sessionstorage has-webworkers has-applicationcache has-svg has-inlinesvg has-smil has-svgclippaths has-cors tr-directwrite tr-aa-unknown-subpixel edition-domestic type-size-small" itemid="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html" itemtype="http://schema.org/NewsArticle" itemscope="" xmlns:og="http://opengraphprotocol.org/schema/" data-nyt-ab="www-article-sample=2a www-story-kristof-test=Control www-story-newsletter-test=variant1 EC_SampleTest=variantA" data-page-layout="a" data-lede-media-size="full_bleed" data-keywords="article-extra-long,has-embedded-interactive">
   <!--<![endif]--><!--[if IE 9]>
   <html lang="en" class="no-js ie9 lt-ie10 section-world format-extra-long tone-news app-article page-theme-standard has-comments has-cover-media type-size-small" xmlns:og="http://opengraphprotocol.org/schema/">
      <![endif]--><!--[if IE 8]>
      <html lang="en" class="no-js ie8 lt-ie10 lt-ie9 section-world format-extra-long tone-news app-article page-theme-standard has-comments has-cover-media type-size-small" xmlns:og="http://opengraphprotocol.org/schema/">
         <![endif]--><!--[if (lt IE 8)]>
         <html lang="en" class="no-js lt-ie10 lt-ie9 lt-ie8 section-world format-extra-long tone-news app-article page-theme-standard has-comments has-cover-media type-size-small" xmlns:og="http://opengraphprotocol.org/schema/">
            <![endif]-->
            <head>
               <script type="text/javascript" src="http://cdn.krxd.net/userdata/get?pub=79816aa8-435a-471a-be83-4b3e0946daf2&amp;callback=Krux.ns._default.kxjsonp_userdata"></script><script type="text/javascript" async="" src="//ml314.com/tag.aspx?1292016"></script><script type="text/javascript" src="http://cdn.krxd.net/userdata/get?pub=79816aa8-435a-471a-be83-4b3e0946daf2&amp;callback=Krux.ns._default.kxjsonp_userdata"></script><script type="text/javascript" src="http://beacon.krxd.net/optout_check?callback=Krux.ns._default.kxjsonp_optOutCheck"></script><script type="text/javascript" async="" src="//cdn3.optimizely.com/js/geo2.js"></script>
               <title>After Torture, Ex-Detainee Is Still Captive of ‘The Darkness’ - The New York Times</title>
               <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
               <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
               <link rel="shortcut icon" href="https://static01.nyt.com/favicon.ico">
               <link rel="apple-touch-icon-precomposed" sizes="144×144" href="https://static01.nyt.com/images/icons/ios-ipad-144x144.png">
               <link rel="apple-touch-icon-precomposed" sizes="114×114" href="https://static01.nyt.com/images/icons/ios-iphone-114x144.png">
               <link rel="apple-touch-icon-precomposed" href="https://static01.nyt.com/images/icons/ios-default-homescreen-57x57.png">
               <meta name="sourceApp" content="nyt-v5">
               <meta id="applicationName" name="applicationName" content="article">
               <meta id="foundation-build-id" name="foundation-build-id" content="">
               <link rel="canonical" href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html">
               <link rel="alternate" media="only screen and (max-width: 640px)" href="http://mobile.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html">
               <link rel="alternate" media="handheld" href="http://mobile.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html">
               <link rel="amphtml" href="http://mobile.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.amp.html">
               <meta property="al:android:url" content="nytimes://reader/id/100000004654030">
               <meta property="al:android:package" content="com.nytimes.android">
               <meta property="al:android:app_name" content="NYTimes">
               <meta name="twitter:app:name:googleplay" content="NYTimes">
               <meta name="twitter:app:id:googleplay" content="com.nytimes.android">
               <meta name="twitter:app:url:googleplay" content="nytimes://reader/id/100000004654030">
               <link rel="alternate" href="android-app://com.nytimes.android/nytimes/reader/id/100000004654030">
               <meta property="al:iphone:url" content="nytimes://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html">
               <meta property="al:iphone:app_store_id" content="284862083">
               <meta property="al:iphone:app_name" content="NYTimes">
               <meta property="al:ipad:url" content="nytimes://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html">
               <meta property="al:ipad:app_store_id" content="357066198">
               <meta property="al:ipad:app_name" content="NYTimes">
               <meta name="robots" content="noarchive">
               <meta itemprop="alternativeHeadline" name="hdl_p" content="An Ex-Detainee, but Still a Captive of ‘The Darkness’">
               <meta name="channels" content="">
               <meta itemprop="description" name="description" content="The United States subjected Suleiman Abdullah Salim to harsh tactics in a secret prison and held him without charge for years. He was found not to be a terrorist threat, but he pays a deep price to this day.">
               <meta name="genre" itemprop="genre" content="News">
               <meta itemprop="identifier" name="articleid" content="100000004654030">
               <meta itemprop="usageTerms" name="usageTerms" content="http://www.nytimes.com/content/help/rights/sale/terms-of-sale.html">
               <meta itemprop="inLanguage" content="en-US">
               <meta name="hdl" content="After Torture, Ex-Detainee Is Still Captive of ‘The Darkness’">
               <meta name="col" content="" id="column-name">
               <meta name="pdate" content="20161012">
               <meta name="utime" content="20161012123854">
               <meta name="ptime" content="20161012034524">
               <meta name="DISPLAYDATE" content="Oct. 12, 2016">
               <meta name="dat" content="Oct. 12, 2016">
               <meta name="lp" content="The United States subjected Suleiman Abdullah Salim to harsh tactics in a secret prison and held him without charge for years. He was found not to be a terrorist threat, but he pays a deep price to this day.">
               <meta name="msapplication-starturl" content="http://www.nytimes.com">
               <meta name="cre" content="The New York Times">
               <meta name="slug" content="12suleiman">
               <meta property="article:collection" content="https://static01.nyt.com/services/json/sectionfronts/world/index.jsonp">
               <meta name="sectionfront_jsonp" content="https://static01.nyt.com/services/json/sectionfronts/world/index.jsonp">
               <meta property="og:url" content="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html">
               <meta property="og:type" content="article">
               <meta property="og:title" content="After Torture, Ex-Detainee Is Still Captive of ‘The Darkness’">
               <meta property="og:description" content="The United States subjected Suleiman Abdullah Salim to harsh tactics in a secret prison and held him without charge for years. He was found not to be a terrorist threat, but he pays a deep price to this day.">
               <meta property="article:published" itemprop="datePublished" content="2016-10-12T03:45:24-04:00">
               <meta property="article:modified" itemprop="dateModified" content="2016-10-12T12:38:54-04:00">
               <meta property="article:section" itemprop="articleSection" content="World">
               <meta property="article:section-taxonomy-id" itemprop="articleSection" content="9A43D8FC-F4CF-44D9-9B34-138D30468F8F">
               <meta property="article:section_url" content="http://www.nytimes.com/pages/world/index.html">
               <meta property="article:top-level-section" content="world">
               <meta property="fb:app_id" content="9869919170">
               <meta name="twitter:site" value="@nytimes">
               <meta property="twitter:url" content="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html">
               <meta property="twitter:title" content="After Torture, Ex-Detainee Is Still Captive of ‘The Darkness’">
               <meta property="twitter:description" content="The United States subjected Suleiman Abdullah Salim to harsh tactics in a secret prison and held him without charge for years. He was found not to be a terrorist threat, but he pays a deep price to this day.">
               <meta name="author" content="James Risen">
               <meta name="tone" content="news" id="article-tone">
               <meta name="byl" content="By JAMES RISEN">
               <meta name="PT" content="article">
               <meta name="CG" content="world">
               <meta name="SCG" content="">
               <meta name="PST" content="News">
               <meta name="tom" content="News">
               <meta name="edt" content="NewYork">
               <meta property="og:image" content="https://static01.nyt.com/images/2016/09/30/world/11suleiman/11suleiman-facebookJumbo-v2.jpg">
               <meta property="twitter:image:alt" content="Suleiman Abdullah Salim endured beatings, sleep deprivation, water dousing and other severe measures.">
               <meta property="twitter:image" content="https://static01.nyt.com/images/2016/09/30/world/11suleiman/11suleiman-thumbLarge-v2.jpg">
               <meta name="twitter:card" value="summary">
               <meta property="article:author" content="http://www.nytimes.com/by/james-risen">
               <meta property="article:tag" content="Salim, Suleiman Abdullah">
               <meta name="per" content="Salim, Suleiman Abdullah">
               <meta property="article:tag" content="Torture">
               <meta name="des" content="Torture">
               <meta property="article:tag" content="Detainees">
               <meta name="des" content="Detainees">
               <meta property="article:tag" content="Interrogations">
               <meta name="des" content="Interrogations">
               <meta property="article:tag" content="Post-Traumatic Stress Disorder">
               <meta name="des" content="Post-Traumatic Stress Disorder">
               <meta property="article:tag" content="Human Rights and Human Rights Violations">
               <meta name="des" content="Human Rights and Human Rights Violations">
               <meta property="article:tag" content="Central Intelligence Agency">
               <meta name="org" content="Central Intelligence Agency">
               <meta property="article:tag" content="Senate Committee on Intelligence">
               <meta name="org" content="Senate Committee on Intelligence">
               <meta property="article:tag" content="Somalia">
               <meta name="geo" content="Somalia">
               <meta property="article:tag" content="Afghanistan">
               <meta name="geo" content="Afghanistan">
               <meta name="keywords" content="Salim  Suleiman Abdullah,Torture,Detainees,Interrogations,Post-Traumatic Stress Disorder,Human Rights and Human Rights Violations,Central Intelligence Agency,Senate Committee on Intelligence,Somalia,Afghanistan">
               <meta name="news_keywords" content="Suleiman Abdullah Salim,Torture,Detainees,Interrogation,PTSD,Human Rights,CIA,Senate Intelligence Committee,Somalia,Afghanistan">
               <meta name="thumbnail_150" content="https://static01.nyt.com/images/2016/09/30/world/11suleiman/11suleiman-thumbLarge-v2.jpg">
               <meta name="thumbnail_150_height" content="150">
               <meta name="thumbnail_150_width" content="150">
               <meta itemprop="thumbnailUrl" name="thumbnail" content="https://static01.nyt.com/images/2016/09/30/world/11suleiman/11suleiman-thumbStandard-v2.jpg">
               <meta name="thumbnail_height" content="75">
               <meta name="thumbnail_width" content="75">
               <meta name="dfp-ad-unit-path" content="world">
               <meta name="dfp-amazon-enabled" content="false">
               <link rel="alternate" type="application/json+oembed" href="https://www.nytimes.com/svc/oembed/json/?url=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html" title="After Torture, Ex-Detainee Is Still Captive of ‘The Darkness’">
               <!--[if (gt IE 9)|!(IE)]> <!-->
                  <link rel="stylesheet" type="text/css" media="screen" href="https://a1.nyt.com/assets/article/20161012-082752/css/article/story/styles.css">
                  <!--<![endif]-->
               <!--[if lte IE 9]>
               <link rel="stylesheet" type="text/css" media="screen" href="https://a1.nyt.com/assets/article/20161012-082752/css/article/story/styles-ie.css" />
               <![endif]-->
               <link rel="stylesheet" type="text/css" media="print" href="https://a1.nyt.com/assets/article/20161012-082752/css/article/story/styles-print.css">
               <!--  begin abra  -->
               <script async="" src="//cdn.krxd.net/ctjs/controltag.js.e0ce6829d34e23edb3c90f3615dd81e0"></script><script type="text/javascript" async="" src="http://contextual.media.net/rtbsapub.php?&amp;rt=3&amp;callback=window.advBidxc.rtbsresponse&amp;&amp;cid=8CU2553YN&amp;requestString=731362508*33%7C300x250%7C8CU2553YN%7C9524657&amp;crid=731362508&amp;requrl=http%3A%2F%2Fwww.nytimes.com&amp;bl=1&amp;hlt=1&amp;tr=0.2783460566370555"></script><script type="text/javascript" async="" src="http://medianet-d.openx.net/w/1.0/jstag?oxns=mNHB"></script><script type="text/javascript" async="" src="http://contextual.media.net/rtbsapub.php?&amp;cid=8CU2553YN&amp;requestString=731362508*29%7C300x250%7C8CU2553YN%7Carts-desk&amp;crid=731362508&amp;requrl=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html%3Fhp%26action%3Dclick%26pgtype%3DHomepage%26clickSource%3Dimage%26module%3Dphoto-spot-region%26region%3Dtop-news%26WT.nav%3Dtop-news&amp;bl=1&amp;hlt=1&amp;rt=3&amp;callback=window.advBidxc.rubiconresp&amp;tr=0.7553924493247726"></script><script type="text/javascript" async="" src="http://contextual.media.net/rtbsapub.php?&amp;cid=8CU2553YN&amp;requestString=731362508*23%7C300x250%7C8CU2553YN%7Carts-desk&amp;crid=731362508&amp;requrl=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html%3Fhp%26action%3Dclick%26pgtype%3DHomepage%26clickSource%3Dimage%26module%3Dphoto-spot-region%26region%3Dtop-news%26WT.nav%3Dtop-news&amp;bl=1&amp;hlt=1&amp;tr=0.7889422422909824"></script><script type="text/javascript" async="" src="http://contextual.media.net/rtbsapub.php?&amp;rt=3&amp;callback=window.advBidxc.rtbsresponse&amp;&amp;cid=8CU2553YN&amp;requestString=271709412*33%7C300x250%7C8CU2553YN%7C9524657&amp;crid=271709412&amp;requrl=http%3A%2F%2Fwww.nytimes.com&amp;bl=1&amp;hlt=1&amp;tr=0.6015893229102314"></script><script type="text/javascript" async="" src="http://medianet-d.openx.net/w/1.0/jstag?oxns=mNHB"></script><script type="text/javascript" async="" src="http://contextual.media.net/rtbsapub.php?&amp;cid=8CU2553YN&amp;requestString=271709412*29%7C300x250%7C8CU2553YN%7Carts-desk&amp;crid=271709412&amp;requrl=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html%3Fhp%26action%3Dclick%26pgtype%3DHomepage%26clickSource%3Dimage%26module%3Dphoto-spot-region%26region%3Dtop-news%26WT.nav%3Dtop-news&amp;bl=1&amp;hlt=1&amp;rt=3&amp;callback=window.advBidxc.rubiconresp&amp;tr=0.6087060864139278"></script><script type="text/javascript" async="" src="http://contextual.media.net/rtbsapub.php?&amp;cid=8CU2553YN&amp;requestString=271709412*23%7C300x250%7C8CU2553YN%7Carts-desk&amp;crid=271709412&amp;requrl=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html%3Fhp%26action%3Dclick%26pgtype%3DHomepage%26clickSource%3Dimage%26module%3Dphoto-spot-region%26region%3Dtop-news%26WT.nav%3Dtop-news&amp;bl=1&amp;hlt=1&amp;tr=0.5745189683212675"></script><script type="text/javascript" async="" src="http://contextual.media.net/rtbsapub.php?&amp;rt=3&amp;callback=window.advBidxc.rtbsresponse&amp;&amp;cid=8CU2553YN&amp;requestString=635794456*33%7C300x250%7C8CU2553YN%7C9524657&amp;crid=635794456&amp;requrl=http%3A%2F%2Fwww.nytimes.com&amp;bl=1&amp;hlt=1&amp;tr=0.41358843996147154"></script><script type="text/javascript" async="" src="http://medianet-d.openx.net/w/1.0/jstag?oxns=mNHB"></script><script type="text/javascript" async="" src="http://contextual.media.net/rtbsapub.php?&amp;cid=8CU2553YN&amp;requestString=635794456*29%7C300x250%7C8CU2553YN%7Carts-desk&amp;crid=635794456&amp;requrl=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html%3Fhp%26action%3Dclick%26pgtype%3DHomepage%26clickSource%3Dimage%26module%3Dphoto-spot-region%26region%3Dtop-news%26WT.nav%3Dtop-news&amp;bl=1&amp;hlt=1&amp;rt=3&amp;callback=window.advBidxc.rubiconresp&amp;tr=0.1483709354283358"></script><script type="text/javascript" async="" src="http://contextual.media.net/rtbsapub.php?&amp;cid=8CU2553YN&amp;requestString=635794456*23%7C300x250%7C8CU2553YN%7Carts-desk&amp;crid=635794456&amp;requrl=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html%3Fhp%26action%3Dclick%26pgtype%3DHomepage%26clickSource%3Dimage%26module%3Dphoto-spot-region%26region%3Dtop-news%26WT.nav%3Dtop-news&amp;bl=1&amp;hlt=1&amp;tr=0.5580121716713808"></script><script type="text/javascript" async="" src="http://contextual.media.net/rtbsapub.php?&amp;rt=3&amp;callback=window.advBidxc.rtbsresponse&amp;&amp;cid=8CU2553YN&amp;requestString=538535755*33%7C300x250%7C8CU2553YN%7C9524657&amp;crid=538535755&amp;requrl=http%3A%2F%2Fwww.nytimes.com&amp;bl=1&amp;hlt=1&amp;tr=0.8883562356184662"></script><script type="text/javascript" async="" src="http://medianet-d.openx.net/w/1.0/jstag?oxns=mNHB"></script><script type="text/javascript" async="" src="http://contextual.media.net/rtbsapub.php?&amp;cid=8CU2553YN&amp;requestString=538535755*29%7C300x250%7C8CU2553YN%7Carts-desk&amp;crid=538535755&amp;requrl=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html%3Fhp%26action%3Dclick%26pgtype%3DHomepage%26clickSource%3Dimage%26module%3Dphoto-spot-region%26region%3Dtop-news%26WT.nav%3Dtop-news&amp;bl=1&amp;hlt=1&amp;rt=3&amp;callback=window.advBidxc.rubiconresp&amp;tr=0.9661276867502824"></script><script type="text/javascript" async="" src="http://contextual.media.net/rtbsapub.php?&amp;cid=8CU2553YN&amp;requestString=538535755*23%7C300x250%7C8CU2553YN%7Carts-desk&amp;crid=538535755&amp;requrl=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html%3Fhp%26action%3Dclick%26pgtype%3DHomepage%26clickSource%3Dimage%26module%3Dphoto-spot-region%26region%3Dtop-news%26WT.nav%3Dtop-news&amp;bl=1&amp;hlt=1&amp;tr=0.5362070518735651"></script><script type="text/javascript" async="" src="http://contextual.media.net/rtbsapub.php?&amp;rt=3&amp;callback=window.advBidxc.rtbsresponse&amp;&amp;cid=8CU2553YN&amp;requestString=680791762*33%7C300x250%7C8CU2553YN%7C9524657&amp;crid=680791762&amp;requrl=http%3A%2F%2Fwww.nytimes.com&amp;bl=1&amp;hlt=1&amp;tr=0.5077900227725982"></script><script type="text/javascript" async="" src="http://medianet-d.openx.net/w/1.0/jstag?oxns=mNHB"></script><script type="text/javascript" async="" src="http://contextual.media.net/rtbsapub.php?&amp;cid=8CU2553YN&amp;requestString=680791762*29%7C300x250%7C8CU2553YN%7Carts-desk&amp;crid=680791762&amp;requrl=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html%3Fhp%26action%3Dclick%26pgtype%3DHomepage%26clickSource%3Dimage%26module%3Dphoto-spot-region%26region%3Dtop-news%26WT.nav%3Dtop-news&amp;bl=1&amp;hlt=1&amp;rt=3&amp;callback=window.advBidxc.rubiconresp&amp;tr=0.26901963489706726"></script><script src="undefined" async="true" type="text/javascript"></script><script type="text/javascript" async="" src="http://contextual.media.net/rtbsapub.php?&amp;cid=8CU2553YN&amp;requestString=680791762*23%7C300x250%7C8CU2553YN%7Carts-desk&amp;crid=680791762&amp;requrl=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html%3Fhp%26action%3Dclick%26pgtype%3DHomepage%26clickSource%3Dimage%26module%3Dphoto-spot-region%26region%3Dtop-news%26WT.nav%3Dtop-news&amp;bl=1&amp;hlt=1&amp;tr=0.42655813467356785"></script><script type="text/javascript" async="" src="http://contextual.media.net/rtbsapub.php?&amp;rt=3&amp;callback=window.advBidxc.rtbsresponse&amp;&amp;cid=8CU2553YN&amp;requestString=717814008*33%7C300x250%7C8CU2553YN%7C9524657&amp;crid=717814008&amp;requrl=http%3A%2F%2Fwww.nytimes.com&amp;bl=1&amp;hlt=1&amp;tr=0.5447189743924075"></script><script type="text/javascript" async="" src="http://medianet-d.openx.net/w/1.0/jstag?oxns=mNHB"></script><script type="text/javascript" async="" src="http://contextual.media.net/rtbsapub.php?&amp;cid=8CU2553YN&amp;requestString=717814008*29%7C300x250%7C8CU2553YN%7Carts-desk&amp;crid=717814008&amp;requrl=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html%3Fhp%26action%3Dclick%26pgtype%3DHomepage%26clickSource%3Dimage%26module%3Dphoto-spot-region%26region%3Dtop-news%26WT.nav%3Dtop-news&amp;bl=1&amp;hlt=1&amp;rt=3&amp;callback=window.advBidxc.rubiconresp&amp;tr=0.13938984543250554"></script><script type="text/javascript" async="" src="http://contextual.media.net/rtbsapub.php?&amp;cid=8CU2553YN&amp;requestString=717814008*23%7C300x250%7C8CU2553YN%7Carts-desk&amp;crid=717814008&amp;requrl=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html%3Fhp%26action%3Dclick%26pgtype%3DHomepage%26clickSource%3Dimage%26module%3Dphoto-spot-region%26region%3Dtop-news%26WT.nav%3Dtop-news&amp;bl=1&amp;hlt=1&amp;tr=0.6296773136044673"></script><script src="undefined" async="true" type="text/javascript"></script><script async="" src="//dc8xl0ndzn2cb.cloudfront.net/sp.js"></script><script type="text/javascript" async="" src="https://z.moatads.com/googleessencenyt485873431/moatcontent.js?firstimp_bsg=4&amp;loyalty_bsg=1&amp;avgsestime_bsg=415443&amp;referral_bsg=http://vk.com/away.php"></script><script async="" src="//www.google-analytics.com/analytics.js"></script><script type="text/javascript" async="" src="https://cdn.krxd.net/controltag?confid=HrUwtkcl"></script><script async="" src="//connect.facebook.net/en_US/fbevents.js"></script><script type="text/javascript" async="" src="//www.googletagservices.com/tag/js/gpt.js"></script><script src="https://typeface.nyt.com/zam5nzz.js" type="text/javascript" async=""></script><script type="text/javascript" async="" src="https://c.amazon-adsystem.com/aax2/amzn_ads.js"></script><script type="text/javascript" async="" src="http://contextual.media.net/rtbsapub.php?&amp;rt=3&amp;callback=window.advBidxc.rtbsresponse&amp;&amp;cid=8CU2553YN&amp;requestString=782647924*33%7C728x90%7C8CU2553YN%7C9524658%40427700124*33%7C300x250%7C8CU2553YN%7C9524657%40377617315*33%7C300x250%7C8CU2553YN%7C9524657%40244728629*33%7C300x250%7C8CU2553YN%7C9524657%40723554252*33%7C300x250%7C8CU2553YN%7C9524657&amp;crid=782647924%2C427700124%2C377617315%2C244728629%2C723554252&amp;requrl=http%3A%2F%2Fwww.nytimes.com&amp;bl=1&amp;hlt=1&amp;tr=0.3613138734735435"></script><script type="text/javascript" async="" src="http://medianet-d.openx.net/w/1.0/jstag?oxns=mNHB"></script><script type="text/javascript" async="" src="http://contextual.media.net/rtbsapub.php?&amp;rt=3&amp;callback=window.advBidxc.ybncaresponse&amp;&amp;cid=8CU2553YN&amp;apid=2&amp;requestString=782647924*4%7C728x90%7C8CU2RX232%7C254501352%40427700124*4%7C300x250%7C8CU2RX232%7C641762762%40377617315*9%7C300x250%7C8CU2RX232%7C256680872%40244728629*4%7C300x250%7C8CU2RX232%7C175452886&amp;crid=782647924,427700124,377617315,244728629&amp;sd=4&amp;hlt=1&amp;requrl=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html%3Fhp%26action%3Dclick%26pgtype%3DHomepage%26clickSource%3Dimage%26module%3Dphoto-spot-region%26region%3Dtop-news%26WT.nav%3Dtop-news&amp;kwrf=http%3A%2F%2Fwww.nytimes.com%2F%3Faction%3Dclick%26contentCollection%3DDealBook%26region%3DTopBar%26module%3DHomePage-Button%26pgtype%3Darticle&amp;tr=0.20787662154752673"></script><script type="text/javascript" async="" src="http://contextual.media.net/rtbsapub.php?&amp;cid=8CU2553YN&amp;requestString=782647924*35%7C728x90%7C8CU2553YN%7C37acf79822fd5ef0ce3e&amp;crid=782647924&amp;requrl=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html%3Fhp%26action%3Dclick%26pgtype%3DHomepage%26clickSource%3Dimage%26module%3Dphoto-spot-region%26region%3Dtop-news%26WT.nav%3Dtop-news&amp;bl=1&amp;hlt=1&amp;rt=3&amp;callback=window.advBidxc.sonobiresp&amp;tr=0.7518848751983855"></script><script type="text/javascript" async="" src="http://contextual.media.net/rtbsapub.php?&amp;cid=8CU2553YN&amp;requestString=782647924*29%7C728x90%7C8CU2553YN%7Carts-desk%40427700124*29%7C300x250%7C8CU2553YN%7Carts-desk%40568721512*29%7C300x250%7C8CU2553YN%7Carts-desk%40377617315*29%7C300x250%7C8CU2553YN%7Carts-desk%40244728629*29%7C300x250%7C8CU2553YN%7Carts-desk%40723554252*29%7C300x250%7C8CU2553YN%7Carts-desk&amp;crid=782647924%2C427700124%2C568721512%2C377617315%2C244728629%2C723554252&amp;requrl=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html%3Fhp%26action%3Dclick%26pgtype%3DHomepage%26clickSource%3Dimage%26module%3Dphoto-spot-region%26region%3Dtop-news%26WT.nav%3Dtop-news&amp;bl=1&amp;hlt=1&amp;rt=3&amp;callback=window.advBidxc.rubiconresp&amp;tr=0.1637450373131466"></script><script type="text/javascript" async="" src="http://contextual.media.net/rtbsapub.php?&amp;cid=8CU2553YN&amp;requestString=782647924*23%7C728x90~970x250%7C8CU2553YN%7Carts-desk%40427700124*23%7C300x250~300x600%7C8CU2553YN%7Carts-desk%40568721512*23%7C300x250%7C8CU2553YN%7Carts-desk%40377617315*23%7C300x250%7C8CU2553YN%7Carts-desk%40244728629*23%7C300x250%7C8CU2553YN%7Carts-desk%40723554252*23%7C300x250%7C8CU2553YN%7Carts-desk&amp;crid=782647924%2C427700124%2C568721512%2C377617315%2C244728629%2C723554252&amp;requrl=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html%3Fhp%26action%3Dclick%26pgtype%3DHomepage%26clickSource%3Dimage%26module%3Dphoto-spot-region%26region%3Dtop-news%26WT.nav%3Dtop-news&amp;bl=1&amp;hlt=1&amp;tr=0.8673949720078096"></script><script src="http://as.casalemedia.com/headertag/?v=9&amp;fn=cygnus_index_parse_res&amp;s=167943&amp;r=%7B%22id%22%3A230860111%2C%22site%22%3A%7B%22page%22%3A%22http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html%3Fhp%26action%3Dclick%26pgtype%3DHomepage%26clickSource%3Dimage%26module%3Dphoto-spot-region%26region%3Dtop-news%26WT.nav%3Dtop-news%22%2C%22ref%22%3A%22http%3A%2F%2Fwww.nytimes.com%2F%3Faction%3Dclick%26contentCollection%3DDealBook%26region%3DTopBar%26module%3DHomePage-Button%26pgtype%3Darticle%22%7D%2C%22imp%22%3A%5B%7B%22id%22%3A%221%22%2C%20%22banner%22%3A%7B%22w%22%3A728%2C%22h%22%3A90%2C%22topframe%22%3A1%7D%2C%22ext%22%3A%20%7B%22sid%22%3A%22CT%22%2C%22siteID%22%3A168042%7D%7D%2C%7B%22id%22%3A%222%22%2C%20%22banner%22%3A%7B%22w%22%3A970%2C%22h%22%3A250%2C%22topframe%22%3A1%7D%2C%22ext%22%3A%20%7B%22sid%22%3A%22New2%22%2C%22siteID%22%3A168042%7D%7D%5D%7D&amp;t=300" async="true" type="text/javascript"></script><script>var NYTD=NYTD||{};NYTD.Abra=function(t){"use strict";function n(t){var n=a[t];return n&&n[1]||null}function e(t,n){if(t){var e,r,o=n[0],a=n[1],i=0,c=0;if(1!==a.length||4294967296!==a[0])for(e=u(t+" "+o)>>>0,i=0,c=0;r=a[i++];)if(e<(c+=r[0]))return r}}function r(n,e,r,u){f+="subject="+n+"&test="+encodeURIComponent(e)+"&variant="+encodeURIComponent(r||0)+"&url="+encodeURIComponent(t.location.href)+"&instant=1&skipAugment=true\n",u&&s.push(u),c||(c=t.setTimeout(o,0))}function o(){var n=new t.XMLHttpRequest,e=s;n.withCredentials=!0,n.open("POST",i),n.onreadystatechange=function(){var t,r;if(4==n.readyState)for(t=200==n.status?null:new Error(n.statusText);r=e.shift();)r(t)},n.send(f),f="",s=[],c=null}function u(t){for(var n,e,r,o,u,a,i,c=0,f=0,s=[],l=[n=1732584193,e=4023233417,~n,~e,3285377520],h=[],p=t.length;f<=p;)h[f>>2]|=(f<p?t.charCodeAt(f):128)<<8*(3-f++%4);for(h[i=p+8>>2|15]=p<<3;c<=i;c+=16){for(n=l,f=0;f<80;n=[0|[(a=((t=n[0])<<5|t>>>27)+n[4]+(s[f]=f<16?~~h[c+f]:a<<1|a>>>31)+1518500249)+((e=n[1])&(r=n[2])|~e&(o=n[3])),u=a+(e^r^o)+341275144,a+(e&r|e&o|r&o)+882459459,u+1535694389][0|f++/20],t,e<<30|e>>>2,r,o])a=s[f-3]^s[f-8]^s[f-14]^s[f-16];for(f=5;f;)l[--f]=l[f]+n[f]|0}return l[0]}var a,i,c,f="",s=[];return n.init=function(n,o){var u,c,f,s,l=[],h=(t.document.cookie.match(/(^|;) *nyt-a=([^;]*)/)||[])[2];if(a)throw new Error("can't init twice");for(i=o,a={},u=0;u<n.length;u++)f=n[u],c=f[0],s=e(h,f)||[],a[c]=s,s[1]&&l.push(c.replace(/[^\w-]/g)+"="+(""+s[1]).replace(/[^\w-]/g)),s[2]&&r("ab-alloc",c,s[1]);l.length&&t.document.documentElement.setAttribute("data-nyt-ab",l.join(" "))},n.reportExposure=function(n,e){var o=a[n];o&&o[2]?r("ab-expose",n,o[0],e):e&&t.setTimeout(function(){e(null)},0)},n}(this);</script>
               <script>NYTD.Abra.init([["www-article-sample",[[429496730,null,1],[1288490189,"1a",1],[429496729,"1b",1],[1717986919,"2a",1],[42949673,"2b",1],[386547056,null,0]]],["www-story-kristof-test",[[1417339208,"Control",1],[1417339208,"VariantA",1],[1417339208,"VariantB",1],[42949672,null,0]]],["www-story-newsletter-test",[[2147483648,"control",1],[2147483648,"variant1",1]]],["EC_SampleTest",[[2147483648,"variantA",0],[2147483648,"variantB",0]]]], '//et.nytimes.com/')</script>
               <!--  end abra  -->
               <script id="page-config-data" type="text/json">
                  {"pageconfig":{"ledeMediaSize":"full_bleed","keywords":["article-extra-long","has-embedded-interactive"],"collections":{"sections":["world","health","africa","us","politics"],"syndicated":["apple","facebook"]}}}
               </script>
               <script id="display_overrides">
                  ["INCLUDE_TRANSPARENT_MASTHEAD_WITH_BLACK_ICONS","HIDE_RIBBON","HIDE_TOP_AD","HIDE_NAVIGATION-EDGE","HIDE_KICKER","HIDE_STORY-META_COMMUNITY_BUTTON"]
               </script>
               <!-- Media.net Initialization Script -->
               <!--NY times Desktop-->
               <script type="text/javascript">
                  var PREBID_TIMEOUT = 300;
                  var googletag = googletag || {};
                  googletag.cmd = googletag.cmd || [];
                  (function () {
                      window.advBidxc = window.advBidxc || {};
                      window.advBidxc.renderAd = function () {};
                      window.advBidxc.startTime = new Date().getTime();
                      window.advBidxc.customerId = "8CU2553YN"; //Media.net Customer ID
                      function loadScript(tagSrc) {
                          if (tagSrc.substr(0, 4) !== 'http') {
                              var isSSL = 'https:' == document.location.protocol;
                              tagSrc = (isSSL ? 'https:' : '') + tagSrc;
                          }
                          var scriptTag = document.createElement('script'),
                              placeTag = document.getElementsByTagName("script")[0];
                          scriptTag.type = 'text/javascript';
                          scriptTag.async = true;
                          scriptTag.src = tagSrc;
                          placeTag.parentNode.insertBefore(scriptTag, placeTag);
                      }

                      function loadGPT() {
                          if (!window.advBidxc.isAdServerLoaded) {
                              loadScript('//www.googletagservices.com/tag/js/gpt.js');
                              window.advBidxc.isAdServerLoaded = true;
                          }
                      }

                      window.advBidxc.loadGPT = setTimeout(loadGPT, PREBID_TIMEOUT);

                      var isSSL = 'https:' == document.location.protocol;
                      var mnSrc = (isSSL ? 'https:' : 'http:') + '//contextual.media.net/bidexchange.js?cid=' + window.advBidxc.customerId + (isSSL ? '&https=1' : '');
                      document.write('<scr' + 'ipt type="text/javascript" src="' + mnSrc + '"></scr' + 'ipt>');
                  })();
               </script><script type="text/javascript" src="http://contextual.media.net/bidexchange.js?cid=8CU2553YN"></script>
               <!-- A9 Initialization Script -->
               <script type="text/javascript">
                  var amznads = amznads || {};
                  amznads.asyncParams = {
                      'id': '3030',
                      'callbackFn': function() {
                          try {
                              amznads.setTargetingForGPTAsync('amznslots');
                          } catch (e) { }
                      },
                      'timeout': 1000
                  };

                  (function() {
                      var a, s = document.getElementsByTagName("script")[0];
                      a = document.createElement("script");
                      a.type = "text/javascript";
                      a.async = true;
                      a.src = "https://c.amazon-adsystem.com/aax2/amzn_ads.js";
                      s.parentNode.insertBefore(a, s);
                  })();
               </script>
               <script type="text/json" id="trending-link-json">
                  {"url":"http:\/\/www.nytimes.com\/2016\/10\/12\/world\/cia-torture-abuses-detainee.html","trending_type":"trending_page","rank":6,"data_type":"article","labels":[]}
               </script>
               <script id="user-info-data" type="application/json">
                  { "meta": {},
                    "data": {
                      "id": "0",
                      "name": "",
                      "subscription": ["","_RPV"],
                      "demographics": {},
                      "geo": {"country": "Belarus" }
                    }
                  }
               </script>
               <script>
                  var require = {
                      baseUrl: 'https://a1.nyt.com/assets/',
                      waitSeconds: 20,
                      paths: {
                          'foundation': 'article/20161012-082752/js/foundation',
                          'shared': 'article/20161012-082752/js/shared',
                          'article': 'article/20161012-082752/js/article',
                          'application': 'article/20161012-082752/js/article/story',
                          'videoFactory': 'https://static01.nyt.com/js2/build/video/2.0/videofactoryrequire',
                          'videoPlaylist': 'https://static01.nyt.com/js2/build/video/players/extended/2.0/appRequire',
                          'auth/mtr': 'https://static01.nyt.com/js/mtr',
                          'auth/growl': 'https://static01.nyt.com/js/auth/growl/default',
                          'vhs': 'https://static01.nyt.com/video/vhs/build/vhs-2.x.min'
                      },
                      map: {
                          '*': {
                              'story/main': 'article/story/main'
                          }
                      }
                  };
               </script>
               <!--[if (gte IE 9)|!(IE)]> <!-->
                  <script data-main="foundation/main" src="https://a1.nyt.com/assets/article/20161012-082752/js/foundation/lib/framework.js"></script>
                  <!--<![endif]-->
               <!--[if lt IE 9]>
               <script>
                  require.map['*']['foundation/main'] = 'foundation/legacy_main';
               </script>
               <script data-main="foundation/legacy_main" src="https://a1.nyt.com/assets/article/20161012-082752/js/foundation/lib/framework.js"></script>
               <![endif]-->
               <script>
                  window.magnum.processFlags(["limitFabrikSave","moreFollowSuggestions","unfollowComments","scoopTool","videoVHSCover","videoVHSShareTools","videoVHSLive","videoVHSNewControls","videoVHSEmbeddedOnly","allTheEmphases","freeTrial","dedupeWhatsNext","trendingPageLinks","sprinklePaidPost","headerBidder","largeLedeXXL","standardizeWhatsNextCollection","onlyLayoutA","simple","simpleExtendedByline","collectionsWhatsNext","shareToolsUnderHeadline","mobileMediaViewer","storyPrint","podcastInLede","MovieTickets","requestTragedyAd","MoreInSubsectionFix","seriesIssueMarginalia","serverSideCollectionUrls","multipleBylines","minimalAds","adDisclaimer","inlineAdStyles","fabrikWebsocketsOnly","storyFlexFrames","translationLinks","phaseOneAds","papihttps","bugFixFullBleed","verticalFullBleed","updateRestaurantReservations","flexAdsPhase2","flexAdsonSectionBug","newsletterInlineModule","a9HeaderEnabled","removeInternationalEdition","clientSideABRA"]);
               </script>
               <script>
                  require(['foundation/main'], function () {
                      require(['auth/mtr', 'auth/growl']);
                  });
               </script>
               <script src="https://a1.nyt.com/assets/article/20161012-082752/js/article/common/layout.js"></script>
               <script type="text/javascript">
                  if (window.magnum.getFlags().indexOf('headlineBalancer') > 0) {

                      window.magnum.headlineBalancer = (function () {
                          var ORIGINAL_HEADLINE_TEXT;
                          var HEADLINE;
                          // which type of section/tone we are in
                          var TYPE;

                          if (hasTone('section-magazine')) {
                              TYPE = 'magazine';
                          } else if (hasTone('section-upshot')) {
                              TYPE = 'upshot';
                          } else if (hasTone('section-t-magazine') && hasTone('tone-feature')) {
                              TYPE = 'tMagFeature';
                          } else if (hasTone('section-t-magazine') && hasTone('tone-news')) {
                              TYPE = 'tMagNews';
                          } else if (hasTone('tone-news')) {
                              TYPE = 'news';
                          } else if (hasTone('tone-opinion')) {
                              TYPE = 'opinion';
                          } else if (hasTone('tone-feature')) {
                              TYPE = 'feature';
                          }

                          // all the different types of fonts
                          // and styles based off of tone and seciton
                          var headlineTypes = {
                              'news' : {
                                  fontName   : 'nyt-cheltenham',
                                  fontStyle  : 'italic',
                                  fontWeight : 700
                              },
                              'opinion' : {
                                  fontName   : 'nyt-cheltenham',
                                  fontStyle  : 'normal',
                                  fontWeight : 500
                              },
                              'feature' : {
                                  fontName   : 'nyt-cheltenham',
                                  fontStyle  : 'normal',
                                  fontWeight : 200
                              },
                              'magazine' : {
                                  fontName   : 'nyt-mag-slab',
                                  fontStyle  : 'normal',
                                  fontWeight : 'bold'
                              },
                              'tMagFeature' : {
                                  fontName   : 'schnyder-scond-normal-600',
                                  fontStyle  : 'normal',
                                  fontWeight : 600
                              },
                              'tMagNews' : {
                                  fontName   : 'graphik-xcond-normal-600',
                                  fontStyle  : 'normal',
                                  fontWeight : 600
                              },
                              'upshot' : {
                                  fontName   : 'nyt-franklin',
                                  fontStyle  : 'normal',
                                  fontWeight : 300
                              }
                          };

                          // At this point the font will not have loaded.
                          // so we keep hide it, pick the correct font in that
                          // hasTone() if else block, then we load the font
                          // then once it has loaded, we check to see if it
                          // is multiple lines, and if it is, we balance the living seek out of it
                          var initialize = function () {
                              // hide headline becuase the font hasnt loaded
                              document.getElementById('headline').style.visibility = 'hidden';

                              // figure out which font we are looking for
                              // this is based off of tone and section
                              if (hasTone('section-magazine')) {
                                  TYPE = 'magazine';
                              } else if (hasTone('section-upshot')) {
                                  TYPE = 'upshot';
                              } else if (hasTone('section-t-magazine') && hasTone('tone-feature')) {
                                  TYPE = 'tMagFeature';
                              } else if (hasTone('section-t-magazine') && hasTone('tone-news')) {
                                  TYPE = 'tMagNews';
                              } else if (hasTone('tone-news')) {
                                  TYPE = 'news';
                              } else if (hasTone('tone-opinion')) {
                                  TYPE = 'opinion';
                              } else if (hasTone('tone-feature')) {
                                  TYPE = 'feature';
                              }

                              // set the font based off of the tone and section
                              var headlineType = headlineTypes[TYPE];

                              // FontFaceObserver tells us when the font has loaded.
                              // It returns a promise
                              var font = new FontFaceObserver(headlineType.fontName, {
                                  style: headlineType.fontStyle,
                                  weight: headlineType.fontWeight
                              });

                              // Here is the promise
                              // Once it loads, we check to see if
                              // it is multiple lines. If it is, we
                              // balance it, if it isnt we dont balance it
                              //
                              // PS: we have to set it visible regardless if the
                              // font shows or not.
                              font.load().then(function () {
                                  if (headlineIsMultipleLines()) {
                                      HEADLINE.innerHTML = ORIGINAL_HEADLINE_TEXT;
                                      balanceHeadline();
                                  } else {
                                      HEADLINE.innerHTML = ORIGINAL_HEADLINE_TEXT;
                                  }
                                  document.getElementById('headline').style.visibility = 'visible';
                              }, function (err) {
                                  // set it to be visible even if it fails
                                  document.getElementById('headline').style.visibility = 'visible';
                              });
                          }

                          function rebalanceHeadline() {
                              document.getElementById('headline').style.visibility = 'hidden';
                              balanceHeadline();
                              document.getElementById('headline').style.visibility = 'visible';
                          }

                          // HELPER FUNCTION -- initializes recursive binary search
                          // algorithm to "balance that horsed headline"
                          function balanceHeadline() {
                              var headline = document.getElementById('headline');
                              headline.style.maxWidth = "";
                              squeezeContainer(headline, headline.clientHeight, 0, headline.clientWidth);
                          }

                          // Make the headline element as narrow as possible while maintaining its current height (number of lines). Binary search.
                          function squeezeContainer(headline, originalHeight, bottomRange, topRange) {
                              if (bottomRange >= topRange) {
                                  return;
                              }
                              var mid = (bottomRange + topRange) / 2;
                              headline.style.maxWidth = mid + 'px';

                              if (headline.clientHeight > originalHeight) {
                                  // we've squoze too far and headline has spilled onto an additional line; recurse on wider range
                                  squeezeContainer(headline, originalHeight, mid+1, topRange);
                              } else {
                                  // headline has not wrapped to another line; keep squeezing!
                                  squeezeContainer(headline, originalHeight, bottomRange+1, mid);
                              }
                          }

                          // Takes a string
                          // Checks to see if that class is on the head HTML element
                          function hasTone (tone) {
                              return document.documentElement.className.indexOf(tone) > 0;
                          }

                          // function to see if a headline is multiple lines
                          // we only want to break if the headline is multiple lines
                          //
                          // We achieve this by turning the first word into a span
                          // and then we compare the height of that span to the height
                          // of the entire headline. If the headline is bigger than the
                          // span by 10px we balance the headline.
                          function headlineIsMultipleLines () {
                              ORIGINAL_HEADLINE_TEXT = headline.innerHTML;
                              HEADLINE = document.getElementById('headline');

                              // usually there is around a 5px discrepency between
                              // the first word and the height of the whole headline
                              // so subtract the height of the headline by 10 px and
                              // we should be good
                              var HEIGHT_OFFSET = 10;

                              // get all the words in the headline as
                              // an array -- will include punctuation
                              //
                              // this is used to put the headline back together
                              var headlineWords = HEADLINE.innerHTML.split(' ');

                              // make span for first word and give it an id
                              // so we can access it in le dom
                              var firstWord = document.createElement('span');
                              firstWord.id = 'headline-first-word';
                              firstWord.innerHTML = headlineWords[0];

                              // this is the entire headline
                              // as an array except for first word
                              //
                              // we will append it to the headline after the span
                              headlineWords = headlineWords.slice(1);

                              // empty the headline and append the span to it
                              headline.innerHTML = "";
                              headline.appendChild(firstWord);

                              // add the rest of the headline back to it
                              headline.innerHTML += ' ' + headlineWords.join(' ');

                              // update the first word variable in the dom
                              firstWord = document.getElementById('headline-first-word');

                              // compare the height of the headline and the height of the first word
                              return headline.offsetHeight - HEIGHT_OFFSET > firstWord.offsetHeight;

                          } // end headlineIsMultipleLines


                          return {
                              initialize: initialize,
                              rebalanceHeadline: rebalanceHeadline
                          };

                      })(); // end magnum headlineBalancer

                  } // end 4F if block

               </script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="foundation/main" src="https://a1.nyt.com/assets/article/20161012-082752/js/foundation/main.js"></script>
               <link id="legacy-zam5nzz" rel="stylesheet" type="text/css" href="https://typeface.nyt.com/css/zam5nzz.css" media="all">
               <script src="http://partner.googleadservices.com/gpt/pubads_impl_100.js" async=""></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="foundation/hosts" src="https://a1.nyt.com/assets/article/20161012-082752/js/foundation/hosts.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="auth/mtr" src="https://static01.nyt.com/js/mtr.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="auth/growl" src="https://static01.nyt.com/js/auth/growl/default.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="foundation/lib/underscore/1.6.0" src="https://a1.nyt.com/assets/article/20161012-082752/js/foundation/lib/underscore/1.6.0.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="http://static01.nyt.com/newsgraphics/2015/02/10/mag-pullquote-redesign/assets/build.js" src="http://static01.nyt.com/newsgraphics/2015/02/10/mag-pullquote-redesign/assets/build.js"></script>
               <link rel="prefetch" href="http://tpc.googlesyndication.com/safeframe/1-0-4/html/container.html">
               <meta name="WT.z_cad" content="1">
               <script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="article/story/main" src="https://a1.nyt.com/assets/article/20161012-082752/js/article/story/main.js"></script><script type="text/javascript" src="https://tagx.nytimes.com/?url=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html%3Fhp%26action%3Dclick%26pgtype%3DHomepage%26clickSource%3Dimage%26module%3Dphoto-spot-region%26region%3Dtop-news%26WT.nav%3Dtop-news&amp;assetUrl=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html&amp;referrer=http%3A%2F%2Fwww.nytimes.com%2F%3Faction%3Dclick%26contentCollection%3DDealBook%26region%3DTopBar%26module%3DHomePage-Button%26pgtype%3Darticle&amp;CG=world&amp;SCG=&amp;sourceApp=nyt-v5&amp;_cache_buster_=1476292647634"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="https://a1.nyt.com/analytics/tagx-simple.min.js" src="https://a1.nyt.com/analytics/tagx-simple.min.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="foundation/views/ad-view-manager" src="https://a1.nyt.com/assets/article/20161012-082752/js/foundation/views/ad-view-manager.js"></script><script type="text/javascript" src="https://static.nytimes.com/bi/js/analytics/EventTracker.js"></script><script type="text/javascript" src="https://a248.e.akamai.net/chartbeat.download.akamai.com/102508/js/chartbeat.js"></script><script type="text/javascript" src="https://sb.scorecardresearch.com/c2/3005403/cs.js"></script><script type="text/javascript" src="https://static.nytimes.com/bi/js/analytics/comscore.js"></script><script class="kxct" data-id="HrUwtkcl" data-version="async:1.7" type="text/javascript">window.Krux||((Krux=function(){Krux.q.push(arguments)}).q=[]);(function(){ var k=document.createElement('script');k.type='text/javascript';k.async=true;var m,src=(m=location.href.match(/kxsrc=([^&]+)/))&&decodeURIComponent(m[1]); k.src='https://cdn.krxd.net/controltag?confid=HrUwtkcl'; var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(k,s); })();</script><script type="text/javascript" src="//dc8xl0ndzn2cb.cloudfront.net/js/nytimes/v1/keywee.js"></script>
               <style type="text/css">/* This is not a zero-length file! */</style>
               <script type="text/javascript" src="//graphics8.nytimes.com/bi/js/analytics/show_ads.js"></script>
               <style type="text/css">/* This is not a zero-length file! */</style>
               <style class=" dy-common-style" type="text/css">.dy-wysiwyg{line-height:normal;direction:ltr;align-text:left;margin:0;padding:0;background-color:transparent}.dy-wysiwyg a{text-decoration:none;color:#00E}.dy-full-width-notifications-close,.dy-lb-close{position:absolute;cursor:pointer;color:#fff;display:inline-block}.dy-lb-close{top:-12px;right:-11px;border:1px solid #918686;border-radius:30px;height:22px;width:22px;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTUgNTUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDU1IDU1IiB4bWw6c3BhY2U9InByZXNlcnZlIj48ZyBpZD0iY2xvc2UiPjxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iNDMuNSwxNC43IDQwLjMsMTEuNSAyNy41LDI0LjMgMTQuNywxMS41IDExLjUsMTQuNyAyNC4zLDI3LjUgMTEuNSw0MC4zIDE0LjcsNDMuNSAyNy41LDMwLjcgNDAuMyw0My41IDQzLjUsNDAuMyAzMC43LDI3LjUgIi8+PC9nPjwvc3ZnPg==) #575757;background-size:22px}.dy-full-width-notifications-close{top:5px;right:5px;z-index:1;border:none;transition:opacity .15s;-webkit-transition:opacity .15s;opacity:.7;width:18px;height:18px;border-radius:30px;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTUgNTUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDU1IDU1IiB4bWw6c3BhY2U9InByZXNlcnZlIj48ZyBpZD0iY2xvc2UiPjxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iNDMuNSwxNC43IDQwLjMsMTEuNSAyNy41LDI0LjMgMTQuNywxMS41IDExLjUsMTQuNyAyNC4zLDI3LjUgMTEuNSw0MC4zIDE0LjcsNDMuNSAyNy41LDMwLjcgNDAuMyw0My41IDQzLjUsNDAuMyAzMC43LDI3LjUgIi8+PC9nPjwvc3ZnPg==) 2px no-repeat #575757;background-size:14px}.dy-full-width-notifications-close:hover{opacity:1}.dy_full_width_notifications_container{position:fixed;left:0;right:0;z-index:1040}.dy_full_width_notifications_container.dy_bottom_notification{bottom:0}.dy_full_width_notifications_container.dy_top_notification{top:0}.dy_full_width_notifications_container .dy_full_width_notification_instance{opacity:0;-webkit-transition:opacity .15s;transition:opacity .15s;position:relative}.dy_full_width_notifications_container .dy_full_width_notification_instance.dy_notification_instance_active{opacity:1}.dy_full_width_notifications_container .dy_full_width_notification_instance.dy_notification_from_bottom{-webkit-animation:dy_appear_from_bottom .25s;animation:dy_appear_from_bottom .25s}.dy_full_width_notifications_container .dy_full_width_notification_instance.dy_notification_from_top{-webkit-animation:dy_appear_from_top .25s;animation:dy_appear_from_top .25s}.dy_full_width_notifications_container .dy_full_width_notification_instance.dy_notification_instance_will_exit_top{-webkit-animation:dy_exit_top .25s;animation:dy_exit_top .25s;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards}.dy_full_width_notifications_container .dy_full_width_notification_instance.dy_notification_instance_will_exit_bottom{-webkit-animation:dy_exit_bottom .25s;animation:dy_exit_bottom .25s;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards}@-webkit-keyframes dy_appear_from_bottom{0%{-webkit-transform:translateY(100%);transform:translateY(100%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes dy_appear_from_bottom{0%{-webkit-transform:translateY(100%);transform:translateY(100%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes dy_appear_from_top{0%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes dy_appear_from_top{0%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes dy_exit_top{100%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@keyframes dy_exit_top{100%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@-webkit-keyframes dy_exit_bottom{100%{-webkit-transform:translateY(100%);transform:translateY(100%)}}@keyframes dy_exit_bottom{100%{-webkit-transform:translateY(100%);transform:translateY(100%)}}</style>
               <style type="text/css" id="dy-core-notify">.dynotifyjs-corner {
                  position: fixed;
                  margin: 0px;
                  z-index: 1050;
                  }
                  .dynotifyjs-corner .dynotifyjs-wrapper,
                  .dynotifyjs-corner .dynotifyjs-container {
                  position: relative;
                  display: block;
                  height: inherit;
                  width: inherit;
                  margin: 11px 8px;
                  }
                  .dynotifyjs-wrapper {
                  z-index: 1;
                  position: absolute;
                  display: inline-block;
                  height: 0;
                  width: 0;
                  }
                  .dynotifyjs-container {
                  display: none;
                  z-index: 1;
                  position: absolute;
                  }
                  [data-dynotify-text],[data-dynotify-html] {
                  position: relative;
                  }
                  .dynotifyjs-arrow {
                  position: absolute;
                  z-index: 2;
                  width: 0;
                  height: 0;
                  }.dynotifyjs-wrapper .dy-lb-close { z-index: 1; top: -8px; right: -9px; border: none; transition: opacity 0.15s; opacity: 0.7; background-size:14px; background-repeat: no-repeat; background-position: 2px; width:18px; height:18px;}.dynotifyjs-wrapper .dy-lb-close:hover { opacity: 1; }
               </style>
            </head>
            <body>
               <iframe marginwidth="0" marginheight="0" scrolling="no" frameborder="0" height="0" width="0" id="_mN_advBid_rtbscache" style="display: none !important;"></iframe><iframe marginwidth="0" marginheight="0" scrolling="no" frameborder="0" height="0" width="0" id="_mN_advBid_openxCache" style="display: none !important;"></iframe>
               <div id="critical-alerts" class="critical-alerts messenger">
                  <div id="account-alerts" class="account-alerts alerts" style="display: none; height: 0px;">
                     <div class="message-bed"></div>
                  </div>
                  <div id="breaking-news-alerts" class="breaking-news-alerts alerts" style="display: none; height: 0px;">
                     <div class="message-bed"></div>
                  </div>
               </div>
               <div id="suggestions" class="suggestions messenger" style="display: none; height: 0px;">
                  <div class="message-bed"></div>
               </div>
               <iframe marginwidth="0" marginheight="0" scrolling="no" frameborder="0" height="0" width="0" id="_mN_cksync_0" src="http://contextual.media.net/checksync.php?&amp;cv=7&amp;cid=8CU2553YN&amp;vsSync=1&amp;&amp;prv=APPNEXUS%2CRUBICON_PRIVATE%2CSONOBI%2CCPXI" style="display: none !important;"></iframe><iframe marginwidth="0" marginheight="0" scrolling="no" frameborder="0" height="0" width="0" id="_advBidxc_beacons" style="display: none !important;"></iframe>
               <style>
                  .lt-ie10 .messenger.suggestions {
                  display: block !important;
                  height: 50px;
                  }
                  .lt-ie10 .messenger.suggestions .message-bed {
                  background-color: #f8e9d2;
                  border-bottom: 1px solid #ccc;
                  }
                  .lt-ie10 .messenger.suggestions .message-container {
                  padding: 11px 18px 11px 30px;
                  }
                  .lt-ie10 .messenger.suggestions .action-link {
                  font-family: "nyt-franklin", arial, helvetica, sans-serif;
                  font-size: 10px;
                  font-weight: bold;
                  color: #a81817;
                  text-transform: uppercase;
                  }
                  .lt-ie10 .messenger.suggestions .alert-icon {
                  background: url('https://static01.nyt.com/images/icons/icon-alert-12x12-a81817.png') no-repeat;
                  width: 12px;
                  height: 12px;
                  display: inline-block;
                  margin-top: -2px;
                  float: none;
                  }
                  .lt-ie10 .masthead,
                  .lt-ie10 .navigation,
                  .lt-ie10 .comments-panel {
                  margin-top: 50px !important;
                  }
                  .lt-ie10 .ribbon {
                  margin-top: 97px !important;
                  }
               </style>
               <div id="suggestions" class="suggestions messenger nocontent robots-nocontent" style="display:none;">
                  <div class="message-bed">
                     <div class="message-container last-message-container">
                        <div class="message">
                           <span class="message-content">
                           <i class="icon alert-icon"></i><span class="message-title">NYTimes.com no longer supports Internet Explorer 9 or earlier. Please upgrade your browser.</span>
                           <a href="http://www.nytimes.com/content/help/site/ie9-support.html" class="action-link">LEARN MORE »</a>
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
               <div id="shell" class="shell">
                  <header id="masthead" class="masthead masthead-theme-transparent masthead-vertical-fullbleed" role="banner" style="position: absolute;">
                     <div class="container">
                        <div id="announcements" class="announcements messenger" style="display: none; width: 585px; left: 45px;">
                           <div class="message-bed"></div>
                        </div>
                        <div class="quick-navigation button-group">
                           <button class="button sections-button"><i class="icon sprite-icon"></i><span class="button-text">Sections</span></button>
                           <button class="button home-button" data-href="http://www.nytimes.com/"><i class="icon sprite-icon"></i><span class="button-text">Home</span></button>
                           <button class="button search-button"><i class="icon sprite-icon"></i><span class="button-text">Search</span></button>
                           <a class="button skip-button skip-to-content visually-hidden focusable" href="#story-header">Skip to content</a>
                           <a class="button skip-button skip-to-navigation visually-hidden focusable" href="#site-index-navigation">Skip to navigation</a>
                           <a class="button skip-button skip-to-mobile visually-hidden focusable" href="http://mobile.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html">View mobile version</a>
                        </div>
                        <!-- close button-group -->
                        <div class="branding">
                           <h2 class="branding-heading">
                              <a id="branding-heading-link" href="http://www.nytimes.com/">
                                 <span class="visually-hidden">The New York Times</span>
                                 <svg class="nyt-logo" width="163" height="30" role="img" aria-label="The New York Times">
                                    <image width="163" height="30" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://a1.nyt.com/assets/article/20161012-082752/images/foundation/logos/nyt-logo-163x30.svg" src="https://a1.nyt.com/assets/article/20161012-082752/images/foundation/logos/nyt-logo-163x30.png" alt="The New York Times" border="0"></image>
                                 </svg>
                                 <img src="https://a1.nyt.com/assets/article/20161012-082752/images/foundation/logos/nyt-logo-163x30.png" class="nyt-logo-print" alt="The New York Times">
                              </a>
                           </h2>
                           <script>window.magnum.writeLogo('small', 'https://a1.nyt.com/assets/article/20161012-082752/images/foundation/logos/', 'world', 'masthead-theme-transparent', 'standard', 'branding-heading-link', 'article');</script>
                           <h3 class="branding-label">
                              <span class="label-text">
                              <a href="http://www.nytimes.com/pages/world/index.html">World</a>
                              </span>
                           </h3>
                        </div>
                        <!-- close branding -->
                        <div class="story-meta">
                           <h6 class="kicker"><span class="kicker-label"><a href="http://www.nytimes.com/pages/world/index.html">World</a></span><span class="pipe">|</span>After Torture, Ex-Detainee Is Still Captive of ‘The Darkness’</h6>
                        </div>
                        <!-- close story-meta -->
                        <div class="user-tools">
                           <div id="sharetools-masthead" aria-label="tools" role="group" class="sharetools theme-classic  sharetools-masthead  " data-shares="facebook,twitter,email,show-all,save" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html" data-title="After Torture, Ex-Detainee Is Still Captive of ‘The Darkness’" data-author="By JAMES RISEN" data-media="https://static01.nyt.com/images/2016/09/30/world/11suleiman/11suleiman-jumbo-v2.jpg" data-description="The United States subjected Suleiman Abdullah Salim to harsh tactics in a secret prison and held him without charge for years. He was found not to be a terrorist threat, but he pays a deep price to this day." data-publish-date="October 12, 2016" data-share-tools-initialized="1">
                              <div class="ad sharetools-inline-article-ad hidden nocontent robots-nocontent"></div>
                              <ul class="sharetools-menu">
                                 <li class="sharetool facebook-sharetool"><a href="javascript:;" data-share="facebook" data-modal-title=""><i class="icon sprite-icon"></i><span class="sharetool-text ">Share</span></a></li>
                                 <li class="sharetool twitter-sharetool"><a href="javascript:;" data-share="twitter" data-modal-title=""><i class="icon sprite-icon"></i><span class="sharetool-text ">Tweet</span></a></li>
                                 <li class="sharetool email-sharetool"><a href="javascript:;" data-share="email" data-modal-title="Log in to email"><i class="icon sprite-icon"></i><span class="sharetool-text ">Email</span></a></li>
                                 <li class="sharetool show-all-sharetool"><a href="javascript:;" data-share="show-all" data-modal-title=""><i class="icon sprite-icon"></i><span class="sharetool-text ">Share</span></a></li>
                                 <li class="sharetool save-sharetool"><a href="javascript:;" data-share="save" data-modal-title="Log in to save"><i class="icon sprite-icon"></i><span class="sharetool-text ">Save</span></a></li>
                              </ul>
                           </div>
                           <!-- close shareTools -->
                           <div class="user-tools-button-group button-group">
                              <button class="button comments-button  theme-speech-bubble-x-small" data-skip-to-para-id=""><span class="button-meta">
                              <i class="icon"></i>
                              <span class="button-text">
                              <span class="count">206</span>
                              </span>
                              </span></button>
                              <!-- <button class="button notifications-button hidden"><span class="button-text">0</span></button> -->
                           </div>
                           <!-- close user-tools-button-group -->
                        </div>
                        <!-- close user-tools -->
                     </div>
                     <!-- close container -->
                     <div class="search-flyout-panel flyout-panel">
                        <button class="button close-button" type="button"><i class="icon"></i><span class="visually-hidden">Close search</span></button>
                        <nav class="search-form-control form-control layout-horizontal">
                           <h2 class="visually-hidden">Site Search Navigation</h2>
                           <form class="search-form" role="search">
                              <div class="control">
                                 <div class="label-container visually-hidden">
                                    <label for="search-input">Search NYTimes.com</label>
                                 </div>
                                 <div class="field-container">
                                    <input id="search-input" name="search-input" type="text" class="search-input text" autocomplete="off">
                                    <button type="button" class="button clear-button" tabindex="-1" aria-describedby="clear-search-input"><i class="icon"></i><span id="clear-search-input" class="visually-hidden">Clear this text input</span></button>
                                    <div class="auto-suggest" style="display: none;">
                                       <ol></ol>
                                    </div>
                                    <button class="button submit-button disabled" type="submit">Go</button>
                                 </div>
                              </div>
                              <!-- close control -->
                           </form>
                        </nav>
                     </div>
                     <!-- close flyout-panel -->
                     <div id="notification-modals" class="notification-modals"></div>
                     <span class="story-short-url"><a href="http://nyti.ms/2dV2fSf">http://nyti.ms/2dV2fSf</a></span>
                  </header>
                  <nav id="navigation" class="navigation">
                     <h2 class="visually-hidden">Site Navigation</h2>
                     <div class="sections">
                        <div class="section ">
                           <ul class="menu" role="menubar">
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-A963B567-7D3D-4D0C-9E47-BF91609EFCE7" class="domestic " role="menuitem" href="http://www.nytimes.com">
                                 Home Page
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-F4E6EDF7-81C6-4DB2-8EB9-5A5E8A95CEC1" class="international " role="menuitem" href="http://international.nytimes.com/?iht">
                                 Home Page
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-9A43D8FC-F4CF-44D9-9B34-138D30468F8F" class=" expandable" role="menuitem" href="http://www.nytimes.com/pages/world/index.html" aria-haspopup="true" aria-expanded="false">
                                    World
                                    <div class="arrow arrow-right">
                                       <div class="arrow-conceal"></div>
                                    </div>
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-23FD6C8B-62D5-4CEA-A331-6C2A9A1223BE" class=" expandable" role="menuitem" href="http://www.nytimes.com/pages/national/index.html" aria-haspopup="true" aria-expanded="false">
                                    U.S.
                                    <div class="arrow arrow-right">
                                       <div class="arrow-conceal"></div>
                                    </div>
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-80E6DEE6-87E4-4AD0-9152-14FA6B07E5AB" class=" expandable" role="menuitem" href="http://www.nytimes.com/pages/politics/index.html" aria-haspopup="true" aria-expanded="false">
                                    Politics
                                    <div class="arrow arrow-right">
                                       <div class="arrow-conceal"></div>
                                    </div>
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-C4DC8C0C-E148-4201-BF10-82F1C903DBFB" class=" expandable" role="menuitem" href="http://www.nytimes.com/pages/nyregion/index.html" aria-haspopup="true" aria-expanded="false">
                                    N.Y.
                                    <div class="arrow arrow-right">
                                       <div class="arrow-conceal"></div>
                                    </div>
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-104D1E63-9701-497B-8CF4-A4D120C9014E" class="domestic expandable" role="menuitem" href="http://www.nytimes.com/pages/business/index.html" aria-haspopup="true" aria-expanded="false">
                                    Business
                                    <div class="arrow arrow-right">
                                       <div class="arrow-conceal"></div>
                                    </div>
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-A257D89A-0D3C-40AF-9C34-1A25A7947D94" class="international expandable" role="menuitem" href="http://www.nytimes.com/pages/business/international/index.html" aria-haspopup="true" aria-expanded="false">
                                    Business
                                    <div class="arrow arrow-right">
                                       <div class="arrow-conceal"></div>
                                    </div>
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-AD8090D7-4137-4D71-84C8-70DA3BD89778" class="domestic expandable" role="menuitem" href="http://www.nytimes.com/pages/opinion/index.html" aria-haspopup="true" aria-expanded="false">
                                    Opinion
                                    <div class="arrow arrow-right">
                                       <div class="arrow-conceal"></div>
                                    </div>
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-09736473-CB3F-4B2F-9772-3AF128ABE12D" class="international expandable" role="menuitem" href="http://www.nytimes.com/pages/opinion/international/index.html" aria-haspopup="true" aria-expanded="false">
                                    Opinion
                                    <div class="arrow arrow-right">
                                       <div class="arrow-conceal"></div>
                                    </div>
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-78FBAD45-31A9-4EC7-B172-7D62A2B9955E" class=" expandable" role="menuitem" href="http://www.nytimes.com/pages/technology/index.html" aria-haspopup="true" aria-expanded="false">
                                    Tech
                                    <div class="arrow arrow-right">
                                       <div class="arrow-conceal"></div>
                                    </div>
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-A4B35924-DB6C-4EA3-997D-450810F4FEE6" class=" expandable" role="menuitem" href="http://www.nytimes.com/section/science" aria-haspopup="true" aria-expanded="false">
                                    Science
                                    <div class="arrow arrow-right">
                                       <div class="arrow-conceal"></div>
                                    </div>
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-7D6BE1AF-8CD8-430B-8B2A-17CD0EAA99AC" class=" expandable" role="menuitem" href="http://www.nytimes.com/pages/health/index.html" aria-haspopup="true" aria-expanded="false">
                                    Health
                                    <div class="arrow arrow-right">
                                       <div class="arrow-conceal"></div>
                                    </div>
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-DE2B278B-2783-4506-AAD5-C15A5BB6DA1A" class="domestic expandable" role="menuitem" href="http://www.nytimes.com/pages/sports/index.html" aria-haspopup="true" aria-expanded="false">
                                    Sports
                                    <div class="arrow arrow-right">
                                       <div class="arrow-conceal"></div>
                                    </div>
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-BE66F420-C51B-461D-B487-CACF62E94AAE" class="international expandable" role="menuitem" href="http://www.nytimes.com/pages/sports/international/index.html" aria-haspopup="true" aria-expanded="false">
                                    Sports
                                    <div class="arrow arrow-right">
                                       <div class="arrow-conceal"></div>
                                    </div>
                                 </a>
                              </li>
                           </ul>
                        </div>
                        <div class="section ">
                           <ul class="menu" role="menubar">
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-C5BFA7D5-359C-427B-90E6-6B7245A6CDD8" class="domestic expandable" role="menuitem" href="http://www.nytimes.com/pages/arts/index.html" aria-haspopup="true" aria-expanded="false">
                                    Arts
                                    <div class="arrow arrow-right">
                                       <div class="arrow-conceal"></div>
                                    </div>
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-0202D0E4-C59B-479A-BD42-6F1766459781" class="international expandable" role="menuitem" href="http://www.nytimes.com/pages/arts/international/index.html" aria-haspopup="true" aria-expanded="false">
                                    Arts
                                    <div class="arrow arrow-right">
                                       <div class="arrow-conceal"></div>
                                    </div>
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-B3DFBD82-F298-43B3-9458-219B4F6AA2A5" class="domestic expandable" role="menuitem" href="http://www.nytimes.com/pages/fashion/index.html" aria-haspopup="true" aria-expanded="false">
                                    Fashion &amp; Style
                                    <div class="arrow arrow-right">
                                       <div class="arrow-conceal"></div>
                                    </div>
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-CC9E2674-F6C4-4A39-813B-F5AB0C515CEA" class="international expandable" role="menuitem" href="http://www.nytimes.com/pages/style/international/index.html" aria-haspopup="true" aria-expanded="false">
                                    Fashion &amp; Style
                                    <div class="arrow arrow-right">
                                       <div class="arrow-conceal"></div>
                                    </div>
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-D9C94A2B-0364-4D25-8383-592CC66F82D4" class="domestic expandable" role="menuitem" href="http://www.nytimes.com/pages/dining/index.html" aria-haspopup="true" aria-expanded="false">
                                    Food
                                    <div class="arrow arrow-right">
                                       <div class="arrow-conceal"></div>
                                    </div>
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-FDEFB811-B483-4C3D-A25A-FD07BE5EAD96" class="international expandable" role="menuitem" href="http://www.nytimes.com/pages/dining/international/index.html" aria-haspopup="true" aria-expanded="false">
                                    Food
                                    <div class="arrow arrow-right">
                                       <div class="arrow-conceal"></div>
                                    </div>
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-FDA10AC4-4738-4099-91E8-15584765C8D7" class=" " role="menuitem" href="http://www.nytimes.com/section/travel">
                                 Travel
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-E57A148E-0CB9-4C02-966D-28B119710151" class=" " role="menuitem" href="http://www.nytimes.com/pages/magazine/index.html">
                                 Magazine
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-052C33AD-1404-4DB6-AA70-0901DB1AD95B" class=" " role="menuitem" href="http://www.nytimes.com/section/t-magazine">
                                 T Magazine
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-92720057-BCB6-4BDB-9351-12F29393259F" class=" expandable" role="menuitem" href="http://www.nytimes.com/section/realestate" aria-haspopup="true" aria-expanded="false">
                                    Real Estate
                                    <div class="arrow arrow-right">
                                       <div class="arrow-conceal"></div>
                                    </div>
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-CEDDB6A8-F7E1-47A2-AC53-E28C616DFCD5" class=" " role="menuitem" href="http://www.nytimes.com/pages/obituaries/index.html">
                                 Obituaries
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-432A1823-3F24-43C0-8004-79088F94E754" class=" expandable" role="menuitem" href="http://www.nytimes.com/video" aria-haspopup="true" aria-expanded="false">
                                    Video
                                    <div class="arrow arrow-right">
                                       <div class="arrow-conceal"></div>
                                    </div>
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-D64FAE4C-4425-4E5A-B898-6C8CB59F9957" class=" " role="menuitem" href="http://www.nytimes.com/upshot/">
                                 The Upshot
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-0442C365-4B63-4B63-B9DE-3C28319CB622" class=" expandable" role="menuitem" tabindex="0" aria-haspopup="true" aria-expanded="false">
                                    Conferences
                                    <div class="arrow arrow-right">
                                       <div class="arrow-conceal"></div>
                                    </div>
                                 </a>
                              </li>
                           </ul>
                        </div>
                        <div class="section hidden">
                           <ul class="menu" role="menubar">
                              <li role="presentation" class="hidden">
                                 <a id="navId-5C13EEDD-D905-4D8C-A284-6859EA434563" class=" " role="menuitem" href="http://www.nytimes.com/crosswords/">
                                 Crossword
                                 </a>
                              </li>
                              <li role="presentation" class="hidden">
                                 <a id="navId-99C17804-A343-4A76-BF04-F5793ADA48D1" class=" " role="menuitem" href="http://www.nytimes.com/times-insider">
                                 Times Insider
                                 </a>
                              </li>
                           </ul>
                        </div>
                        <div class="section hidden">
                           <ul class="menu" role="menubar">
                              <li role="presentation" class="hidden">
                                 <a id="navId-8FB1308A-FFE4-4BED-ADF6-659A680D0884" class=" " role="menuitem" href="http://www.nytimes.com/pages/multimedia/index.html">
                                 Multimedia
                                 </a>
                              </li>
                              <li role="presentation" class="hidden">
                                 <a id="navId-108F7745-BAD9-4630-87BB-4FB4ED7CAA11" class=" " role="menuitem" href="http://lens.blogs.nytimes.com/">
                                 Photography
                                 </a>
                              </li>
                           </ul>
                        </div>
                        <div class="section hidden">
                           <ul class="menu" role="menubar">
                              <li role="presentation" class="hidden">
                                 <a id="navId-6101A43A-8BDE-45FF-AAD5-EF7396F83AC9" class=" " role="menuitem" href="https://www.nytimes.com/store/?&amp;t=qry542&amp;utm_source=nytimes&amp;utm_medium=HPB&amp;utm_content=hp_browsetree&amp;utm_campaign=NYT-HP&amp;module=SectionsNav&amp;action=click&amp;region=TopBar&amp;version=BrowseTree&amp;contentCollection=NYT%20Store&amp;contentPlacement=2&amp;pgtype=Homepage">
                                 NYT Store
                                 </a>
                              </li>
                              <li role="presentation" class="hidden">
                                 <a id="navId-52A8A3F2-F138-425B-A63F-722E2BBC9372" class=" " role="menuitem" href="http://www.nytwineclub.com/!NYPPP0150302/">
                                 NYT Wine Club
                                 </a>
                              </li>
                              <li role="presentation" class="hidden">
                                 <a id="navId-081347DE-FF02-4B6C-889B-9AE59F391833" class=" " role="menuitem" href="http://nytedu.com">
                                 nytEducation
                                 </a>
                              </li>
                              <li role="presentation" class="hidden">
                                 <a id="navId-797F8D17-1632-435D-B3DB-708FC4B4BAEF" class=" " role="menuitem" href="http://www.nytimes.com/times-journeys/?utm_source=nytimes&amp;utm_medium=HPLink&amp;utm_content=hp_browsetree&amp;utm_campaign=NYT-HP&amp;module=SectionsNav&amp;action=click&amp;region=TopBar&amp;version=BrowseTree&amp;contentCollection=Times%20Journeys&amp;contentPlacement=2&amp;pgtype=Homepage">
                                 Times Journeys
                                 </a>
                              </li>
                              <li role="presentation" class="hidden">
                                 <a id="navId-53CB229C-5F34-4C32-8B8C-6F7B7626BBDD" class=" " role="menuitem" href="https://www.chefd.com/pages/new-york-times-cooking-meal-plan?utm_campaign=web1_20160617&amp;utm_medium=partner&amp;utm_source=nyt">
                                 Meal Kits
                                 </a>
                              </li>
                           </ul>
                        </div>
                        <div class="section hidden">
                           <ul class="menu" role="menubar">
                              <li role="presentation" class="hidden">
                                 <a id="navId-FED853D9-D192-46F6-8D18-447803EB4A7B" class=" " role="menuitem" href="http://international.nytimes.com/subscriptions/inyt/lp87JWF.html?campaignId=64YFR">
                                 Subscribe
                                 </a>
                              </li>
                              <li role="presentation" class="hidden">
                                 <a id="navId-61E9BFEA-F509-4BCA-ADC6-32C5A30B83FD" class=" " role="menuitem" href="http://www.nytimes.com/membercenter">
                                 Manage Account
                                 </a>
                              </li>
                              <li role="presentation" class="hidden">
                                 <a id="navId-0DAA7CFE-196B-4878-B899-5363070098EC" class=" " role="menuitem" href="http://www.nytimes.com/pages/todayspaper/index.html">
                                 Today's Paper
                                 </a>
                              </li>
                              <li role="presentation" class="hidden">
                                 <a id="navId-1FBDDF2B-64F5-4DB3-8093-F0CCB7808799" class=" " role="menuitem" href="http://www.nytimes.com/interactive/blogs/directory.html">
                                 Blogs
                                 </a>
                              </li>
                              <li role="presentation" class="hidden">
                                 <a id="navId-D3E5F163-D939-4FD5-8FB6-C6AD31748E30" class=" " role="menuitem" href="http://www.nytimes.com/pages/topics/">
                                 Times Topics
                                 </a>
                              </li>
                              <li role="presentation" class="hidden">
                                 <a id="navId-6BBF5308-5EA3-4B25-885F-393F7372F27F" class=" " role="menuitem" href="http://www.nytimes.com/marketing/tools-and-services/">
                                 Tools &amp; Services
                                 </a>
                              </li>
                              <li role="presentation" class="hidden">
                                 <a id="navId-288E1691-DA3B-457A-8B06-D10A1351E7B9" class=" " role="menuitem" href="http://www.nytimes.com/section/jobs">
                                 Jobs
                                 </a>
                              </li>
                              <li role="presentation" class="hidden">
                                 <a id="navId-D4C7C57A-E74D-44C3-9D0E-0AE6B715610F" class=" " role="menuitem" href="http://www.nytimes.com/ref/classifieds/">
                                 Classifieds
                                 </a>
                              </li>
                              <li role="presentation" class="hidden">
                                 <a id="navId-6DD9D623-A907-4623-9C5A-9409972B76DA" class=" " role="menuitem" href="http://www.nytimes.com/pages/corrections/index.html">
                                 Corrections
                                 </a>
                              </li>
                           </ul>
                        </div>
                        <div class="section ">
                           <ul class="menu" role="menubar">
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-more-section" class=" expandable" role="menuitem" tabindex="0" aria-haspopup="true" aria-expanded="false">
                                    More
                                    <div class="arrow arrow-right">
                                       <div class="arrow-conceal"></div>
                                    </div>
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </nav>
                  <!-- close navigation -->
                  <nav id="mobile-navigation" class="mobile-navigation hidden">
                     <h2 class="visually-hidden">Site Mobile Navigation</h2>
                  </nav>
                  <!-- close mobile-navigation -->
                  <div id="page" class="page">
                     <main id="main" class="main" role="main">
                        <article id="story" class="story theme-main has-vertical-full-bleed bleed-align-right transparent-vertical-full-bleed">
                           <div id="TragedyAd" class="ad tragedy-ad nocontent robots-nocontent"></div>
                           <header id="story-header" class="story-header">
                              <figure id="media-100000004679851" class="media cover photo media-orientation-vertical layout-vertical-full-bleed" data-bleed-style="vertical-full-bleed" itemid="https://static01.nyt.com/images/2016/09/30/world/11suleiman/11suleiman-articleLarge-v2.jpg" itemtype="http://schema.org/ImageObject" aria-label="media" role="presentation" style="height: 648px;">
                                 <span class="visually-hidden">Cover Photo</span>
                                 <div class="image">
                                    <img id="media-image-100000004679851" src="https://static01.nyt.com/images/2016/09/30/world/11suleiman/11suleiman-superJumbo-v2.jpg" alt="" data-jumbosrc="https://static01.nyt.com/images/2016/09/30/world/11suleiman/11suleiman-jumbo-v2.jpg" data-superjumbosrc="https://static01.nyt.com/images/2016/09/30/world/11suleiman/11suleiman-superJumbo-v2.jpg" style="margin-top: -182.25px;">
                                 </div>
                                 <figcaption id="media-caption-100000004679851" class="caption" itemprop="caption description" style="top: 655px;">
                                    <span class="caption-text">Suleiman Abdullah Salim endured beatings, sleep deprivation, water dousing and other severe measures.</span>
                                    <span class="credit" itemprop="copyrightHolder">
                                    <span class="visually-hidden">Credit</span>
                                    Bryan Denton for The New York Times        </span>
                                 </figcaption>
                                 <meta itemprop="height" content="900">
                                 <meta itemprop="width" content="600">
                              </figure>
                              <div class="freeform">
                                 <style>
                                    .story-header .credit { display: none; }
                                 </style>
                                 <script>
                                    require(['foundation/main'], function() {
                                      require([
                                        'jquery/nyt',
                                        'underscore/1.6',
                                        'foundation/views/page-manager'
                                        ], function($, _, PageManager) {
                                          if (!$('html').hasClass('mobile')) {
                                            $('<br><span class="byline desktop">Photographs by BRYAN DENTON</span><br>').insertBefore('.has-cover-media .story.has-vertical-full-bleed .story-header .dateline');
                                          }
                                      });
                                    });
                                 </script>
                              </div>
                              <div id="story-meta" class="story-meta " style="background-color: rgb(255, 255, 255);">
                                 <h1 id="headline" class="headline balance-text" style="white-space: normal; float: none; display: block; position: static;">After Torture, Ex-Detainee Is Still Captive of ‘The Darkness’</h1>
                                 <p itemprop="headline" id="story-deck" class="deck balance-text" style="white-space: normal; float: none; display: block; position: static;">The United States subjected Suleiman Abdullah Salim to harsh tactics in a secret prison and held him without charge for years. He was found not to be a terrorist threat, but he pays a deep price to this day.</p>
                                 <div id="story-meta-footer" class="story-meta-footer">
                                    <p class="byline-dateline"><span class="byline" itemprop="author creator" itemscope="" itemtype="http://schema.org/Person" itemid="http://www.nytimes.com/by/james-risen">By <a href="http://www.nytimes.com/by/james-risen" title="More Articles by JAMES RISEN"><span class="byline-author" data-byline-name="JAMES RISEN" itemprop="name">JAMES RISEN</span></a></span><br><span class="byline desktop">Photographs by BRYAN DENTON</span><br><time class="dateline" datetime="2016-10-12T12:38:54-04:00" itemprop="dateModified" content="2016-10-12T12:38:54-04:00">OCT. 12, 2016</time></p>
                                    <div class="story-meta-footer-sharetools">
                                       <div id="sharetools-story-meta-footer" aria-label="tools" role="group" class="sharetools theme-classic  sharetools-story-meta-footer  " data-shares="facebook,twitter,email,show-all,save" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html" data-title="After Torture, Ex-Detainee Is Still Captive of ‘The Darkness’" data-author="By JAMES RISEN" data-media="https://static01.nyt.com/images/2016/09/30/world/11suleiman/11suleiman-jumbo-v2.jpg" data-description="The United States subjected Suleiman Abdullah Salim to harsh tactics in a secret prison and held him without charge for years. He was found not to be a terrorist threat, but he pays a deep price to this day." data-publish-date="October 12, 2016" data-share-tools-initialized="1">
                                          <a class="visually-hidden skip-to-text-link" href="#story-continues-1">Continue reading the main story</a>
                                          <span class="sharetools-label visually-hidden">Share This Page</span>
                                          <div class="ad sharetools-inline-article-ad hidden nocontent robots-nocontent">
                                             <a class="visually-hidden skip-to-text-link" href="#story-continues-1">Continue reading the main story</a>
                                          </div>
                                          <ul class="sharetools-menu">
                                             <li class="sharetool facebook-sharetool"><a href="javascript:;" data-share="facebook" data-modal-title=""><i class="icon sprite-icon"></i><span class="sharetool-text ">Share</span></a></li>
                                             <li class="sharetool twitter-sharetool"><a href="javascript:;" data-share="twitter" data-modal-title=""><i class="icon sprite-icon"></i><span class="sharetool-text ">Tweet</span></a></li>
                                             <li class="sharetool email-sharetool"><a href="javascript:;" data-share="email" data-modal-title="Log in to email"><i class="icon sprite-icon"></i><span class="sharetool-text ">Email</span></a></li>
                                             <li class="sharetool show-all-sharetool"><a href="javascript:;" data-share="show-all" data-modal-title=""><i class="icon sprite-icon"></i><span class="sharetool-text ">More</span></a></li>
                                             <li class="sharetool save-sharetool"><a href="javascript:;" data-share="save" data-modal-title="Log in to save"><i class="icon sprite-icon"></i><span class="sharetool-text ">Save</span></a></li>
                                          </ul>
                                       </div>
                                       <!-- close shareTools -->
                                    </div>
                                 </div>
                                 <!-- close story-meta-footer -->
                              </div>
                              <!-- close story-meta -->
                           </header>
                           <script type="text/javascript">
                              if (window.magnum && window.magnum.getFlags().indexOf('headlineBalancer') > 0 &&
                              window.magnum.headlineBalancer && window.magnum.headlineBalancer.initialize) {
                                  window.magnum.headlineBalancer.initialize();
                              }
                           </script>
                           <div class="story-body-supplemental" style="margin-top: 730px;">
                              <div class="story-body story-body-1">
                                 <script>
                                    if (window.magnum && window.magnum.responsiveImages && window.magnum.responsiveImages.setCoverImage) {
                                    	window.magnum.responsiveImages.setCoverImage('100000004679851','vertical-full-bleed',900,600,0,0,0,0,'#FFFFFF');
                                    }
                                 </script>
                                 <p class="story-body-text story-content" data-para-count="277" data-total-count="277">DUBAI, United Arab Emirates — At first, the Americans seemed confused about Suleiman Abdullah Salim. They apparently had been expecting a light-skinned Arab, and instead at a small airport outside Mogadishu that day in March 2003, they had been handed a dark-skinned African.</p>
                                 <p class="story-body-text story-content" data-para-count="186" data-total-count="463">“They said, ‘You changed your face,’” Mr. Salim, a Tanzanian, recalled the American men telling him when he arrived. “They said: ‘You are Yemeni. You changed your face.’”</p>
                                 <p class="story-body-text story-content" data-para-count="337" data-total-count="800">That was the beginning of Mr. Salim’s strange ordeal in United States custody. It has been 13 years since he was tortured in a secret prison in <a href="http://topics.nytimes.com/top/news/international/countriesandterritories/afghanistan/index.html?inline=nyt-geo" title="More news and information about Afghanistan." class="meta-loc">Afghanistan</a> run by the <a href="http://topics.nytimes.com/top/reference/timestopics/organizations/c/central_intelligence_agency/index.html?inline=nyt-org" title="More articles about the Central Intelligence Agency." class="meta-org">Central Intelligence Agency</a>, a place he calls “The Darkness.” It has been eight years since he was released — no charges, no explanations — back into the world.</p>
                                 <p class="story-body-text story-content" data-para-count="452" data-total-count="1252">Even after so much time, Mr. Salim, 45, is struggling to move on. Suffering from <a href="http://health.nytimes.com/health/guides/symptoms/depression/overview.html?inline=nyt-classifier" title="In-depth reference and news articles about Depression (Mental)." class="meta-classifier">depression</a> and post-traumatic stress, according to a medical assessment, he is withdrawn and wary. He cannot talk about his experiences with his wife, who he says worries that the Americans will come back to snatch him. He is fearful of drawing too much attention at home in Stone Town in Zanzibar, Tanzania, concerned that his neighbors will think he is an American spy.</p>
                                 <a class="visually-hidden skip-to-text-link" href="#story-continues-1">Continue reading the main story</a>
                              </div>
                              <!-- close story-body -->
                              <div class="supplemental first short" id="supplemental-1" data-between-flex-ads="true" data-pre-height="562" data-max-items="1" data-remaining="562" data-minimum="400" data-last-item-height="762" data-flex-ad-adjacency="true" data-post-height="562">
                                 <div class="supplemental-items" data-supplemental-order="0" data-no-med-rec="true" data-no-ads="true">
                                    <aside class="marginalia related-combined-coverage-marginalia marginalia-item nocontent robots-nocontent" data-marginalia-type="sprinkled" role="complementary" module="Related-CombinedMarginalia">
                                       <div class="nocontent robots-nocontent">
                                          <header>
                                             <h2 class="module-heading">Related Coverage</h2>
                                          </header>
                                          <ul>
                                             <li>
                                                <article class="story theme-summary ">
                                                   <a class="story-link" href="http://www.nytimes.com/2016/10/09/world/cia-torture-guantanamo-bay.html">
                                                      <div class="thumb">
                                                         <img src="https://static01.nyt.com/images/2016/10/08/world/DETAINEES5/DETAINEES5-thumbStandard.jpg" role="presentation" alt="">
                                                         <div class="media-action-overlay"></div>
                                                      </div>
                                                      <div class="story-body">
                                                         <h2 class="headline">
                                                            <span class="title">How U.S. Torture Left a Legacy of Damaged Minds</span>
                                                            <time class="dateline">OCT. 8, 2016</time>
                                                         </h2>
                                                      </div>
                                                   </a>
                                                </article>
                                             </li>
                                          </ul>
                                       </div>
                                    </aside>
                                    <aside class="marginalia comments-marginalia  selected-comment-marginalia" data-marginalia-type="sprinkled" data-skip-to-para-id="">
                                       <header>
                                          <h2 class="module-heading"><i class="icon"></i>Recent Comments</h2>
                                       </header>
                                       <div class="comments-view">
                                          <article class="comment" data-permid="20112682">
                                             <header>
                                                <h2 class="commenter">Michael Ham</h2>
                                                <time class="comment-time" datetime="">5 minutes ago</time>
                                             </header>
                                             <p class="comment-text">It seems that the US has absolutely no intention of (a) apologizing to its victims (even when, as in the case of Khalid El-Masri, they are...</p>
                                          </article>
                                          <article class="comment" data-permid="20112679">
                                             <header>
                                                <h2 class="commenter"> VB@Singapore </h2>
                                                <time class="comment-time" datetime="">5 minutes ago</time>
                                             </header>
                                             <p class="comment-text">With this kind of larma on its hands the US defijitely deserves Trump as President. Its not sad but shameful that the people who perpetrated...</p>
                                          </article>
                                          <article class="comment" data-permid="20112676">
                                             <header>
                                                <h2 class="commenter">LakeLife</h2>
                                                <time class="comment-time" datetime="">5 minutes ago</time>
                                             </header>
                                             <p class="comment-text">Sorry, I don't care about what perceived injustices have been put on Mr. Salim .   I do care about what others of this man's ilk have...</p>
                                          </article>
                                       </div>
                                       <!-- close comments-view -->
                                       <footer>
                                          <ul class="comment-actions">
                                             <li class="comment-count">
                                                See All Comments
                                             </li>
                                             <li class="comment-reply">Write a comment</li>
                                          </ul>
                                       </footer>
                                    </aside>
                                 </div>
                              </div>
                              <!-- close supplemental -->
                           </div>
                           <!-- close story-body-supplemental -->
                           <div class="story-interrupter" id="story-continues-1">
                              <div id="FlexAd" class="ad flex-ad nocontent robots-nocontent">
                                 <div class="accessibility-ad-header visually-hidden">
                                    <p>Advertisement</p>
                                 </div>
                                 <a class="visually-hidden skip-to-text-link" href="#story-continues-2">Continue reading the main story</a>
                                 <div class="flex-ad-creative"></div>
                                 <div id="google_ads_iframe_/29390238/NYT/world_4__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/29390238/NYT/world_4" title="3rd party ad content" name="google_ads_iframe_/29390238/NYT/world_4" width="100%" height="0" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" src="javascript:&quot;<html><body style='background:transparent'></body></html>&quot;" style="border: 0px; vertical-align: bottom;"></iframe></div>
                                 <iframe id="google_ads_iframe_/29390238/NYT/world_4__hidden__" title="" name="google_ads_iframe_/29390238/NYT/world_4__hidden__" width="0" height="0" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" src="javascript:&quot;<html><body style='background:transparent'></body></html>&quot;" style="border: 0px; vertical-align: bottom; visibility: hidden; display: none;"></iframe>
                              </div>
                           </div>
                           <div class="story-body-supplemental">
                              <div class="story-body story-body-2">
                                 <script>
                                    if (window.magnum && window.magnum.responsiveImages && window.magnum.responsiveImages.setCoverImage) {
                                    	window.magnum.responsiveImages.setCoverImage('100000004679851','vertical-full-bleed',900,600,0,0,0,0,'#FFFFFF');
                                    }
                                 </script>
                                 <p class="story-body-text story-content" data-para-count="371" data-total-count="1623" id="story-continues-2">When he speaks, not in his native Swahili but in the English he learned from his jailers, Mr. Salim nearly whispers. “Many times now I feel like I have something heavy inside my body,” he said in an interview. “Sometimes I walk, and I walk, and I forget, I forget everything, I forget prison, The Darkness, everything. But it is always there. The Darkness comes.”</p>
                                 <p class="story-body-text story-content" data-para-count="393" data-total-count="2016">Mr. Salim was one of 39 men subjected to some of the C.I.A.’s most brutal techniques — beatings, hanging in chains, sleep deprivation and water dousing, which creates a sensation of drowning, even though interrogators had been denied permission to use that last tactic on him, according to a Senate Intelligence Committee investigation into the agency’s classified interrogation program.</p>
                                 <p class="story-body-text story-content" data-para-count="308" data-total-count="2324">In a series of recent interviews in Dubai, Mr. Salim described his incarceration by the C.I.A. and the United States military as a terrorism suspect. His account closely parallels those provided by other detainees, witnesses and court documents, and confirms details in the Senate report about his treatment.</p>
                                 <div id="story-ad-1" class="story-ad ad ad-placeholder nocontent robots-nocontent hidden">
                                    <div class="accessibility-ad-header visually-hidden">
                                       <p>Advertisement</p>
                                    </div>
                                    <a class="visually-hidden skip-to-text-link" href="#story-continues-3">Continue reading the main story</a>
                                 </div>
                                 <p class="story-body-text story-content" data-para-count="227" data-total-count="2551" id="story-continues-3">Today, back in Stone Town, Mr. Salim is trying to support his family, though some of his attempts at jobs have not worked out. He now breeds pigeons, raising them for a local market. They are both his livelihood and his solace.</p>
                                 <p class="story-body-text story-content" data-para-count="51" data-total-count="2602">They help him, Mr. Salim said. They quiet his mind.</p>
                                 <a class="visually-hidden skip-to-text-link" href="#story-continues-4">Continue reading the main story</a>
                              </div>
                              <!-- close story-body -->
                              <div class="supplemental " id="supplemental-2" data-pre-height="631" data-max-items="1" data-remaining="631" data-minimum="400" data-last-item-height="631" data-flex-ad-adjacency="false" data-post-height="631">
                                 <div class="supplemental-items" data-supplemental-order="1">
                                    <aside id="middle-right-paid-post-container" class="ad middle-right-ad paid-post-ad marginalia-item hidden nocontent robots-nocontent">
                                       <h2 class="marginalia-heading"></h2>
                                       <ul class="story-menu">
                                          <li id="MiddleRightPaidPost1" class="story-menu-item ad">
                                             <div id="google_ads_iframe_/29390238/NYT/world_0__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/29390238/NYT/world_0" title="3rd party ad content" name="google_ads_iframe_/29390238/NYT/world_0" width="300" height="77" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" src="javascript:&quot;<html><body style='background:transparent'></body></html>&quot;" style="border: 0px; vertical-align: bottom;"></iframe></div>
                                          </li>
                                          <li id="MiddleRightPaidPost2" class="story-menu-item ad">
                                             <div id="google_ads_iframe_/29390238/NYT/world_1__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/29390238/NYT/world_1" title="3rd party ad content" name="google_ads_iframe_/29390238/NYT/world_1" width="300" height="77" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" src="javascript:&quot;<html><body style='background:transparent'></body></html>&quot;" style="border: 0px; vertical-align: bottom;"></iframe></div>
                                          </li>
                                          <li id="MiddleRightPaidPost3" class="story-menu-item ad">
                                             <div id="google_ads_iframe_/29390238/NYT/world_2__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/29390238/NYT/world_2" title="3rd party ad content" name="google_ads_iframe_/29390238/NYT/world_2" width="300" height="77" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" src="javascript:&quot;<html><body style='background:transparent'></body></html>&quot;" style="border: 0px; vertical-align: bottom;"></iframe></div>
                                          </li>
                                          <li id="MiddleRightPaidPost4" class="story-menu-item ad">
                                             <div id="google_ads_iframe_/29390238/NYT/world_3__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/29390238/NYT/world_3" title="3rd party ad content" name="google_ads_iframe_/29390238/NYT/world_3" width="300" height="77" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" src="javascript:&quot;<html><body style='background:transparent'></body></html>&quot;" style="border: 0px; vertical-align: bottom;"></iframe></div>
                                          </li>
                                       </ul>
                                    </aside>
                                 </div>
                              </div>
                              <!-- close supplemental -->
                           </div>
                           <!-- close story-body-supplemental -->
                           <div class="story-interrupter" id="story-continues-4">
                              <figure id="media-100000004680163" class="media photo embedded layout-jumbo-horizontal media-100000004680163 ratio-tall" data-media-action="modal" itemprop="associatedMedia" itemscope="" itemid="https://static01.nyt.com/images/2016/09/30/world/11suleiman-birds/11suleiman-birds-superJumbo.jpg" itemtype="http://schema.org/ImageObject" aria-label="media" role="group">
                                 <span class="visually-hidden">Photo</span>
                                 <div class="image">
                                    <img src="https://static01.nyt.com/images/2016/09/30/world/11suleiman-birds/11suleiman-birds-superJumbo.jpg" alt="" class="media-viewer-candidate" data-mediaviewer-src="https://static01.nyt.com/images/2016/09/30/world/11suleiman-birds/11suleiman-birds-superJumbo.jpg" data-mediaviewer-caption="Breeding pigeons, like these at an aviary in Johannesburg, offers solace to Mr. Salim, who has struggled to move on after his release in 2008. He suffers from depression and post-traumatic stress." data-mediaviewer-credit="Bryan Denton for The New York Times" itemprop="url" itemid="https://static01.nyt.com/images/2016/09/30/world/11suleiman-birds/11suleiman-birds-superJumbo.jpg">
                                    <div class="media-action-overlay">
                                       <i class="icon sprite-icon"></i>
                                    </div>
                                    <meta itemprop="height" content="1365">
                                    <meta itemprop="width" content="2048">
                                 </div>
                                 <figcaption class="caption" itemprop="caption description">
                                    <span class="caption-text">Breeding pigeons, like these at an aviary in Johannesburg, offers solace to Mr. Salim, who has struggled to move on after his release in 2008. He suffers from depression and post-traumatic stress.</span>
                                    <span class="credit" itemprop="copyrightHolder">
                                    <span class="visually-hidden">Credit</span>
                                    Bryan Denton for The New York Times        </span>
                                 </figcaption>
                              </figure>
                           </div>
                           <div class="story-body-supplemental">
                              <div class="story-body story-body-3">
                                 <script>
                                    if (window.magnum && window.magnum.responsiveImages && window.magnum.responsiveImages.setCoverImage) {
                                    	window.magnum.responsiveImages.setCoverImage('100000004679851','vertical-full-bleed',900,600,0,0,0,0,'#FFFFFF');
                                    }
                                 </script>
                                 <h4 class="story-subheading story-content" data-para-count="18" data-total-count="2620">A Life Interrupted</h4>
                                 <p class="story-body-text story-content" data-para-count="296" data-total-count="2916" id="story-continues-5">Exactly why Mr. Salim fell into American hands remains murky; leaks to the press at the time of his capture suggested that intelligence officials suspected he had links to Al Qaeda, but the C.I.A. has never publicly disclosed the reasons. An agency spokesman declined to comment for this article.</p>
                                 <p class="story-body-text story-content" data-para-count="321" data-total-count="3237">Mr. Salim had been drifting into a nomadic life in one of the world’s poorest regions, where the C.I.A. after the Sept. 11, 2001, attacks had promised allies cash rewards for terrorism suspects. Governments and warlords turned over hundreds of men to the United States, in many cases with little evidence of wrongdoing.</p>
                                 <p class="story-body-text story-content" data-para-count="303" data-total-count="3540">Mr. Salim grew up on Africa’s eastern edges, but from boy to man never quite found himself. One of eight children in a family in Stone Town, a historic district of Zanzibar City, he apprenticed on the local fishing piers, then joined the crews going out for kingfish and barracuda in the Indian Ocean.</p>
                                 <p class="story-body-text story-content" data-para-count="274" data-total-count="3814">He dropped out of school after ninth or 10th grade and headed for Dar es Salaam, Tanzania’s largest city, where he worked in a clothing shop. He moved a few years later to Mombasa, on Kenya’s coast, where he ferried cargos of dried fish, rice and oil with a crew of two.</p>
                                 <figure id="11suleiman-4" class="interactive interactive-embedded  limit-small layout-small d-pullquote-wrapper">
                                    <figcaption class="interactive-caption">
                                    </figcaption>
                                    <div class="interactive-graphic">
                                       <script>function getFlexData() { return {"data":{"quote":"“It is always there. The Darkness comes.”","attribution":"Mr. Salim "}}; }var NYTD=NYTD || {}; NYTD.FlexTypes = NYTD.FlexTypes || []; NYTD.FlexTypes.push({"target":"FT100000004681031","type":"Pull Quote","data":{"quote":"“It is always there. The Darkness comes.”","attribution":"Mr. Salim "}});</script>
                                       <link href="http://graphics8.nytimes.com/newsgraphics/2015/02/10/mag-pullquote-redesign/assets/style.css" type="text/css" rel="stylesheet">
                                       <script>
                                          var NYTG_ASSETS = "http://static01.nyt.com/newsgraphics/2015/02/10/mag-pullquote-redesign/b585ac490ed3103c57423bc4f581ffac30ebc5df/",
                                              NYTG_BIG_ASSETS = "http://static01.nyt.com/newsgraphics/2015/02/10/mag-pullquote-redesign/assets/",
                                              _gaq = _gaq || [];
                                          require(['foundation/main'], function() {
                                            require(["http://static01.nyt.com/newsgraphics/2015/02/10/mag-pullquote-redesign/assets/build.js"]); // generated from src/script.js
                                          });
                                       </script>
                                       <div id="FT100000004681031">
                                          <section class="d-pullquote">
                                             <p style="white-space: normal; float: none; display: block; position: static;">“It is always there.<br data-owner="balance-text">The Darkness comes.”</p>
                                             <cite>	Mr. Salim </cite>
                                          </section>
                                       </div>
                                    </div>
                                    <div class="footer">
                                    </div>
                                 </figure>
                                 <p class="story-body-text story-content" data-para-count="418" data-total-count="4232">Then the outside world intruded. In August 1998, Qaeda suicide truck bombers blew up the United States Embassies in Kenya and Tanzania. Mr. Salim said a man whose boat he used for the cargo runs was suspected of involvement in the plot. (Mr. Salim said that while he was in prison, American officials told him that the man had died, but he knows no other details.) The boat was soon seized by a Somali pirate, he said.</p>
                                 <p class="story-body-text story-content" data-para-count="303" data-total-count="4535">Mr. Salim moved on to Kismayu, a Somali port town, and was hired as a harbor pilot. It was a good job, maybe too good for a foreigner with no ties to <a href="http://topics.nytimes.com/top/news/international/countriesandterritories/somalia/index.html?inline=nyt-geo" title="More news and information about Somalia." class="meta-loc">Somalia</a>’s powerful clans and militias. “You had to pay off militias every time you moved a ship,” he said. “The clans were trouble, so I left.”</p>
                                 <p class="story-body-text story-content" data-para-count="253" data-total-count="4788">By 2000, he was sleeping in a mosque and begging on the streets of Mogadishu, the Somali capital. Eventually, a shop owner offered him odd jobs and work as a driver for him and his sister, who Mr. Salim said worked for Mohammed Dheere, a Somali warlord.</p>
                                 <div id="story-ad-2" class="story-ad ad ad-placeholder nocontent robots-nocontent hidden">
                                    <div class="accessibility-ad-header visually-hidden">
                                       <p>Advertisement</p>
                                    </div>
                                    <a class="visually-hidden skip-to-text-link" href="#story-continues-6">Continue reading the main story</a>
                                 </div>
                                 <p class="story-body-text story-content" data-para-count="298" data-total-count="5086" id="story-continues-6">In March 2003, Mr. Salim was driving his employer through the capital when they pulled over to help a stalled vehicle. Suddenly, three gunmen appeared, dragged Mr. Salim out and started beating him, he said. He got away, but the men found him at the hospital where Mr. Salim’s boss had taken him.</p>
                                 <p class="story-body-text story-content" data-para-count="188" data-total-count="5274">The men said they worked for Mr. Dheere, and they claimed he owed the warlord money, Mr. Salim recounted. “I said no, but they kept saying, ‘You stole money from Mohammed Dheere.’”</p>
                                 <p class="story-body-text story-content" data-para-count="82" data-total-count="5356">The men drove him to a small airport outside the city. The Americans were waiting.</p>
                                 <a class="visually-hidden skip-to-text-link" href="#story-continues-7">Continue reading the main story</a>
                              </div>
                              <!-- close story-body -->
                              <div class="supplemental " id="supplemental-3" data-pre-height="1468" data-max-items="2" data-remaining="523" data-minimum="400" data-last-item-height="523" data-flex-ad-adjacency="false" data-post-height="1468">
                                 <div class="supplemental-items" data-supplemental-order="2">
                                    <div id="medium-rectangle-ad-1" class="ad ad-placeholder medium-rectangle-ad marginalia-item nocontent robots-nocontent">
                                       <div id="google_ads_iframe_/29390238/NYT/world_6__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/29390238/NYT/world_6" title="3rd party ad content" name="google_ads_iframe_/29390238/NYT/world_6" width="300" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" src="javascript:&quot;<html><body style='background:transparent'></body></html>&quot;" style="border: 0px; vertical-align: bottom;"></iframe></div>
                                       <iframe id="google_ads_iframe_/29390238/NYT/world_6__hidden__" title="" name="google_ads_iframe_/29390238/NYT/world_6__hidden__" width="0" height="0" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" src="javascript:&quot;<html><body style='background:transparent'></body></html>&quot;" style="border: 0px; vertical-align: bottom; visibility: hidden; display: none;"></iframe>
                                    </div>
                                 </div>
                                 <div class="supplemental-items" data-supplemental-order="3">
                                    <div id="medium-rectangle-ad-2" class="ad ad-placeholder medium-rectangle-ad marginalia-item nocontent robots-nocontent">
                                       <div id="google_ads_iframe_/29390238/NYT/world_7__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/29390238/NYT/world_7" title="3rd party ad content" name="google_ads_iframe_/29390238/NYT/world_7" width="300" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" src="javascript:&quot;<html><body style='background:transparent'></body></html>&quot;" style="border: 0px; vertical-align: bottom;"></iframe></div>
                                       <iframe id="google_ads_iframe_/29390238/NYT/world_7__hidden__" title="" name="google_ads_iframe_/29390238/NYT/world_7__hidden__" width="0" height="0" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" src="javascript:&quot;<html><body style='background:transparent'></body></html>&quot;" style="border: 0px; vertical-align: bottom; visibility: hidden; display: none;"></iframe>
                                    </div>
                                 </div>
                              </div>
                              <!-- close supplemental -->
                           </div>
                           <!-- close story-body-supplemental -->
                           <div class="story-interrupter" id="story-continues-7">
                              <figure id="media-100000004680170" class="media photo embedded layout-jumbo-horizontal media-100000004680170 ratio-tall" data-media-action="modal" itemprop="associatedMedia" itemscope="" itemid="https://static01.nyt.com/images/2016/09/30/world/11suleiman2/11suleiman2-superJumbo-v2.jpg" itemtype="http://schema.org/ImageObject" aria-label="media" role="group">
                                 <span class="visually-hidden">Photo</span>
                                 <div class="image">
                                    <img src="https://static01.nyt.com/images/2016/09/30/world/11suleiman2/11suleiman2-superJumbo-v2.jpg" alt="" class="media-viewer-candidate" data-mediaviewer-src="https://static01.nyt.com/images/2016/09/30/world/11suleiman2/11suleiman2-superJumbo-v2.jpg" data-mediaviewer-caption="Mr. Salim shopping for pigeons in Johannesburg. He breeds and sells exotic varieties back home in Tanzania." data-mediaviewer-credit="Bryan Denton for The New York Times" itemprop="url" itemid="https://static01.nyt.com/images/2016/09/30/world/11suleiman2/11suleiman2-superJumbo-v2.jpg">
                                    <div class="media-action-overlay">
                                       <i class="icon sprite-icon"></i>
                                    </div>
                                    <meta itemprop="height" content="1365">
                                    <meta itemprop="width" content="2048">
                                 </div>
                                 <figcaption class="caption" itemprop="caption description">
                                    <span class="caption-text">Mr. Salim shopping for pigeons in Johannesburg. He breeds and sells exotic varieties back home in Tanzania.</span>
                                    <span class="credit" itemprop="copyrightHolder">
                                    <span class="visually-hidden">Credit</span>
                                    Bryan Denton for The New York Times        </span>
                                 </figcaption>
                              </figure>
                           </div>
                           <div class="story-body-supplemental">
                              <div class="story-body story-body-4">
                                 <script>
                                    if (window.magnum && window.magnum.responsiveImages && window.magnum.responsiveImages.setCoverImage) {
                                    	window.magnum.responsiveImages.setCoverImage('100000004679851','vertical-full-bleed',900,600,0,0,0,0,'#FFFFFF');
                                    }
                                 </script>
                                 <h4 class="story-subheading story-content" data-para-count="17" data-total-count="5373">Hanging in Chains</h4>
                                 <p class="story-body-text story-content" data-para-count="206" data-total-count="5579" id="story-continues-8">They asked him over and over about his appearance, Mr. Salim said. “They said: ‘You are not Suleiman. You changed your face.’ I say: ‘Go to Tanzania. Go see my mother and take a picture of me.’”</p>
                                 <p class="story-body-text story-content" data-para-count="239" data-total-count="5818">He was turned over to the Kenyan authorities, who flew him to Nairobi. But after questioning him, the Kenyans sent him back to Somalia and the Americans. (Kenyan officials did not respond to a request for comment about Mr. Salim’s case.)</p>
                                 <p class="story-body-text story-content" data-para-count="404" data-total-count="6222">This time the Americans kept him. News accounts, <a href="http://www.nytimes.com/2003/06/14/world/threats-and-responses-terrorism-5-year-hunt-fails-to-net-qaeda-suspect-in-africa.html">including an article </a><a href="http://www.nytimes.com/2003/06/14/world/threats-and-responses-terrorism-5-year-hunt-fails-to-net-qaeda-suspect-in-africa.html"> in The New York Times</a>, soon appeared quoting United States and Kenyan officials describing the capture of a Qaeda operative from Yemen identified as Suleiman Abdalla Salim Hemed, who was wanted in connection with the 1998 embassy bombings. Mr. Salim said he never used the name Hemed and had nothing to do with Al Qaeda or terrorism.</p>
                                 <figure id="detainees-series-promo" class="interactive interactive-embedded  limit-xsmall layout-small">
                                    <figcaption class="interactive-caption">
                                       <h2 class="interactive-headline">
                                          Lasting Scars
                                       </h2>
                                       <p class="interactive-leadin">
                                          Articles in this series examine the American legacy of brutal interrogations.
                                       </p>
                                    </figcaption>
                                    <div class="interactive-graphic">
                                       <!--
                                          ======================================================

                                          THIS IS A GENERATED TEMPLATE FILE. DO NOT EDIT.

                                          ======================================================

                                          -->
                                       <style>
                                          .page-interactive-embedded {
                                          margin-left: 8px;
                                          margin-right: 8px;
                                          }
                                          #detainee-series-promo .interactive-headline,
                                          .page-interactive-embedded .story.theme-main .story-meta .story-heading {
                                          text-transform: uppercase;
                                          font-weight:600;
                                          font-size: 16px;
                                          line-height: 1;
                                          letter-spacing: 1px;
                                          margin-top: 10px;
                                          margin-bottom: 5px;
                                          }
                                          #detainee-series-promo .interactive-leadin,
                                          .page-interactive-embedded .story.theme-main .story-meta .interactive-leadin {
                                          font-family: 'nyt-cheltenham', Georgia, serif;
                                          font-style: italic;
                                          font-size: 16px;
                                          line-height: 1.4;
                                          width: 90%;
                                          text-indent: 2px;
                                          color: #999;
                                          margin-bottom: 20px;
                                          }
                                          #detainee-series-promo-list li {
                                          clear: both;
                                          overflow: auto;
                                          margin-top: 10px;
                                          }
                                          #detainee-series-promo-list .link,
                                          #detainee-series-promo-list .link:hover {
                                          color: #777;
                                          }
                                          #detainee-series-promo-list .thumbnail {
                                          width: 75px;
                                          float: left;
                                          margin-right: 15px;
                                          }
                                          #detainee-series-promo-list .kicker {
                                          margin-bottom: 2px;
                                          font-size: 11px;
                                          line-height: 1;
                                          font-weight: 500;
                                          color: #999;
                                          }
                                          #detainee-series-promo-list .headline {
                                          font-size: 17px;
                                          font-weight: 300;
                                          line-height: 1.3;
                                          color: #326891;
                                          }
                                       </style>
                                       <ul id="detainee-series-promo-list">
                                          <li>
                                             <a class="link" href="http://www.nytimes.com/2016/10/09/world/cia-torture-guantanamo-bay.html">
                                                <img class="thumbnail" src="https://static01.nyt.com/images/2016/10/04/us/04gitmo-slide-X25O/04gitmo-slide-X25O-thumbLarge-v4.jpg">
                                                <h5 class="kicker">Part 1</h5>
                                                <h3 class="headline">How U.S. Torture Left a Legacy of Damaged Minds</h3>
                                             </a>
                                          </li>
                                          <li>
                                             <a class="link" href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html">
                                                <img class="thumbnail" src="https://static01.nyt.com/images/2016/09/30/world/11suleiman/11suleiman-thumbLarge-v2.jpg">
                                                <h5 class="kicker">Part 2 </h5>
                                                <h3 class="headline">After Torture, Ex-Detainee Is Still Captive of ‘The Darkness’</h3>
                                             </a>
                                          </li>
                                       </ul>
                                       <script type="text/template" id="detainee-series-promo-tpl">
                                          <li>
                                            <a class="link" href="{{ url }}">
                                              <img class="thumbnail" src="{{ thumbnail }}"/>
                                              <h5 class="kicker">{{ kicker }}</h5>
                                              <h3 class="headline">{{ headline }}</h4>
                                            </a>
                                          </li>
                                       </script>
                                       <script type="text/javascript">(function(){
                                          var SeriesNav = {
                                            init: function(url, itemTemplateID, containerID) {
                                              this.tpl = document.getElementById(itemTemplateID || 'detainee-series-promo-tpl');
                                              this.container = document.getElementById(containerID || 'detainee-series-promo-list');
                                              this.request(url, this.render.bind(this));
                                            },
                                            request : function(url, onComplete, data, method){
                                              var r = new XMLHttpRequest();
                                              r.onreadystatechange = function(e){
                                                if(r.readyState === 4){
                                                  if(r.status === 200){
                                                    onComplete(e);
                                                  }else{
                                                    setTimeout(this.request, 1000, url, onComplete, data, method);
                                                  }
                                                }
                                              }.bind(this);
                                              r.open(method || 'GET', url);
                                              r.send(data);
                                            },
                                            render : function(e){
                                              var data = JSON.parse(e.currentTarget.responseText);
                                              var tplHTML = this.tpl.innerHTML;
                                              var html = "";
                                              if (data.length < 2) return;
                                              for(var i=0; i< data.length; i++ ){
                                                var o = data[i];
                                                html += tplHTML.replace(/{{\s*(\w+)\s*}}/ig, function(a, b){
                                                  return o[b];
                                                });
                                              }
                                              this.container.innerHTML = html;
                                            }
                                          };
                                          SeriesNav.init('https://static01.nyt.com/packages/js/newsgraphics/2016/10/07-detainees-series-nav.js');
                                          }());
                                       </script>
                                    </div>
                                    <div class="footer">
                                    </div>
                                 </figure>
                                 <p class="story-body-text story-content" data-para-count="182" data-total-count="6404">The news reports also said Mr. Dheere, who died in 2012, had agreed to hunt down suspects, including the man identified in the press as Mr. Hemed, for the C.I.A. in return for money.</p>
                                 <p class="story-body-text story-content" data-para-count="351" data-total-count="6755">From Somalia, the C.I.A. flew Mr. Salim to a United States base in Djibouti. He was blindfolded and stripped, and an object was inserted in his rectum while the Americans photographed him, according to court documents. Just before he left Djibouti, Mr. Salim recalled, one of the captors told him that he was going to the “prison of the pharaohs.”</p>
                                 <p class="story-body-text story-content" data-para-count="176" data-total-count="6931">He was flown to Afghanistan, not Egypt as he guessed from what his captor said, and taken to the pitch-black, stinking and cavernous building that Mr. Salim calls The Darkness.</p>
                                 <div id="story-ad-3" class="story-ad ad ad-placeholder nocontent robots-nocontent hidden">
                                    <div class="accessibility-ad-header visually-hidden">
                                       <p>Advertisement</p>
                                    </div>
                                    <a class="visually-hidden skip-to-text-link" href="#story-continues-9">Continue reading the main story</a>
                                 </div>
                                 <p class="story-body-text story-content" data-para-count="249" data-total-count="7180" id="story-continues-9">Music blasted nearly 24 hours a day while he was chained in solitary confinement so dark that he could not see the shackles on his arms or the walls of his cell. He said he could no longer listen to any of the songs that were on the prison playlist.</p>
                                 <p class="story-body-text story-content" data-para-count="336" data-total-count="7516">The Americans routinely hauled him from his cell to a room where, he said, they hanged him from chains, once for two days. They wrapped a collar around his neck and pulled it to slam him against a wall, he said. And they shaved his head, laid him on a plastic tarp and poured gallons of ice water on him, inducing a feeling of drowning.</p>
                                 <p class="story-body-text story-content" data-para-count="364" data-total-count="7880">“A guy says to me, ‘Here the rain doesn’t finish,’” Mr. Salim recalled. Several men wrapped him in the tarp and kicked him “many times, many times,” he added. At one point, a cast that a prison doctor had put on his hand — a finger had been broken by the Somali gunmen — became waterlogged. The doctor cut it off, and the water dousing continued.</p>
                                 <p class="story-body-text story-content" data-para-count="273" data-total-count="8153">Mr. Salim described other grisly practices by his jailers: placing him in a coffin-like box, his arms stretched and chained, on top of cleaning chemicals; strapping him to a gurney and injecting him with drugs that made him woozy; bringing dogs into a room to threaten him.</p>
                                 <p class="story-body-text story-content" data-para-count="446" data-total-count="8599">The 2014 Senate Intelligence Committee report noted that Mr. Salim was one of at least six detainees in 2003 who were “stripped and shackled nude, placed in the standing position for sleep deprivation, or subjected to other C.I.A. enhanced interrogation techniques.” The report said officials at C.I.A. headquarters had approved the use of some of the harsh tactics against Mr. Salim, but rejected interrogators’ requests for water dousing.</p>
                                 <p class="story-body-text story-content" data-para-count="426" data-total-count="9025">While 39 men endured the enhanced techniques, they were among at least 119 captives who went through the C.I.A.’s network of secret prisons. Many were later released without charges. A quarter were men who were picked up by mistake or on evidence that proved unreliable, a Senate inquiry later found. Others were low-level militants; some were suspected terrorist leaders, including accused plotters of the Sept. 11 attacks.</p>
                                 <figure id="11suleiman-2" class="interactive interactive-embedded  limit-small layout-small d-pullquote-wrapper">
                                    <figcaption class="interactive-caption">
                                    </figcaption>
                                    <div class="interactive-graphic">
                                       <script>function getFlexData() { return {"data":{"quote":"“Many times, they would say we know you are innocent.”","attribution":"Mr. Salim"}}; }var NYTD=NYTD || {}; NYTD.FlexTypes = NYTD.FlexTypes || []; NYTD.FlexTypes.push({"target":"FT100000004680456","type":"Pull Quote","data":{"quote":"“Many times, they would say we know you are innocent.”","attribution":"Mr. Salim"}});</script>
                                       <link href="http://graphics8.nytimes.com/newsgraphics/2015/02/10/mag-pullquote-redesign/assets/style.css" type="text/css" rel="stylesheet">
                                       <script>
                                          var NYTG_ASSETS = "http://static01.nyt.com/newsgraphics/2015/02/10/mag-pullquote-redesign/b585ac490ed3103c57423bc4f581ffac30ebc5df/",
                                              NYTG_BIG_ASSETS = "http://static01.nyt.com/newsgraphics/2015/02/10/mag-pullquote-redesign/assets/",
                                              _gaq = _gaq || [];
                                          require(['foundation/main'], function() {
                                            require(["http://static01.nyt.com/newsgraphics/2015/02/10/mag-pullquote-redesign/assets/build.js"]); // generated from src/script.js
                                          });
                                       </script>
                                       <div id="FT100000004680456">
                                          <section class="d-pullquote">
                                             <p style="white-space: normal; float: none; display: block; position: static;">“Many times, they<br data-owner="balance-text">would say we know<br data-owner="balance-text">you are innocent.”</p>
                                             <cite>	Mr. Salim</cite>
                                          </section>
                                       </div>
                                    </div>
                                    <div class="footer">
                                    </div>
                                 </figure>
                                 <p class="story-body-text story-content" data-para-count="236" data-total-count="9261">Mr. Salim said the interrogators had repeatedly questioned him about his ties in Kenya and Somalia. Among other things, he said, they claimed that he had falsified cargo documents on his boat, apparently to hide supplies for terrorists.</p>
                                 <p class="story-body-text story-content" data-para-count="186" data-total-count="9447">“They always asked the same questions. I say I don’t know. They say, ‘You know.’ Same question, same answer, and two guys would beat you, and same question, and they beat you.”</p>
                                 <div id="story-ad-4" class="story-ad ad ad-placeholder nocontent robots-nocontent hidden">
                                    <div class="accessibility-ad-header visually-hidden">
                                       <p>Advertisement</p>
                                    </div>
                                    <a class="visually-hidden skip-to-text-link" href="#story-continues-10">Continue reading the main story</a>
                                 </div>
                                 <p class="story-body-text story-content" data-para-count="374" data-total-count="9821" id="story-continues-10">Desperate, Mr. Salim decided that suicide was his only escape. He hoarded the ibuprofen pills he sometimes was given, hiding them in the waistband of his pants. When he thought he had enough — 26 tablets — he tried to take them all at once. A guard, probably alerted by images from a video camera in the cell, rushed in and stopped Mr. Salim just as he began swallowing.</p>
                                 <p class="story-body-text story-content" data-para-count="206" data-total-count="10027">As he recounted the episode to a reporter, Mr. Salim began to cry uncontrollably, placed his arm across his face and rushed from the hotel room. Two days passed before he agreed to finish telling his story.</p>
                                 <p class="story-body-text story-content" data-para-count="326" data-total-count="10353">Five weeks after arriving in Afghanistan, Mr. Salim said, he was moved to the “Salt Pit,” a secret underground C.I.A. prison. Mr. Salim, who was blindfolded while being transferred, said that he did not travel far. The available evidence suggests that The Darkness was most likely a different section of the same facility.</p>
                                 <p class="story-body-text story-content" data-para-count="141" data-total-count="10494">Conditions improved slightly, though Mr. Salim was still interrogated regularly. “Every day questions: ‘You know him? You know him?’”</p>
                                 <p class="story-body-text story-content" data-para-count="238" data-total-count="10732">After 14 months, the C.I.A. in July 2004 handed Mr. Salim over to the United States military, which moved him to Bagram prison, outside Kabul. The young guards there nicknamed him Snoop because of his resemblance to the rapper Snoop Dogg.</p>
                                 <p class="story-body-text story-content" data-para-count="278" data-total-count="11010">The military held him for four more years. “Many times, they would say, ‘We know you are innocent,’” Mr. Salim said, referring to American personnel at the prison. “And many times they said that ‘you can go home, but it will take time.’ But they didn’t do it.”</p>
                                 <p class="story-body-text story-content" data-para-count="262" data-total-count="11272">In Bagram, he was kept in a large cage with as many as 22 other prisoners. Pigeons flew in and out of the large, drafty prison. “I remember one flew in, and was just outside our cage,” he said. “I was thinking, the pigeon was free and I was in the cage.”</p>
                                 <a class="visually-hidden skip-to-text-link" href="#story-continues-11">Continue reading the main story</a>
                              </div>
                              <!-- close story-body -->
                              <div class="supplemental " id="supplemental-4" data-pre-height="2929" data-max-items="3" data-remaining="94" data-minimum="400" data-last-item-height="945" data-flex-ad-adjacency="false" data-post-height="2929">
                                 <div class="supplemental-items" data-supplemental-order="4">
                                    <div id="medium-rectangle-ad-3" class="ad ad-placeholder medium-rectangle-ad marginalia-item nocontent robots-nocontent">
                                       <div id="google_ads_iframe_/29390238/NYT/world_8__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/29390238/NYT/world_8" title="3rd party ad content" name="google_ads_iframe_/29390238/NYT/world_8" width="300" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" src="javascript:&quot;<html><body style='background:transparent'></body></html>&quot;" style="border: 0px; vertical-align: bottom;"></iframe></div>
                                       <iframe id="google_ads_iframe_/29390238/NYT/world_8__hidden__" title="" name="google_ads_iframe_/29390238/NYT/world_8__hidden__" width="0" height="0" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" src="javascript:&quot;<html><body style='background:transparent'></body></html>&quot;" style="border: 0px; vertical-align: bottom; visibility: hidden; display: none;"></iframe>
                                    </div>
                                 </div>
                                 <div class="supplemental-items" data-supplemental-order="5">
                                    <div id="medium-rectangle-ad-4" class="ad ad-placeholder medium-rectangle-ad marginalia-item nocontent robots-nocontent">
                                       <div id="google_ads_iframe_/29390238/NYT/world_9__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/29390238/NYT/world_9" title="3rd party ad content" name="google_ads_iframe_/29390238/NYT/world_9" width="300" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" src="javascript:&quot;<html><body style='background:transparent'></body></html>&quot;" style="border: 0px; vertical-align: bottom;"></iframe></div>
                                       <iframe id="google_ads_iframe_/29390238/NYT/world_9__hidden__" title="" name="google_ads_iframe_/29390238/NYT/world_9__hidden__" width="0" height="0" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" src="javascript:&quot;<html><body style='background:transparent'></body></html>&quot;" style="border: 0px; vertical-align: bottom; visibility: hidden; display: none;"></iframe>
                                    </div>
                                 </div>
                                 <div class="supplemental-items" data-supplemental-order="6">
                                    <div id="medium-rectangle-ad-5" class="ad ad-placeholder medium-rectangle-ad marginalia-item nocontent robots-nocontent">
                                       <div id="google_ads_iframe_/29390238/NYT/world_10__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/29390238/NYT/world_10" title="3rd party ad content" name="google_ads_iframe_/29390238/NYT/world_10" width="300" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" src="javascript:&quot;<html><body style='background:transparent'></body></html>&quot;" style="border: 0px; vertical-align: bottom;"></iframe></div>
                                       <iframe id="google_ads_iframe_/29390238/NYT/world_10__hidden__" title="" name="google_ads_iframe_/29390238/NYT/world_10__hidden__" width="0" height="0" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" src="javascript:&quot;<html><body style='background:transparent'></body></html>&quot;" style="border: 0px; vertical-align: bottom; visibility: hidden; display: none;"></iframe>
                                    </div>
                                 </div>
                              </div>
                              <!-- close supplemental -->
                           </div>
                           <!-- close story-body-supplemental -->
                           <div class="story-interrupter" id="story-continues-11">
                              <figure id="media-100000004680172" class="media photo embedded layout-full-bleed-horizontal media-100000004680172 ratio-tall" data-media-action="modal" itemprop="associatedMedia" itemscope="" itemid="https://static01.nyt.com/images/2016/09/30/world/11suleiman3/11suleiman3-superJumbo.jpg" itemtype="http://schema.org/ImageObject" aria-label="media" role="group">
                                 <span class="visually-hidden">Photo</span>
                                 <div class="image" style="width: 1349px; margin-left: -112px;">
                                    <img src="https://static01.nyt.com/images/2016/09/30/world/11suleiman3/11suleiman3-superJumbo.jpg" alt="" class="media-viewer-candidate" data-mediaviewer-src="https://static01.nyt.com/images/2016/09/30/world/11suleiman3/11suleiman3-superJumbo.jpg" data-mediaviewer-caption="Mr. Salim looking over pigeons in Johannesburg. He said the birds helped quiet his mind." data-mediaviewer-credit="Bryan Denton for The New York Times" itemprop="url" itemid="https://static01.nyt.com/images/2016/09/30/world/11suleiman3/11suleiman3-superJumbo.jpg">
                                    <div class="media-action-overlay">
                                       <i class="icon sprite-icon"></i>
                                    </div>
                                    <meta itemprop="height" content="1365">
                                    <meta itemprop="width" content="2048">
                                 </div>
                                 <figcaption class="caption" itemprop="caption description">
                                    <span class="caption-text">Mr. Salim looking over pigeons in Johannesburg. He said the birds helped quiet his mind.</span>
                                    <span class="credit" itemprop="copyrightHolder">
                                    <span class="visually-hidden">Credit</span>
                                    Bryan Denton for The New York Times        </span>
                                 </figcaption>
                              </figure>
                           </div>
                           <div class="story-body-supplemental">
                              <div class="story-body story-body-5">
                                 <script>
                                    if (window.magnum && window.magnum.responsiveImages && window.magnum.responsiveImages.setCoverImage) {
                                    	window.magnum.responsiveImages.setCoverImage('100000004679851','vertical-full-bleed',900,600,0,0,0,0,'#FFFFFF');
                                    }
                                 </script>
                                 <h4 class="story-subheading story-content" data-para-count="21" data-total-count="11293">‘A Ghost Walking’</h4>
                                 <p class="story-body-text story-content" data-para-count="256" data-total-count="11549" id="story-continues-12">In August 2008, Mr. Salim was released. The United States military gave him a document stating that there were no charges against him and that he had been “determined to pose no threat to the United States Armed Forces or its interests in Afghanistan.”</p>
                                 <div id="story-ad-5" class="story-ad ad ad-placeholder nocontent robots-nocontent hidden">
                                    <div class="accessibility-ad-header visually-hidden">
                                       <p>Advertisement</p>
                                    </div>
                                    <a class="visually-hidden skip-to-text-link" href="#story-continues-13">Continue reading the main story</a>
                                 </div>
                                 <p class="story-body-text story-content" data-para-count="356" data-total-count="11905" id="story-continues-13">The military freed him with no possessions save the long red trousers and top that were his prison uniform, and no place to go. Mr. Salim had to borrow ill-fitting clothes from an International Red Cross representative in Afghanistan, who arranged for him to fly home to Zanzibar. Mr. Salim has kept the too-small clothes from the Red Cross man ever since.</p>
                                 <p class="story-body-text story-content" data-para-count="368" data-total-count="12273">At the airport in Zanzibar, he was met by a half-dozen members of his family and Tanzanian security officials. “They asked me the same questions the Americans had always asked me,” he said. But after two days, the Tanzanian government left him alone, with no restrictions on his activities. Tanzanian officials did not respond to a request for comment on his case.</p>
                                 <p class="story-body-text story-content" data-para-count="313" data-total-count="12586">In late 2008 or early 2009, two F.B.I. agents came to Tanzania to check up on him, Mr. Salim said. One agent said he had a gift: a T-shirt that said “Hakuna Matata” — no worries — from “The Lion King.” Mr. Salim angrily tossed it back. An F.B.I. spokesman said he had no information about the episode.</p>
                                 <p class="story-body-text story-content" data-para-count="192" data-total-count="12778">Mr. Salim returned to the world a stranger. He had gotten married just two weeks before he was taken captive in Mogadishu, but his wife disappeared while he was gone and he could not find her.</p>
                                 <p class="story-body-text story-content" data-para-count="232" data-total-count="13010">Back in Stone Town, Mr. Salim found simple tasks difficult. He was depressed and experienced <a href="http://health.nytimes.com/health/guides/symptoms/nightmares/overview.html?inline=nyt-classifier" title="In-depth reference and news articles about Nightmares." class="meta-classifier">nightmares</a> and flashbacks about his time in prison, he said. They felt so real that he could not understand what was happening to his mind.</p>
                                 <p class="story-body-text story-content" data-para-count="239" data-total-count="13249">His attempts to work proved frustrating. His sister offered to pay him to drive his niece to school, but he got lost on the first day. He wanted to go back to sea, but local fishermen thought they might get in trouble associating with him.</p>
                                 <figure id="11suleiman-3" class="interactive interactive-embedded  limit-small layout-small d-pullquote-wrapper">
                                    <figcaption class="interactive-caption">
                                    </figcaption>
                                    <div class="interactive-graphic">
                                       <script>function getFlexData() { return {"data":{"quote":"“He is plagued by profound distress, inability to eat and inability to sleep.”","attribution":"Dr. Sondra Crosby, expert on torture"}}; }var NYTD=NYTD || {}; NYTD.FlexTypes = NYTD.FlexTypes || []; NYTD.FlexTypes.push({"target":"FT100000004681020","type":"Pull Quote","data":{"quote":"“He is plagued by profound distress, inability to eat and inability to sleep.”","attribution":"Dr. Sondra Crosby, expert on torture"}});</script>
                                       <link href="http://graphics8.nytimes.com/newsgraphics/2015/02/10/mag-pullquote-redesign/assets/style.css" type="text/css" rel="stylesheet">
                                       <script>
                                          var NYTG_ASSETS = "http://static01.nyt.com/newsgraphics/2015/02/10/mag-pullquote-redesign/b585ac490ed3103c57423bc4f581ffac30ebc5df/",
                                              NYTG_BIG_ASSETS = "http://static01.nyt.com/newsgraphics/2015/02/10/mag-pullquote-redesign/assets/",
                                              _gaq = _gaq || [];
                                          require(['foundation/main'], function() {
                                            require(["http://static01.nyt.com/newsgraphics/2015/02/10/mag-pullquote-redesign/assets/build.js"]); // generated from src/script.js
                                          });
                                       </script>
                                       <div id="FT100000004681020">
                                          <section class="d-pullquote">
                                             <p style="white-space: normal; float: none; display: block; position: static;">“He is plagued by<br data-owner="balance-text">profound distress, inability<br data-owner="balance-text">to eat and inability to sleep.”</p>
                                             <cite>	Dr. Sondra Crosby, expert on torture</cite>
                                          </section>
                                       </div>
                                    </div>
                                    <div class="footer">
                                    </div>
                                 </figure>
                                 <p class="story-body-text story-content" data-para-count="260" data-total-count="13509">In 2009 or 2010, Mr. Salim went to Dar es Salaam seeking a license to become a merchant seaman, but he did not pass the test. He briefly worked for a cargo shipping company in Japan, but he said that loading containers hurt his back, already injured in prison.</p>
                                 <p class="story-body-text story-content" data-para-count="305" data-total-count="13814">He listed other chronic physical problems from his time in custody: headaches, neck and <a href="http://health.nytimes.com/health/guides/symptoms/shoulder-pain/overview.html?inline=nyt-classifier" title="In-depth reference and news articles about Shoulder pain." class="meta-classifier">shoulder pain</a>, and severe gastrointestinal problems, common among detainees. Without a job, he lived with his mother and his sister at different times, humiliated that he was having so much trouble supporting himself.</p>
                                 <div id="story-ad-6" class="story-ad ad ad-placeholder nocontent robots-nocontent hidden">
                                    <div class="accessibility-ad-header visually-hidden">
                                       <p>Advertisement</p>
                                    </div>
                                    <a class="visually-hidden skip-to-text-link" href="#story-continues-14">Continue reading the main story</a>
                                 </div>
                                 <p class="story-body-text story-content" data-para-count="216" data-total-count="14030" id="story-continues-14">In 2010, Dr. Sondra Crosby of the Boston University School of Medicine, a physician, a Navy reservist and an expert on torture, was asked by Physicians for Human Rights, a New York-based group, to evaluate Mr. Salim.</p>
                                 <p class="story-body-text story-content" data-para-count="249" data-total-count="14279">She was shocked by what she found. Mr. Salim, who is 6-foot-2, was emaciated “like a skeleton,” Dr. Crosby said in an interview. In her assessment, she wrote that “he is plagued by profound distress, inability to eat and <a href="http://health.nytimes.com/health/guides/symptoms/sleeping-difficulty/overview.html?inline=nyt-classifier" title="In-depth reference and news articles about Sleeping difficulty." class="meta-classifier">inability to sleep</a>.”</p>
                                 <p class="story-body-text story-content" data-para-count="333" data-total-count="14612">“He describes himself as a ghost walking around the town,” she added. She noted other symptoms: flashbacks, short- and long-term <a href="http://health.nytimes.com/health/guides/symptoms/memory-loss/overview.html?inline=nyt-classifier" title="In-depth reference and news articles about Amnesia." class="meta-classifier">memory loss</a>, distress at seeing anyone in a military uniform, hopelessness about the future and a strong avoidance of noise. “He reports that his head feels empty — like an empty box,” she said.</p>
                                 <p class="story-body-text story-content" data-para-count="273" data-total-count="14885">Dr. Crosby concluded that Mr. Salim showed many symptoms of <a href="http://health.nytimes.com/health/guides/disease/post-traumatic-stress-disorder/overview.html?inline=nyt-classifier" title="In-depth reference and news articles about Post-traumatic stress disorder." class="meta-classifier">post-traumatic stress disorder</a> and <a href="http://health.nytimes.com/health/guides/disease/major-depression/overview.html?inline=nyt-classifier" title="In-depth reference and news articles about Major depression." class="meta-classifier">major depression</a>. He appears, she wrote, “to have suffered severe and lasting physical and psychological injuries as a result of his arrest and incarceration by U.S. forces.”</p>
                                 <p class="story-body-text story-content" data-para-count="208" data-total-count="15093">He is now a plaintiff in a lawsuit against two C.I.A. contractors who helped devise and run the brutal interrogation program of which he was a part. “I want the people who did this to be judged,” he said.</p>
                                 <p class="story-body-text story-content" data-para-count="219" data-total-count="15312">Mr. Salim remarried and has a 5-year-old daughter, but he finds it impossible to talk to his wife about what happened to him, or how it still haunts him. He says others around him do not understand what he went through.</p>
                                 <p class="story-body-text story-content" data-para-count="244" data-total-count="15556">He lives in a three-room house owned by a relative in a poor neighborhood outside Stone Town. Until recently, he made some money by taking tourists fishing on a boat owned by his brother-in-law. But it was swamped in a storm several months ago.</p>
                                 <figure id="media-100000004680481" class="media photo embedded layout-large-vertical media-100000004680481" data-media-action="modal" itemprop="associatedMedia" itemscope="" itemid="https://static01.nyt.com/images/2016/09/30/world/suleiman-coop1/suleiman-coop1-blog427.jpg" itemtype="http://schema.org/ImageObject" aria-label="media" role="group">
                                    <span class="visually-hidden">Photo</span>
                                    <div class="image">
                                       <img src="https://static01.nyt.com/images/2016/09/30/world/suleiman-coop1/suleiman-coop1-blog427.jpg" alt="" class="media-viewer-candidate" data-mediaviewer-src="https://static01.nyt.com/images/2016/09/30/world/suleiman-coop1/suleiman-coop1-superJumbo.jpg" data-mediaviewer-caption="Mr. Salim’s pigeon coop in Zanzibar. It is larger than most of the cells in which the Americans kept him." data-mediaviewer-credit="Suleiman Abdullah Salim" itemprop="url" itemid="https://static01.nyt.com/images/2016/09/30/world/suleiman-coop1/suleiman-coop1-blog427.jpg">
                                       <div class="media-action-overlay">
                                          <i class="icon sprite-icon"></i>
                                       </div>
                                       <meta itemprop="height" content="758">
                                       <meta itemprop="width" content="427">
                                    </div>
                                    <figcaption class="caption" itemprop="caption description">
                                       <span class="caption-text">Mr. Salim’s pigeon coop in Zanzibar. It is larger than most of the cells in which the Americans kept him.</span>
                                       <span class="credit" itemprop="copyrightHolder">
                                       <span class="visually-hidden">Credit</span>
                                       Suleiman Abdullah Salim        </span>
                                    </figcaption>
                                 </figure>
                                 <p class="story-body-text story-content" data-para-count="229" data-total-count="15785">His pigeons now help him get by. He has shopped at bird markets in Dubai and Johannesburg for exotic varieties — Jacobin pigeons, Dutch pigeons, Chinese owl fancy pigeons, Moorhead pigeons. He breeds and sells them in Zanzibar.</p>
                                 <button class="button comments-button  theme-speech-bubble-large" data-skip-to-para-id="">
                                 <i class="icon">
                                 <span class="button-text">
                                 <span class="count">206</span>
                                 <span class="units">Comments</span>
                                 </span>
                                 </i></button>
                                 <p class="story-body-text story-content" data-para-count="194" data-total-count="15979">In the yard outside his house, he built a block and wire pigeon cage, 26 feet by 10 feet, larger than most of the cells in which the Americans kept him. When he needs to be alone, he goes there.</p>
                                 <div id="story-ad-7" class="story-ad ad ad-placeholder nocontent robots-nocontent hidden">
                                    <div class="accessibility-ad-header visually-hidden">
                                       <p>Advertisement</p>
                                    </div>
                                    <a class="visually-hidden skip-to-text-link" href="#story-continues-15">Continue reading the main story</a>
                                 </div>
                                 <p class="story-body-text story-content" data-para-count="116" data-total-count="16095" id="story-continues-15" data-node-uid="1">“I like to sit with the pigeons. I like to get away from people,” Mr. Salim said. “I sit there a long time.”</p>
                                 <footer class="story-footer story-content">
                                    <div class="story-meta">
                                       <p class="story-print-citation">A version of this article appears in print on October 12, 2016, on page A1 of the <span itemprop="printEdition">New York edition</span> with the headline: An Ex-Detainee, but Still a Captive of ‘The Darkness’. <span class="story-footer-links">  <span><a href="http://www.nytreprints.com/" target="_blank">Order Reprints</a><span class="pipe">|</span></span>  <span><a href="http://www.nytimes.com/pages/todayspaper/index.html" target="_blank">Today's Paper</a><span class="pipe">|</span></span><span><a href="http://www.nytimes.com/subscriptions/Multiproduct/lp839RF.html?campaignId=48JQY" target="_blank">Subscribe</a></span>
                                          </span>
                                       </p>
                                    </div>
                                    <!-- close story-meta -->
                                 </footer>
                                 <a class="visually-hidden skip-to-text-link" href="#whats-next">Continue reading the main story</a>
                              </div>
                              <!-- close story-body -->
                              <div class="supplemental " id="supplemental-5" data-pre-height="3232" data-max-items="3" data-remaining="397" data-minimum="400" data-last-item-height="945" data-flex-ad-adjacency="false" data-post-height="3232">
                                 <div class="supplemental-items" data-supplemental-order="7">
                                    <div id="medium-rectangle-ad-6" class="ad ad-placeholder medium-rectangle-ad marginalia-item nocontent robots-nocontent">
                                       <div id="google_ads_iframe_/29390238/NYT/world_11__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/29390238/NYT/world_11" title="3rd party ad content" name="google_ads_iframe_/29390238/NYT/world_11" width="300" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" src="javascript:&quot;<html><body style='background:transparent'></body></html>&quot;" style="border: 0px; vertical-align: bottom;"></iframe></div>
                                       <iframe id="google_ads_iframe_/29390238/NYT/world_11__hidden__" title="" name="google_ads_iframe_/29390238/NYT/world_11__hidden__" width="0" height="0" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" src="javascript:&quot;<html><body style='background:transparent'></body></html>&quot;" style="border: 0px; vertical-align: bottom; visibility: hidden; display: none;"></iframe>
                                    </div>
                                 </div>
                                 <div class="supplemental-items" data-supplemental-order="8">
                                    <div id="medium-rectangle-ad-7" class="ad ad-placeholder medium-rectangle-ad marginalia-item nocontent robots-nocontent">
                                       <div id="google_ads_iframe_/29390238/NYT/world_12__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/29390238/NYT/world_12" title="3rd party ad content" name="google_ads_iframe_/29390238/NYT/world_12" width="300" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" src="javascript:&quot;<html><body style='background:transparent'></body></html>&quot;" style="border: 0px; vertical-align: bottom;"></iframe></div>
                                       <iframe id="google_ads_iframe_/29390238/NYT/world_12__hidden__" title="" name="google_ads_iframe_/29390238/NYT/world_12__hidden__" width="0" height="0" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" src="javascript:&quot;<html><body style='background:transparent'></body></html>&quot;" style="border: 0px; vertical-align: bottom; visibility: hidden; display: none;"></iframe>
                                    </div>
                                 </div>
                                 <div class="supplemental-items" data-supplemental-order="9">
                                    <div id="marketing-ad" class="ad marketing-ad marginalia-anchor-ad marginalia-item nocontent robots-nocontent">
                                       <div id="google_ads_iframe_/29390238/NYT/world_13__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/29390238/NYT/world_13" title="3rd party ad content" name="google_ads_iframe_/29390238/NYT/world_13" width="301" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" src="javascript:&quot;<html><body style='background:transparent'></body></html>&quot;" style="border: 0px; vertical-align: bottom;"></iframe></div>
                                       <iframe id="google_ads_iframe_/29390238/NYT/world_13__hidden__" title="" name="google_ads_iframe_/29390238/NYT/world_13__hidden__" width="0" height="0" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" src="javascript:&quot;<html><body style='background:transparent'></body></html>&quot;" style="border: 0px; vertical-align: bottom; visibility: hidden; display: none;"></iframe>
                                    </div>
                                    <div id="medium-rectangle-ad-8" class="ad ad-placeholder medium-rectangle-ad marginalia-item nocontent robots-nocontent">
                                       <div id="google_ads_iframe_/29390238/NYT/world_14__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/29390238/NYT/world_14" title="3rd party ad content" name="google_ads_iframe_/29390238/NYT/world_14" width="300" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" src="javascript:&quot;<html><body style='background:transparent'></body></html>&quot;" style="border: 0px; vertical-align: bottom;"></iframe></div>
                                       <iframe id="google_ads_iframe_/29390238/NYT/world_14__hidden__" title="" name="google_ads_iframe_/29390238/NYT/world_14__hidden__" width="0" height="0" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" src="javascript:&quot;<html><body style='background:transparent'></body></html>&quot;" style="border: 0px; vertical-align: bottom; visibility: hidden; display: none;"></iframe>
                                    </div>
                                 </div>
                              </div>
                              <!-- close supplemental -->
                           </div>
                           <!-- close story-body-supplemental -->
                           <div id="storage-drawer" class="hidden">
                              <div class="supplemental-sub-item" data-attribute-position="0" data-attribute-name="CombinedMarginalia" data-attribute-type="Related" data-attribute-subtype="">
                              </div>
                              <div class="supplemental-sub-item" data-attribute-position="1" data-attribute-name="PaidPost" data-attribute-type="PaidPost" data-attribute-subtype="">
                              </div>
                              <div class="supplemental-sub-item" data-attribute-position="2" data-attribute-name="Peek" data-attribute-type="Community" data-attribute-subtype="Recent">
                              </div>
                              <div class="supplemental-sub-item" data-attribute-position="3" data-attribute-name="Peek" data-attribute-type="Community" data-attribute-subtype="Featured">
                                 <aside class="marginalia comments-marginalia  featured-comment-marginalia hidden" data-marginalia-type="sprinkled" data-skip-to-para-id=""></aside>
                              </div>
                              <div class="supplemental-sub-item" data-attribute-position="4" data-attribute-name="Peek" data-attribute-type="Community" data-attribute-subtype="Prompt">
                                 <aside class="marginalia comments-marginalia  comment-prompt-marginalia hidden" data-marginalia-type="sprinkled" data-skip-to-para-id=""></aside>
                              </div>
                           </div>
                           <div class="comments-panel" style="display: none;">
                              <div class="panel-controls">
                                 <button class="button close-panel-button">
                                 <i class="icon"></i><span class="visually-hidden">Close this panel</span>
                                 </button>
                              </div>
                              <div class="panel-content">
                                 <section id="comments" class="comments" tabindex="1">
                                    <div class="comment-permalink-view" style="display: none;"></div>
                                    <div class="comments-header-container">
                                       <header class="comments-header">
                                          <div id="Spon2" class="ad comments-tile-ad"></div>
                                          <h2 class="section-heading" tabindex="1"><i class="icon comments-icon"></i>206 Comments</h2>
                                          <p class="comment-prompt"><a target="_blank" href="http://www.nytimes.com/interactive/2016/nytnow/best-comments.html">Click here</a> to read the best Times comments from the past week.</p>
                                       </header>
                                       <div class="comment-form-control form-control thread-form active">
                                          <form class="comment-form" role="form">
                                             <div class="control header-control layout-horizontal secondary-control" style="display: none;">
                                                <!-- first time commenter -->
                                                <div class="control">
                                                   <div class="label-container visually-hidden">
                                                      <label for="commenter-input" id="commenter-input-label">Full Name</label>
                                                   </div>
                                                   <div class="field-container">
                                                      <input type="text" id="commenter-input" name="commenter-input" class="commenter-input text" placeholder="Full Name" tabindex="3" autocomplete="off" aria-labelledby="commenter-input-label" aria-required="true">
                                                      <button type="button" class="button clear-button" tabindex="-1" aria-describedby="clear-name-description"><i class="icon"></i><span class="visually-hidden" id="clear-name-description">Clear this text input</span></button>
                                                   </div>
                                                </div>
                                                <!-- close control -->
                                                <div class="control">
                                                   <div class="label-container visually-hidden">
                                                      <label for="commenter-location-input" id="commenter-location-input-label">Location</label>
                                                   </div>
                                                   <div class="field-container">
                                                      <input type="text" id="commenter-location-input" name="commenter-location-input" class="commenter-location-input text" placeholder="Location" tabindex="3" autocomplete="off" aria-labelledby="commenter-location-input-label" aria-required="true">
                                                      <button type="button" class="button clear-button" tabindex="-1" aria-describedby="clear-location-description"><i class="icon"></i><span class="visually-hidden" id="clear-location-description">Clear this text input</span></button>
                                                   </div>
                                                </div>
                                                <!-- close control -->
                                             </div>
                                             <!-- close control -->
                                             <div class="control input-control primary-control">
                                                <div class="label-container visually-hidden">
                                                   <label class="commenter-gateway-input-label" for="commenter-gateway-input" id="commenter-gateway-input-label">Share your thoughts.</label>
                                                </div>
                                                <div class="field-container">
                                                   <input type="text" id="commenter-gateway-input" name="commenter-gateway-input" class="commenter-gateway-input comment-primary" placeholder="Share your thoughts." tabindex="3" aria-labelledby="commenter-gateway-input-label" aria-required="false">
                                                </div>
                                             </div>
                                             <!-- close control -->
                                          </form>
                                       </div>
                                       <div class="comments-view-navigation">
                                          <div class="tabs-container">
                                             <ul class="tabs">
                                                <li class="tab all selected" data-filter="all" tabindex="5">All<span class="count" data-filter="all">&nbsp;206</span></li>
                                                <li class="tab reader" data-filter="reader" tabindex="5">Readers’ Picks<span class="count" data-filter="reader">&nbsp;144</span></li>
                                                <li class="tab nytpicks" data-filter="nytpicks" tabindex="5">NYT Picks<span class="count" data-filter="nytpicks">&nbsp;4</span></li>
                                             </ul>
                                          </div>
                                          <div class="comments-sort-container">
                                             <div class="comments-sort" tabindex="5">Newest</div>
                                             <i class="icon"></i>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="comments-view tab-content" tabindex="50">
                                       <article class="comment   " data-id="20112682" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112682" data-parentid="0" data-sequence="20112682" data-permid="20112682" tabindex="30">
                                          <div class="avatar avatar-loaded show-avatar"><img src="https://s3.amazonaws.com/pimage.timespeople.nytimes.com/1296/0570/cropped-12960570.jpg?48106937888704348"></div>
                                          <header>
                                             <h3 class="commenter">Michael Ham</h3>
                                             <span class="commenter-location">California</span>
                                             <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112682" class="comment-time" datetime="">5 minutes ago</a>
                                          </header>
                                          <p class="comment-text">It seems that the US has absolutely no intention of (a) apologizing to its victims (even when, as in the case of Khalid El-Masri, they are totally innocent bystanders), (b) allowing those who were tortured to have their day in court, and (c) holding any of those involved in torturing prisoners accountable. In other words, the US has no regrets, no apologies, and seems ready to repeat the offenses, despite its having signed and ratified the Convention Against Torture, which specifies what should be done.</p>
                                          <footer>
                                             <ul class="comment-actions">
                                                <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                <li class="comment-reply login-modal-trigger">Reply</li>
                                                <li class="comment-recommend login-modal-trigger ">Recommend</li>
                                                <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                             </ul>
                                          </footer>
                                          <div class="comment-form-control form-control reply-form-control active"></div>
                                       </article>
                                       <article class="comment   " data-id="20112679" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112679" data-parentid="0" data-sequence="20112679" data-permid="20112679" tabindex="30">
                                          <header>
                                             <h3 class="commenter"> VB@Singapore </h3>
                                             <span class="commenter-location">Singapore</span>
                                             <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112679" class="comment-time" datetime="">5 minutes ago</a>
                                          </header>
                                          <p class="comment-text">With this kind of larma on its hands the US defijitely deserves Trump as President. Its not sad but shameful that the people who perpetrated these crimes in the name of security are allowed to roam free and probably with veteran benefits and huge payoffs.<br>Also, when you indulge in crimes like these why do you complain that the rest of the world hates you? Isnt there a good reason for that. Most americans who will read this article may hate their own country forsuch inhuman actions.</p>
                                          <footer>
                                             <ul class="comment-actions">
                                                <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                <li class="comment-reply login-modal-trigger">Reply</li>
                                                <li class="comment-recommend login-modal-trigger ">Recommend</li>
                                                <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                             </ul>
                                          </footer>
                                          <div class="comment-form-control form-control reply-form-control active"></div>
                                       </article>
                                       <article class="comment   " data-id="20112676" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112676" data-parentid="0" data-sequence="20112676" data-permid="20112676" tabindex="30">
                                          <header>
                                             <h3 class="commenter">LakeLife</h3>
                                             <span class="commenter-location">New York, Alaska, Oceania.. The World</span>
                                             <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112676" class="comment-time" datetime="">5 minutes ago</a>
                                          </header>
                                          <p class="comment-text">Sorry, I don't care about what perceived injustices have been put on Mr. Salim .   I do care about what others of this man's ilk have promised... and continue to promise to inflict upon this nation.   The CIA needs unfettered rules of engagement to protect that which I hold dear. <br><br>I trust the CIA infinately more than I trust a news outlet crusading for those who would kill us.   My hope is 'The Darkness' has left enough of an impression on this guy so that Mr. Salim and his ilk will think twice before attacking my homeland.</p>
                                          <footer>
                                             <ul class="comment-actions">
                                                <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                <li class="comment-reply login-modal-trigger">Reply</li>
                                                <li class="comment-recommend login-modal-trigger ">Recommend</li>
                                                <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                             </ul>
                                          </footer>
                                          <div class="comment-form-control form-control reply-form-control active"></div>
                                       </article>
                                       <article class="comment   " data-id="20112673" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112673" data-parentid="0" data-sequence="20112673" data-permid="20112673" tabindex="30">
                                          <div class="avatar avatar-loaded show-avatar"><img src="https://s3.amazonaws.com/pimage.timespeople.nytimes.com/1463/8698/cropped-14638698.jpg?0.07996711158193648"></div>
                                          <header>
                                             <h3 class="commenter">Ric Fouad</h3>
                                             <span class="commenter-location">New York, NY</span>
                                             <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112673" class="comment-time" datetime="">9 minutes ago</a>
                                          </header>
                                          <p class="comment-text">My eyes welled while reading this — certainly in sadness at what Mr. Salim had to endure, but also in anger at the Bush Administration's human rights violations and President Obama's failure to prosecute those responsible.<br><br>It seems that each generation is called on to judge atrocities committed in its name. Whether the My Lai massacre or the Iraq War itself, we are asked to acquit ourselves anew and show that this time things will be different.<br><br>Until recently, we looked at newsreels of Lieutenant William Calley having his life sentence reduced to house arrest before being pardoned by President Nixon and wondered how that miscarriage was allowed.<br><br>But no more: lo, we observe a parallel tolerance for atrocities in our time, too, in cases where prosecution would be deemed politically insensitive or distasteful. <br><br>I'll stop there before this goes off topic. But suffice it to say that as one who has defended President Obama from eight years of grossly unfair and undermining Republican attacks, I find his conduct in this regard indefensible — just as his drone strike policies that take innumerable innocent lives are also indefensible. <br><br>Whether or not the President recognizes it, history will look back and judge him harshly for these wrongs — and us along with him.<br><br>@ricfouad</p>
                                          <footer>
                                             <ul class="comment-actions">
                                                <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                <li class="comment-reply login-modal-trigger">Reply</li>
                                                <li class="comment-recommend login-modal-trigger ">Recommend</li>
                                                <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                             </ul>
                                          </footer>
                                          <div class="comment-form-control form-control reply-form-control active"></div>
                                       </article>
                                       <article class="comment   " data-id="20112645" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112645" data-parentid="0" data-sequence="20112645" data-permid="20112645" tabindex="30">
                                          <header>
                                             <h3 class="commenter">William English</h3>
                                             <span class="commenter-location">San Antonio, Texas</span>
                                             <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112645" class="comment-time" datetime="">9 minutes ago</a>
                                          </header>
                                          <p class="comment-text">But, we didn't cut his head off....we didn't drown him in a animal cage ....or burn him at the stake.</p>
                                          <footer>
                                             <ul class="comment-actions">
                                                <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                <li class="comment-reply login-modal-trigger">Reply</li>
                                                <li class="comment-recommend login-modal-trigger ">Recommend</li>
                                                <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                             </ul>
                                          </footer>
                                          <div class="comment-form-control form-control reply-form-control active"></div>
                                       </article>
                                       <article class="comment   " data-id="20112638" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112638" data-parentid="0" data-sequence="20112638" data-permid="20112638" tabindex="30">
                                          <header>
                                             <h3 class="commenter">Mohamed</h3>
                                             <span class="commenter-location">Galaleldin</span>
                                             <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112638" class="comment-time" datetime="">10 minutes ago</a>
                                          </header>
                                          <p class="comment-text">I really pray that you find peace, there are so many stories like you Salim, it's so sad, I hope you get justice and those ill-minded, sick, human garbage who designed these torture programs get a taste of what they have done to others.<br>so sad, and it makes me lose hope. <br><br>I really wish the writers of this article, wrote or asked you about the feeling you had when you got back to Zanzibar. <br><br>I wish you peace Salim, I wish you peace. </p>
                                          <footer>
                                             <ul class="comment-actions">
                                                <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                <li class="comment-reply login-modal-trigger">Reply</li>
                                                <li class="comment-recommend login-modal-trigger ">Recommend</li>
                                                <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                             </ul>
                                          </footer>
                                          <div class="comment-form-control form-control reply-form-control active"></div>
                                       </article>
                                       <article class="comment   " data-id="20112613" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112613" data-parentid="0" data-sequence="20112613" data-permid="20112613" tabindex="30">
                                          <header>
                                             <h3 class="commenter">IJonah</h3>
                                             <span class="commenter-location">Amsterdam, Netherlands</span>
                                             <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112613" class="comment-time" datetime="">10 minutes ago</a>
                                          </header>
                                          <p class="comment-text">Terrible how we treat people, no words for this ordeal.</p>
                                          <footer>
                                             <ul class="comment-actions">
                                                <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                <li class="comment-reply login-modal-trigger">Reply</li>
                                                <li class="comment-recommend login-modal-trigger ">Recommend</li>
                                                <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                             </ul>
                                          </footer>
                                          <div class="comment-form-control form-control reply-form-control active"></div>
                                       </article>
                                       <article class="comment   " data-id="20112603" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112603" data-parentid="0" data-sequence="20112603" data-permid="20112603" tabindex="30">
                                          <header>
                                             <h3 class="commenter">Lenore</h3>
                                             <span class="commenter-location">Manhattan</span>
                                             <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112603" class="comment-time" datetime="">10 minutes ago</a>
                                          </header>
                                          <p class="comment-text">Thank you so much, NYT, for this series, especially for putting names and faces and histories to those we have tortured. Far from the nameless "worst of the worst," they are victims of what, in fair trials if those ever take place, will surely be determined to have been war crimes.<br><br>It is our shame that we looked forward and not back, as Obama declared. </p>
                                          <footer>
                                             <ul class="comment-actions">
                                                <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                <li class="comment-reply login-modal-trigger">Reply</li>
                                                <li class="comment-recommend login-modal-trigger ">Recommend</li>
                                                <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                             </ul>
                                          </footer>
                                          <div class="comment-form-control form-control reply-form-control active"></div>
                                       </article>
                                       <article class="comment   " data-id="20112587" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112587" data-parentid="0" data-sequence="20112587" data-permid="20112587" tabindex="30">
                                          <header>
                                             <h3 class="commenter">kailashganesh</h3>
                                             <span class="commenter-location">Washington DC</span>
                                             <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112587" class="comment-time" datetime="">14 minutes ago</a>
                                          </header>
                                          <p class="comment-text">And USA talks about Human Rights in rest of the world and trying leaders of under developed countries as War Criminals  </p>
                                          <footer>
                                             <ul class="comment-actions">
                                                <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                <li class="comment-reply login-modal-trigger">Reply</li>
                                                <li class="comment-recommend login-modal-trigger "><span class="recommend-count"><i class="icon sprite-icon"></i>3</span>Recommend</li>
                                                <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                             </ul>
                                          </footer>
                                          <div class="comment-form-control form-control reply-form-control active"></div>
                                       </article>
                                       <article class="comment   " data-id="20112552" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112552" data-parentid="0" data-sequence="20112552" data-permid="20112552" tabindex="30">
                                          <header>
                                             <h3 class="commenter">geekgrrl</h3>
                                             <span class="commenter-location"><br></span>
                                             <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112552" class="comment-time" datetime="">15 minutes ago</a>
                                          </header>
                                          <p class="comment-text">How is no one in jail for the atrocities committed against this man?? This is the legacy of George Bush and his cronies. No value on human life whatsoever. </p>
                                          <footer>
                                             <ul class="comment-actions">
                                                <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                <li class="comment-reply login-modal-trigger">Reply</li>
                                                <li class="comment-recommend login-modal-trigger "><span class="recommend-count"><i class="icon sprite-icon"></i>3</span>Recommend</li>
                                                <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                             </ul>
                                          </footer>
                                          <div class="comment-form-control form-control reply-form-control active"></div>
                                          <div class="thread">
                                             <article class="comment threaded-comment  " data-id="20112684" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112552:20112684" data-parentid="20112552" data-sequence="20112684" data-permid="20112552:20112684" tabindex="30">
                                                <header>
                                                   <h3 class="commenter">Deregulate_This</h3>
                                                   <span class="commenter-location">murrka</span>
                                                   <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112552:20112684" class="comment-time" datetime="">5 minutes ago</a>
                                                </header>
                                                <p class="comment-text">Obama could prosecute for War Crimes, but he's a neo-liberal himself. He has not redeemed the past and present mistakes of the USA.<br><br>Obama instead only prosecutes those who expose war crimes. We all have blood on our hands for our votes.</p>
                                                <footer>
                                                   <ul class="comment-actions">
                                                      <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                      <li class="comment-reply login-modal-trigger">Reply</li>
                                                      <li class="comment-recommend login-modal-trigger ">Recommend</li>
                                                      <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                                   </ul>
                                                </footer>
                                                <div class="comment-form-control form-control reply-form-control active"></div>
                                             </article>
                                          </div>
                                       </article>
                                       <article class="comment   " data-id="20112491" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112491" data-parentid="0" data-sequence="20112491" data-permid="20112491" tabindex="30">
                                          <header>
                                             <h3 class="commenter">Michael Hickey</h3>
                                             <span class="commenter-location">Amherst, Massachusetts</span>
                                             <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112491" class="comment-time" datetime="">15 minutes ago</a>
                                          </header>
                                          <p class="comment-text">There was no effort to validate his accusation by polygraph? I understand the flaws in polygraph analyses but there is something to be gained when the stakes are this high.</p>
                                          <footer>
                                             <ul class="comment-actions">
                                                <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                <li class="comment-reply login-modal-trigger">Reply</li>
                                                <li class="comment-recommend login-modal-trigger "><span class="recommend-count"><i class="icon sprite-icon"></i>2</span>Recommend</li>
                                                <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                             </ul>
                                          </footer>
                                          <div class="comment-form-control form-control reply-form-control active"></div>
                                       </article>
                                       <article class="comment   " data-id="20112490" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112490" data-parentid="0" data-sequence="20112490" data-permid="20112490" tabindex="30">
                                          <header>
                                             <h3 class="commenter">Al Schille</h3>
                                             <span class="commenter-location">Staten Island</span>
                                             <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112490" class="comment-time" datetime="">16 minutes ago</a>
                                          </header>
                                          <p class="comment-text">Why publish these stories. Makes me wonder. Is it to prove that the USA is such a horrible place?</p>
                                          <footer>
                                             <ul class="comment-actions">
                                                <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                <li class="comment-reply login-modal-trigger">Reply</li>
                                                <li class="comment-recommend login-modal-trigger ">Recommend</li>
                                                <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                             </ul>
                                          </footer>
                                          <div class="comment-form-control form-control reply-form-control active"></div>
                                          <div class="thread">
                                             <article class="comment threaded-comment  " data-id="20112711" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112490:20112711" data-parentid="20112490" data-sequence="20112711" data-permid="20112490:20112711" tabindex="30">
                                                <header>
                                                   <h3 class="commenter">angfil</h3>
                                                   <span class="commenter-location">Arizona</span>
                                                   <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112490:20112711" class="comment-time" datetime="">4 minutes ago</a>
                                                </header>
                                                <p class="comment-text">It's to make the public aware as to what goes on in these CIA prisons.  This torture is against everything this country has ever stood for.<br>And yes Geekgrrl<br>" This is the legacy of George Bush and his cronies"  who will never stand trial for war crimes.</p>
                                                <footer>
                                                   <ul class="comment-actions">
                                                      <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                      <li class="comment-reply login-modal-trigger">Reply</li>
                                                      <li class="comment-recommend login-modal-trigger ">Recommend</li>
                                                      <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                                   </ul>
                                                </footer>
                                                <div class="comment-form-control form-control reply-form-control active"></div>
                                             </article>
                                             <article class="comment threaded-comment  " data-id="20112735" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112490:20112735" data-parentid="20112490" data-sequence="20112735" data-permid="20112490:20112735" tabindex="30">
                                                <header>
                                                   <h3 class="commenter">Sally Stevens</h3>
                                                   <span class="commenter-location">Studio City, California</span>
                                                   <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112490:20112735" class="comment-time" datetime="">4 minutes ago</a>
                                                </header>
                                                <p class="comment-text">The USA is not a horrible place but some of the people in it have done horrible things.  There is no excuse for what happened to htis man. How do you try to make things right for him?  So much of his personhood,his life, his mind, his emotions have been destroyed, cruelly and inhumaely, and to what purpose?  </p>
                                                <footer>
                                                   <ul class="comment-actions">
                                                      <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                      <li class="comment-reply login-modal-trigger">Reply</li>
                                                      <li class="comment-recommend login-modal-trigger ">Recommend</li>
                                                      <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                                   </ul>
                                                </footer>
                                                <div class="comment-form-control form-control reply-form-control active"></div>
                                             </article>
                                          </div>
                                       </article>
                                       <article class="comment   " data-id="20112486" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112486" data-parentid="0" data-sequence="20112486" data-permid="20112486" tabindex="30">
                                          <header>
                                             <h3 class="commenter">Kartik Narayan</h3>
                                             <span class="commenter-location">Bengaluru, India</span>
                                             <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112486" class="comment-time" datetime="">16 minutes ago</a>
                                          </header>
                                          <p class="comment-text">Somewhere when you get to read more of these articles regarding the United States, you feel that she is fast losing the moral authority to be the worlds only super power.<br><br>The pride and respect garnered after world war 2, is all but gone.<br><br>This last week watching Donald Trump even being considered as a major party nominee with his trailer trash talks, makes me worry as to what future even a small section of Americans want for their country.</p>
                                          <footer>
                                             <ul class="comment-actions">
                                                <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                <li class="comment-reply login-modal-trigger">Reply</li>
                                                <li class="comment-recommend login-modal-trigger "><span class="recommend-count"><i class="icon sprite-icon"></i>1</span>Recommend</li>
                                                <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                             </ul>
                                          </footer>
                                          <div class="comment-form-control form-control reply-form-control active"></div>
                                       </article>
                                       <article class="comment   " data-id="20112479" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112479" data-parentid="0" data-sequence="20112479" data-permid="20112479" tabindex="30">
                                          <header>
                                             <h3 class="commenter">Bob Jones</h3>
                                             <span class="commenter-location">Baltimore, MD</span>
                                             <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112479" class="comment-time" datetime="">16 minutes ago</a>
                                          </header>
                                          <p class="comment-text">Perhaps he can use his trials and tribulations to work toward a gathering of peaceful citizens of the world who will stand against violent fanatics that fly planes into buildings, murdering thousands of innocent people in one day, as an incident like that is what caused the knee-jerk reaction that lead to his capture and torture. If it had never happened in the first place, his life story would be very different.</p>
                                          <footer>
                                             <ul class="comment-actions">
                                                <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                <li class="comment-reply login-modal-trigger">Reply</li>
                                                <li class="comment-recommend login-modal-trigger ">Recommend</li>
                                                <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                             </ul>
                                          </footer>
                                          <div class="comment-form-control form-control reply-form-control active"></div>
                                       </article>
                                       <article class="comment   " data-id="20112463" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112463" data-parentid="0" data-sequence="20112463" data-permid="20112463" tabindex="30">
                                          <header>
                                             <h3 class="commenter">John H Noble Jr</h3>
                                             <span class="commenter-location">Georgetown, Texas</span>
                                             <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112463" class="comment-time" datetime="">16 minutes ago</a>
                                          </header>
                                          <p class="comment-text">Ops, mistakes happen. Captured Americans can expect the same treatment. In a world without justice and filled with so much hatred, a safe, secure, and happy life is a chance event that cannot be taken for granted. Let us hope to God that Mr. Salim's misfortune never happens to us!</p>
                                          <footer>
                                             <ul class="comment-actions">
                                                <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                <li class="comment-reply login-modal-trigger">Reply</li>
                                                <li class="comment-recommend login-modal-trigger ">Recommend</li>
                                                <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                             </ul>
                                          </footer>
                                          <div class="comment-form-control form-control reply-form-control active"></div>
                                       </article>
                                       <article class="comment   " data-id="20112442" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112442" data-parentid="0" data-sequence="20112442" data-permid="20112442" tabindex="30">
                                          <header>
                                             <h3 class="commenter">frank monaco</h3>
                                             <span class="commenter-location">Brooklyn NY</span>
                                             <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112442" class="comment-time" datetime="">16 minutes ago</a>
                                          </header>
                                          <p class="comment-text">Ok so Mr. Salim was picked up suspected of being a terrosist. After 5 years of torture the U.S. just releases Mr. Salim  for they now feel hie of no threat. and basicly say have a nice life.  Do these actions make us the Greatest contry in the world? What makes the us a great contry is admitting when we do wrong and righting the wrong. The U.S. owes Mr. Salim some attempt of righting a wrong.  </p>
                                          <footer>
                                             <ul class="comment-actions">
                                                <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                <li class="comment-reply login-modal-trigger">Reply</li>
                                                <li class="comment-recommend login-modal-trigger "><span class="recommend-count"><i class="icon sprite-icon"></i>2</span>Recommend</li>
                                                <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                             </ul>
                                          </footer>
                                          <div class="comment-form-control form-control reply-form-control active"></div>
                                       </article>
                                       <article class="comment   " data-id="20112434" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112434" data-parentid="0" data-sequence="20112434" data-permid="20112434" tabindex="30">
                                          <header>
                                             <h3 class="commenter">william rastorfer</h3>
                                             <span class="commenter-location">usa</span>
                                             <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112434" class="comment-time" datetime="">16 minutes ago</a>
                                          </header>
                                          <p class="comment-text">Well that certainly won't create another terrorist, or terrorists...</p>
                                          <footer>
                                             <ul class="comment-actions">
                                                <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                <li class="comment-reply login-modal-trigger">Reply</li>
                                                <li class="comment-recommend login-modal-trigger "><span class="recommend-count"><i class="icon sprite-icon"></i>1</span>Recommend</li>
                                                <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                             </ul>
                                          </footer>
                                          <div class="comment-form-control form-control reply-form-control active"></div>
                                       </article>
                                       <article class="comment   " data-id="20112426" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112426" data-parentid="0" data-sequence="20112426" data-permid="20112426" tabindex="30">
                                          <header>
                                             <h3 class="commenter">Margaret Reader</h3>
                                             <span class="commenter-location">San Francisco</span>
                                             <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112426" class="comment-time" datetime="">16 minutes ago</a>
                                          </header>
                                          <p class="comment-text">Is there a way to send a letter to Mr. Salim or send him support/money to recompense in some small way for damage done?<br>This story breaks my heart, because I believe USA is mostly better than this terrible behavior.  CIA needs to do its homework and leave gentle people alone, especially when they have so little proof of any wrong doing.<br><br>My bird feeder is a constant source of serenity in my life too.  Mr. Salim, if you read these responses to your story, please know that there are lots of good hearts in the world that share your hurt and see the injustice of what happened to you.  I hope you can heal and move past the darkness.  Peace, M</p>
                                          <footer>
                                             <ul class="comment-actions">
                                                <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                <li class="comment-reply login-modal-trigger">Reply</li>
                                                <li class="comment-recommend login-modal-trigger ">Recommend</li>
                                                <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                             </ul>
                                          </footer>
                                          <div class="comment-form-control form-control reply-form-control active"></div>
                                       </article>
                                       <article class="comment   " data-id="20112355" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112355" data-parentid="0" data-sequence="20112355" data-permid="20112355" tabindex="30">
                                          <header>
                                             <h3 class="commenter">lastcard jb</h3>
                                             <span class="commenter-location">westport ct</span>
                                             <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112355" class="comment-time" datetime="">16 minutes ago</a>
                                          </header>
                                          <p class="comment-text">mistakes happen if this didn't work they wouldn't do it. the world is a complicated place. we only have a small part of the information and only from someone who could be lying.</p>
                                          <footer>
                                             <ul class="comment-actions">
                                                <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                <li class="comment-reply login-modal-trigger">Reply</li>
                                                <li class="comment-recommend login-modal-trigger ">Recommend</li>
                                                <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                             </ul>
                                          </footer>
                                          <div class="comment-form-control form-control reply-form-control active"></div>
                                       </article>
                                       <article class="comment   " data-id="20112154" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112154" data-parentid="0" data-sequence="20112154" data-permid="20112154" tabindex="30">
                                          <div class="avatar avatar-loaded show-avatar"><img src="https://s3.amazonaws.com/pimage.timespeople.nytimes.com/6467/2620/cropped-64672620.jpg?0.5726429299539002"></div>
                                          <header>
                                             <h3 class="commenter">Chicago Guy</h3>
                                             <span class="commenter-location">Chicago, Il</span>
                                             <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112154" class="comment-time" datetime="">16 minutes ago</a>
                                          </header>
                                          <p class="comment-text">If we can sure the Saudi's, then surely this man is entitled to a massive settlement. In the hundreds of millions.<br><br>Gitmo is the darkest most deplorable thing this country has done since psychic-driving and the internment of Japanese Americans during WWII.</p>
                                          <footer>
                                             <ul class="comment-actions">
                                                <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                <li class="comment-reply login-modal-trigger">Reply</li>
                                                <li class="comment-recommend login-modal-trigger ">Recommend</li>
                                                <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                             </ul>
                                          </footer>
                                          <div class="comment-form-control form-control reply-form-control active"></div>
                                       </article>
                                       <article class="comment  picked-comment " data-id="20112297" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112297" data-parentid="0" data-sequence="20112297" data-permid="20112297" tabindex="30">
                                          <i class="icon sprite-icon nyt-pick-icon"><span class="visually-hidden">NYT Pick</span></i>
                                          <header>
                                             <h3 class="commenter">E</h3>
                                             <span class="commenter-location">Amherst, MA</span>
                                             <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112297" class="comment-time" datetime="">18 minutes ago</a>
                                          </header>
                                          <p class="comment-text">The moral cynicism in these comments is disheartening. War is messy; it is not, however, excuse to abandon every moral principle that ties our humanity together. These actions - knowingly partnering with warlords willing to exchange human lives for profit, continuing to detain individuals for years even when little to no evidence could be found against them, subjecting them to torture, then providing no reparations or follow-up resources to allow them the best chance at being able to heal and move forward, and not taking accountability for any of that - are not only war crimes as defined by international conventions the United States helped write, but they reflect a complete abandonment of American moral ideals (of due process, of liberty, of protection from cruel and unusual punishment) and basic human decency. <br><br>This was not impulsive. This was a well-developed, legally-counseled, intentional program. We knew exactly what we were doing and we still demonstrated wanton disregard for the lines we were crossing and the human lives we were destroying.  That should outrage you. <br><br>This man is not a combatant. He never was a threat. His treatment was illegal and immoral. If another nation inflicted this upon us - especially our innocents - we would be irate; we would demand, if not revenge, justice and reparation. If you care for American ideals as much as you claim, you'll defend them by condemning what happened, rather than abandoning them in a moral race to the bottom.  </p>
                                          <footer>
                                             <ul class="comment-actions">
                                                <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                <li class="comment-reply login-modal-trigger">Reply</li>
                                                <li class="comment-recommend login-modal-trigger "><span class="recommend-count"><i class="icon sprite-icon"></i>17</span>Recommend</li>
                                                <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                             </ul>
                                          </footer>
                                          <div class="comment-form-control form-control reply-form-control active"></div>
                                       </article>
                                       <article class="comment   " data-id="20112015" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112015" data-parentid="0" data-sequence="20112015" data-permid="20112015" tabindex="30">
                                          <header>
                                             <h3 class="commenter">Zoe Wyse</h3>
                                             <span class="commenter-location">Portland, OR</span>
                                             <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112015" class="comment-time" datetime="">1 hour ago</a>
                                          </header>
                                          <p class="comment-text">This is a horrific story. I am so sorry to hear about the horrible things that happened to Mr. Salim. Many others like him have also been horribly mistreated.<br><br>It would helpful for people who have been grievously wounded in this way to be offered a chance to receive a sincere apology. I don't believe that the vast majority of people in the CIA or in our military have a fundamental wish to do harm to others. However, very serious harm has been done, from Guantanamo and Abu Ghraib to these secret prisons. <br><br>These abusive and degrading actions are an example of what happens when people do not feel they have the right to think for themselves and make independent decisions. I don't believe that the people who have done these things are "bad people." But putting people in situations with misguided leadership and an expectation that they will follow directions without an opportunity for independent thinking is a recipe for disaster. <br><br>Many people in the CIA and military may feel great guilt and remorse about the harms they have caused. But the reality is that they are just people like all of us, put in a situation that is very different than what the rest of us have had to face. People should have a chance to talk with one another and apologize so that people who have been incredibly harmed can have a chance to see the real human side of people who have harmed them. This could create healing for everyone. <br><br>My heart goes out to Mr. Salim and my prayers are with him.</p>
                                          <footer>
                                             <ul class="comment-actions">
                                                <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                <li class="comment-reply login-modal-trigger">Reply</li>
                                                <li class="comment-recommend login-modal-trigger "><span class="recommend-count"><i class="icon sprite-icon"></i>12</span>Recommend</li>
                                                <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                             </ul>
                                          </footer>
                                          <div class="comment-form-control form-control reply-form-control active"></div>
                                          <div class="thread">
                                             <article class="comment threaded-comment  " data-id="20112422" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112015:20112422" data-parentid="20112015" data-sequence="20112422" data-permid="20112015:20112422" tabindex="30">
                                                <header>
                                                   <h3 class="commenter">Robert</h3>
                                                   <span class="commenter-location">Mass</span>
                                                   <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112015:20112422" class="comment-time" datetime="">16 minutes ago</a>
                                                </header>
                                                <p class="comment-text">Do not be mistaken. The Americans that did this are indeed bad, evil people; and they are ruled by fear and other base emotions. <br><br>The CIA is a culture and government onto itself and is able to make their own rules and laws.  This victim and all victims of the sub human treatment meeted out to such people in the name of fighting terrorism need to be compensated yet nothing can truly compensate these people for the evil brutality they suffered at the hands of American interrogators.</p>
                                                <footer>
                                                   <ul class="comment-actions">
                                                      <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                      <li class="comment-reply login-modal-trigger">Reply</li>
                                                      <li class="comment-recommend login-modal-trigger "><span class="recommend-count"><i class="icon sprite-icon"></i>1</span>Recommend</li>
                                                      <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                                   </ul>
                                                </footer>
                                                <div class="comment-form-control form-control reply-form-control active"></div>
                                             </article>
                                             <article class="comment threaded-comment  " data-id="20112669" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112015:20112669" data-parentid="20112015" data-sequence="20112669" data-permid="20112015:20112669" tabindex="30">
                                                <header>
                                                   <h3 class="commenter">magicisnotreal</h3>
                                                   <span class="commenter-location">earth</span>
                                                   <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20112015:20112669" class="comment-time" datetime="">9 minutes ago</a>
                                                </header>
                                                <p class="comment-text">You are always able to make your own decisions. It used to be taught when I was in the service in the 80's that you  were responsible for disobeying illegal orders.<br>What you refer to is the cowardly conceit many have that if they act according to their conscience or reason because they think something is wrong that they should not have to face any consequences. That is wrong as on can be mistaken or wrong about a decision to confront authority and that has consequences. Snowden is a prime example of this kind of cowardice.<br>If you do not trust the system to come to correct conclusions if you make such a choice, then you are actually a part of the problem and it speaks to the likelihood that you are wrong about your conclusion. At best it means you cannot construct an argument that satisfies your own mind enough that you would stand forth and present it as your defense with the full confidence that it would defend you.<br>It is really a rather simple thing, if you conclude something is true the reason you came to that conclusion would convince another rational person as well. </p>
                                                <footer>
                                                   <ul class="comment-actions">
                                                      <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                      <li class="comment-reply login-modal-trigger">Reply</li>
                                                      <li class="comment-recommend login-modal-trigger ">Recommend</li>
                                                      <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                                   </ul>
                                                </footer>
                                                <div class="comment-form-control form-control reply-form-control active"></div>
                                             </article>
                                          </div>
                                       </article>
                                       <article class="comment   " data-id="20111993" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20111993" data-parentid="0" data-sequence="20111993" data-permid="20111993" tabindex="30">
                                          <header>
                                             <h3 class="commenter">weary traveller</h3>
                                             <span class="commenter-location">USA</span>
                                             <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20111993" class="comment-time" datetime="">1 hour ago</a>
                                          </header>
                                          <p class="comment-text">In a democratic setup , we must have judicial oversight.<br>Whatever we say now cannot undo the gross mistakes on part of the congress to grant GW Bush government unfettered and illegal rights to abuse on "hunch" and today we have ISIS as a result!.  Badgagdi himself is a good example of the "mistake"</p>
                                          <footer>
                                             <ul class="comment-actions">
                                                <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                <li class="comment-reply login-modal-trigger">Reply</li>
                                                <li class="comment-recommend login-modal-trigger "><span class="recommend-count"><i class="icon sprite-icon"></i>5</span>Recommend</li>
                                                <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                             </ul>
                                          </footer>
                                          <div class="comment-form-control form-control reply-form-control active"></div>
                                       </article>
                                       <article class="comment  picked-comment " data-id="20111981" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20111981" data-parentid="0" data-sequence="20111981" data-permid="20111981" tabindex="30">
                                          <i class="icon sprite-icon nyt-pick-icon"><span class="visually-hidden">NYT Pick</span></i>
                                          <header>
                                             <h3 class="commenter">Sara Tucker</h3>
                                             <span class="commenter-location">New York</span>
                                             <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20111981" class="comment-time" datetime="">1 hour ago</a>
                                          </header>
                                          <p class="comment-text">I lived in Tanzania at the time of the embassy bombings, and I remember the cash rewards for reporting terrorist activity. They were broadcast by Voice of America. Soon after they began, I called the U.S. embassy in Dar with a tip—somebody in the neighborhood was selling liquid nitrogen, used in the making of dirty bombs. The embassy never responded. After reading this article, I'm glad they didn't. I no longer live in Tanzania, but as a journalist who travels a lot, I'm constantly reminded that Americans are feared and hated in many parts of the world. When you read stuff like this, it's easy to understand why.</p>
                                          <footer>
                                             <ul class="comment-actions">
                                                <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                <li class="comment-reply login-modal-trigger">Reply</li>
                                                <li class="comment-recommend login-modal-trigger "><span class="recommend-count"><i class="icon sprite-icon"></i>30</span>Recommend</li>
                                                <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                             </ul>
                                          </footer>
                                          <div class="comment-form-control form-control reply-form-control active"></div>
                                       </article>
                                       <article class="comment   " data-id="20111979" data-url="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20111979" data-parentid="0" data-sequence="20111979" data-permid="20111979" tabindex="30">
                                          <header>
                                             <h3 class="commenter">Mtn Bison</h3>
                                             <span class="commenter-location">Smoky Mountains</span>
                                             <a href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html#permid=20111979" class="comment-time" datetime="">1 hour ago</a>
                                          </header>
                                          <p class="comment-text">It is sad to be an American these days with such atrocities being committed. Torture is so ineffective and history teaches that many times it has a negative effect on the mission to be accomplished, in this case, the eradication. <br><br>Think about it, abusive tactics by the British eventually led to the revolution in this country.</p>
                                          <footer>
                                             <ul class="comment-actions">
                                                <li class="comment-flag login-modal-trigger "><i class="icon sprite-icon"></i>Flag</li>
                                                <li class="comment-reply login-modal-trigger">Reply</li>
                                                <li class="comment-recommend login-modal-trigger "><span class="recommend-count"><i class="icon sprite-icon"></i>11</span>Recommend</li>
                                                <li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>
                                             </ul>
                                          </footer>
                                          <div class="comment-form-control form-control reply-form-control active"></div>
                                       </article>
                                       <div class="loader-container" style="display: none;">
                                          <div class="loader loader-t-logo-32x32-ecedeb-ffffff"><span class="visually-hidden">Loading...</span></div>
                                       </div>
                                       <footer class="comments-footer">
                                          <div class="comments-expand comments-thread-expand" data-action="read-more" tabindex="55">Read More <i class="icon"></i></div>
                                       </footer>
                                    </div>
                                    <!-- close comments-view -->
                                    <div class="view-all" data-filter="all" style="display: none;">View all 206 comments</div>
                                 </section>
                                 <!-- close comments -->
                                 <div class="comments-header-container" style="display: none;">
                                    <header class="comments-header">
                                       <div id="Spon2" class="ad comments-tile-ad"></div>
                                       <h2 class="section-heading" tabindex="1"><i class="icon comments-icon"></i>206 Comments</h2>
                                       <p class="comment-prompt"><a target="_blank" href="http://www.nytimes.com/interactive/2016/nytnow/best-comments.html">Click here</a> to read the best Times comments from the past week.</p>
                                    </header>
                                    <div class="comments-view-navigation">
                                       <div class="tabs-container">
                                          <ul class="tabs">
                                             <li class="tab all selected" data-filter="all" tabindex="5">All<span class="count" data-filter="all">&nbsp;206</span></li>
                                             <li class="tab reader" data-filter="reader" tabindex="5">Readers’ Picks<span class="count" data-filter="reader">&nbsp;144</span></li>
                                             <li class="tab nytpicks" data-filter="nytpicks" tabindex="5">NYT Picks<span class="count" data-filter="nytpicks">&nbsp;4</span></li>
                                          </ul>
                                       </div>
                                       <div class="comments-sort-container">
                                          <div class="comments-sort" tabindex="5">Newest</div>
                                          <i class="icon"></i>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </article>
                        <section id="related-combined-coverage" class="related-combined-coverage nocontent robots-nocontent">
                           <header class="section-header">
                              <h2 class="section-heading">Related Coverage</h2>
                           </header>
                           <div class="section-body">
                              <ol class="story-menu menu">
                                 <li>
                                    <article class="story theme-summary ">
                                       <a class="story-link" href="http://www.nytimes.com/2016/10/09/world/cia-torture-guantanamo-bay.html">
                                          <div class="story-body">
                                             <h2 class="headline">
                                                <span class="title">How U.S. Torture Left a Legacy of Damaged Minds</span>
                                                <time class="dateline">OCT. 8, 2016</time>
                                             </h2>
                                          </div>
                                          <div class="thumb">
                                             <img src="https://static01.nyt.com/images/2016/10/08/world/DETAINEES5/DETAINEES5-thumbStandard.jpg" role="presentation" alt="">
                                             <div class="media-action-overlay"></div>
                                          </div>
                                       </a>
                                    </article>
                                 </li>
                              </ol>
                           </div>
                        </section>
                        <aside class="module trending-module nocontent robots-nocontent" data-truncate-enabled="true">
                           <div class="nocontent robots-nocontent">
                              <header>
                                 <h2 class="module-heading">Trending</h2>
                              </header>
                              <ol>
                                 <li>
                                    <a class="story-link" href="http://www.nytimes.com/2016/10/16/magazine/generation-adderall-addiction.html">
                                       <article class="story theme-summary">
                                          <div class="thumb">
                                             <img src="https://static01.nyt.com/images/2016/10/16/magazine/16adderall1-copy/16adderall1-thumbStandard.jpg">
                                          </div>
                                          <h2 class="headline">
                                             <span class="headline-text truncate-text">
                                             Feature:
                                             Generation Adderall
                                             </span>
                                          </h2>
                                       </article>
                                    </a>
                                 </li>
                                 <li>
                                    <a class="story-link" href="http://www.nytimes.com/2016/10/12/us/politics/donald-trump-gop.html">
                                       <article class="story theme-summary">
                                          <div class="thumb">
                                             <img src="https://static01.nyt.com/images/2016/10/12/us/elections/12campaignsub1/12campaignsub1-thumbStandard.jpg">
                                          </div>
                                          <h2 class="headline">
                                             <span class="headline-text truncate-text">
                                             Split Over Donald Trump Threatens to Tilt Republican States
                                             </span>
                                          </h2>
                                       </article>
                                    </a>
                                 </li>
                                 <li>
                                    <a class="story-link" href="http://www.nytimes.com/2016/10/13/upshot/how-one-19-year-old-illinois-man-is-distorting-national-polling-averages.html">
                                       <article class="story theme-summary">
                                          <div class="thumb">
                                             <img src="https://static01.nyt.com/images/2016/10/13/upshot/13up-lat2chart-1476246479962/13up-lat2chart-1476246479962-thumbStandard-v5.png">
                                          </div>
                                          <h2 class="headline">
                                             <span class="headline-text truncate-text">
                                             The 2016 Race:
                                             How One 19-Year-Old Illinois Man Is Distorting National Polling Averages
                                             </span>
                                          </h2>
                                       </article>
                                    </a>
                                 </li>
                                 <li>
                                    <a class="story-link" href="http://www.nytimes.com/2016/10/12/us/politics/donald-trump-voters.html">
                                       <article class="story theme-summary">
                                          <div class="thumb">
                                             <img src="https://static01.nyt.com/images/2016/10/12/us/12TRUMPDIEHARDS1/12TRUMPDIEHARDS1-thumbStandard.jpg">
                                          </div>
                                          <h2 class="headline">
                                             <span class="headline-text truncate-text">
                                             Donald Trump Faltering? Die-Hard Fans Refuse to Buy It
                                             </span>
                                          </h2>
                                       </article>
                                    </a>
                                 </li>
                                 <li>
                                    <a class="story-link" href="http://www.nytimes.com/2016/10/12/opinion/campaign-stops/the-republican-inferno.html">
                                       <article class="story theme-summary">
                                          <div class="thumb">
                                             <img src="https://static01.nyt.com/images/2016/10/12/opinion/12douthatWeb/12douthatWeb-thumbStandard.jpg">
                                          </div>
                                          <h2 class="headline">
                                             <span class="headline-text truncate-text">
                                             Op-Ed Columnist:
                                             The Republican Inferno
                                             </span>
                                          </h2>
                                       </article>
                                    </a>
                                 </li>
                                 <li>
                                    <a class="story-link" href="http://www.nytimes.com/2016/10/12/world/cia-torture-abuses-detainee.html">
                                       <article class="story theme-summary">
                                          <div class="thumb">
                                             <img src="https://static01.nyt.com/images/2016/09/30/world/11suleiman/11suleiman-thumbStandard-v2.jpg">
                                          </div>
                                          <h2 class="headline">
                                             <span class="headline-text truncate-text">
                                             After Torture, Ex-Detainee Is Still Captive of ‘The Darkness’
                                             </span>
                                          </h2>
                                       </article>
                                    </a>
                                 </li>
                                 <li>
                                    <a class="story-link" href="http://www.nytimes.com/2016/10/12/opinion/daughters-and-trumps.html">
                                       <article class="story theme-summary">
                                          <div class="thumb">
                                             <img src="https://static01.nyt.com/images/2016/10/12/opinion/12bruniWeb/12bruniWeb-thumbStandard.jpg">
                                          </div>
                                          <h2 class="headline">
                                             <span class="headline-text truncate-text">
                                             Op-Ed Columnist:
                                             Daughters and Trumps
                                             </span>
                                          </h2>
                                       </article>
                                    </a>
                                 </li>
                                 <li>
                                    <a class="story-link" href="http://www.nytimes.com/2016/10/11/opinion/donald-trumps-sad-lonely-life.html">
                                       <article class="story theme-summary">
                                          <div class="thumb">
                                             <img src="https://static01.nyt.com/images/2016/10/11/opinion/11brooksWeb/11brooksWeb-thumbStandard.jpg">
                                          </div>
                                          <h2 class="headline">
                                             <span class="headline-text truncate-text">
                                             Op-Ed Columnist:
                                             Donald Trump’s Sad, Lonely Life
                                             </span>
                                          </h2>
                                       </article>
                                    </a>
                                 </li>
                                 <li>
                                    <a class="story-link" href="http://www.nytimes.com/2016/10/12/opinion/campaign-stops/maureen-dowd-solving-the-riddle-of-the-slovenian-sphinx-and-the-pussy-bow.html">
                                       <article class="story theme-summary">
                                          <div class="thumb">
                                             <img src="https://static01.nyt.com/images/2016/10/11/opinion/12dowdWeb/12dowdWeb-thumbStandard.jpg">
                                          </div>
                                          <h2 class="headline">
                                             <span class="headline-text truncate-text">
                                             Op-Ed Columnist:
                                             Solving the Riddle of the Slovenian Sphinx and the Pussy Bow
                                             </span>
                                          </h2>
                                       </article>
                                    </a>
                                 </li>
                                 <li>
                                    <a class="story-link" href="http://www.nytimes.com/interactive/2016/upshot/presidential-polls-forecast.html">
                                       <article class="story theme-summary">
                                          <div class="thumb">
                                             <img src="https://static01.nyt.com/images/2016/07/19/upshot/presidential-election-forecast-1468902507509/presidential-election-forecast-1468902507509-thumbStandard-v2.png">
                                          </div>
                                          <h2 class="headline">
                                             <span class="headline-text truncate-text">
                                             2016 Election Forecast: Who Will Be President?
                                             </span>
                                          </h2>
                                       </article>
                                    </a>
                                 </li>
                              </ol>
                              <footer>
                                 <p class="user-action"><a href="/trending">View More Trending Stories »</a></p>
                                 <div id="MostEm" class="ad most-em-ad">
                                    <div id="google_ads_iframe_/29390238/NYT/world_5__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/29390238/NYT/world_5" title="3rd party ad content" name="google_ads_iframe_/29390238/NYT/world_5" width="88" height="31" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" src="javascript:&quot;<html><body style='background:transparent'></body></html>&quot;" style="border: 0px; vertical-align: bottom;"></iframe></div>
                                    <iframe id="google_ads_iframe_/29390238/NYT/world_5__hidden__" title="" name="google_ads_iframe_/29390238/NYT/world_5__hidden__" width="0" height="0" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" src="javascript:&quot;<html><body style='background:transparent'></body></html>&quot;" style="border: 0px; vertical-align: bottom; visibility: hidden; display: none;"></iframe>
                                 </div>
                              </footer>
                           </div>
                        </aside>
                        <section id="whats-next" class="whats-next nocontent robots-nocontent">
                           <h2 class="visually-hidden">What's Next</h2>
                           <div class="nocontent robots-nocontent">
                              <div class="loader-container">
                                 <div class="loader loader-t-logo-32x32-ecedeb-ffffff"><span class="visually-hidden">Loading...</span></div>
                              </div>
                           </div>
                           <!-- close nocontent -->
                        </section>
                        <div id="TopAd1" class="text-ad bottom-left-ad nocontent robots-nocontent"></div>
                        <div id="Top5" class="ad top5-ad hidden nocontent robots-nocontent"></div>
                        <div class="search-overlay"></div>
                        <aside id="media-viewer" class="media-viewer" style="display:none;">
                           <button class="button close-button"><i class="icon"></i><span class="visually-hidden">Close this overlay</span></button>
                           <h2 class="media-viewer-headline"></h2>
                           <div class="media-viewer-wrapper"></div>
                           <nav class="media-viewer-nav">
                              <div class="media-viewer-counter"></div>
                              <div class="media-viewer-previous">
                                 <span class="visually-hidden">Go to previous</span>
                                 <div class="arrow arrow-left">
                                    <div class="arrow-conceal"></div>
                                 </div>
                              </div>
                              <div class="media-viewer-next">
                                 <span class="visually-hidden">Go to next</span>
                                 <div class="arrow arrow-right">
                                    <div class="arrow-conceal"></div>
                                 </div>
                              </div>
                           </nav>
                           <div class="loader-container" style="display:none;">
                              <div class="loader loader-t-logo-32x32-ecedeb-ffffff"><span class="visually-hidden">Loading...</span></div>
                           </div>
                        </aside>
                     </main>
                     <!-- close main -->
                     <section id="site-index" class="site-index">
                        <header class="section-header">
                           <p class="user-action"><a href="http://www.nytimes.com/">Go to Home Page »</a></p>
                           <h2 class="section-heading">
                              <span class="visually-hidden">Site Index</span>
                              <a id="site-index-branding-link" href="http://www.nytimes.com/">
                                 <span class="visually-hidden">The New York Times</span>
                                 <svg class="nyt-logo" width="185" height="26" role="img" aria-label="The New York Times">
                                    <image width="185" height="26" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://a1.nyt.com/assets/article/20161012-082752/images/foundation/logos/nyt-logo-185x26.svg" src="https://a1.nyt.com/assets/article/20161012-082752/images/foundation/logos/nyt-logo-185x26.png" alt="The New York Times" border="0"></image>
                                 </svg>
                                 <img src="https://a1.nyt.com/assets/article/20161012-082752/images/foundation/logos/nyt-logo-185x26.png" class="nyt-logo-print" alt="The New York Times">
                              </a>
                           </h2>
                           <script>window.magnum.writeLogo('small', 'https://a1.nyt.com/assets/article/20161012-082752/images/foundation/logos/', '', '', 'standard', 'site-index-branding-link', '');</script>
                        </header>
                        <nav id="site-index-navigation" class="site-index-navigation" role="navigation">
                           <h2 class="visually-hidden">Site Index Navigation</h2>
                           <div class="split-6-layout layout">
                              <div class="column">
                                 <h3 class="menu-heading">News</h3>
                                 <ul class="menu">
                                    <li>
                                       <a href="http://www.nytimes.com/pages/world/index.html">World</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/national/index.html">U.S.</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/politics/index.html">Politics</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/nyregion/index.html">N.Y.</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/business/index.html">Business</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/technology/index.html">Tech</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/section/science">Science</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/health/index.html">Health</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/sports/index.html">Sports</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/education/index.html">Education</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/obituaries/index.html">Obituaries</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/todayspaper/index.html">Today's Paper</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/corrections/index.html">Corrections</a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close column -->
                              <div class="column">
                                 <h3 class="menu-heading">Opinion</h3>
                                 <ul class="menu">
                                    <li>
                                       <a href="http://www.nytimes.com/pages/opinion/index.html">Today's Opinion</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/opinion/index.html#columnists">Op-Ed Columnists</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/opinion/index.html#editorials">Editorials</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/opinion/index.html#contributing">Contributing Writers</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/opinion/index.html#op-ed">Op-Ed Contributors</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/opinion/index.html#opinionator">Opinionator</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/opinion/index.html#letters">Letters</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/opinion/index.html#sundayreview">Sunday Review</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/opinion/index.html#takingNote">Taking Note</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/roomfordebate">Room for Debate</a>
                                    </li>
                                    <li>
                                       <a href="http://topics.nytimes.com/top/opinion/thepubliceditor/index.html">Public Editor</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/video/opinion">Video: Opinion</a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close column -->
                              <div class="column">
                                 <h3 class="menu-heading">Arts</h3>
                                 <ul class="menu">
                                    <li>
                                       <a href="http://www.nytimes.com/pages/arts/index.html">Today's Arts</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/arts/design/index.html">Art &amp; Design</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/books/index.html">Books</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/arts/dance/index.html">Dance</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/movies/index.html">Movies</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/arts/music/index.html">Music</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/events/">N.Y.C. Events Guide</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/arts/television/index.html">Television</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/theater/index.html">Theater</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/video/arts">Video: Arts</a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close column -->
                              <div class="column">
                                 <h3 class="menu-heading">Living</h3>
                                 <ul class="menu">
                                    <li>
                                       <a href="http://www.nytimes.com/pages/automobiles/index.html">Automobiles</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/crosswords/">Crossword</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/dining/index.html">Food</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/education/index.html">Education</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/fashion/index.html">Fashion &amp; Style</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/health/index.html">Health</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/section/jobs">Jobs</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/magazine/index.html">Magazine</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/events/">N.Y.C. Events Guide</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/section/realestate">Real Estate</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/section/t-magazine">T Magazine</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/section/travel">Travel</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/fashion/weddings/index.html">Weddings &amp; Celebrations</a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close column -->
                              <div class="column">
                                 <h3 class="menu-heading">Listings &amp; More</h3>
                                 <ul class="menu">
                                    <li>
                                       <a href="http://www.nytimes.com/ref/classifieds/">Classifieds</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/marketing/tools-and-services/">Tools &amp; Services</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/topics/">Times Topics</a>
                                    </li>
                                    <li>
                                       <a href="http://topics.nytimes.com/top/opinion/thepubliceditor/index.html">Public Editor</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/events/">N.Y.C. Events Guide</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/interactive/blogs/directory.html">Blogs</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/pages/multimedia/index.html">Multimedia</a>
                                    </li>
                                    <li>
                                       <a href="http://lens.blogs.nytimes.com/">Photography</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/video">Video</a>
                                    </li>
                                    <li>
                                       <a href="https://www.nytimes.com/store/?&amp;t=qry542&amp;utm_source=nytimes&amp;utm_medium=HPB&amp;utm_content=hp_browsetree&amp;utm_campaign=NYT-HP&amp;module=SectionsNav&amp;action=click&amp;region=TopBar&amp;version=BrowseTree&amp;contentCollection=NYT%20Store&amp;contentPlacement=2&amp;pgtype=Homepage">NYT Store</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/times-journeys/?utm_source=nytimes&amp;utm_medium=HPLink&amp;utm_content=hp_browsetree&amp;utm_campaign=NYT-HP">Times Journeys</a>
                                    </li>
                                    <li>
                                       <a href="http://international.nytimes.com/subscriptions/inyt/lp87JWF.html?campaignId=64YFR">Subscribe</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/membercenter">Manage My Account</a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close column -->
                              <div class="column last-column">
                                 <h3 class="menu-heading">Subscribe</h3>
                                 <ul class="menu primary-menu">
                                    <li class="menu-label">Subscribe</li>
                                    <li class="home-delivery">
                                       <i class="icon sprite-icon"></i>
                                       <a href="https://subscribe.inyt.com">INYT Home Delivery</a>
                                    </li>
                                    <li class="digital-subscriptions">
                                       <i class="icon sprite-icon"></i>
                                       <a href="http://international.nytimes.com/digileftnav">Digital Subscriptions</a>
                                    </li>
                                    <li class="times-premier">
                                       <i class="icon sprite-icon"></i>
                                       <a href="http://www.nytimes.com/tpnav">Times Insider</a>
                                    </li>
                                    <li class="nyt-crossword last-item">
                                       <i class="icon sprite-icon"></i>
                                       <a id="nyt-crossword" href="//www.nytimes.com/subscriptions/games/lp897H9.html?campaignId=49W8Y">Crossword</a>
                                    </li>
                                 </ul>
                                 <ul class="menu secondary-menu">
                                    <li>
                                       <a href="http://www.nytimes.com/marketing/newsletters">Email Newsletters</a>
                                    </li>
                                    <li>
                                       <a href="https://myaccount.nytimes.com/mem/tnt.html">Alerts</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/giftleftnav">Gift Subscriptions</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/corporateleftnav">Corporate Subscriptions</a>
                                    </li>
                                    <li>
                                       <a href="http://www.nytimes.com/educationleftnav">Education Rate</a>
                                    </li>
                                 </ul>
                                 <ul class="menu secondary-menu">
                                    <li>
                                       <a href="http://www.nytimes.com/services/mobile/index.html">Mobile Applications</a>
                                    </li>
                                    <li>
                                       <a href="http://eedition.nytimes.com/cgi-bin/signup.cgi?cc=37FYY">Replica Edition</a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close column -->
                           </div>
                           <!-- close split-6-layout -->
                        </nav>
                        <!-- close nav -->
                     </section>
                     <!-- close site-index -->
                     <footer id="page-footer" class="page-footer" role="contentinfo">
                        <nav>
                           <h2 class="visually-hidden">Site Information Navigation</h2>
                           <ul>
                              <li>
                                 <a href="http://www.nytimes.com/content/help/rights/copyright/copyright-notice.html" itemprop="copyrightNotice">
                                    © <span itemprop="copyrightYear">2016</span>
                                    <span itemprop="copyrightHolder provider sourceOrganization" itemscope="" itemtype="http://schema.org/Organization" itemid="http://www.nytimes.com">
                                       <span itemprop="name"> The New York Times Company</span>
                                       <meta itemprop="tickerSymbol" content="NYSE NYT">
                                    </span>
                                 </a>
                              </li>
                              <li class="visually-hidden"><a href="http://www.nytimes.com">Home</a></li>
                              <li class="visually-hidden"><a href="http://query.nytimes.com/search/sitesearch/#/">Search</a></li>
                              <li class="visually-hidden">Accessibility concerns? Email us at <a href="mailto:accessibility@nytimes.com">accessibility@nytimes.com</a>. We would love to hear from you.</li>
                              <li class="wide-viewport-item"><a href="http://www.nytimes.com/ref/membercenter/help/infoservdirectory.html">Contact Us</a></li>
                              <li class="wide-viewport-item"><a href="http://www.nytco.com/careers">Work With Us</a></li>
                              <li class="wide-viewport-item"><a href="http://www.nytimes.whsites.net/mediakit">Advertise</a></li>
                              <li class="wide-viewport-item"><a href="http://www.nytimes.com/content/help/rights/privacy/policy/privacy-policy.html#pp">Your Ad Choices</a></li>
                              <li><a href="http://www.nytimes.com/privacy">Privacy</a></li>
                              <li><a href="http://www.nytimes.com/ref/membercenter/help/agree.html" itemprop="usageTerms">Terms of Service</a></li>
                              <li class="wide-viewport-item last-item"><a href="http://www.nytimes.com/content/help/rights/sale/terms-of-sale.html">Terms of Sale</a></li>
                           </ul>
                        </nav>
                        <nav class="last-nav">
                           <h2 class="visually-hidden">Site Information Navigation</h2>
                           <ul>
                              <li><a href="http://spiderbites.nytimes.com">Site Map</a></li>
                              <li><a href="http://www.nytimes.com/membercenter/sitehelp.html">Help</a></li>
                              <li><a href="https://myaccount.nytimes.com/membercenter/feedback.html">Site Feedback</a></li>
                              <li class="wide-viewport-item last-item"><a href="http://international.nytimes.com/subscriptions/inyt/lp87JWF.html?campaignId=64YFR">Subscriptions</a></li>
                           </ul>
                        </nav>
                     </footer>
                  </div>
                  <!-- close page -->
               </div>
               <!-- close shell -->
               <script>
                  require(['foundation/main'], function () {
                      require(['story/main']);
                      require(['jquery/nyt', 'foundation/views/page-manager'], function ($, pageManager) {
                          if (window.location.search.indexOf('disable_tagx') > 0) {
                              return;
                          }
                          $(document).ready(function () {
                              require(['https://a1.nyt.com/analytics/tagx-simple.min.js'], function () {
                                  pageManager.trackingFireEventQueue();
                              });
                          });
                      });
                  });
               </script>
               <div id="Inv1" class="ad inv1-ad hidden"></div>
               <div id="Inv2" class="ad inv2-ad hidden"></div>
               <div id="Inv3" class="ad inv3-ad hidden"></div>
               <div id="ab1" class="ad ab1-ad hidden"></div>
               <div id="ab2" class="ad ab2-ad hidden"></div>
               <div id="ab3" class="ad ab3-ad hidden"></div>
               <div id="prop1" class="ad prop1-ad hidden"></div>
               <div id="prop2" class="ad prop2-ad hidden"></div>
               <div id="Anchor" class="ad anchor-ad hidden"></div>
               <div id="ADX_CLIENTSIDE" class="ad adx-clientside-ad hidden"></div>
               <div id="user-settings-modal" class="modal-container user-settings-modal-container" style="display: none;">
                  <div class="overlay" style="display: none;"></div>
                  <div class="modal user-settings-modal " style="width: 260px;" role="dialog" aria-labelledby="user-settings-modal-modal-heading" tabindex="-1">
                     <div class="modal-header">
                        <h3 class="modal-heading" id="user-settings-modal-modal-heading"></h3>
                     </div>
                     <div class="modal-content">
                        <div class="menu edition-menu">
                           <h5 class="modal-heading">Edition</h5>
                           <ul>
                              <li><a href="http://www.nytimes.com" data-edition="us" class="selected">English</a></li>
                              <li><a href="http://cn.nytimes.com" data-edition="chinese">中文 (Chinese)</a></li>
                              <li><a href="http://www.nytimes.com/es/" data-edition="spanish">Español</a></li>
                           </ul>
                        </div>
                        <div class="menu help-menu">
                           <h5 class="modal-heading">Help</h5>
                           <ul>
                              <li><a href="http://www.nytimes.com/content/help/front.html">FAQ</a></li>
                              <li><a href="http://www.nytimes.com/content/help/contact/directory.html">Contact Us</a></li>
                           </ul>
                        </div>
                        <div class="menu type-sizer-menu">
                           <h5 class="modal-heading">Type Size</h5>
                           <ul>
                              <li data-size="small" class="type-sizer-small type-size-selected"><a href="javascript:;">A <span class="visually-hidden">Type size small</span></a></li>
                              <li data-size="medium" class="type-sizer-medium"><a href="javascript:;">A <span class="visually-hidden">Type size medium</span></a></li>
                              <li data-size="large" class="type-sizer-large"><a href="javascript:;">A <span class="visually-hidden">Type size large</span></a></li>
                           </ul>
                        </div>
                     </div>
                     <div class="modal-footer">
                     </div>
                     <button type="button" class="modal-close hidden" aria-disabled="false"><i class="icon"></i><span class="visually-hidden">Close this modal window</span></button>
                     <div class="modal-pointer modal-pointer-up-right">
                        <div class="modal-pointer-conceal"></div>
                     </div>
                  </div>
               </div>
               <div id="user-name-modal" class="modal-container user-name-modal-container" style="display: none;">
                  <div class="overlay" style="display: none;"></div>
                  <div class="modal user-name-modal " style="width: 260px;" role="dialog" aria-labelledby="user-name-modal-modal-heading" tabindex="-1">
                     <div class="modal-header">
                        <h3 class="modal-heading" id="user-name-modal-modal-heading">
                           <span class="user-name-subscription">
                           <span class="user-name"></span>
                           </span>
                        </h3>
                     </div>
                     <div class="modal-content">
                        <ul>
                           <li><a href="javascript:;" class="user-profile-button">Edit Profile</a></li>
                           <li><a href="https://myaccount.nytimes.com/membercenter/myaccount.html">My Account</a></li>
                           <li><a href="https://myaccount.nytimes.com/mem/manage_billing.html">My Billing Information</a></li>
                           <li><a href="http://www.nytimes.com/saved">My Saved Items</a></li>
                           <li><button class="button log-out-button">Log Out</button></li>
                        </ul>
                     </div>
                     <div class="modal-footer">
                     </div>
                     <button type="button" class="modal-close hidden" aria-disabled="false"><i class="icon"></i><span class="visually-hidden">Close this modal window</span></button>
                     <div class="modal-pointer modal-pointer-up-right">
                        <div class="modal-pointer-conceal"></div>
                     </div>
                  </div>
               </div>
               <div id="login-modal" class="modal-container login-modal-container" style="display: none;">
                  <div class="overlay" style="display: block;"></div>
                  <div class="modal login-modal account-modal" style="width: undefined;" role="dialog" aria-labelledby="login-modal-modal-heading" tabindex="-1">
                     <div class="modal-header">
                        <h3 class="modal-heading" id="login-modal-modal-heading">Log in</h3>
                        <h4 class="modal-subheading">To save articles or get newsletters, alerts or recommendations – all free.</h4>
                     </div>
                     <div class="modal-content">
                        <div class="buttons">
                           <button id="facebook-oauth-button-login-modal" data-provider-name="facebook" class="button oauth-button facebook-oauth-button">
                           <i class="icon sprite-icon"></i>
                           <span class="button-text">Log in with Facebook</span>
                           </button>
                           <button id="google-oauth-button-login-modal" data-provider-name="google" class="button oauth-button google-oauth-button">
                           <i class="icon sprite-icon"></i>
                           <span class="button-text">Log in with Google</span>
                           </button>
                        </div>
                        <!-- close buttons -->
                        <div class="separator">
                           <span class="separator-text">OR</span>
                        </div>
                        <div class="login-form-control form-control">
                           <form id="login-form" class="login-form" role="form" method="post" action="https://myaccount.nytimes.com/auth/login?URI=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html&amp;OQ=hp%26action%3Dclick%26pgtype%3DHomepage%26clickSource%3Dimage%26module%3Dphoto-spot-region%26region%3Dtop-news%26WT.nav%3Dtop-news">
                              <div class="control">
                                 <div class="label-container visually-hidden">
                                    <label for="login-email" id="login-email-label">Email address</label>
                                 </div>
                                 <div class="field-container">
                                    <input type="text" id="login-email" name="userid" class="text login-email" placeholder="Email address" aria-labelledby="login-email-label" aria-required="true">
                                    <button type="button" class="button clear-button" tabindex="-1" aria-describedby="clear-email-description"><i class="icon"></i><span class="visually-hidden" id="clear-email-description">Clear this text input</span></button>
                                 </div>
                              </div>
                              <div class="control">
                                 <div class="label-container visually-hidden">
                                    <label for="login-password" id="login-password-label">Password</label>
                                 </div>
                                 <div class="field-container">
                                    <input type="password" id="login-password" name="password" class="text login-password" placeholder="Password" data-type="password" aria-labelledby="login-password-label" aria-required="true">
                                    <button type="button" class="button clear-button" tabindex="-1" aria-describedby="clear-password-description"><i class="icon"></i><span class="visually-hidden" id="clear-password-description">Clear this text input</span></button>
                                 </div>
                              </div>
                              <div class="control user-action-control layout-horizontal">
                                 <div class="control checkbox-control">
                                    <div class="field-container">
                                       <input type="checkbox" id="login-remember-checkbox" name="login-remember" class="checkbox login-remember" checked="checked" aria-labelledby="login-remember-label" aria-checked="true" value="">
                                    </div>
                                    <div class="label-container">
                                       <label for="login-remember" class="checkbox-label" id="login-remember-label">Remember me</label>
                                    </div>
                                 </div>
                                 <p class="form-hint password-hint"><a href="https://myaccount.nytimes.com/seg/forgot-password?EXIT_URI=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html%3Fhp%26action%3Dclick%26pgtype%3DHomepage%26clickSource%3Dimage%26module%3Dphoto-spot-region%26region%3Dtop-news%26WT.nav%3Dtop-news">Forgot password?</a></p>
                              </div>
                              <div class="control">
                                 <p class="disclaimer"><a href="http://www.nytimes.com/content/help/rights/terms/terms-of-service.html">Terms of Service</a> <a href="http://www.nytimes.com/content/help/rights/privacy/policy/privacy-policy.html">Privacy Policy</a></p>
                              </div>
                              <div class="control button-control">
                                 <button id="login-send-button" class="button login-button">Log in</button>
                              </div>
                              <input name="is_continue" value="1" type="hidden">
                              <input id="account-form-token" name="token" value="" type="hidden">
                              <input id="account-form-expiration" name="expires" value="" type="hidden">
                              <input id="login-remember" name="remember" value="1" type="hidden">
                           </form>
                        </div>
                        <!-- close login-form-control -->
                     </div>
                     <div class="modal-footer">
                        <p class="user-action registration-modal-trigger">Don’t have an account? <a href="javascript:;">Sign Up</a></p>
                     </div>
                     <button type="button" class="modal-close " aria-disabled="false"><i class="icon"></i><span class="visually-hidden">Close this modal window</span></button>
                     <div class="modal-pointer modal-pointer-fixed">
                        <div class="modal-pointer-conceal"></div>
                     </div>
                  </div>
               </div>
               <div id="registration-modal" class="modal-container registration-modal-container" style="display: none;">
                  <div class="overlay" style="display: block;"></div>
                  <div class="modal registration-modal account-modal" style="width: undefined;" role="dialog" aria-labelledby="registration-modal-modal-heading" tabindex="-1">
                     <div class="modal-header">
                        <h3 class="modal-heading" id="registration-modal-modal-heading">Sign up</h3>
                        <h4 class="modal-subheading">To save articles or get newsletters, alerts or recommendations – all free.</h4>
                     </div>
                     <div class="modal-content">
                        <div class="buttons">
                           <button id="facebook-oauth-button-registration-modal" data-provider-name="facebook" class="button oauth-button facebook-oauth-button">
                           <i class="icon sprite-icon"></i>
                           <span class="button-text">Sign up with Facebook</span>
                           </button>
                           <button id="google-oauth-button-registration-modal" data-provider-name="google" class="button oauth-button google-oauth-button">
                           <i class="icon sprite-icon"></i>
                           <span class="button-text">Sign up with Google</span>
                           </button>
                        </div>
                        <!-- close buttons -->
                        <div class="separator">
                           <span class="separator-text">OR</span>
                        </div>
                        <div class="registration-form-control form-control">
                           <form id="registration-form" class="registration-form" role="form" method="post" action="https://myaccount.nytimes.com/register?URI=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html&amp;OQ=hp%26action%3Dclick%26pgtype%3DHomepage%26clickSource%3Dimage%26module%3Dphoto-spot-region%26region%3Dtop-news%26WT.nav%3Dtop-news">
                              <div class="control">
                                 <div class="label-container visually-hidden">
                                    <label for="register-email" id="register-email-label">Email address</label>
                                 </div>
                                 <div class="field-container">
                                    <input type="email" id="register-email" name="email_address" class="text register-email" placeholder="Email address" aria-labelledby="register-email-label" aria-required="true">
                                    <button type="button" class="button clear-button" tabindex="-1" aria-describedby="clear-email-description"><i class="icon"></i><span class="visually-hidden" id="clear-email-description">Clear this text input</span></button>
                                 </div>
                              </div>
                              <!-- close control -->
                              <div class="control">
                                 <div class="label-container visually-hidden">
                                    <label for="register-password" id="register-password-label">Password</label>
                                 </div>
                                 <div class="field-container">
                                    <input type="password" id="register-password" name="password1" class="text register-password" placeholder="Password" data-type="password" aria-labelledby="register-password-label" aria-required="true">
                                    <button type="button" class="button clear-button" tabindex="-1" aria-describedby="clear-password-description"><i class="icon"></i><span class="visually-hidden" id="clear-password-description">Clear this text input</span></button>
                                 </div>
                              </div>
                              <!-- close control -->
                              <div class="control">
                                 <div class="label-container visually-hidden">
                                    <label for="retype-password" id="retype-password-label">Retype password</label>
                                 </div>
                                 <div class="field-container">
                                    <input type="password" id="retype-password" name="password2" class="text retype-password" placeholder="Retype password" data-type="password" aria-labelledby="retype-password-label" aria-required="true">
                                    <button type="button" class="button clear-button" tabindex="-1" aria-describedby="clear-retyped-password-description"><i class="icon"></i><span class="visually-hidden" id="clear-retyped-password-description">Clear this text input</span></button>
                                 </div>
                              </div>
                              <!-- close control -->
                              <div class="control layout-horizontal">
                                 <p class="form-hint">
                                    By signing up, you agree to receive updates and special offers for The New York Times’s products and services. You may unsubscribe at any time.
                                 </p>
                              </div>
                              <div class="control">
                                 <p class="disclaimer"><a href="http://www.nytimes.com/content/help/rights/terms/terms-of-service.html">Terms of Service</a> <a href="http://www.nytimes.com/content/help/rights/privacy/policy/privacy-policy.html">Privacy Policy</a></p>
                              </div>
                              <div class="control button-control">
                                 <button id="register-send-button" class="button register-button">Create Account</button>
                              </div>
                              <input name="is_continue" value="1" type="hidden">
                              <input id="account-form-token" name="token" value="" type="hidden">
                              <input id="account-form-expiration" name="expires" value="" type="hidden">
                              <input id="account-form-subscribe" name="subscribe[]" type="hidden" value="MM">
                           </form>
                        </div>
                        <!-- close registration-form-control -->
                     </div>
                     <div class="modal-footer">
                        <p class="user-action login-modal-trigger">Already have an account? <a href="javascript:;">Log In</a></p>
                     </div>
                     <button type="button" class="modal-close " aria-disabled="false"><i class="icon"></i><span class="visually-hidden">Close this modal window</span></button>
                     <div class="modal-pointer modal-pointer-fixed">
                        <div class="modal-pointer-conceal"></div>
                     </div>
                  </div>
               </div>
               <script type="text/javascript" async="true" src="https://s.tagsrvcs.com/2/818492/analytics.js?pp=www.nytimes.com&amp;sn=World&amp;c1=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html%3Fhp%26action%3Dclick%26pgtype%3DHomepage%26clickSource%3Dimage%26module%3Dphoto-spot-region%26region%3Dtop-news%26WT.nav%3Dtop-news&amp;ui=1180cfb7ed73282dd3d83bf93f696f15&amp;dt=8184921433871988867000"></script>
               <div id="DYSCR"><iframe name="DY-iframe" id="DY-iframe" height="1px" width="1px" style="display: none;"></iframe></div>
               <script type="text/javascript" src="//cdn.optimizely.com/js/3338050995.js"></script>
               <div id="user-profile-modal" class="modal-container user-profile-modal-container" style="display: none;">
                  <div class="overlay" style="display: block;"></div>
                  <div class="modal user-profile-modal " style="width: undefined;" role="dialog" aria-labelledby="user-profile-modal-modal-heading" tabindex="-1">
                     <div class="modal-header">
                        <h3 class="modal-heading" id="user-profile-modal-modal-heading">Edit Profile</h3>
                        <h4 class="modal-subheading">Your profile is public. It will appear with any comments you leave on NYTimes.com</h4>
                     </div>
                     <div class="modal-content">
                        <div class="user-profile-form-control form-control user-profile-form-control-loading">
                        </div>
                        <!-- close user-profile-form-control -->
                     </div>
                     <div class="modal-footer">
                     </div>
                     <button type="button" class="modal-close " aria-disabled="false"><i class="icon"></i><span class="visually-hidden">Close this modal window</span></button>
                     <div class="modal-pointer modal-pointer-fixed">
                        <div class="modal-pointer-conceal"></div>
                     </div>
                  </div>
               </div>
               <div id="navigation-modal" class="modal-container navigation-modal-container" style="display: none;">
                  <div class="overlay" style="display: none;"></div>
                  <div class="modal navigation-modal " style="width: undefined;" role="dialog" aria-labelledby="navigation-modal-modal-heading" tabindex="-1">
                     <div class="modal-header">
                        <h3 class="modal-heading" id="navigation-modal-modal-heading"></h3>
                     </div>
                     <div class="modal-content">
                        <div class="secondary-container">
                           <div class="secondary-container">
                              <div class="header">
                                 <h5 class="section-heading"><a href="" role="menuitem"></a></h5>
                              </div>
                              <div class="section " data-parent="navId-9A43D8FC-F4CF-44D9-9B34-138D30468F8F">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-350E94CC-926C-4D2A-9DB4-FD9ED99A66DC" class=" " role="menuitem" href="http://www.nytimes.com/pages/world/africa/index.html">
                                       Africa
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-5A94A97E-037B-4C6B-A88D-741B06663078" class=" " role="menuitem" href="http://www.nytimes.com/pages/world/americas/index.html">
                                       Americas
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-881A1D77-D6D7-4AC3-AAC2-4C279C20DD66" class=" " role="menuitem" href="http://www.nytimes.com/pages/world/asia/index.html">
                                       Asia Pacific
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-D38BAA6D-F26D-4B3E-BF25-CC798E6C5F55" class=" " role="menuitem" href="http://www.nytimes.com/pages/world/europe/index.html">
                                       Europe
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-108390AA-728E-41EB-B9B5-14EDFBAE7D20" class=" " role="menuitem" href="http://www.nytimes.com/pages/world/middleeast/index.html">
                                       Middle East
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-AE2B2F51-EBDD-4153-A71A-922F9635C5A4" class=" " role="menuitem" href="http://atwar.blogs.nytimes.com/">
                                       At War
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-947EEB56-B266-44F4-A538-36200844547B" class=" " role="menuitem" href="http://sinosphere.blogs.nytimes.com/">
                                       Sinosphere
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close secondary 9A43D8FC-F4CF-44D9-9B34-138D30468F8F sections -->
                              <div class="section " data-parent="navId-23FD6C8B-62D5-4CEA-A331-6C2A9A1223BE">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-C7303E0D-6EB2-4FD3-B968-530EF9F38EB1" class=" " role="menuitem" href="http://www.nytimes.com/pages/education/index.html">
                                       Education
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-D64FAE4C-4425-4E5A-B898-6C8CB59F9957" class=" " role="menuitem" href="http://www.nytimes.com/upshot/">
                                       The Upshot
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close secondary 23FD6C8B-62D5-4CEA-A331-6C2A9A1223BE sections -->
                              <div class="section " data-parent="navId-80E6DEE6-87E4-4AD0-9152-14FA6B07E5AB">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-BB53FEFA-F91E-45B4-83D7-477579A87DF3" class=" " role="menuitem" href="http://www.nytimes.com/politics/first-draft/">
                                       First Draft
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-78CE290F-672B-4BC7-BD4E-67DA85BCAC4E" class=" " role="menuitem" href="http://elections.nytimes.com/">
                                       Elections
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-D64FAE4C-4425-4E5A-B898-6C8CB59F9957" class=" " role="menuitem" href="http://www.nytimes.com/upshot/">
                                       The Upshot
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close secondary 80E6DEE6-87E4-4AD0-9152-14FA6B07E5AB sections -->
                              <div class="section " data-parent="navId-C4DC8C0C-E148-4201-BF10-82F1C903DBFB">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-2D1C1EB8-E0D9-40A9-8D59-3908DCF5C9BD" class=" " role="menuitem" href="http://www.nytimes.com/events/">
                                       Events
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close secondary C4DC8C0C-E148-4201-BF10-82F1C903DBFB sections -->
                              <div class="section " data-parent="navId-104D1E63-9701-497B-8CF4-A4D120C9014E">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-71301FE1-FE94-4AF4-978B-39B2D2C59D31" class=" " role="menuitem" href="http://www.nytimes.com/pages/business/dealbook/index.html">
                                       DealBook
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-2848A7AC-A33D-4352-B1FC-A465B81CD4F1" class=" " role="menuitem" href="http://www.nytimes.com/pages/business/economy/index.html">
                                       Economy
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-E1B05D9E-B6F8-46DB-89E5-06F2205C8085" class=" " role="menuitem" href="http://www.nytimes.com/pages/business/energy-environment/index.html">
                                       Energy
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-4A7070FF-9307-4094-AE79-910158959A60" class=" " role="menuitem" href="http://markets.on.nytimes.com/">
                                       Markets
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-C691FB48-A7E8-44FB-9AAA-13D91863D336" class=" " role="menuitem" href="http://www.nytimes.com/pages/business/media/index.html">
                                       Media
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-AD2AE740-D1A5-4EDB-970D-F56370072B09" class=" " role="menuitem" href="http://www.nytimes.com/pages/business/smallbusiness/index.html">
                                       Entrepreneurship
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-ED7B8594-44CE-4D37-A58B-1CDAA19774E4" class=" " role="menuitem" href="http://www.nytimes.com/pages/your-money/index.html">
                                       Your Money
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-0A13AF9D-C7B5-4E8A-B9BC-15AB4B572C94" class=" " role="menuitem" href="http://www.nytimes.com/pages/automobiles/index.html">
                                       Automobiles
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close secondary 104D1E63-9701-497B-8CF4-A4D120C9014E sections -->
                              <div class="section " data-parent="navId-A257D89A-0D3C-40AF-9C34-1A25A7947D94">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-71301FE1-FE94-4AF4-978B-39B2D2C59D31" class=" " role="menuitem" href="http://www.nytimes.com/pages/business/dealbook/index.html">
                                       DealBook
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-2848A7AC-A33D-4352-B1FC-A465B81CD4F1" class=" " role="menuitem" href="http://www.nytimes.com/pages/business/economy/index.html">
                                       Economy
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-E1B05D9E-B6F8-46DB-89E5-06F2205C8085" class=" " role="menuitem" href="http://www.nytimes.com/pages/business/energy-environment/index.html">
                                       Energy
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-4A7070FF-9307-4094-AE79-910158959A60" class=" " role="menuitem" href="http://markets.on.nytimes.com/">
                                       Markets
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-C691FB48-A7E8-44FB-9AAA-13D91863D336" class=" " role="menuitem" href="http://www.nytimes.com/pages/business/media/index.html">
                                       Media
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-AD2AE740-D1A5-4EDB-970D-F56370072B09" class=" " role="menuitem" href="http://www.nytimes.com/pages/business/smallbusiness/index.html">
                                       Entrepreneurship
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-ED7B8594-44CE-4D37-A58B-1CDAA19774E4" class=" " role="menuitem" href="http://www.nytimes.com/pages/your-money/index.html">
                                       Your Money
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-0A13AF9D-C7B5-4E8A-B9BC-15AB4B572C94" class=" " role="menuitem" href="http://www.nytimes.com/pages/automobiles/index.html">
                                       Automobiles
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close secondary A257D89A-0D3C-40AF-9C34-1A25A7947D94 sections -->
                              <div class="section " data-parent="navId-AD8090D7-4137-4D71-84C8-70DA3BD89778">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-9568A8E4-DD00-4A19-9357-55F8E84ADDB5" class="domestic expandable" role="menuitem" href="http://www.nytimes.com/pages/opinion/index.html#columnists" aria-haspopup="true" aria-expanded="false">
                                          Op-Ed Columnists
                                          <div class="arrow arrow-right">
                                             <div class="arrow-conceal"></div>
                                          </div>
                                          <div class="arrow arrow-left">
                                             <div class="arrow-conceal"></div>
                                          </div>
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-6E604B7F-ACE7-4564-9203-0BD4CB02F419" class="domestic " role="menuitem" href="http://www.nytimes.com/pages/opinion/index.html#editorials">
                                       Editorials
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-A98552D7-2525-41F0-92E5-DFFA2F9619A9" class="domestic " role="menuitem" href="http://www.nytimes.com/pages/opinion/index.html#contributing">
                                       Contributing Writers
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-B3CE1F6E-B530-4C07-9B1C-98A1F9406C06" class="domestic " role="menuitem" href="http://www.nytimes.com/pages/opinion/index.html#op-ed">
                                       Op-Ed Contributors
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-D6E51A50-AA05-4E81-987C-3E0AF5DABBB4" class=" " role="menuitem" href="http://www.nytimes.com/pages/opinion/index.html#opinionator">
                                       Opinionator
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-7A239778-088E-4DD8-BEBF-649172041293" class="domestic " role="menuitem" href="http://www.nytimes.com/pages/opinion/index.html#letters">
                                       Letters
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-67D7F2A2-B495-4FFC-9478-1CE1965601D5" class=" " role="menuitem" href="http://www.nytimes.com/pages/opinion/index.html#sundayreview">
                                       Sunday Review
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-136660BD-D661-4731-A1D7-03204BED7923" class="domestic " role="menuitem" href="http://www.nytimes.com/pages/opinion/index.html#takingNote">
                                       Taking Note
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-4FB3EADA-B7BB-4587-AAB0-9F3909DF4ED0" class="domestic " role="menuitem" href="http://www.nytimes.com/roomfordebate">
                                       Room for Debate
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-8F7EBC39-9ED0-4603-8BCA-E9618B8A08A1" class=" " role="menuitem" href="http://topics.nytimes.com/top/opinion/thepubliceditor/index.html">
                                       Public Editor
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close secondary AD8090D7-4137-4D71-84C8-70DA3BD89778 sections -->
                              <div class="section " data-parent="navId-09736473-CB3F-4B2F-9772-3AF128ABE12D">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-2312753B-E860-46C4-B544-1C0F70ABF41F" class="international expandable" role="menuitem" href="http://www.nytimes.com/pages/opinion/international/index.html#columnistsGlobal" aria-haspopup="true" aria-expanded="false">
                                          Op-Ed Columnists
                                          <div class="arrow arrow-right">
                                             <div class="arrow-conceal"></div>
                                          </div>
                                          <div class="arrow arrow-left">
                                             <div class="arrow-conceal"></div>
                                          </div>
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-1F55AAA1-8287-4C9E-91B8-4402B7E3C855" class="international " role="menuitem" href="http://www.nytimes.com/pages/opinion/international/index.html#editorialsGlobal">
                                       Editorials
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-6CD3A7AF-B060-4251-B2A6-E3A1B8B09982" class="international " role="menuitem" href="http://www.nytimes.com/pages/opinion/international/index.html#contributing">
                                       Contributing Writers
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-FD915915-123F-4EEE-A0D1-58B15C0C545F" class="international " role="menuitem" href="http://www.nytimes.com/pages/opinion/international/index.html#op-edGlobal">
                                       Op-Ed Contributors
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-D6E51A50-AA05-4E81-987C-3E0AF5DABBB4" class=" " role="menuitem" href="http://www.nytimes.com/pages/opinion/index.html#opinionator">
                                       Opinionator
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-D4344F1A-7552-4908-84E8-E3120AE3F7B2" class="international " role="menuitem" href="http://www.nytimes.com/pages/opinion/international/index.html#letters">
                                       Letters
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-67D7F2A2-B495-4FFC-9478-1CE1965601D5" class=" " role="menuitem" href="http://www.nytimes.com/pages/opinion/index.html#sundayreview">
                                       Sunday Review
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-C94AF19E-C233-4966-BF29-7F1103B46A62" class="international " role="menuitem" href="http://www.nytimes.com/pages/opinion/international/index.html#takingNote">
                                       Taking Note
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-C46DD884-B4C6-43FE-AAF0-658ED47F6FA5" class="international " role="menuitem" href="http://www.nytimes.com/roomfordebate">
                                       Room for Debate
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-8F7EBC39-9ED0-4603-8BCA-E9618B8A08A1" class=" " role="menuitem" href="http://topics.nytimes.com/top/opinion/thepubliceditor/index.html">
                                       Public Editor
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close secondary 09736473-CB3F-4B2F-9772-3AF128ABE12D sections -->
                              <div class="section " data-parent="navId-78FBAD45-31A9-4EC7-B172-7D62A2B9955E">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-157C94B4-918B-48FA-9E56-AA6347F2F44E" class=" " role="menuitem" href="http://bits.blogs.nytimes.com/">
                                       Bits
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-65229E4E-DAD7-459F-AFD3-2AB6D0374FFD" class=" " role="menuitem" href="http://www.nytimes.com/pages/technology/personaltech/index.html">
                                       Personal Tech
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close secondary 78FBAD45-31A9-4EC7-B172-7D62A2B9955E sections -->
                              <div class="section " data-parent="navId-A4B35924-DB6C-4EA3-997D-450810F4FEE6">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-B831ACFB-B751-4F23-9B91-F1236878836C" class=" " role="menuitem" href="http://www.nytimes.com/section/science/earth">
                                       Environment
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-E048A75C-4A9C-4241-B38C-74752BBC5AB8" class=" " role="menuitem" href="http://www.nytimes.com/section/science/space">
                                       Space &amp; Cosmos
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close secondary A4B35924-DB6C-4EA3-997D-450810F4FEE6 sections -->
                              <div class="section " data-parent="navId-7D6BE1AF-8CD8-430B-8B2A-17CD0EAA99AC">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-5A98BF31-516F-48DE-8736-17BEEF1F64C6" class=" " role="menuitem" href="http://www.nytimes.com/section/well">
                                       Well
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-67641EB3-B6FF-44F2-B10F-2F6A5C2EC7D7" class=" " role="menuitem" href="http://www.nytimes.com/pages/health/policy/index.html">
                                       Money &amp; Policy
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-DA27E208-2682-4B17-8996-CD35A339521B" class=" " role="menuitem" href="http://www.nytimes.com/health/guides/index.html">
                                       Health Guide
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close secondary 7D6BE1AF-8CD8-430B-8B2A-17CD0EAA99AC sections -->
                              <div class="section " data-parent="navId-DE2B278B-2783-4506-AAD5-C15A5BB6DA1A">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-67CAE5A6-408D-44F3-827B-DD394E0467EF" class=" " role="menuitem" href="http://www.nytimes.com/pages/sports/baseball/index.html">
                                       Baseball
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-BA1B9016-F2F7-454B-BDF7-D4C58F6D05E9" class=" " role="menuitem" href="http://www.nytimes.com/pages/sports/ncaabasketball/index.html">
                                       Basketball: College
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-415FB1AB-3BED-4048-B61A-0E4096CE1DF6" class=" " role="menuitem" href="http://www.nytimes.com/pages/sports/basketball/index.html">
                                       Basketball: N.B.A.
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-ABBA0609-90E2-46A3-9AC5-B208ACC6C97B" class=" " role="menuitem" href="http://www.nytimes.com/pages/sports/ncaafootball/index.html">
                                       Football: College
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-F6B9D6C9-97AE-45DB-9686-72E44D8D3DAF" class=" " role="menuitem" href="http://www.nytimes.com/pages/sports/football/index.html">
                                       Football: N.F.L.
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-9F98FEDB-E7B3-4907-A56E-35320CC4C878" class=" " role="menuitem" href="http://www.nytimes.com/pages/sports/golf/index.html">
                                       Golf
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-BD14DADE-D513-4BD9-8AED-0CC63E58606C" class=" " role="menuitem" href="http://www.nytimes.com/pages/sports/hockey/index.html">
                                       Hockey
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-14F230C0-EBDB-4A78-AF7B-2C90C4739625" class=" " role="menuitem" href="http://www.nytimes.com/pages/sports/soccer/index.html">
                                       Soccer
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-D4DE47DA-76DD-4528-B539-98A6DFEFEFB3" class=" " role="menuitem" href="http://www.nytimes.com/pages/sports/tennis/index.html">
                                       Tennis
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close secondary DE2B278B-2783-4506-AAD5-C15A5BB6DA1A sections -->
                              <div class="section " data-parent="navId-BE66F420-C51B-461D-B487-CACF62E94AAE">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-67CAE5A6-408D-44F3-827B-DD394E0467EF" class=" " role="menuitem" href="http://www.nytimes.com/pages/sports/baseball/index.html">
                                       Baseball
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-BA1B9016-F2F7-454B-BDF7-D4C58F6D05E9" class=" " role="menuitem" href="http://www.nytimes.com/pages/sports/ncaabasketball/index.html">
                                       Basketball: College
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-415FB1AB-3BED-4048-B61A-0E4096CE1DF6" class=" " role="menuitem" href="http://www.nytimes.com/pages/sports/basketball/index.html">
                                       Basketball: N.B.A.
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-ABBA0609-90E2-46A3-9AC5-B208ACC6C97B" class=" " role="menuitem" href="http://www.nytimes.com/pages/sports/ncaafootball/index.html">
                                       Football: College
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-F6B9D6C9-97AE-45DB-9686-72E44D8D3DAF" class=" " role="menuitem" href="http://www.nytimes.com/pages/sports/football/index.html">
                                       Football: N.F.L.
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-9F98FEDB-E7B3-4907-A56E-35320CC4C878" class=" " role="menuitem" href="http://www.nytimes.com/pages/sports/golf/index.html">
                                       Golf
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-BD14DADE-D513-4BD9-8AED-0CC63E58606C" class=" " role="menuitem" href="http://www.nytimes.com/pages/sports/hockey/index.html">
                                       Hockey
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-14F230C0-EBDB-4A78-AF7B-2C90C4739625" class=" " role="menuitem" href="http://www.nytimes.com/pages/sports/soccer/index.html">
                                       Soccer
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-D4DE47DA-76DD-4528-B539-98A6DFEFEFB3" class=" " role="menuitem" href="http://www.nytimes.com/pages/sports/tennis/index.html">
                                       Tennis
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close secondary BE66F420-C51B-461D-B487-CACF62E94AAE sections -->
                              <div class="section " data-parent="navId-C5BFA7D5-359C-427B-90E6-6B7245A6CDD8">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-AB35105B-5032-41D9-86B1-06A221411B22" class=" " role="menuitem" href="http://www.nytimes.com/pages/arts/design/index.html">
                                       Art &amp; Design
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-7B052F64-13C5-4631-ACE4-F1BAA9706061" class=" " role="menuitem" href="http://www.nytimes.com/pages/books/index.html">
                                       Books
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-21A8F511-CA05-4797-AF76-17B61D3964CD" class=" " role="menuitem" href="http://www.nytimes.com/pages/arts/dance/index.html">
                                       Dance
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-62BF6D00-C2D2-420E-9986-791EECA152C9" class=" " role="menuitem" href="http://www.nytimes.com/pages/movies/index.html">
                                       Movies
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-E0A8CBEB-DDB5-4ADF-B5A4-60CB484ED991" class=" " role="menuitem" href="http://www.nytimes.com/pages/arts/music/index.html">
                                       Music
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-1B3D562C-A3F9-4083-9B6E-60C8A1F3FFB0" class=" " role="menuitem" href="http://www.nytimes.com/events/">
                                       N.Y.C. Events Guide
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-EF6D2985-BB93-4771-8155-CC3E2B5A7C73" class=" " role="menuitem" href="http://www.nytimes.com/pages/arts/television/index.html">
                                       Television
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-21D5B838-29CC-46D3-9006-879CAABC8F08" class=" " role="menuitem" href="http://www.nytimes.com/pages/theater/index.html">
                                       Theater
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close secondary C5BFA7D5-359C-427B-90E6-6B7245A6CDD8 sections -->
                              <div class="section " data-parent="navId-0202D0E4-C59B-479A-BD42-6F1766459781">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-AB35105B-5032-41D9-86B1-06A221411B22" class=" " role="menuitem" href="http://www.nytimes.com/pages/arts/design/index.html">
                                       Art &amp; Design
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-7B052F64-13C5-4631-ACE4-F1BAA9706061" class=" " role="menuitem" href="http://www.nytimes.com/pages/books/index.html">
                                       Books
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-21A8F511-CA05-4797-AF76-17B61D3964CD" class=" " role="menuitem" href="http://www.nytimes.com/pages/arts/dance/index.html">
                                       Dance
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-62BF6D00-C2D2-420E-9986-791EECA152C9" class=" " role="menuitem" href="http://www.nytimes.com/pages/movies/index.html">
                                       Movies
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-E0A8CBEB-DDB5-4ADF-B5A4-60CB484ED991" class=" " role="menuitem" href="http://www.nytimes.com/pages/arts/music/index.html">
                                       Music
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-1B3D562C-A3F9-4083-9B6E-60C8A1F3FFB0" class=" " role="menuitem" href="http://www.nytimes.com/events/">
                                       N.Y.C. Events Guide
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-EF6D2985-BB93-4771-8155-CC3E2B5A7C73" class=" " role="menuitem" href="http://www.nytimes.com/pages/arts/television/index.html">
                                       Television
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-21D5B838-29CC-46D3-9006-879CAABC8F08" class=" " role="menuitem" href="http://www.nytimes.com/pages/theater/index.html">
                                       Theater
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close secondary 0202D0E4-C59B-479A-BD42-6F1766459781 sections -->
                              <div class="section " data-parent="navId-B3DFBD82-F298-43B3-9458-219B4F6AA2A5">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-7A870CC7-2938-4C8E-B8F2-BD54465ECB58" class=" " role="menuitem" href="http://www.nytimes.com/pages/fashion/mens-style/index.html">
                                       Men's Style
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-38E82E5A-D1EE-4A54-BC61-9155577ABAED" class=" " role="menuitem" href="http://www.nytimes.com/column/on-the-runway">
                                       On the Runway
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-D0F14EC9-05BC-4188-AE41-A4CD18FD19AD" class=" " role="menuitem" href="http://www.nytimes.com/pages/fashion/weddings/index.html">
                                       Weddings
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close secondary B3DFBD82-F298-43B3-9458-219B4F6AA2A5 sections -->
                              <div class="section " data-parent="navId-CC9E2674-F6C4-4A39-813B-F5AB0C515CEA">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-7A870CC7-2938-4C8E-B8F2-BD54465ECB58" class=" " role="menuitem" href="http://www.nytimes.com/pages/fashion/mens-style/index.html">
                                       Men's Style
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-38E82E5A-D1EE-4A54-BC61-9155577ABAED" class=" " role="menuitem" href="http://www.nytimes.com/column/on-the-runway">
                                       On the Runway
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-D0F14EC9-05BC-4188-AE41-A4CD18FD19AD" class=" " role="menuitem" href="http://www.nytimes.com/pages/fashion/weddings/index.html">
                                       Weddings
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close secondary CC9E2674-F6C4-4A39-813B-F5AB0C515CEA sections -->
                              <div class="section " data-parent="navId-D9C94A2B-0364-4D25-8383-592CC66F82D4">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-EC43C53C-07AC-42DF-8EA3-34F4EFCD6524" class=" " role="menuitem" href="http://cooking.nytimes.com">
                                       Cooking
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-63AB32FE-1AA9-4C10-85CF-86088BC725B7" class=" " role="menuitem" href="http://www.nytimes.com/restaurants/search/">
                                       Restaurant Search
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close secondary D9C94A2B-0364-4D25-8383-592CC66F82D4 sections -->
                              <div class="section " data-parent="navId-FDEFB811-B483-4C3D-A25A-FD07BE5EAD96">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-EC43C53C-07AC-42DF-8EA3-34F4EFCD6524" class=" " role="menuitem" href="http://cooking.nytimes.com">
                                       Cooking
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-63AB32FE-1AA9-4C10-85CF-86088BC725B7" class=" " role="menuitem" href="http://www.nytimes.com/restaurants/search/">
                                       Restaurant Search
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close secondary FDEFB811-B483-4C3D-A25A-FD07BE5EAD96 sections -->
                              <div class="section " data-parent="navId-92720057-BCB6-4BDB-9351-12F29393259F">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-D896FA09-BB54-4280-BAC5-268E5CAC9D84" class=" " role="menuitem" href="http://www.nytimes.com/real-estate/the-high-end">
                                       The High End
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-00B951BD-2AE1-4E28-BAF7-18D1FAA6AA97" class=" " role="menuitem" href="http://www.nytimes.com/pages/realestate/commercial/index.html">
                                       Commercial
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-BC640596-8EEE-4DF9-A009-55F8BA5ACD04" class=" " role="menuitem" href="https://itunes.apple.com/us/app/nytimesrealestate/id337316535">
                                       iPhone App
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-9AE506A2-9337-4A5E-8499-E3781316FF13" class=" " role="menuitem" href="http://www.nytimes.com/real-estate/find-a-home">
                                       Find A Home
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-E4FBD546-F591-4961-9A7B-1348506F24ED" class=" " role="menuitem" href="http://www.nytimes.com/real-estate/my-real-estate">
                                       My Real Estate
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-58BA565B-0B7B-4DCF-9051-A8F77BF82FC5" class=" " role="menuitem" href="https://realestateads.nytimes.com/">
                                       List Your Home
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close secondary 92720057-BCB6-4BDB-9351-12F29393259F sections -->
                              <div class="section video" data-parent="navId-432A1823-3F24-43C0-8004-79088F94E754">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-FAF08756-1545-4233-B9D6-FEFA1115CFA6" class=" " role="menuitem" href="http://www.nytimes.com/video/us-politics">
                                       U.S. &amp; Politics
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-63D27866-95B7-47BC-9B53-E250CA21E182" class=" " role="menuitem" href="http://www.nytimes.com/video/world">
                                       International
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-281517E5-9CC5-472C-B46A-B9CF9AAE72F2" class=" " role="menuitem" href="http://www.nytimes.com/video/n-y-region">
                                       N.Y.
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-C5D5043A-85D5-4E97-BE08-8D0278F97101" class=" " role="menuitem" href="http://www.nytimes.com/video/op-docs">
                                       Op-Docs
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-6AB2572C-5341-4979-8D74-E38528FE0159" class=" " role="menuitem" href="http://www.nytimes.com/video/opinion">
                                       Opinion
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-50BEEE33-737A-4EBE-98D7-65593C23AE6C" class=" " role="menuitem" href="http://www.nytimes.com/video/times-documentaries">
                                       Times Documentaries
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-18CC8E0D-C9B6-4A81-8EB6-9AC98B296DDB" class=" " role="menuitem" href="http://www.nytimes.com/video/business">
                                       Business
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-457A829A-6C9D-47A9-B91E-2212766B6648" class=" " role="menuitem" href="http://www.nytimes.com/video/technology">
                                       Tech
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-4CF1B9A6-4476-45CF-AF12-53B7EB39847F" class=" " role="menuitem" href="http://www.nytimes.com/video/arts">
                                       Culture
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-3BAEEBB7-10C5-43F9-A728-26DCE4D44B48" class=" " role="menuitem" href="http://www.nytimes.com/video/style">
                                       Style
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-1CB4FCE4-8D2A-4313-9EBC-32F88BD90A35" class=" " role="menuitem" href="http://www.nytimes.com/video/t-magazine">
                                       T Magazine
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-6872F49C-F4A1-458D-8410-B253D44B8E9C" class=" " role="menuitem" href="http://www.nytimes.com/video/health">
                                       Health
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-A3E833FD-09AE-4B1B-B4A7-AED0CF1CC74C" class=" " role="menuitem" href="http://www.nytimes.com/video/dining-and-wine">
                                       Food
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-380D52A1-A468-4069-BCA9-52D6E2625D63" class=" " role="menuitem" href="http://www.nytimes.com/video/travel">
                                       Travel
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-DAB634A7-D513-49CA-BBEF-9FB321BF6798" class=" " role="menuitem" href="http://www.nytimes.com/video/sports">
                                       Sports
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-64C01CC7-C6F7-4E1B-A4FD-69B6D5B647FE" class=" " role="menuitem" href="http://www.nytimes.com/video/real-estate">
                                       Real Estate
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-6F4D6D03-8D74-4A7C-939D-2ADEE18731CB" class=" " role="menuitem" href="http://www.nytimes.com/video/science">
                                       Science
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close secondary 432A1823-3F24-43C0-8004-79088F94E754 sections -->
                              <div class="section " data-parent="navId-0442C365-4B63-4B63-B9DE-3C28319CB622">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-EC1380B0-3124-4A9B-82CF-9EA22D988C8F" class=" " role="menuitem" href="http://nytlive.nytimes.com/womenintheworld">
                                       Women in the World
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-61F54F21-A0A9-46B9-BDC5-22BDDAD4007A" class=" " role="menuitem" href="http://www.nytimes.com/newwork">
                                       New Work Summit
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-2D56941E-C5DA-4474-BB5F-DEF1CABBFAD4" class=" " role="menuitem" href="http://www.inytartfortomorrow.com/">
                                       Art for Tomorrow
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-CB602764-3E17-4A16-BBD4-08138CFDBD81" class=" " role="menuitem" href="http://nythigheredleaders.com/">
                                       Higher Ed Leaders Forum
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-AC54D2A5-3C94-4ECF-8FBF-AC4E67AA3A36" class=" " role="menuitem" href="http://nytcitiesfortomorrow.com/">
                                       Cities for Tomorrow
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-DF70A828-4A23-4295-9560-8D8B5FC097B0" class=" " role="menuitem" href="http://athensdemocracyforum.com/">
                                       Athens Democracy Forum
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-81785E85-A8E4-43E5-B6EA-C623C887B9BB" class=" " role="menuitem" href="http://www.nytluxurytravel.com">
                                       Luxury Travel Conference
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-E3E7342B-6340-41F7-BFAC-9FA6FAEC2546" class=" " role="menuitem" href="http://www.nytenergy.com">
                                       Energy for Tomorrow
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-0273790F-9086-41CE-82F1-B83A0FAEED21" class=" " role="menuitem" href="http://nytdealbookconference.com/">
                                       DealBook Conference
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              <!-- close secondary 0442C365-4B63-4B63-B9DE-3C28319CB622 sections -->
                              <div class="section section-more hidden" data-parent="navId-more-section">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="hidden">
                                       <a id="navId-A963B567-7D3D-4D0C-9E47-BF91609EFCE7" class="domestic " role="menuitem" href="http://www.nytimes.com">
                                       Home Page
                                       </a>
                                    </li>
                                    <li role="presentation" class="hidden">
                                       <a id="navId-F4E6EDF7-81C6-4DB2-8EB9-5A5E8A95CEC1" class="international " role="menuitem" href="http://international.nytimes.com/?iht">
                                       Home Page
                                       </a>
                                    </li>
                                    <li role="presentation" class="hidden">
                                       <a id="navId-9A43D8FC-F4CF-44D9-9B34-138D30468F8F" class=" expandable" role="menuitem" href="http://www.nytimes.com/pages/world/index.html" aria-haspopup="true" aria-expanded="false">
                                          World
                                          <div class="arrow arrow-right">
                                             <div class="arrow-conceal"></div>
                                          </div>
                                       </a>
                                    </li>
                                    <li role="presentation" class="hidden">
                                       <a id="navId-23FD6C8B-62D5-4CEA-A331-6C2A9A1223BE" class=" expandable" role="menuitem" href="http://www.nytimes.com/pages/national/index.html" aria-haspopup="true" aria-expanded="false">
                                          U.S.
                                          <div class="arrow arrow-right">
                                             <div class="arrow-conceal"></div>
                                          </div>
                                       </a>
                                    </li>
                                    <li role="presentation" class="hidden">
                                       <a id="navId-80E6DEE6-87E4-4AD0-9152-14FA6B07E5AB" class=" expandable" role="menuitem" href="http://www.nytimes.com/pages/politics/index.html" aria-haspopup="true" aria-expanded="false">
                                          Politics
                                          <div class="arrow arrow-right">
                                             <div class="arrow-conceal"></div>
                                          </div>
                                       </a>
                                    </li>
                                    <li role="presentation" class="hidden">
                                       <a id="navId-C4DC8C0C-E148-4201-BF10-82F1C903DBFB" class=" expandable" role="menuitem" href="http://www.nytimes.com/pages/nyregion/index.html" aria-haspopup="true" aria-expanded="false">
                                          N.Y.
                                          <div class="arrow arrow-right">
                                             <div class="arrow-conceal"></div>
                                          </div>
                                       </a>
                                    </li>
                                    <li role="presentation" class="hidden">
                                       <a id="navId-104D1E63-9701-497B-8CF4-A4D120C9014E" class="domestic expandable" role="menuitem" href="http://www.nytimes.com/pages/business/index.html" aria-haspopup="true" aria-expanded="false">
                                          Business
                                          <div class="arrow arrow-right">
                                             <div class="arrow-conceal"></div>
                                          </div>
                                       </a>
                                    </li>
                                    <li role="presentation" class="hidden">
                                       <a id="navId-A257D89A-0D3C-40AF-9C34-1A25A7947D94" class="international expandable" role="menuitem" href="http://www.nytimes.com/pages/business/international/index.html" aria-haspopup="true" aria-expanded="false">
                                          Business
                                          <div class="arrow arrow-right">
                                             <div class="arrow-conceal"></div>
                                          </div>
                                       </a>
                                    </li>
                                    <li role="presentation" class="hidden">
                                       <a id="navId-AD8090D7-4137-4D71-84C8-70DA3BD89778" class="domestic expandable" role="menuitem" href="http://www.nytimes.com/pages/opinion/index.html" aria-haspopup="true" aria-expanded="false">
                                          Opinion
                                          <div class="arrow arrow-right">
                                             <div class="arrow-conceal"></div>
                                          </div>
                                       </a>
                                    </li>
                                    <li role="presentation" class="hidden">
                                       <a id="navId-09736473-CB3F-4B2F-9772-3AF128ABE12D" class="international expandable" role="menuitem" href="http://www.nytimes.com/pages/opinion/international/index.html" aria-haspopup="true" aria-expanded="false">
                                          Opinion
                                          <div class="arrow arrow-right">
                                             <div class="arrow-conceal"></div>
                                          </div>
                                       </a>
                                    </li>
                                    <li role="presentation" class="hidden">
                                       <a id="navId-78FBAD45-31A9-4EC7-B172-7D62A2B9955E" class=" expandable" role="menuitem" href="http://www.nytimes.com/pages/technology/index.html" aria-haspopup="true" aria-expanded="false">
                                          Tech
                                          <div class="arrow arrow-right">
                                             <div class="arrow-conceal"></div>
                                          </div>
                                       </a>
                                    </li>
                                    <li role="presentation" class="hidden">
                                       <a id="navId-A4B35924-DB6C-4EA3-997D-450810F4FEE6" class=" expandable" role="menuitem" href="http://www.nytimes.com/section/science" aria-haspopup="true" aria-expanded="false">
                                          Science
                                          <div class="arrow arrow-right">
                                             <div class="arrow-conceal"></div>
                                          </div>
                                       </a>
                                    </li>
                                    <li role="presentation" class="hidden">
                                       <a id="navId-7D6BE1AF-8CD8-430B-8B2A-17CD0EAA99AC" class=" expandable" role="menuitem" href="http://www.nytimes.com/pages/health/index.html" aria-haspopup="true" aria-expanded="false">
                                          Health
                                          <div class="arrow arrow-right">
                                             <div class="arrow-conceal"></div>
                                          </div>
                                       </a>
                                    </li>
                                    <li role="presentation" class="hidden">
                                       <a id="navId-DE2B278B-2783-4506-AAD5-C15A5BB6DA1A" class="domestic expandable" role="menuitem" href="http://www.nytimes.com/pages/sports/index.html" aria-haspopup="true" aria-expanded="false">
                                          Sports
                                          <div class="arrow arrow-right">
                                             <div class="arrow-conceal"></div>
                                          </div>
                                       </a>
                                    </li>
                                    <li role="presentation" class="hidden">
                                       <a id="navId-BE66F420-C51B-461D-B487-CACF62E94AAE" class="international expandable" role="menuitem" href="http://www.nytimes.com/pages/sports/international/index.html" aria-haspopup="true" aria-expanded="false">
                                          Sports
                                          <div class="arrow arrow-right">
                                             <div class="arrow-conceal"></div>
                                          </div>
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              <div class="section section-more hidden" data-parent="navId-more-section">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="hidden">
                                       <a id="navId-C5BFA7D5-359C-427B-90E6-6B7245A6CDD8" class="domestic expandable" role="menuitem" href="http://www.nytimes.com/pages/arts/index.html" aria-haspopup="true" aria-expanded="false">
                                          Arts
                                          <div class="arrow arrow-right">
                                             <div class="arrow-conceal"></div>
                                          </div>
                                       </a>
                                    </li>
                                    <li role="presentation" class="hidden">
                                       <a id="navId-0202D0E4-C59B-479A-BD42-6F1766459781" class="international expandable" role="menuitem" href="http://www.nytimes.com/pages/arts/international/index.html" aria-haspopup="true" aria-expanded="false">
                                          Arts
                                          <div class="arrow arrow-right">
                                             <div class="arrow-conceal"></div>
                                          </div>
                                       </a>
                                    </li>
                                    <li role="presentation" class="hidden">
                                       <a id="navId-B3DFBD82-F298-43B3-9458-219B4F6AA2A5" class="domestic expandable" role="menuitem" href="http://www.nytimes.com/pages/fashion/index.html" aria-haspopup="true" aria-expanded="false">
                                          Fashion &amp; Style
                                          <div class="arrow arrow-right">
                                             <div class="arrow-conceal"></div>
                                          </div>
                                       </a>
                                    </li>
                                    <li role="presentation" class="hidden">
                                       <a id="navId-CC9E2674-F6C4-4A39-813B-F5AB0C515CEA" class="international expandable" role="menuitem" href="http://www.nytimes.com/pages/style/international/index.html" aria-haspopup="true" aria-expanded="false">
                                          Fashion &amp; Style
                                          <div class="arrow arrow-right">
                                             <div class="arrow-conceal"></div>
                                          </div>
                                       </a>
                                    </li>
                                    <li role="presentation" class="hidden">
                                       <a id="navId-D9C94A2B-0364-4D25-8383-592CC66F82D4" class="domestic expandable" role="menuitem" href="http://www.nytimes.com/pages/dining/index.html" aria-haspopup="true" aria-expanded="false">
                                          Food
                                          <div class="arrow arrow-right">
                                             <div class="arrow-conceal"></div>
                                          </div>
                                       </a>
                                    </li>
                                    <li role="presentation" class="hidden">
                                       <a id="navId-FDEFB811-B483-4C3D-A25A-FD07BE5EAD96" class="international expandable" role="menuitem" href="http://www.nytimes.com/pages/dining/international/index.html" aria-haspopup="true" aria-expanded="false">
                                          Food
                                          <div class="arrow arrow-right">
                                             <div class="arrow-conceal"></div>
                                          </div>
                                       </a>
                                    </li>
                                    <li role="presentation" class="hidden">
                                       <a id="navId-FDA10AC4-4738-4099-91E8-15584765C8D7" class=" " role="menuitem" href="http://www.nytimes.com/section/travel">
                                       Travel
                                       </a>
                                    </li>
                                    <li role="presentation" class="hidden">
                                       <a id="navId-E57A148E-0CB9-4C02-966D-28B119710151" class=" " role="menuitem" href="http://www.nytimes.com/pages/magazine/index.html">
                                       Magazine
                                       </a>
                                    </li>
                                    <li role="presentation" class="hidden">
                                       <a id="navId-052C33AD-1404-4DB6-AA70-0901DB1AD95B" class=" " role="menuitem" href="http://www.nytimes.com/section/t-magazine">
                                       T Magazine
                                       </a>
                                    </li>
                                    <li role="presentation" class="hidden">
                                       <a id="navId-92720057-BCB6-4BDB-9351-12F29393259F" class=" expandable" role="menuitem" href="http://www.nytimes.com/section/realestate" aria-haspopup="true" aria-expanded="false">
                                          Real Estate
                                          <div class="arrow arrow-right">
                                             <div class="arrow-conceal"></div>
                                          </div>
                                       </a>
                                    </li>
                                    <li role="presentation" class="hidden">
                                       <a id="navId-CEDDB6A8-F7E1-47A2-AC53-E28C616DFCD5" class=" " role="menuitem" href="http://www.nytimes.com/pages/obituaries/index.html">
                                       Obituaries
                                       </a>
                                    </li>
                                    <li role="presentation" class="hidden">
                                       <a id="navId-432A1823-3F24-43C0-8004-79088F94E754" class=" expandable" role="menuitem" href="http://www.nytimes.com/video" aria-haspopup="true" aria-expanded="false">
                                          Video
                                          <div class="arrow arrow-right">
                                             <div class="arrow-conceal"></div>
                                          </div>
                                       </a>
                                    </li>
                                    <li role="presentation" class="hidden">
                                       <a id="navId-D64FAE4C-4425-4E5A-B898-6C8CB59F9957" class=" " role="menuitem" href="http://www.nytimes.com/upshot/">
                                       The Upshot
                                       </a>
                                    </li>
                                    <li role="presentation" class="hidden">
                                       <a id="navId-0442C365-4B63-4B63-B9DE-3C28319CB622" class=" expandable" role="menuitem" tabindex="0" aria-haspopup="true" aria-expanded="false">
                                          Conferences
                                          <div class="arrow arrow-right">
                                             <div class="arrow-conceal"></div>
                                          </div>
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              <div class="section section-more " data-parent="navId-more-section">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-5C13EEDD-D905-4D8C-A284-6859EA434563" class=" " role="menuitem" href="http://www.nytimes.com/crosswords/">
                                       Crossword
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-99C17804-A343-4A76-BF04-F5793ADA48D1" class=" " role="menuitem" href="http://www.nytimes.com/times-insider">
                                       Times Insider
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              <div class="section section-more " data-parent="navId-more-section">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-8FB1308A-FFE4-4BED-ADF6-659A680D0884" class=" " role="menuitem" href="http://www.nytimes.com/pages/multimedia/index.html">
                                       Multimedia
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-108F7745-BAD9-4630-87BB-4FB4ED7CAA11" class=" " role="menuitem" href="http://lens.blogs.nytimes.com/">
                                       Photography
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              <div class="section section-more " data-parent="navId-more-section">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-6101A43A-8BDE-45FF-AAD5-EF7396F83AC9" class=" " role="menuitem" href="https://www.nytimes.com/store/?&amp;t=qry542&amp;utm_source=nytimes&amp;utm_medium=HPB&amp;utm_content=hp_browsetree&amp;utm_campaign=NYT-HP&amp;module=SectionsNav&amp;action=click&amp;region=TopBar&amp;version=BrowseTree&amp;contentCollection=NYT%20Store&amp;contentPlacement=2&amp;pgtype=Homepage">
                                       NYT Store
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-52A8A3F2-F138-425B-A63F-722E2BBC9372" class=" " role="menuitem" href="http://www.nytwineclub.com/!NYPPP0150302/">
                                       NYT Wine Club
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-081347DE-FF02-4B6C-889B-9AE59F391833" class=" " role="menuitem" href="http://nytedu.com">
                                       nytEducation
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-797F8D17-1632-435D-B3DB-708FC4B4BAEF" class=" " role="menuitem" href="http://www.nytimes.com/times-journeys/?utm_source=nytimes&amp;utm_medium=HPLink&amp;utm_content=hp_browsetree&amp;utm_campaign=NYT-HP&amp;module=SectionsNav&amp;action=click&amp;region=TopBar&amp;version=BrowseTree&amp;contentCollection=Times%20Journeys&amp;contentPlacement=2&amp;pgtype=Homepage">
                                       Times Journeys
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-53CB229C-5F34-4C32-8B8C-6F7B7626BBDD" class=" " role="menuitem" href="https://www.chefd.com/pages/new-york-times-cooking-meal-plan?utm_campaign=web1_20160617&amp;utm_medium=partner&amp;utm_source=nyt">
                                       Meal Kits
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              <div class="section section-more " data-parent="navId-more-section">
                                 <ul class="secondary" role="menu">
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-FED853D9-D192-46F6-8D18-447803EB4A7B" class=" " role="menuitem" href="http://international.nytimes.com/subscriptions/inyt/lp87JWF.html?campaignId=64YFR">
                                       Subscribe
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-61E9BFEA-F509-4BCA-ADC6-32C5A30B83FD" class=" " role="menuitem" href="http://www.nytimes.com/membercenter">
                                       Manage Account
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-0DAA7CFE-196B-4878-B899-5363070098EC" class=" " role="menuitem" href="http://www.nytimes.com/pages/todayspaper/index.html">
                                       Today's Paper
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-1FBDDF2B-64F5-4DB3-8093-F0CCB7808799" class=" " role="menuitem" href="http://www.nytimes.com/interactive/blogs/directory.html">
                                       Blogs
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-D3E5F163-D939-4FD5-8FB6-C6AD31748E30" class=" " role="menuitem" href="http://www.nytimes.com/pages/topics/">
                                       Times Topics
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-6BBF5308-5EA3-4B25-885F-393F7372F27F" class=" " role="menuitem" href="http://www.nytimes.com/marketing/tools-and-services/">
                                       Tools &amp; Services
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-288E1691-DA3B-457A-8B06-D10A1351E7B9" class=" " role="menuitem" href="http://www.nytimes.com/section/jobs">
                                       Jobs
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-D4C7C57A-E74D-44C3-9D0E-0AE6B715610F" class=" " role="menuitem" href="http://www.nytimes.com/ref/classifieds/">
                                       Classifieds
                                       </a>
                                    </li>
                                    <li role="presentation" class="menuitem-visible">
                                       <a id="navId-6DD9D623-A907-4623-9C5A-9409972B76DA" class=" " role="menuitem" href="http://www.nytimes.com/pages/corrections/index.html">
                                       Corrections
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <!-- close secondary modal -->
                        </div>
                        <div class="tertiary-container">
                           <div class="header">
                              <h5 class="section-heading"><a href="" role="menuitem"></a></h5>
                           </div>
                           <ul class="tertiary" data-parent="navId-9568A8E4-DD00-4A19-9357-55F8E84ADDB5" role="menu">
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-B70131F0-6B2A-4A93-8705-0B9F7E9B800F" class=" " role="menuitem" href="http://www.nytimes.com/column/charles-m-blow">
                                 Charles M. Blow
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-A2B32B86-C320-49D8-85D3-4AC6BCA2F2C2" class=" " role="menuitem" href="http://www.nytimes.com/column/david-brooks">
                                 David Brooks
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-1A8CCD43-E5E3-4801-8CBA-0378A0E17530" class=" " role="menuitem" href="http://www.nytimes.com/column/frank-bruni">
                                 Frank Bruni
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-A60B44E8-59B1-4687-B20F-D5C71A021C38" class=" " role="menuitem" href="http://www.nytimes.com/column/roger-cohen">
                                 Roger Cohen
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-AED55B1F-22EC-45F2-88B6-3B7F340C1949" class=" " role="menuitem" href="http://www.nytimes.com/column/gail-collins">
                                 Gail Collins
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-6EC4E971-BBD1-4ED5-B61D-E27A3314AE61" class=" " role="menuitem" href="http://www.nytimes.com/column/ross-douthat">
                                 Ross Douthat
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-706C9233-C545-4A9E-AB0B-2B6A21C6AF9F" class=" " role="menuitem" href="http://www.nytimes.com/column/maureen-dowd">
                                 Maureen Dowd
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-3D56EF48-CA97-4209-A878-6430FB9A2C5E" class=" " role="menuitem" href="http://www.nytimes.com/column/thomas-l-friedman">
                                 Thomas L. Friedman
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-D6A41F41-19BB-48C6-B121-B89359F1048F" class=" " role="menuitem" href="http://www.nytimes.com/column/nicholas-kristof">
                                 Nicholas Kristof
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-85905471-3FA0-423F-9D26-1BBE69237899" class=" " role="menuitem" href="http://www.nytimes.com/column/paul-krugman">
                                 Paul Krugman
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-B1CD03FF-773D-46AB-B3C1-4FAE8565F551" class=" " role="menuitem" href="http://www.nytimes.com/column/joe-nocera">
                                 Joe Nocera
                                 </a>
                              </li>
                           </ul>
                           <ul class="tertiary" data-parent="navId-2312753B-E860-46C4-B544-1C0F70ABF41F" role="menu">
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-B70131F0-6B2A-4A93-8705-0B9F7E9B800F" class=" " role="menuitem" href="http://www.nytimes.com/column/charles-m-blow">
                                 Charles M. Blow
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-A2B32B86-C320-49D8-85D3-4AC6BCA2F2C2" class=" " role="menuitem" href="http://www.nytimes.com/column/david-brooks">
                                 David Brooks
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-1A8CCD43-E5E3-4801-8CBA-0378A0E17530" class=" " role="menuitem" href="http://www.nytimes.com/column/frank-bruni">
                                 Frank Bruni
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-A60B44E8-59B1-4687-B20F-D5C71A021C38" class=" " role="menuitem" href="http://www.nytimes.com/column/roger-cohen">
                                 Roger Cohen
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-AED55B1F-22EC-45F2-88B6-3B7F340C1949" class=" " role="menuitem" href="http://www.nytimes.com/column/gail-collins">
                                 Gail Collins
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-6EC4E971-BBD1-4ED5-B61D-E27A3314AE61" class=" " role="menuitem" href="http://www.nytimes.com/column/ross-douthat">
                                 Ross Douthat
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-706C9233-C545-4A9E-AB0B-2B6A21C6AF9F" class=" " role="menuitem" href="http://www.nytimes.com/column/maureen-dowd">
                                 Maureen Dowd
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-3D56EF48-CA97-4209-A878-6430FB9A2C5E" class=" " role="menuitem" href="http://www.nytimes.com/column/thomas-l-friedman">
                                 Thomas L. Friedman
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-D6A41F41-19BB-48C6-B121-B89359F1048F" class=" " role="menuitem" href="http://www.nytimes.com/column/nicholas-kristof">
                                 Nicholas Kristof
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-85905471-3FA0-423F-9D26-1BBE69237899" class=" " role="menuitem" href="http://www.nytimes.com/column/paul-krugman">
                                 Paul Krugman
                                 </a>
                              </li>
                              <li role="presentation" class="menuitem-visible">
                                 <a id="navId-B1CD03FF-773D-46AB-B3C1-4FAE8565F551" class=" " role="menuitem" href="http://www.nytimes.com/column/joe-nocera">
                                 Joe Nocera
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div class="modal-footer">
                     </div>
                     <button type="button" class="modal-close hidden" aria-disabled="false"><i class="icon"></i><span class="visually-hidden">Close this modal window</span></button>
                     <div class="modal-pointer modal-pointer-left-top">
                        <div class="modal-pointer-conceal"></div>
                     </div>
                  </div>
               </div>
               <div id="verified-modal" class="modal-container verified-modal-container" style="display: none;">
                  <div class="overlay" style="display: none;"></div>
                  <div class="modal verified-modal verified-modal" style="width: undefined;" role="dialog" aria-labelledby="verified-modal-modal-heading" tabindex="-1">
                     <div class="modal-header">
                        <h3 class="modal-heading" id="verified-modal-modal-heading"></h3>
                     </div>
                     <div class="modal-content">
                        <a class="faq-link" href="http://www.nytimes.com/content/help/site/usercontent/verified/verified-commenters.html">
                        Verified Commenters
                        </a>
                        can leave comments on NYTimes.com without initial moderation. Verified status is earned based on a history of quality comments.
                     </div>
                     <div class="modal-footer">
                     </div>
                     <button type="button" class="modal-close hidden" aria-disabled="false"><i class="icon"></i><span class="visually-hidden">Close this modal window</span></button>
                     <div class="modal-pointer modal-pointer-down">
                        <div class="modal-pointer-conceal"></div>
                     </div>
                  </div>
               </div>
               <script src="http://static.dynamicyield.com/scripts/12227/dy-coll-min.js" type="text/javascript" async="true"></script><script src="https://et.nytimes.com/?subject=page&amp;url=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html%3Fhp%26action%3Dclick%26pgtype%3DHomepage%26clickSource%3Dimage%26module%3Dphoto-spot-region%26region%3Dtop-news%26WT.nav%3Dtop-news&amp;assetUrl=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html&amp;referrer=http%3A%2F%2Fwww.nytimes.com%2F%3Faction%3Dclick%26contentCollection%3DDealBook%26region%3DTopBar%26module%3DHomePage-Button%26pgtype%3Darticle&amp;clientTimeStamp=1476292654618&amp;totalTime=0&amp;sourceApp=nyt-v5&amp;callback=NYTD.EventTracker.cb0&amp;pageMetaData=%7B%22PT%22%3A%22article%22%2C%22CG%22%3A%22world%22%2C%22SCG%22%3A%22%22%2C%22byl%22%3A%22By%20JAMES%20RISEN%22%2C%22tom%22%3A%22News%22%2C%22hdl%22%3A%22After%20Torture%2C%20Ex-Detainee%20Is%20Still%20Captive%20of%20%E2%80%98The%20Darkness%E2%80%99%22%2C%22ptime%22%3A%2220161012034524%22%2C%22cre%22%3A%22The%20New%20York%20Times%22%2C%22articleid%22%3A%22100000004654030%22%2C%22channels%22%3A%22%22%2C%22CN%22%3A%22%22%2C%22CT%22%3A%22%22%7D&amp;additionalClientData=%7B%22ul%22%3A%22ru%22%2C%22js%22%3A%22Yes%22%2C%22jv%22%3A%221.5%22%2C%22fi%22%3A%22Yes%22%2C%22tz%22%3A3%2C%22bh%22%3A20%2C%22cd%22%3A24%2C%22sr%22%3A%221366x768%22%2C%22bs%22%3A%221366x648%22%2C%22jo%22%3A%22No%22%2C%22fv%22%3A%2223.0%22%2C%22or%22%3A%22land%22%7D&amp;tagxId=80d051866dedb12aefdf8f8b046ca91e&amp;webActiveDays=1&amp;webActiveDaysList=%5B0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C1%5D"></script><script src="https://et.nytimes.com/?subject=page&amp;url=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html%3Fhp%26action%3Dclick%26pgtype%3DHomepage%26clickSource%3Dimage%26module%3Dphoto-spot-region%26region%3Dtop-news%26WT.nav%3Dtop-news&amp;assetUrl=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html&amp;referrer=http%3A%2F%2Fwww.nytimes.com%2F%3Faction%3Dclick%26contentCollection%3DDealBook%26region%3DTopBar%26module%3DHomePage-Button%26pgtype%3Darticle&amp;clientTimeStamp=1476292654618&amp;totalTime=129&amp;impressions=%5B%7B%22version%22%3A%22meter%20at%201%22%2C%22module%22%3A%22meter%22%2C%22contentId%22%3A%22%22%2C%22mediaId%22%3A%22%22%2C%22referrer%22%3A%22http%3A%2F%2Fwww.nytimes.com%2F%3Faction%3Dclick%26contentCollection%3DDealBook%26region%3DTopBar%26module%3DHomePage-Button%26pgtype%3Darticle%22%2C%22action%22%3A%22Impression%22%2C%22eventName%22%3A%22Impression%22%2C%22proxyEventName%22%3A%22meter-load%22%2C%22proxyEventType%22%3A%22impression%22%2C%22eventtimestamp%22%3A1476292654745%7D%5D&amp;sourceApp=nyt-v5&amp;callback=NYTD.EventTracker.cb1&amp;datumId=9e125ad11931b408&amp;webActiveDaysList=%5B0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C1%5D"></script><script src="https://et.nytimes.com/?subject=page&amp;url=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html%3Fhp%26action%3Dclick%26pgtype%3DHomepage%26clickSource%3Dimage%26module%3Dphoto-spot-region%26region%3Dtop-news%26WT.nav%3Dtop-news&amp;assetUrl=http%3A%2F%2Fwww.nytimes.com%2F2016%2F10%2F12%2Fworld%2Fcia-torture-abuses-detainee.html&amp;referrer=http%3A%2F%2Fwww.nytimes.com%2F%3Faction%3Dclick%26contentCollection%3DDealBook%26region%3DTopBar%26module%3DHomePage-Button%26pgtype%3Darticle&amp;clientTimeStamp=1476292654618&amp;totalTime=133&amp;nyt4totpg=4&amp;proxyEventName=vid_modules&amp;proxyEventType=interaction&amp;eventtimestamp=1476292654749&amp;vid_modules=&amp;sourceApp=nyt-v5&amp;callback=NYTD.EventTracker.cb2&amp;datumId=9e125ad11931b408&amp;webActiveDaysList=%5B0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C1%5D"></script>
               <div id="dysegdiv" data-id="8765260:def:world"></div>
               <div class="kxhead" data-id="HrUwtkcl" style="display:none !important;">
                  <span class="kxtag kxinvisible" data-id="28172" data-alias="Google User Matching">
                     <script>
                        (function() {
                          if (Krux('get', 'user') != null) {
                              new Image().src = 'https://usermatch.krxd.net/um/v2?partner=google';
                          }
                        })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="57186" data-alias="Dun &amp; Bradstreet provider tag"></span><span class="kxtag kxinvisible" data-id="57190" data-alias="Webbula provider tag"></span><span class="kxtag kxinvisible" data-id="57191" data-alias="Nielsen - Precision Marketing (via Exelate) provid"></span><span class="kxtag kxinvisible" data-id="57192" data-alias="InfoGroup provider tag"></span>
                  <span class="kxtag kxinvisible" data-id="44173" data-alias="Twitter user match">
                     <script>
                        (function(){
                          var kuid = Krux('get', 'user');
                          if (kuid) {
                              var url =
                        "https://analytics.twitter.com/i/adsct?p_user_id=" + kuid +
                        "&p_id=10623";
                              var i = new Image();
                              i.src = url;
                          }
                        })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="75678" data-alias="Optimizely Setup Tag">
                     <script class="kxint" type="text/javascript">
                        window.Krux||((Krux=function(){Krux.q.push(arguments);}).q=[]);
                          (function(){

                            function retrieve(n){
                              var m, k='kx'+n;
                              if (window.localStorage) {
                                  return window.localStorage[k] || "";
                              } else if (navigator.cookieEnabled) {
                                  m = document.cookie.match(k+'=([^;]*)');
                                  return (m && unescape(m[1])) || "";
                              } else {
                                  return '';
                              }
                            }
                            Krux.OptimizelySegments = retrieve('segs') ? retrieve('segs').split(',') : [];
                          })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="45251" data-alias="WhoToo Partner Network provider tag"></span>
                  <span class="kxtag kxinvisible" data-id="45252" data-alias="NetProspex provider tag">
                     <script>
                        // LiveRamp universal user match

                        (function(){
                          var kuid = Krux('get', 'user');
                          if (kuid) {
                              var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;
                              var i = new Image();
                              i.src = liveramp_url;
                          }
                        })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="31476" data-alias="Nielsen (via Exelate) provider tag">
                     <script>
                        // Blank
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="35674" data-alias="x+1 User Match">
                     <script>
                        (function(){
                          if (window.location.protocol == "http:") {
                            (new Image()).src="http://ckm-m.xp1.ru4.com/activity?_o=62795&_t=kx_cm&redirect=20";
                            }
                          if (window.location.protocol == "https:"){
                            (new Image()).src="https://msec.xp1.ru4.com/activity?_o=62795&_t=kx_cm&redirect=20";
                            }
                        })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="47674" data-alias="pageViews_counter"></span>
                  <span class="kxtag kxinvisible" data-id="50544" data-alias="Load Segments NYT specific">
                     <script>
                        (function() {
                          var store = Krux('require:store');
                          var old_set = store.set;

                          store.set = function (key, value, ttl) {
                            old_set(key, value, ttl);
                            if (key === 'segs') {
                              store.cookie.set(
                                  'krux_segs',
                                  value.replace(/,/g, '|'),
                                  48 * 60 * 60,
                                  {domain: 'nytimes.com'}
                              );
                            }
                          };
                        })();

                        (function(require) {
                            var config = require('config')();
                            var store = require('store');
                            var segments;

                            function handleUserDataResponse(r) {
                                // Handle the response as usual.
                                segments.handleUserDataResponse(r);
                            }

                            function useFirstPartyCookie() {
                                // Older versions of CT don't have feature.
                                try {
                                    var feature = Krux('require:feature');
                                    // If they don't have 3rd party cookies, then we rely on 1st party.
                                    return !feature.hasThirdPartyCookies();
                                } catch (e){
                                    return false;
                                }
                            }

                            // Our own fetch uses our own handleResponse
                            function fetch() {
                                var data = {pub: Krux('get', 'pubid')};

                                // Skip
                                if (useFirstPartyCookie() && Krux('get', 'user')) {
                                    data._kuid = Krux('get', 'user');
                                }
                                var options = {
                                    url: Krux('get', 'url_userdata'),
                                    data: data,
                                    callback: 'kxjsonp_userdata',
                                    done: handleUserDataResponse
                                };

                                // SEE: SCRUM-1129
                                var orgUserId = Krux('get', 'org_user_id');
                                if(orgUserId) {
                                    options.data._kuid = orgUserId;
                                }

                                var fpId, fp;
                                var useFingerprint = config.get('params.fingerprint', false);
                                if (useFingerprint) {
                                    fpId = Krux('get', 'fp_id');
                                    options.data.kxfp = fp = Krux('get', 'fp');
                                    // Ensure we don't send the fingerprint as the id (it mascarades in fallback mode)
                                    if (fpId && fpId.length !== fp.length) {
                                        options.data.kfuid = fpId;
                                    }
                                }

                                if(!segments.readTechFromStore()) {
                                    options.data.technographics = 1;
                                }
                                require('http').jsonp(options);
                            }

                            if (!useFirstPartyCookie()) {
                                Krux('set', 'user', Krux('require:store').get('kuid'));
                            }

                            if(!store.get('segWait')) {
                                // disable segments.fetch and use our own
                                Krux('set', 'segWait', 1, store.MINUTES*5);
                                Krux('onOnce:dom:load', fetch);
                                Krux('fire:user_data_fetch_scheduled');
                            }

                            // Finally, require segments as usual.
                            segments = require('segments');
                        }(Krux.require));
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="87585" data-alias="Undertone Usermatch">
                     <script>
                        !(function() {
                        	var kuid = Krux('get', 'user');
                        	if(kuid) {
                        		var protocol = location.protocol == 'https:' ? 'https:' : 'http:';
                        		var kxurl    = protocol + '//beacon.krxd.net/usermatch.gif?partner=undertone&partner_uid=' + kuid;
                        		var purl     = protocol + '//ads.undertone.com/u?dp=30&url=';
                        		(new Image()).src = purl + encodeURIComponent(kxurl);
                        	}
                        })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="27935" data-alias="IXI Digital (Network) provider tag">
                     <script>
                        // Empty by design.
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="89638" data-alias="Datonics provider tag"></span><span class="kxtag kxinvisible" data-id="89641" data-alias="Epsilon (via LiveRamp) provider tag"></span><span class="kxtag kxinvisible" data-id="89644" data-alias="LiveRamp Data Store provider tag"></span>
                  <span class="kxtag kxinvisible" data-id="89645" data-alias="Bombora provider tag">
                     <script>
                        (function () {
                        _ml = window._ml || {};
                        _ml.pub = '748';
                        _ml.redirect = '//beacon.krxd.net/usermatch.gif?partner=madisonlogic&partner_uid=[PersonID]';
                        var s = document.getElementsByTagName('script')[0], cd = new Date(), mltag = document.createElement('script');
                        mltag.type = 'text/javascript'; mltag.async = true;
                        mltag.src = '//ml314.com/tag.aspx?' + cd.getDate() + cd.getMonth() + cd.getFullYear();
                        s.parentNode.insertBefore(mltag, s);
                        })();

                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="88657" data-alias="Farmers (New York Times via LiveRamp) provider tag"></span><span class="kxtag kxinvisible" data-id="31339" data-alias="AdAdvisor S2S provider tag"><img src="//adadvisor.net/adscores/g.js?sid=9212244187&amp;_kdpid=2111c0af-fc3a-446f-ab07-63aa74fbde8e" style="display: none !important;"></span>
                  <span class="kxtag kxinvisible" data-id="21418" data-alias="eXelate Media provider tag">
                     <script>
                        (function(){
                          var kuid = Krux('get', 'user');
                          if (kuid) {
                            Krux('require:http').pixel({
                              url: "//loadm.exelator.com/load",
                              data: {
                                  _kdpid: 'e4942ff0-4070-4896-a7ef-e6a5a30ce9f9',
                                  buid: kuid,
                                  p: '204',
                                  g: '270',
                                  j: '0'
                              }});
                          }
                          })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="22998" data-alias="Acxiom S2S provider tag">
                     <script>
                        (function(){
                          var kuid = Krux('get', 'user');
                          if (kuid) {
                              var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;
                              var i = new Image();
                              i.src = liveramp_url;
                          }
                        })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="21233" data-alias="Krux Geographic Data provider tag"></span>
                  <span class="kxtag kxinvisible" data-id="88323" data-alias="Innovid UM Pixel">
                     <script>
                        (function(){
                                 var prefix = window.location.protocol == 'https:' ? "https:" : "http:";
                                 var i_url = prefix + '//ag.innovid.com/dv/sync?tid=2';
                                 var i = new Image();
                                 i.src = i_url;
                        })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="28173" data-alias="Appnexus Extension User Matching">
                     <script>
                        (function(){
                          var kuid = Krux('get', 'user');
                          var cbust = Math.round(new Date().getTime() / 1000);
                          if (kuid) {
                            Krux('require:http').pixel({
                              url: "//ib.adnxs.com/pxj",
                              data: {
                                  bidder: '140',
                                  seg: '381342',
                                  action: "setuid('" + kuid + "')",
                                  bust: cbust
                              }});
                          }
                          })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="88339" data-alias="NYT Dstillery UM pIxel">
                     <script>
                        (function(){
                                var kuid = Krux('get', 'user');
                                var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';
                                if (kuid) {
                                	var url = prefix + '//idpix.media6degrees.com/orbserv/hbpix?pixId=30036&pcv=27';
                                	(new Image()).src = url;
                                }
                        })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="83744" data-alias="DataLogix (afae52b8-1e27-4650-bd6a-ed7d982f5a6a)">
                     <script>
                        (function() {
                            var allowUserMatch = function() {
                                var GDN_SITE_ID = '1282650';

                                if (Krux('get', 'config').params.client_type === 'marketer') {
                                    try {
                                        var params = Krux('require:marketer').getParams(
                                                Krux('require:sizzle').find('script[src*="' + Krux('get', 'confid') + '"]')
                                        );
                                        return GDN_SITE_ID !== (params.siteid || params.kxsiteid);
                                    }
                                    catch (e) {
                                        // In case we don't find the script tag or the URL parser fails, just allow matching.
                                    }
                                }
                                return true;
                            };

                            var kuid = Krux('get', 'user');
                            if (allowUserMatch() && kuid) {
                                var prefix = location.protocol == 'https:' ? "https:" : "http:";
                                var kurl_params = encodeURIComponent("_kuid=" + kuid + "&_kdpid=afae52b8-1e27-4650-bd6a-ed7d982f5a6a&dlxid=<na_id>&dlxdata=<na_da>");
                                var kurl = prefix + "//beacon.krxd.net/data.gif?" + kurl_params;
                                var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=iqbg41iqbgj68&ru=' + kurl;
                                new Image().src = dlx_url;

                            }
                        })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="81973" data-alias="Visual DNA provider tag">
                     <script>new Image().src = 'https://usermatch.krxd.net/um/v2?partner=vdna';</script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="27728" data-alias="IXI Digital (Open Market) provider tag">
                     <script>
                        (function(){
                            var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';
                            new Image().src = prefix + '//kr.ixiaa.com/C726AB29-0470-440B-B8D2-D552CED3A3DC/a.gif';
                        })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="13157" data-alias="Krux Scrape Page Attributes">
                     <script>
                        (function() {
                          function getMetaValue(name) {
                            if (! document.querySelector) {
                              return;
                            }
                            var metaTag = document.querySelector("meta[name='" + name + "']");
                            return metaTag && metaTag.content || "";
                          }

                          Krux('set', 'section', getMetaValue('CG'));
                          Krux('set', 'subsection', getMetaValue('SCG'));
                          Krux('set', 'page_attr_page_type', getMetaValue('PT'));
                          Krux('scrape', {
                            page_attr_cg: {
                              meta_name: "CG"
                            },
                            page_attr_scg: {
                              meta_name: "SCG"
                            },
                            page_attr_prot: {
                              meta_name: "WT.z_prot"
                            },
                            page_attr_ref: {
                            url_param: "ref"
                            },
                            page_attr_pst: {
                              meta_name: "PST"
                            },
                            page_attr_des: {
                              meta_name: "des"
                            },
                            page_attr_per: {
                              meta_name: "per"
                            },
                            page_attr_org: {
                              meta_name: "org"
                            },
                            page_attr_geo: {
                              meta_name: "geo"
                            },
                            page_attr_author: {
                              meta_name: "author"
                            },
                            page_attr_reco: {
                              meta_name: "RECO"
                            },
                            page_attr_rer: {
                              meta_name: "RER"
                            },
                            page_attr_res: {
                              meta_name: "RES"
                            },
                            page_attr_resz: {
                              meta_name: "RESZ"
                            },
                            page_attr_rentals: {
                              meta_name: "PSSST"
                            },
                            page_attr_ticker: {
                              meta_name: "ticker"
                            },
                            page_attr_registered: {
                              javascript: 'regstatus'
                            },
                            page_attr_referrer: {
                              javascript: 'document.referrer'
                            },
                            page_attr_url_path_1: {
                              url_path: "1"
                            }
                          });
                        })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="15486" data-alias="Technographic Data provider tag">
                     <script>
                        // this tag is intentionally blank
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="71078" data-alias="Test Yahoo! DataX">
                     <script>
                        (function(){
                            var kuid = Krux('get', 'user');
                                if (kuid) {
                                    var prefix = 'https:';
                                    var rurl = prefix + '//cms.analytics.yahoo.com/cms?partner_id=KRUX';
                                    var i = new Image();
                                    i.src = rurl;
                                }
                        })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="71079" data-alias="Test Neustar User Matching">
                     <script type="text/javascript">
                        (function() {
                            (new Image()).src = '//aa.agkn.com/adscores/g.js?sid=9212244187&_kdpid=2111c0af-fc3a-446f-ab07-63aa74fbde8e';
                        })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="71080" data-alias="Test BrightRoll user match">
                     <script>
                        (function(){
                                var kuid = Krux('get', 'user');
                                var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';
                                if (kuid) {
                                   var url = prefix + '//pix.btrll.com/partner/868092.png';
                                   (new Image()).src = url;
                                }
                        })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="71081" data-alias="Test Videology User Matching">
                     <script type="text/javascript">
                        (function() {
                            (new Image()).src = '//sync.tidaltv.com/genericusersync.ashx?dpid=395';
                        })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="30903" data-alias="Krux Track Social">
                     <script type="text/javascript">Krux('social.init');</script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="64439" data-alias="Live Ramp NYT specific (will not fire on homepage)">
                     <script>
                        (function(){
                          if (window.location.pathname != '/') {
                            var kuid = Krux('get', 'user');
                            if (kuid) {
                              var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;
                              var i = new Image();
                              i.src = liveramp_url;
                            }
                          }
                        })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="23488" data-alias="Krux Data Transfer Code ">
                     <script>
                        (function() {
                          Krux('scrape', { 'user_attr_new-ref': {meta_name: 'WT.z_ref'}});
                        })();
                        // Using Globals PriceMin to produce page attribute pricemin
                        Krux('scrape', { "page_attr_pricemin": {js_global: "PriceMin"}});
                        // Using Globals PriceMax to produce page attribute pricemax
                        Krux('scrape', { "page_attr_pricemax": {js_global: "PriceMax"}});
                        // Using Meta keywords to produce page attribute keywords
                        Krux('scrape', { "page_attr_keywords2": {meta_name: "keywords"}});
                        // Using UrlPath 2 to produce page attribute url_path_2
                        Krux('scrape', { "page_attr_url_path_2": {url_path: "2"}});
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="31698" data-alias="DataXu User Matching">
                     <script>
                        (function(){
                                var kuid = Krux('get', 'user');
                                var prefix = location.protocol;
                                if (kuid) {
                                   var dxu_url = '//i.w55c.net/ping_match.gif?st=Krux&rurl=' + prefix + '//beacon.krxd.net/usermatch.gif?partner=dataxu&uid=_wfivefivec_';
                                   var i = new Image();
                                   i.src = dxu_url;
                                }
                        })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="82901" data-alias="DataLogix (8da8b14d-5569-4bec-bcea-722864ee8d06)">
                     <script>
                        (function() {
                            var kuid = Krux('get', 'user');
                            if (kuid) {
                                var prefix = location.protocol == 'https:' ? "https:" : "http:";
                                var kurl_params = encodeURIComponent("_kuid=" + kuid + "&_kdpid=8da8b14d-5569-4bec-bcea-722864ee8d06&dlxid=<na_id>&dlxdata=<na_da>");
                                var kurl = prefix + "//beacon.krxd.net/data.gif?" + kurl_params;
                                var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=iefs40iefsj26&ru=' + kurl;
                                var i = new Image();
                                i.src = dlx_url;
                            }
                        })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="82902" data-alias="DataLogix (bef9f122-393d-4c45-8d8d-32d8be7ac433)">
                     <script>
                        (function() {
                            var kuid = Krux('get', 'user');
                            if (kuid) {
                                var prefix = location.protocol == 'https:' ? "https:" : "http:";
                                var kurl_params = encodeURIComponent("_kuid=" + kuid + "&_kdpid=bef9f122-393d-4c45-8d8d-32d8be7ac433&dlxid=<na_id>&dlxdata=<na_da>");
                                var kurl = prefix + "//beacon.krxd.net/data.gif?" + kurl_params;
                                var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=iyzu39iyzud95&ru=' + kurl;
                                var i = new Image();
                                i.src = dlx_url;
                            }
                        })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="69335" data-alias="The Trade Desk Test">
                     <script>
                        (function() {
                          if (Krux('get', 'user') != null) {
                              new Image().src = 'https://usermatch.krxd.net/um/v2?partner=google';
                          }
                        })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="82903" data-alias="DataLogix (8bf57916-aac8-4f01-a386-4baf103b3e1f)">
                     <script>
                        (function() {
                            var allowUserMatch = function() {
                                var GDN_SITE_ID = '1282650';

                                if (Krux('get', 'config').params.client_type === 'marketer') {
                                    try {
                                        var params = Krux('require:marketer').getParams(
                                                Krux('require:sizzle').find('script[src*="' + Krux('get', 'confid') + '"]')
                                        );
                                        return GDN_SITE_ID !== (params.siteid || params.kxsiteid);
                                    }
                                    catch (e) {
                                        // In case we don't find the script tag or the URL parser fails, just allow matching.
                                    }
                                }
                                return true;
                            };

                            var kuid = Krux('get', 'user');
                            if (allowUserMatch() && kuid) {
                                var prefix = location.protocol == 'https:' ? "https:" : "http:";
                                var kurl_params = encodeURIComponent("_kuid=" + kuid + "&_kdpid=8bf57916-aac8-4f01-a386-4baf103b3e1f&dlxid=<na_id>&dlxdata=<na_da>");
                                var kurl = prefix + "//beacon.krxd.net/data.gif?" + kurl_params;
                                var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=bckw15bckwu20&ru=' + kurl;
                                var i = new Image();
                                i.src = dlx_url;
                            }
                        })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="82904" data-alias="DataLogix (d7158cb7-a851-4e3c-b7ab-cc9e815b2399)">
                     <script>
                        (function() {
                            var allowUserMatch = function() {
                                var GDN_SITE_ID = '1282650';

                                if (Krux('get', 'config').params.client_type === 'marketer') {
                                    try {
                                        var params = Krux('require:marketer').getParams(
                                                Krux('require:sizzle').find('script[src*="' + Krux('get', 'confid') + '"]')
                                        );
                                        return GDN_SITE_ID !== (params.siteid || params.kxsiteid);
                                    }
                                    catch (e) {
                                        // In case we don't find the script tag or the URL parser fails, just allow matching.
                                    }
                                }
                                return true;
                            };

                            var kuid = Krux('get', 'user');
                            if (allowUserMatch() && kuid) {
                                var prefix = location.protocol == 'https:' ? "https:" : "http:";
                                var kurl_params = encodeURIComponent("_kuid=" + kuid + "&_kdpid=d7158cb7-a851-4e3c-b7ab-cc9e815b2399&dlxid=<na_id>&dlxdata=<na_da>");
                                var kurl = prefix + "//beacon.krxd.net/data.gif?" + kurl_params;
                                var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=gwjn34gwjnh86&ru=' + kurl;
                                var i = new Image();
                                i.src = dlx_url;
                            }
                        })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="82905" data-alias="DataLogix (536f0daa-aaaa-4d9e-9a25-dde40646786a)">
                     <script>
                        (function() {
                            var kuid = Krux('get', 'user');
                            if (kuid) {
                                var prefix = location.protocol == 'https:' ? "https:" : "http:";
                                var kurl_params = encodeURIComponent("_kuid=" + kuid + "&_kdpid=536f0daa-aaaa-4d9e-9a25-dde40646786a&dlxid=<na_id>&dlxdata=<na_da>");
                                var kurl = prefix + "//beacon.krxd.net/data.gif?" + kurl_params;
                                var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=iefs40iefsj26&ru=' + kurl;
                                var i = new Image();
                                i.src = dlx_url;
                            }
                        })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="67546" data-alias="DTC to capture NYT user data ">
                     <script>
                        Krux('scrape', {
                        	"user_attr_nyt_cookie": {
                        		javascript: "TAGX.data.get('cookies.nyt-a')"
                        	},
                        	"user_attr_nyt_user_id": {
                        		javascript: "TAGX.data.get('TAGX.L.uid')"
                        	},
                        	"user_attr_nyt_user_type": {
                        		javascript: "TAGX.data.get('user.type')"
                        	},
                        	"user_attr_nyt_insiderAB": {
                        		cookie: "insiderAB"
                        	},
                        	"user_attr_nyt_ft_upsell_krux_flag": {
                        		cookie: "nyt_ft_upsell_krux_flag"
                        	},
                        	"user_attr_nyt_activedays": {
                        		javascript: "TAGX.data.get('TAGX.L.adv')"
                        	},
                        	"user_attr_nyt_pscore": {
                        		javascript: "TAGX.data.get('propensity.p') || 'none'"
                        	},
                        	"user_attr_nyt_propensity_edu": {
                        		javascript: "TAGX.Utils.getCookie('propensityEDU')"
                        	},
                        	"user_attr_nyt_b2b": {
                        		javascript: "TAGX.Utils.getCookie('B2B')"
                        	},
                        	"user_attr_nyt_b2b_corp_adblock": {
                        		javascript: "TAGX.Utils.getCookie('B2B_CORP_ADBLOCK')"
                        	},
                        	"user_attr_cookie_isEDU": {
                        		javascript: "TAGX.Utils.getCookie('isEDU')"
                        	}
                        });
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="82906" data-alias="DataLogix (7c6392c9-e878-492c-8b14-bf06e3828ebd)">
                     <script>
                        (function() {
                            var kuid = Krux('get', 'user');
                            if (kuid) {
                                var prefix = location.protocol == 'https:' ? "https:" : "http:";
                                var kurl_params = encodeURIComponent("_kuid=" + kuid + "&_kdpid=7c6392c9-e878-492c-8b14-bf06e3828ebd&dlxid=<na_id>&dlxdata=<na_da>");
                                var kurl = prefix + "//beacon.krxd.net/data.gif?" + kurl_params;
                                var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=rowp70rowpu60&ru=' + kurl;
                                var i = new Image();
                                i.src = dlx_url;
                            }
                        })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="82907" data-alias="DataLogix (bb8ae0e2-9cd7-45b2-ad37-7737269627d8)">
                     <script>
                        (function() {
                            var allowUserMatch = function() {
                                var GDN_SITE_ID = '1282650';

                                if (Krux('get', 'config').params.client_type === 'marketer') {
                                    try {
                                        var params = Krux('require:marketer').getParams(
                                                Krux('require:sizzle').find('script[src*="' + Krux('get', 'confid') + '"]')
                                        );
                                        return GDN_SITE_ID !== (params.siteid || params.kxsiteid);
                                    }
                                    catch (e) {
                                        // In case we don't find the script tag or the URL parser fails, just allow matching.
                                    }
                                }
                                return true;
                            };

                            var kuid = Krux('get', 'user');
                            if (allowUserMatch() && kuid) {
                                var prefix = location.protocol == 'https:' ? "https:" : "http:";
                                var kurl_params = encodeURIComponent("_kuid=" + kuid + "&_kdpid=bb8ae0e2-9cd7-45b2-ad37-7737269627d8&dlxid=<na_id>&dlxdata=<na_da>");
                                var kurl = prefix + "//beacon.krxd.net/data.gif?" + kurl_params;
                                var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=rsxs71rsxsk73&ru=' + kurl;
                                var i = new Image();
                                i.src = dlx_url;
                            }
                        })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="57309" data-alias="Krux- Xaxis Tag">
                     <script>
                        (function(){
                           if (window.location.pathname != '/') {
                                var kuid = window.Krux('get', 'user');
                                    if (kuid) {
                                        var min = 1000000000;
                                        var max = 9999999999;
                                        var rand = Math.floor(Math.random() * (max - min)) + min;
                                        var prefix = location.protocol == 'https:' ? "https:" :"http:";
                                        var url = prefix
                                                + '//t.mookie1.com/t/v1/event?migClientId=6726&migAction=krux&migSource=mig&migRandom='
                                                + rand
                                                +'&migParam1='
                                                + kuid;
                                        (new Image()).src = url;
                                }
                            }
                        })();
                     </script>
                  </span>
                  <span class="kxtag kxinvisible" data-id="18687" data-alias="Krux Pull RMID">
                     <script>
                        // Using Cookie RMID to produce page attribute cookie_rmid
                        Krux('scrape', { "user_attr_cookie_rmid": {cookie: "RMID"}});
                     </script>
                  </span>
               </div>
            </body>
         </html>`;


var $ = cheerio.load(html);

console.log($('#buzz_sub_buzz').text().replace(/\s+/g, ' '));