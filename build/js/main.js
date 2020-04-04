"use strict";"function"!=typeof window.CustomEvent&&(window.Event=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:null};var r=document.createEvent("CustomEvent");return r.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),r}),function(){function n(e,t){var r=new XMLHttpRequest;return r.addEventListener("load",function(){200===r.status?e(r.response):t("Статус ответа "+r.status)}),r}var i="https://echo.htmlacademy.ru";window.data={load:function(e,t,r){var a=n(t,r);a.addEventListener("error",function(){r("Ошибка соединения..")}),a.addEventListener("timeout",function(){r("Запрос не успел выполниться за "+a.timeout+"мс")}),a.open("GET",e),a.send()},send:function(e,t,r){var a=n(t,r);a.open("POST",i),a.responseType="json",a.timeout=1e4,a.send(e)}}}(),window.addEventListener("load",function(){document.querySelector(".nojs").classList.remove("nojs"),window.util.browserIe&&(String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return t=t||0,this.substr(t,e.length)===e}));var e="nav-user__signin",t="header__nav-toggle",a="service-item__head",b=document.querySelector("body"),r=b.querySelector("."+e);if(r&&r.addEventListener("click",function(e){e.preventDefault(),window.modal.open("modal-overlay","modal-login"),window.signin.init("modal-login","login-name","login-password")}),b.querySelector(".slider"))new Swiper(".slider",{loop:!0,autoplay:{delay:4e3},pagination:{el:".slider-pagination",type:"bullets",bulletElement:"button",clickable:!0,bulletClass:"slider-pagination__item",bulletActiveClass:"slider-pagination__item_active"}});function n(e){e.preventDefault();for(var t=0;t<l.length;t++)l[t].parentNode.classList.remove(i.tab+"_active");var r=e.currentTarget;r.classList.contains(a)&&r.parentNode.classList.add(i.tab+"_active")}var i={tabList:"services__list",tab:"service-item"},o=b.querySelector("."+t);if(o&&o.addEventListener("click",function(e){e.preventDefault();var t=b.querySelector(".nav-main");if(e.target.classList.contains("header__nav-toggle")){if(e.target.classList.contains("header__nav-toggle_closed"))return e.target.classList.remove("header__nav-toggle_closed"),e.target.classList.add("header__nav-toggle_opened"),t.classList.remove("nav-main_closed"),t.classList.add("nav-main_opened"),void(b.style.overflow="hidden");if(e.target.classList.contains("header__nav-toggle_opened"))return e.target.classList.remove("header__nav-toggle_opened"),e.target.classList.add("header__nav-toggle_closed"),t.classList.remove("nav-main_opened"),t.classList.add("nav-main_closed"),void(b.style.overflow="scroll")}}),1008<b.offsetWidth){var l=b.querySelectorAll("."+a);if(0<l.length)for(var s=0;s<l.length;s++)l[s].addEventListener("click",n),l[s].addEventListener("focus",n)}if(b.offsetWidth<=1008){var c=b.querySelector("."+i.tabList);c&&c.classList.add("swiper-wrapper");var u=b.querySelectorAll("."+i.tab);if(0<u.length)for(var d=0;d<u.length;d++)u[0].classList.remove(i.tab+"_active"),u[0].classList.add("swiper-slide");new Swiper(".services__slider",{loop:!0,pagination:{el:".services-pagination",type:"bullets",bulletElement:"button",clickable:!0,bulletClass:"services-pagination__item",bulletActiveClass:"services-pagination__item_active"}})}var L={},q={number:10};if(b.querySelector(".select")){new Select(".select",{idSelect:"#credit-target",classElement:"select__item",classActiveElement:"select__item_selected"});b.querySelector("#credit-target").addEventListener("change",function(e){e.preventDefault();var t=e.target,r=t.form;r.reset();function a(e){e.preventDefault(),function(e){var t=b.querySelector("."+e);t.classList.add(e+"_show"),t.querySelector("."+e+"__number").value="№ "+window.util.getCreditNumber(q.number),q.number=q.number+1,t.querySelector("."+e+"__target").value=window.util.toUpperFirstSymbol(v[v.length-1]),t.querySelector("."+e+"__target-label").innerText=L.label,t.querySelector("."+e+"__target-sum").value=window.util.formatPrice(L.currentSum)+" "+L.currency,t.querySelector("."+e+"__initial-sum").value=window.util.formatPrice(L.initialSum)+" "+L.currency,t.querySelector("."+e+"__period").value=L.currentPeriod+" "+window.util.getLabelPeriod(L.currentPeriod,L);var r=t.querySelector("#request-name");r.focus();var a=t.querySelector("#request-phone"),n=t.querySelector("#request-email"),i=!0,o="",l="",s="";try{o=localStorage.getItem("name"),l=localStorage.getItem("phone"),s=localStorage.getItem("email")}catch(e){i=!1}i&&(o&&(r.value=o),l&&(a.value=l),s&&(n.value=s)),t.getElementsByTagName("form")[0].onsubmit=function(e){e.preventDefault();t.classList.remove("request_error"),r.value||r.focus(),r.value&&!a.value&&a.focus(),r.value&&a.value&&!n.value&&n.focus(),r.value&&a.value&&n.value?(i&&(localStorage.setItem("name",r.value),localStorage.setItem("phone",a.value),localStorage.setItem("email",n.value)),window.data.send(new FormData(e.target),function(){window.modal.open("modal-overlay","modal-request")},function(e){})):t.classList.add("request_error")}}("request")}function n(e){var t=b.querySelector("."+e),r=b.querySelector("."+e+"__deny");return 0===L.status?(t.classList.remove(e+"_show"),void r.classList.remove(e+"__deny_show")):m.value<m.minValue?(t.classList.remove(e+"_show"),r.classList.add(e+"__deny_show"),void(r.querySelector(".offer__deny-target").innerText=m.desc)):(t.classList.add(e+"_show"),r.classList.remove(e+"__deny_show"),t.querySelector("."+e+"__label").innerText=m.label,t.querySelector("."+e+"__value").innerText=window.util.formatPrice(m.value)+" "+L.currency,t.querySelector("."+e+"__rate").innerText=(100*m.rate).toFixed(2)+"%",t.querySelector("."+e+"__payment").innerText=window.util.formatPrice(m.payment)+" "+L.currency,t.querySelector("."+e+"__income").innerText=window.util.formatPrice(m.income)+" "+L.currency,void(t.querySelector("."+e+"__link").onclick=a))}function i(){var e,t,r;m.rate=function(){var e=100*L.initialSum/L.currentSum,t={};if(1===L.status)return t={min:.085,max:.094},e<15?t.max:t.min;if(2===L.status)return t={min:.15,max:.16,low:.035,high:.085},L.insuranceCar&&L.insuranceLife?t.low:L.insuranceCar||L.insuranceLife?t.high:L.currentSum<2e6?t.max:t.min;if(3===L.status){t={min:.095,mid:.125,max:.15};var r=0;L.currentSum<75e4&&(r=t.max),75e4<=L.currentSum&&L.currentSum<2e6&&(r=t.mid),2e6<=L.currentSum&&(r=t.min),L.salaryClient&&(r-=.005)}return r}(),m.value=(e=L.initialSum,L.parentCapital&&(e=L.initialSum+L.parentCapitalValue),L.currentSum-e),m.payment=(t=Number((m.rate/12).toFixed(5)),r=12*L.currentPeriod,Math.ceil(m.value*(t+t/(Math.pow(1+t,r)-1)))),m.income=Math.ceil(m.payment/.45),n("offer")}var o=r.querySelector(".calculator__step-second"),l=b.querySelector(".request"),s="none",c="mortgage-loan",u="car-loan",d="consumer-loan",m={};window.credit={update:i};for(var p=0;p<t.children.length;p++)if(t.children[p].hasAttribute("selected"))var _=t.children[p].getAttribute("value"),v=window.util.getDataAttr(t.children[p]);switch(_){case s:L={status:0};break;case c:L={status:1,label:"Стоимость "+v[0].toLowerCase(),minSumTarget:12e5,maxSumTarget:25e6,stepSumTarget:1e5,initialSum:0,percent:.1,percentStep:.05,minPeriod:5,maxPeriod:30,stepPeriod:1,parentCapital:!1,parentCapitalValue:47e4},m={label:"Сумма "+v[1].toLowerCase(),desc:v[2],minValue:5e5};break;case u:L={status:2,label:"Стоимость "+v[0].toLowerCase(),minSumTarget:5e5,maxSumTarget:5e6,stepSumTarget:5e4,initialSum:0,percent:.2,percentStep:.05,minPeriod:1,maxPeriod:5,stepPeriod:1,insuranceCar:!1,insuranceLife:!1},m={label:"Сумма "+v[1].toLowerCase(),desc:v[2],minValue:2e5};break;case d:L={status:3,label:"Сумма "+v[0].toLowerCase(),minSumTarget:5e5,maxSumTarget:3e6,stepSumTarget:5e4,initialSum:0,percent:.1,percentStep:.05,minPeriod:1,maxPeriod:7,stepPeriod:1,salaryClient:!1},m={label:"Сумма "+v[1].toLowerCase()}}if(0!==L.status){if(L.currency="рублей",L.desc="от "+L.minSumTarget+" до "+L.maxSumTarget+" "+L.currency,L.currentSum=L.minSumTarget,L.currentPeriod=L.minPeriod,L.labelPeriod=["год","года","лет"],o.classList.add("calculator__step-show"),r.querySelector(".input-price__sum"))new InputPrice(".input-price__sum",L,{inputEl:"#price-target",descEl:".calculator__input-desc",btnIncrease:".input-price__btn_minus",btnDecrease:".input-price__btn_plus"});if(r.querySelector(".input-price__initial")){new InitialPrice(".input-price__initial",L,{inputEl:"#price-first",rangeEl:".range__price-first",rangeToggleEl:".range__roller",rangeValueEl:".range__value"});r.querySelector("#price-target").addEventListener("change",function(e){e.preventDefault(),window.initialPrice.update()})}if(r.querySelector(".input-price__period"))new Period(".input-price__period",L,{inputEl:"#credit-period",rangeEl:".range__credit-period",rangeToggleEl:".range__roller",rangeValueMinEl:".range__limit-start",rangeValueMaxEl:".range__limit-end"});var g=r.querySelector(".calculator__params");if(g){for(var f,w=function(e){e.preventDefault(),1===L.status&&(L.parentCapital=e.target.checked),2===L.status&&("insurance-car"===e.target.name&&(L.insuranceCar=e.target.checked),"insurance-life"===e.target.name&&(L.insuranceLife=e.target.checked)),3===L.status&&(L.salaryClient=e.target.checked),i()},y=function(e){for(var t=0;t<e.length;t++)e[t].onchange=""},S=g.querySelectorAll(".calculator__param"),h=0;h<S.length;h++){S[h].classList.remove("calculator__param_show"),y(S[h].getElementsByTagName("input"))}1===L.status&&(f=g.querySelector(".calculator__param_capital")),2===L.status&&(f=g.querySelector(".calculator__param_insurance")),3===L.status&&(f=g.querySelector(".calculator__param_client")),f.classList.add("calculator__param_show"),function(e,t){for(var r=0;r<e.length;r++)e[r].onchange=t}(f.getElementsByTagName("input"),w)}window.inputPrice.update(),window.initialPrice.update(),window.period.update(),i()}else n("offer"),o.classList.remove("calculator__step-show"),l.classList.remove("request_show")})}var m={src:"https://api-maps.yandex.ru/2.1/",api:"apikey=83f923aa-03af-4069-b04f-28351fa92788",param:"load=package.standard&lang=ru-RU",filterClass:".map__header",center:[56.82,60.59],zoom:5,timeout:2e3,filters:{}};function p(){function n(){e(m.filterClass),window.maps.update(m.filters)}var r,e=function(e){for(var t=b.querySelector(e).getElementsByTagName("input"),r=0;r<t.length;r++){t[r].onchange=n;var a=window.util.getDataAttr(t[r]);m.filters[a]=t[r].checked}};e(m.filterClass),r=m.filters,ymaps.ready(function(){function e(r){t.geoObjects.add(a.setFilter(function(e){var t=e.properties.clusterCaption;if(e.properties.clusterCaption===t)return r[t]}))}var t=new ymaps.Map("map",{center:m.center,zoom:m.zoom,controls:[]}),a=new ymaps.ObjectManager({clusterize:!0,gridSize:5});window.data.load("/data.json",function(e){a.add(e)},function(){}),e(r),window.maps={update:e}})}setTimeout(function(){var e=document.createElement("script");e.type="text/javascript",e.src=m.src+"?"+m.api+"&"+m.param,e.onload=p,b.appendChild(e)},m.timeout)}),window.modal={open:function(r,a){var t=function(e){e.preventDefault(),e.keyCode===window.util.KeyCode.ESC&&(n.classList.remove(r+"_show"),i.classList.remove(a+"_show"),document.body.style.overflow="scroll"),window.removeEventListener("keydown",t)},n=document.querySelector("."+r),i=document.querySelector("."+a),e=i.querySelector("."+a+"__close");document.body.style.overflow="hidden",n&&n.classList.add(r+"_show"),i&&(i.classList.add(a+"_show"),e.addEventListener("click",function(e){e.preventDefault();var t=e.target;(t.classList.contains(a+"__close")||t.parentNode.classList.contains(a+"__close")||t.parentNode.parentNode.classList.contains(a+"__close"))&&(n.classList.remove(r+"_show"),i.classList.remove(a+"_show"),document.body.style.overflow="scroll")}),window.addEventListener("keydown",t))}},window.signin={init:function(e,t,r){var a=document.querySelector("."+e),n=a.querySelector("#"+t),i=a.querySelector("#"+r),o=i.parentNode.getElementsByTagName("button")[0],l=!0,s="";try{s=localStorage.getItem("login-name")}catch(e){l=!1}l&&s&&(n.value=s),n.focus(),o&&(o.onmousedown=function(){"password"===i.type&&(i.type="text")},o.onmouseup=function(){"text"===i.type&&(i.type="password")}),a.getElementsByTagName("form")[0].onsubmit=function(){l&&localStorage.setItem("login-name",n.value)}}},function(){var e=navigator.userAgent,t=-1<e.indexOf("MSIE ")||-1<e.indexOf("Trident/");window.util={KeyCode:{ESC:27,ENTER:13},browserIe:t,formatPrice:function(e){return Number(e).toLocaleString("ru-RU")},getDataAttr:function(e){return e.getAttribute("data-value").split(",")},toUpperFirstSymbol:function(e){return e?e[0].toUpperCase()+e.slice(1):"empty"},getLabelPeriod:function(e,t){var r=String(e),a=Number(r[r.length-1]);return 1===a&&11!==e?t.labelPeriod[0]:1<a&&a<5&&12!==e&&13!==e&&14!==e?t.labelPeriod[1]:t.labelPeriod[2]},getCreditNumber:function(e){return"00"+e}}}();