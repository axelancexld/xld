window.isMobile=!1;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){window.isMobile=!0}
window.isiOS=!1;if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){window.isiOS=!0}
window.isiOSVersion='';if(window.isiOS){var version=(navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);if(version!==null){window.isiOSVersion=[parseInt(version[1],10),parseInt(version[2],10),parseInt(version[3]||0,10)]}}
window.isSafari=!1;if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)){window.isSafari=!0}
window.isSafariVersion='';if(window.isSafari){var version=(navigator.appVersion).match(/Version\/(\d+)\.(\d+)\.?(\d+)? Safari/);if(version!==null){window.isSafariVersion=[parseInt(version[1],10),parseInt(version[2],10),parseInt(version[3]||0,10)]}}
window.isIE=!!document.documentMode;window.browserLang=(window.navigator.userLanguage||window.navigator.language).toUpperCase().slice(0,2);window.tildaBrowserLang=window.browserLang;function t_throttle(fn,threshhold,scope){var last;var deferTimer;threshhold||(threshhold=250);return function(){var context=scope||this;var now=+new Date();var args=arguments;if(last&&now<last+threshhold){clearTimeout(deferTimer);deferTimer=setTimeout(function(){last=now;fn.apply(context,args)},threshhold)}else{last=now;fn.apply(context,args)}}}
function t702_initPopup(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t702');if(!container)return;rec.setAttribute('data-animationappear','off');rec.setAttribute('data-popup-subscribe-inited','y');rec.style.opacity=1;var documentBody=document.body;var popup=rec.querySelector('.t-popup');var popupTooltipHook=popup.getAttribute('data-tooltip-hook');var analitics=popup.getAttribute('data-track-popup');var popupCloseBtn=popup.querySelector('.t-popup__close');var hrefs=rec.querySelectorAll('a[href*="#"]');var submitHref=rec.querySelector('.t-submit[href*="#"]');if(popupTooltipHook){t_onFuncLoad('t_popup__addAttributesForAccessibility',function(){t_popup__addAttributesForAccessibility(popupTooltipHook)});document.addEventListener('click',function(event){var target=event.target;var href=target.closest('a[href$="'+popupTooltipHook+'"]')?target:!1;if(!href)return;event.preventDefault();t702_showPopup(recId);t_onFuncLoad('t_popup__resizePopup',function(){t_popup__resizePopup(recId)});t702__lazyLoad();if(analitics&&window.Tilda){Tilda.sendEventToStatistics(analitics,popupTooltipHook)}});t_onFuncLoad('t_popup__addClassOnTriggerButton',function(){t_popup__addClassOnTriggerButton(document,popupTooltipHook)})}
popup.addEventListener('scroll',t_throttle(function(){t702__lazyLoad()}));popup.addEventListener('click',function(event){var windowWithoutScrollBar=window.innerWidth-17;if(event.clientX>windowWithoutScrollBar)return;if(event.target===this)t702_closePopup(recId)});popupCloseBtn.addEventListener('click',function(){t702_closePopup(recId)});if(submitHref){submitHref.addEventListener('click',function(){if(documentBody.classList.contains('t-body_scroll-locked')){documentBody.classList.remove('t-body_scroll-locked')}})}
for(var i=0;i<hrefs.length;i++){hrefs[i].addEventListener('click',function(){var url=this.getAttribute('href');if(!url||url.substring(0,7)!='#price:'){t702_closePopup(recId);if(!url||url.substring(0,7)=='#popup:'){setTimeout(function(){if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupShowed');documentBody.classList.add('t-body_popupshowed')},300)}}})}
function t702_escClosePopup(event){if(event.key==='Escape')t702_closePopup(recId)}
popup.addEventListener('tildamodal:show'+popupTooltipHook,function(){document.addEventListener('keydown',t702_escClosePopup)});popup.addEventListener('tildamodal:close'+popupTooltipHook,function(){document.removeEventListener('keydown',t702_escClosePopup)})}
function t702_lockScroll(){var documentBody=document.body;if(!documentBody.classList.contains('t-body_scroll-locked')){var bodyScrollTop=typeof window.pageYOffset!=='undefined'?window.pageYOffset:(document.documentElement||documentBody.parentNode||documentBody).scrollTop;documentBody.classList.add('t-body_scroll-locked');documentBody.style.top='-'+bodyScrollTop+'px';documentBody.setAttribute('data-popup-scrolltop',bodyScrollTop)}}
function t702_unlockScroll(){var documentBody=document.body;if(documentBody.classList.contains('t-body_scroll-locked')){var bodyScrollTop=documentBody.getAttribute('data-popup-scrolltop');documentBody.classList.remove('t-body_scroll-locked');documentBody.style.top=null;documentBody.removeAttribute('data-popup-scrolltop');document.documentElement.scrollTop=parseInt(bodyScrollTop)}}
function t702_showPopup(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t702');if(!container)return;var windowWidth=window.innerWidth;var screenMin=rec.getAttribute('data-screen-min');var screenMax=rec.getAttribute('data-screen-max');if(screenMin&&windowWidth<parseInt(screenMin,10))return;if(screenMax&&windowWidth>parseInt(screenMax,10))return;var popup=rec.querySelector('.t-popup');var popupTooltipHook=popup.getAttribute('data-tooltip-hook');var ranges=rec.querySelectorAll('.t-range');var documentBody=document.body;if(ranges.length){Array.prototype.forEach.call(ranges,function(range){t702__triggerEvent(range,'popupOpened')})}
t_onFuncLoad('t_popup__showPopup',function(){t_popup__showPopup(popup)});if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupShowed');documentBody.classList.add('t-body_popupshowed');documentBody.classList.add('t702__body_popupshowed');if(/iPhone|iPad|iPod/i.test(navigator.userAgent)&&!window.MSStream&&window.isiOSVersion&&window.isiOSVersion[0]===11){setTimeout(function(){t702_lockScroll()},500)}
t702__lazyLoad();t702__triggerEvent(popup,'tildamodal:show'+popupTooltipHook);t_onFuncLoad('t_forms__calculateInputsWidth',function(){t_forms__calculateInputsWidth(recId)})}
function t702_closePopup(recId){var rec=document.getElementById('rec'+recId);var popup=rec.querySelector('.t-popup');var popupTooltipHook=popup.getAttribute('data-tooltip-hook');var popupAll=document.querySelectorAll('.t-popup_show:not(.t-feed__post-popup):not(.t945__popup)');if(popupAll.length==1){if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupHidden');document.body.classList.remove('t-body_popupshowed')}else{var newPopup=[];for(var i=0;i<popupAll.length;i++){if(popupAll[i].getAttribute('data-tooltip-hook')===popupTooltipHook){popupAll[i].classList.remove('t-popup_show');newPopup.push(popupAll[i])}}
if(newPopup.length===popupAll.length){if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupHidden');document.body.classList.remove('t-body_popupshowed')}}
if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupHidden');popup.classList.remove('t-popup_show');document.body.classList.remove('t702__body_popupshowed');if(/iPhone|iPad|iPod/i.test(navigator.userAgent)&&!window.MSStream&&window.isiOSVersion&&window.isiOSVersion[0]===11){t702_unlockScroll()}
t_onFuncLoad('t_popup__addFocusOnTriggerButton',function(){t_popup__addFocusOnTriggerButton()});setTimeout(function(){var popupHide=document.querySelectorAll('.t-popup:not(.t-popup_show)');for(var i=0;i<popupHide.length;i++){popupHide[i].style.display='none'}},300);t702__triggerEvent(popup,'tildamodal:close'+popupTooltipHook)}
function t702_sendPopupEventToStatistics(popupName){var virtPage='/tilda/popup/';var virtTitle='Popup: ';if(popupName.substring(0,7)=='#popup:'){popupName=popupName.substring(7)}
virtPage+=popupName;virtTitle+=popupName;if(window.Tilda&&typeof Tilda.sendEventToStatistics=='function'){Tilda.sendEventToStatistics(virtPage,virtTitle,'',0)}else{if(ga){if(window.mainTracker!='tilda'){ga('send',{hitType:'pageview',page:virtPage,title:virtTitle})}}
if(window.mainMetrika&&window[window.mainMetrika]){window[window.mainMetrika].hit(virtPage,{title:virtTitle,referer:window.location.href})}}}
function t702_onSuccess(form){t_onFuncLoad('t_forms__onSuccess',function(){t_forms__onSuccess(form)})}
function t702__lazyLoad(){if(window.lazy==='y'||document.getElementById('allrecords').getAttribute('data-tilda-lazy')==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}}
function t702__triggerEvent(el,eventName){var event;if(typeof window.CustomEvent==='function'){event=new CustomEvent(eventName)}else if(document.createEvent){event=document.createEvent('HTMLEvents');event.initEvent(eventName,!0,!1)}else if(document.createEventObject){event=document.createEventObject();event.eventType=eventName}
event.eventName=eventName;if(el.dispatchEvent){el.dispatchEvent(event)}else if(el.fireEvent){el.fireEvent('on'+event.eventType,event)}else if(el[eventName]){el[eventName]()}else if(el['on'+eventName]){el['on'+eventName]()}}
function t1003_init(recId,angle){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t1003');if(!container)return;t1003_calc(rec,recId,angle);window.addEventListener('resize',t_throttle(function(){t1003_calc(rec,recId,angle)},300));window.addEventListener('load',function(){t1003_calc(rec,recId,angle)});container.addEventListener('displayChanged',function(){t1003_calc(rec,recId,angle);var content=container.querySelector('.t1003__content');var contentAnimName=content?window.getComputedStyle(content).animationName:'';if(!contentAnimName)return;content.style.animationName='';setTimeout(function(){content.style.animationName=contentAnimName})})}
function t1003_calc(rec,recId,angle){var wrapper=rec.querySelector('.t1003__wrapper');var contentWrapper=rec.querySelector('.t1003__content-wrapper');var content=rec.querySelector('.t1003__content');var items=content.querySelectorAll('.t1003__item');var img=items[0].querySelector('.t1003__bgimg');var index=0;if(img){for(var i=0;i<items.length;i++){if(items[i].querySelector('.t1003__bgimg').classList.contains('loaded')){index=i;break}}}
var itemWidth=items[index].offsetWidth;var windowWidth=window.innerWidth;var itemsToDisplay=parseInt(windowWidth/itemWidth)+3;var direction='';if(angle)t1003_calcRotatedWidth(rec,angle);if(wrapper.getAttribute('data-marquee-direction')==='opposite')direction='right';for(var i=1;i<items.length;i++){t1003__remove(items[i])}
for(var i=0;i<itemsToDisplay;i++){if(direction==='right'){content.insertBefore(items[index].cloneNode(!0),items[0])}else{content.insertBefore(items[index].cloneNode(!0),items[0].nextSibling)}}
t1003_anim(rec,itemWidth,recId,direction);content.style.animationName='t1003__anim-scrolling_'+recId;contentWrapper.style.opacity='1'}
function t1003_calcRotatedWidth(rec,angle){var outer=rec.querySelector('.t1003__outer');var wrapper=rec.querySelector('.t1003__wrapper');var wrapperOpacity=wrapper.style.opacity;wrapper.removeAttribute('style');angle=parseFloat(angle.replace('deg',''),10);var windowWidth=window.innerWidth;var angleRad=(angle*Math.PI)/180;var sin=Math.sin(angleRad);var paddingCoeff=Math.abs(Math.tan(angleRad)/2);var padding=windowWidth*paddingCoeff;var rotatedHeight=Math.abs(sin*windowWidth);wrapper.style.width='calc(100vw + '+padding+'px)';wrapper.style.padding='0 '+padding+'px';if(wrapperOpacity)wrapper.style.opacity=wrapperOpacity;var wrapperStyle=getComputedStyle(wrapper,null);var wrapperPaddingTop=parseInt(wrapperStyle.paddingTop)||0;var wrapperPaddingBottom=parseInt(wrapperStyle.paddingBottom)||0;var wrapperPaddingLeft=parseInt(wrapperStyle.paddingLeft)||0;var wrapperPaddingRight=parseInt(wrapperStyle.paddingRight)||0;var wrapperWidth=wrapper.clientWidth-(wrapperPaddingLeft+wrapperPaddingRight);var wrapperHeight=wrapper.clientHeight-(wrapperPaddingTop+wrapperPaddingBottom);var operator=(sin<0)?'':'-';outer.style.height=(rotatedHeight+wrapperHeight)+'px';if(window.isIE){wrapper.style.width='';wrapper.style.marginLeft='-'+wrapperWidth/2+'px';wrapper.style.marginTop=operator+wrapperHeight/2+'px'}}
function t1003_anim(rec,itemWidth,id,direction){var animationName='t1003__anim-scrolling_'+id;var speedAttr=rec.querySelector('.t1003__wrapper').getAttribute('data-marquee-speed');var start;var end;var speed;var seconds;var styleAnimation=rec.querySelector('#'+animationName);if(styleAnimation)t1003__remove(styleAnimation);if(!speedAttr)return;seconds=parseFloat(speedAttr.replace('s',''));speed=(itemWidth/100)*seconds;rec.querySelector('.t1003__content').style.animationDuration=speed+'s';if(direction==='right'){start=itemWidth*-1;end=0}else{start=0;end=itemWidth*-1}
var style=document.createElement('style');style.id=animationName;style.innerHTML='@keyframes '+animationName+'{'+'0% {'+'transform: translateX('+start+'px);'+'-webkit-transform: translateX('+start+'px);'+'}'+'100% {'+'transform: translateX('+end+'px);'+'-webkit-transform: translateX('+end+'px);'+'}'+'}';rec.appendChild(style)}
function t1003__remove(el){if(el&&el.parentNode){el.parentNode.removeChild(el)}}
function t844_init(recId){t_onFuncLoad('t_card__moveClickOnCard',function(){t_card__moveClickOnCard(recId)});t_onFuncLoad('t_card__addFocusOnTab',function(){t_card__addFocusOnTab(recId)})}
function t594_init(recId){t_onFuncLoad('t_card__moveClickOnCard',function(){t_card__moveClickOnCard(recId)});t_onFuncLoad('t_card__addFocusOnTab',function(){t_card__addFocusOnTab(recId)})}
function t450_showMenu(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var menu=rec.querySelector('.t450');var overlay=rec.querySelector('.t450__overlay');var menuElements=rec.querySelectorAll('.t450__overlay, .t450__close, a[href*="#"]');if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupShowed');document.body.classList.add('t450__body_menushowed');if(menu)menu.classList.add('t450__menu_show');if(overlay)overlay.classList.add('t450__menu_show');if(menu){menu.addEventListener('clickedAnchorInTooltipMenu',function(){t450_closeMenu(menu,overlay)})}
Array.prototype.forEach.call(menuElements,function(element){element.addEventListener('click',function(){if(element.closest('.tooltipstered, .t-menusub__target-link, .t794__tm-link, .t966__tm-link, .t978__tm-link'))return;if(element.href&&(element.href.substring(0,7)==='#price:'||element.href.substring(0,9)==='#submenu:'))return;t450_closeMenu(menu,overlay)})});document.addEventListener('keydown',function(e){if(e.keyCode===27){document.body.classList.remove('t390__body_popupshowed');var popups=document.querySelectorAll('.t390');Array.prototype.forEach.call(popups,function(popup){popup.classList.remove('t390__popup_show')})}});rec.addEventListener('click',function(e){if(e.target.closest('.t966__tm-link, .t978__tm-link')){t450_checkSize(recid);if(e.target.closest('.t978__tm-link')){setTimeout(function(){var hookLink=e.target.closest('.t978__tm-link');var menuBlock=hookLink.nextElementSibling;var submenuLinks=menuBlock?menuBlock.querySelectorAll('.t978__menu-link'):[];Array.prototype.forEach.call(submenuLinks,function(link){link.addEventListener('click',function(){t450_checkSize(recid)})})},300)}}});menu.addEventListener('menuOverflow',function(){t450_checkSize(recid)});t450_highlight(recid)}
function t450_closeMenu(menu,overlay){if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupHidden');document.body.classList.remove('t450__body_menushowed');if(menu)menu.classList.remove('t450__menu_show');if(overlay)overlay.classList.remove('t450__menu_show')}
function t450_checkSize(recid){var rec=document.getElementById('rec'+recid);var menu=rec?rec.querySelector('.t450'):null;if(!menu)return;var container=menu.querySelector('.t450__container');var topContainer=menu.querySelector('.t450__top');var rightContainer=menu.querySelector('.t450__rightside');setTimeout(function(){var topContainerHeight=topContainer?topContainer.offsetHeight:0;var rightContainerHeight=rightContainer?rightContainer.offsetHeight:0;var containerPaddingTop=container?window.getComputedStyle(container).paddingTop:'0';var containerPaddingBottom=container?window.getComputedStyle(container).paddingBottom:'0';containerPaddingTop=parseInt(containerPaddingTop,10);containerPaddingBottom=parseInt(containerPaddingBottom,10);if(topContainerHeight+rightContainerHeight+containerPaddingTop+containerPaddingBottom>document.documentElement.clientHeight){menu.classList.add('t450__overflowed')}else{menu.classList.remove('t450__overflowed')}})}
function t450_appearMenu(recid){var rec=document.getElementById('rec'+recid);var burger=rec?rec.querySelector('.t450__menu__content'):null;if(!burger)return;var burgerAppearOffset=burger?burger.getAttribute('data-appearoffset'):'';var burgerHideOffset=burger?burger.getAttribute('data-hideoffset'):'';if(burgerAppearOffset){burgerAppearOffset=t450_appearMenuParseNumber(burgerAppearOffset);if(window.pageYOffset>=burgerAppearOffset){if(burger.classList.contains('t450__beforeready')){burger.classList.remove('t450__beforeready')}}else{burger.classList.add('t450__beforeready')}}
if(burgerHideOffset){burgerHideOffset=t450_appearMenuParseNumber(burgerHideOffset);var scrollHeight=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight);if(window.pageYOffset+window.innerHeight>=scrollHeight-burgerHideOffset){if(!burger.classList.contains('t450__beforeready')){burger.classList.add('t450__beforeready')}}else if(burgerAppearOffset){if(window.pageYOffset>=burgerAppearOffset){burger.classList.remove('t450__beforeready')}}else{burger.classList.remove('t450__beforeready')}}}
function t450_appearMenuParseNumber(string){if(string.indexOf('vh')>-1){string=Math.floor((window.innerHeight*(parseInt(string)/100)))}
return parseInt(string,10)}
function t450_initMenu(recid){var rec=document.getElementById('rec'+recid);var menu=rec?rec.querySelector('.t450'):null;var overlay=rec?rec.querySelector('.t450__overlay'):null;var burger=rec?rec.querySelector('.t450__burger_container'):null;var menuLinks=rec?rec.querySelectorAll('.t-menu__link-item.t450__link-item_submenu'):[];var hook=menu?menu.getAttribute('data-tooltip-hook'):'';if(hook){document.addEventListener('click',function(e){if(e.target.closest('a[href="'+hook+'"]')){e.preventDefault();t450_closeMenu(menu,overlay);t450_showMenu(recid);t450_checkSize(recid)}})}
if(burger){burger.addEventListener('click',function(){t450_closeMenu(menu,overlay);t450_showMenu(recid);t450_checkSize(recid)})}
window.addEventListener('resize',function(){t450_checkSize(recid)});if(!window.isMobile)return;Array.prototype.forEach.call(menuLinks,function(link){link.addEventListener('click',function(){t450_checkSize(recid)})})}
function t450_highlight(recid){var url=window.location.href;var pathname=window.location.pathname;var hash=window.location.hash;if(url.substr(url.length-1)==='/'){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)==='/'){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)==='/'){pathname=pathname.slice(1)}
if(pathname===''){pathname='/'}
var shouldBeActiveElements=document.querySelectorAll('.t450__menu a[href=\''+url+'\'], '+'.t450__menu a[href=\''+url+'/\'], '+'.t450__menu a[href=\''+pathname+'\'], '+'.t450__menu a[href=\'/'+pathname+'\'], '+'.t450__menu a[href=\''+pathname+'/\'], '+'.t450__menu a[href=\'/'+pathname+'/\']'+(hash?', .t450__menu a[href=\''+hash+'\']':''));var rec=document.getElementById('rec'+recid);var menuLinks=rec?rec.querySelectorAll('.t450__menu a'):[];Array.prototype.forEach.call(menuLinks,function(link){if(link.getAttribute('data-highlighted-by-user')!=='y')link.classList.remove('t-active')});Array.prototype.forEach.call(shouldBeActiveElements,function(link){link.classList.add('t-active')})}
function t972_init(recid){var cookies=t972_getCookie('t_cookiesConsentGiven');if(cookies.val){t972_acceptCookies();return}else{var rec=document.querySelector('#rec'+recid);if(!rec)return;var wrapper=rec.querySelector('.t972');if(!wrapper)return;wrapper.classList.remove('t972_closed');t972_addEvents(recid);t972_addCookieEvents(recid);t972_translateToggle(recid)}}
function t972_initPreview(recid){t972_addEvents(recid);t972_translateToggle(recid)}
function t972_getCookie(name){var matches=document.cookie.match(new RegExp('(?:^|; )'+name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,'\\$1')+'=([^;]*)'));var cookie={name:'',val:''};if(matches){try{cookie={name:name,val:decodeURIComponent(matches[1])}}catch(e){}}
return cookie}
function t972_createCookie(name,value,days){var expires;if(days){var date=new Date();var dayInMs=24*60*60*1000;date.setTime(date.getTime()+days*dayInMs);expires='; expires='+date.toGMTString()}else{expires=''}
document.cookie=name+'='+value+expires+'; path=/'}
function t972_confirmCookies(list){var checkBoxes=document.querySelectorAll('.t972__categories input[name="cookie_type"]');var selectedCookies=[];if(list==='all'){Array.prototype.forEach.call(checkBoxes,function(checkBox){checkBox.checked=!0})}
Array.prototype.forEach.call(checkBoxes,function(checkBox){if(checkBox.checked===!0){selectedCookies.push(checkBox.value)}});var allowedCookiesList=JSON.stringify(selectedCookies);t972_createCookie('t_cookiesCategories',allowedCookiesList,365);t972_acceptCookies()}
function t972_acceptCookies(){var allowedCookiesList=t972_getCookie('t_cookiesCategories').val;var scriptsList=document.querySelectorAll('script[data-tilda-cookie-type]');Array.prototype.forEach.call(scriptsList,function(item){if(allowedCookiesList.indexOf(item.getAttribute('data-tilda-cookie-type'))!==-1){if(item.getAttribute('type')&&item.getAttribute('type')==='text/plain'){var str=item.innerHTML;item.innerHTML='';item.setAttribute('type','text/javascript');item.innerHTML=str.replace('}, 2000);','}, 200);');if(allowedCookiesList.indexOf('advertising')==-1){if(str.indexOf('google-analytics')!==-1){item.innerHTML=str.replace('auto','{ storeGac: false }')}}
if(allowedCookiesList.indexOf('analytics')!==-1){if(typeof tildastat=='function'){tildastat('cookieenabled')}else{setTimeout(function(){if(typeof tildastat=='function'){tildastat('cookieenabled')}},1000)}}
item.setAttribute('data-tilda-cookie-consent','accepted')}
if(item.getAttribute('data-src')){item.setAttribute('src',item.getAttribute('data-src'));item.setAttribute('data-tilda-cookie-consent','accepted')}}});t972_createCookie('t_cookiesConsentGiven','true',365)}
function t972_addEvents(recid){var rec=document.querySelector('#rec'+recid);if(!rec)return;var wrapper=rec.querySelector('.t972');if(!wrapper)return;var settingsBtn=wrapper.querySelector('.t972__settings-btn');var settingsHeader=wrapper.querySelector('.t972__settings-header');var categoryTitle=wrapper.querySelectorAll('.t972__category-header');var categoryToggle=wrapper.querySelectorAll('.t972__toggle-input');var cookiesBanner=wrapper.querySelector('.t972__banner');var settingsBanner=wrapper.querySelector('.t972__settings');settingsBtn.addEventListener('click',function(){cookiesBanner.style.display='none';settingsBanner.style.display='flex'});settingsHeader.addEventListener('click',function(){cookiesBanner.style.display='block';settingsBanner.style.display='none'});Array.prototype.forEach.call(categoryTitle,function(title){title.addEventListener('click',function(){var categoryBody=title.closest('.t972__category').querySelector('.t972__category-body');title.classList.toggle('t972__opened');title.style.pointerEvents='none';t972_slideToggle(categoryBody,title,300)})});Array.prototype.forEach.call(categoryToggle,function(toggle){toggle.addEventListener('change',function(){var toggleText=toggle.closest('.t972__category-toggle').querySelector('.t972__toggle-txt');if(toggle.checked){toggleText.classList.add('t972__category-enabled');toggleText.textContent=t972_trans('enabled')}else{toggleText.classList.remove('t972__category-enabled');toggleText.textContent=t972_trans('disabled')}})})}
function t972_slideToggle(target,triggerElement,duration){if(!target)return;if(!duration&&duration!==0)duration=500;if(window.getComputedStyle(target).display==='none'){return t972_slideDown(target,triggerElement,duration)}else{return t972_slideUp(target,triggerElement,duration)}}
function t972_slideUp(target,triggerElement,duration){if(!target)return;if(!duration&&duration!==0)duration=500;target.style.transitionProperty='height, margin, padding';target.style.transitionDuration=duration+'ms';target.style.boxSizing='border-box';target.style.height=target.offsetHeight+'px';target.offsetHeight;target.style.overflow='hidden';target.style.height='0';target.style.paddingTop='0';target.style.paddingBottom='0';target.style.marginTop='0';target.style.marginBottom='0';setTimeout(function(){triggerElement.style.pointerEvents='auto';target.style.display='none';target.style.height='';target.style.paddingTop='';target.style.paddingBottom='';target.style.marginTop='';target.style.marginBottom='';target.style.overflow='';target.style.transitionDuration='';target.style.transitionProperty=''},duration)}
function t972_slideDown(target,triggerElement,duration){if(!target)return;if(!duration&&duration!==0)duration=500;target.style.display='';var cashedDisplay=window.getComputedStyle(target).display;if(cashedDisplay==='none')cashedDisplay='block';target.style.display=cashedDisplay;var targetHeight=target.offsetHeight;target.style.overflow='hidden';target.style.height='0';target.style.paddingTop='0';target.style.paddingBottom='0';target.style.marginTop='0';target.style.marginBottom='0';target.offsetHeight;target.style.boxSizing='border-box';target.style.transitionProperty='height, margin, padding';target.style.transitionDuration=duration+'ms';target.style.height=targetHeight+'px';target.style.paddingTop='';target.style.paddingBottom='';target.style.marginTop='';target.style.marginBottom='';setTimeout(function(){triggerElement.style.pointerEvents='auto';target.style.height='';target.style.overflow='';target.style.transitionDuration='';target.style.transitionProperty=''},duration)}
function t972_addCookieEvents(recid){var rec=document.querySelector('#rec'+recid);if(!rec)return;var wrapper=rec.querySelector('.t972');if(!wrapper)return;var confirmBtn=wrapper.querySelector('.t972__confirm-btn');var acceptBtn=wrapper.querySelector('.t972__accept-btn');var cookiesBanner=wrapper.querySelector('.t972__banner');var settingsBanner=wrapper.querySelector('.t972__settings');confirmBtn.addEventListener('click',function(){t972_confirmCookies('selected');cookiesBanner.style.display='none';settingsBanner.style.display='none'});acceptBtn.addEventListener('click',function(){t972_confirmCookies('all');cookiesBanner.style.display='none';settingsBanner.style.display='none'})}
function t972_translateToggle(recid){var rec=document.querySelector('#rec'+recid);if(!rec)return;var wrapper=rec.querySelector('.t972');if(!wrapper)return;var category=wrapper.querySelectorAll('.t972__category-toggle');Array.prototype.forEach.call(category,function(cat){var categoryText=cat.querySelectorAll('.t972__toggle-txt');Array.prototype.forEach.call(categoryText,function(item){if(item.classList.contains('js_always-enabled')){item.textContent=t972_trans('alwaysEnabled')}else{var itemParent=item.parentNode;var categoryInput=itemParent.querySelector('.t972__toggle-input');if(categoryInput.checked){item.textContent=t972_trans('enabled')}else{item.textContent=t972_trans('disabled')}}})})}
function t972_trans(key){var data={alwaysEnabled:{EN:'Always Enabled',RU:'Всегда разрешено',FR:'Toujours actif',DE:'Immer aktiv',ES:'Activas siempre',PT:'Sempre ativos',JA:'常にアクティブ',ZH:'始終啟用',UK:'Завжди дозволено',PL:'Zawsze aktywne',KK:'Әрқашан қосылады',IT:'Sempre attivi',LV:'Vienmēr iespējots',},enabled:{EN:'Enabled',RU:'Разрешено',FR:'Actif',DE:'Aktiv',ES:'Activas',PT:'Ativos',JA:'アクティブ',ZH:'启用',UK:'Дозволено',PL:'Aktywne',KK:'Қосылды',IT:'Attivi',LV:'Iespējots',},disabled:{EN:'Disabled',RU:'Запрещено',FR:'Désactivé',DE:'Inaktiv',ES:'Deshabilitadas',PT:'Desativado',JA:'オフにした',ZH:'已禁用',UK:'Вимкнено',PL:'Wyłączone',KK:'Өшірілген',IT:'Disabilitato',LV:'Atspējots',},};var lang=window.browserLang.toUpperCase();return lang&&data[key][lang]?data[key][lang]:data[key].EN}
if(!Element.prototype.matches){Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.msMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.oMatchesSelector}
if(!Element.prototype.closest){Element.prototype.closest=function(s){var el=this;while(el&&el.nodeType===1){if(Element.prototype.matches.call(el,s)){return el}
el=el.parentElement||el.parentNode}
return null}}
function t190_init(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;rec.addEventListener('click',function(e){if(e.target.closest('.t190__button')){t190_scrollToTop()}})}
function t190_scrollToTop(){var duration=700;var start=(window.pageYOffset||document.documentElement.scrollTop)-(document.documentElement.clientTop||0);var change=0-start;var currentTime=0;var increment=16;document.body.setAttribute('data-scrollable','true');var isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);if(isSafari){t190__animateScrollPolyfill(0)}else{t190__animateScroll()}
function t190__easeInOutCubic(currentTime){if((currentTime/=duration/2)<1){return(change/2)*currentTime*currentTime*currentTime+start}else{return(change/2)*((currentTime-=2)*currentTime*currentTime+2)+start}}
function t190__animateScroll(){currentTime+=increment;window.scrollTo(0,t190__easeInOutCubic(currentTime));if(currentTime<duration){setTimeout(t190__animateScroll,increment)}else{document.body.removeAttribute('data-scrollable')}}}
function t190__animateScrollPolyfill(target){var documentHeight=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight);var bottomViewportPoint=documentHeight-document.documentElement.clientHeight;if(target>bottomViewportPoint)target=bottomViewportPoint;if(target===window.pageYOffset)return!1;var currentPosition=window.pageYOffset;var step=(target-currentPosition)/30;var difference=window.pageYOffset;var timerID=setInterval(function(){difference+=step;window.scrollTo(0,difference);document.body.setAttribute('data-scrollable','true');if((target-currentPosition<0&&window.pageYOffset<=target)||(target-currentPosition>0&&window.pageYOffset>=target)){clearInterval(timerID);document.body.removeAttribute('data-scrollable')}},10)}