/*! sioweb-select 2018-07-31 */
function jquery_plugin_manager(a){var b=function(a,b){var c=$(b),d=function(b,c,e){$(b).core({version:1,title:"pm",name:"pm",prefix:"pm_",scope:"backend",source:a,container:"item",plugins:{frontend:{},otherplugin:{}},allPluginsLoaded:function(a,b){c.length?d(c.splice(0,1),c,e):e(a,b)}})};d(c.splice(0,1),c,function(a){})},c=arguments[1]||b,d=a.src.replace(/(.*\/).*/,"$1").replace(window.location.origin,"").replace("//","/");$(function(){$.getScript(d+"core/core.js",function(a,e,f){"string"==typeof c?b(d,c):"function"==typeof c&&c(d,{data:a,status:e,xhr:f})})})}