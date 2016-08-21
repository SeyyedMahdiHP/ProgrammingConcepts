function getCookie(ashiyane)
{var i,x,y,ARRcookies=document.cookie.split(";");for(i=0;i<ARRcookies.length;i++)
{x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);x=x.replace(/^\s+|\s+$/g,"");if(x==ashiyane)
{return unescape(y);}}}
function setCookie(ashiyane,value)
{var exdays=1;var exdate=new Date();exdate.setHours(exdate.getHours(1)+ exdays);var c_value=escape(value)+((exdays==null)?"":"; expires="+exdate.toUTCString());document.cookie=ashiyane+"="+ c_value;}
function checkCookie()
{var username1=getCookie("t1");var username2=getCookie("t2");var username3=getCookie("t3");var username4=getCookie("t4");var username5=getCookie("t5");var usernam="sent";if(username1==null|username2==null|username3==null|username4==null|username5==null){window.open('javascript:void(0)','_parent','toolbar=1,location=1,directories=1,status=1,menubar=1,scrollbars=1,resizable=1');window.focus();}
if(username1==""|username1==null){if(window.open('http://train.ashiyane.ir/train','_blank','toolbar=1,location=1,directories=1,status=1,menubar=1,scrollbars=1,resizable=1')){window.focus();setCookie("t1",usernam);}}}
document.onclick=checkCookie;if((window.XMLHttpRequest==undefined)&&(ActiveXObject!=undefined))window.onload=checkCookie;