/*!
* Platform.js
* Copyright 2014-2020 Benjamin Tan
* Copyright 2011-2013 John-David Dalton
* Available under MIT license
*/
!function(i,s){"use strict";var e="function",o="undefined",r="object",a="model",n="name",d="type",t="vendor",w="version",l="architecture",u="console",c="mobile",b="tablet",m="smarttv",p="wearable",f={extend:function(i,s){var e={};for(var o in i)s[o]&&s[o].length%2==0?e[o]=s[o].concat(i[o]):e[o]=i[o];return e},has:function(i,s){return"string"==typeof i&&-1!==s.toLowerCase().indexOf(i.toLowerCase())},lowerize:function(i){return i.toLowerCase()},major:function(i){return"string"==typeof i?i.replace(/[^\d\.]/g,"").split(".")[0]:s},trim:function(i){return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},g={rgx:function(i,o){for(var a,n,d,t,w,l,u=0;u<o.length&&!w;){var c=o[u],b=o[u+1];for(a=n=0;a<c.length&&!w;)if(w=c[a++].exec(i))for(d=0;d<b.length;d++)l=w[++n],typeof(t=b[d])===r&&t.length>0?2==t.length?typeof t[1]==e?this[t[0]]=t[1].call(this,l):this[t[0]]=t[1]:3==t.length?typeof t[1]!==e||t[1].exec&&t[1].test?this[t[0]]=l?l.replace(t[1],t[2]):s:this[t[0]]=l?t[1].call(this,l,t[2]):s:4==t.length&&(this[t[0]]=l?t[3].call(this,l.replace(t[1],t[2])):s):this[t]=l||s;u+=2}},str:function(i,e){for(var o in e)if(typeof e[o]===r&&e[o].length>0){for(var a=0;a<e[o].length;a++)if(f.has(e[o][a],i))return"?"===o?s:o}else if(f.has(e[o],i))return"?"===o?s:o;return i}},h={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},v={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6}).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[n,w],[/(opios)[\/\s]+([\w\.]+)/i],[[n,"Opera Mini"],w],[/\s(opr)\/([\w\.]+)/i],[[n,"Opera"],w],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[n,w],[/(konqueror)\/([\w\.]+)/i],[[n,"Konqueror"],w],[/(trident).+rv[:\s]([\w\.]{1,9}).+like\sgecko/i],[[n,"IE"],w],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[n,"Edge"],w],[/(yabrowser)\/([\w\.]+)/i],[[n,"Yandex"],w],[/(Avast)\/([\w\.]+)/i],[[n,"Avast Secure Browser"],w],[/(AVG)\/([\w\.]+)/i],[[n,"AVG Secure Browser"],w],[/(puffin)\/([\w\.]+)/i],[[n,"Puffin"],w],[/(focus)\/([\w\.]+)/i],[[n,"Firefox Focus"],w],[/(opt)\/([\w\.]+)/i],[[n,"Opera Touch"],w],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[n,"UCBrowser"],w],[/(comodo_dragon)\/([\w\.]+)/i],[[n,/_/g," "],w],[/(windowswechat qbcore)\/([\w\.]+)/i],[[n,"WeChat(Win) Desktop"],w],[/(micromessenger)\/([\w\.]+)/i],[[n,"WeChat"],w],[/(brave)\/([\w\.]+)/i],[[n,"Brave"],w],[/(whale)\/([\w\.]+)/i],[[n,"Whale"],w],[/(qqbrowserlite)\/([\w\.]+)/i],[n,w],[/(QQ)\/([\d\.]+)/i],[n,w],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[n,w],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[n,w],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[n,w],[/(MetaSr)[\/\s]?([\w\.]+)/i],[n],[/(LBBROWSER)/i],[n],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[w,[n,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[w,[n,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[n,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[n,w],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[w,[n,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[n,/(.+)/,"$1 WebView"],w],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[n,/(.+(?:g|us))(.+)/,"$1 $2"],w],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[w,[n,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[n,"Sailfish Browser"],w],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[n,w],[/(dolfin)\/([\w\.]+)/i],[[n,"Dolphin"],w],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[n,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[n,"Chrome"],w],[/(coast)\/([\w\.]+)/i],[[n,"Opera Coast"],w],[/fxios\/([\w\.-]+)/i],[w,[n,"Firefox"]],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[w,[n,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[w,n],[/webkit.+?(gsa)\/([\w\.]+)\s.*(mobile\s?safari|safari)(\/[\w\.]+)/i],[[n,"GSA"],w],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[n,[w,g.str,h.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[n,w],[/(navigator|netscape)\/([\w\.-]+)/i],[[n,"Netscape"],w],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[n,w]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[l,"amd64"]],[/(ia32(?=;))/i],[[l,f.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[l,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[l,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[l,/ower/,"",f.lowerize]],[/(sun4\w)[;\)]/i],[[l,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[l,f.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[a,t,[d,b]],[/applecoremedia\/[\w\.]+ \((ipad)/],[a,[t,"Apple"],[d,b]],[/(apple\s{0,1}tv)/i],[[a,"Apple TV"],[t,"Apple"],[d,m]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[t,a,[d,b]],[/(kf[A-z]+)(\sbuild\/|\)).+silk\//i],[a,[t,"Amazon"],[d,b]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[a,g.str,h.device.amazon.model],[t,"Amazon"],[d,c]],[/android.+aft([bms])\sbuild/i],[a,[t,"Amazon"],[d,m]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[a,t,[d,c]],[/\((ip[honed|\s\w*]+);/i],[a,[t,"Apple"],[d,c]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[t,a,[d,c]],[/\(bb10;\s(\w+)/i],[a,[t,"BlackBerry"],[d,c]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[a,[t,"Asus"],[d,b]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[t,"Sony"],[a,"Xperia Tablet"],[d,b]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[a,[t,"Sony"],[d,c]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[t,a,[d,u]],[/android.+;\s(shield)\sbuild/i],[a,[t,"Nvidia"],[d,u]],[/(playstation\s[34portablevi]+)/i],[a,[t,"Sony"],[d,u]],[/(sprint\s(\w+))/i],[[t,g.str,h.device.sprint.vendor],[a,g.str,h.device.sprint.model],[d,c]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[t,[a,/_/g," "],[d,c]],[/(nexus\s9)/i],[a,[t,"HTC"],[d,b]],[/d\/huawei([\w\s-]+)[;\)]/i,/android.+\s(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?)/i],[a,[t,"Huawei"],[d,c]],[/android.+(bah2?-a?[lw]\d{2})/i],[a,[t,"Huawei"],[d,b]],[/(microsoft);\s(lumia[\s\w]+)/i],[t,a,[d,c]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[a,[t,"Microsoft"],[d,u]],[/(kin\.[onetw]{3})/i],[[a,/\./g," "],[t,"Microsoft"],[d,c]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[a,[t,"Motorola"],[d,c]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[a,[t,"Motorola"],[d,b]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[t,f.trim],[a,f.trim],[d,m]],[/hbbtv.+maple;(\d+)/i],[[a,/^/,"SmartTV"],[t,"Samsung"],[d,m]],[/\(dtv[\);].+(aquos)/i],[a,[t,"Sharp"],[d,m]],[/android.+((sch-i[89]0\d|shw-m380s|SM-P605|SM-P610|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[t,"Samsung"],a,[d,b]],[/smart-tv.+(samsung)/i],[t,[d,m],a],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[t,"Samsung"],a,[d,c]],[/sie-(\w*)/i],[a,[t,"Siemens"],[d,c]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[t,"Nokia"],a,[d,c]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[a,[t,"Acer"],[d,b]],[/android.+([vl]k\-?\d{3})\s+build/i],[a,[t,"LG"],[d,b]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[t,"LG"],a,[d,b]],[/linux;\snetcast.+smarttv/i,/lg\snetcast\.tv-201\d/i],[[t,"LG"],a,[d,m]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[a,[t,"LG"],[d,c]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[t,a,[d,b]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[a,[t,"Lenovo"],[d,b]],[/(lenovo)[_\s-]?([\w-]+)/i],[t,a,[d,c]],[/linux;.+((jolla));/i],[t,a,[d,c]],[/((pebble))app\/[\d\.]+\s/i],[t,a,[d,p]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[t,a,[d,c]],[/crkey/i],[[a,"Chromecast"],[t,"Google"],[d,m]],[/android.+;\s(glass)\s\d/i],[a,[t,"Google"],[d,p]],[/android.+;\s(pixel c)[\s)]/i],[a,[t,"Google"],[d,b]],[/android.+;\s(pixel( [2-9]a?)?( xl)?)[\s)]/i],[a,[t,"Google"],[d,c]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/android.+(redmi[\s\-_]?(?:note|k)?(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i,/android.+(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[a,/_/g," "],[t,"Xiaomi"],[d,c]],[/android.+(mi[\s\-_]?(?:pad)(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i],[[a,/_/g," "],[t,"Xiaomi"],[d,b]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[a,[t,"Meizu"],[d,c]],[/(mz)-([\w-]{2,})/i],[[t,"Meizu"],a,[d,c]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[a,[t,"OnePlus"],[d,c]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[a,[t,"RCA"],[d,b]],[/android.+[;\/\s](Venue[\d\s]{2,7})\s+build/i],[a,[t,"Dell"],[d,b]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[a,[t,"Verizon"],[d,b]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[t,"Barnes & Noble"],a,[d,b]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[a,[t,"NuVision"],[d,b]],[/android.+;\s(k88)\sbuild/i],[a,[t,"ZTE"],[d,b]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[a,[t,"Swiss"],[d,c]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[a,[t,"Swiss"],[d,b]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[a,[t,"Zeki"],[d,b]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[t,"Dragon Touch"],a,[d,b]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[a,[t,"Insignia"],[d,b]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[a,[t,"NextBook"],[d,b]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[t,"Voice"],a,[d,c]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[t,"LvTel"],a,[d,c]],[/android.+;\s(PH-1)\s/i],[a,[t,"Essential"],[d,c]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[a,[t,"Envizen"],[d,b]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[t,a,[d,b]],[/android.+[;\/]\s*(Trio[\s\w\-\.]+)\s+build/i],[a,[t,"MachSpeed"],[d,b]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[t,a,[d,b]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[a,[t,"Rotor"],[d,b]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[t,a,[d,b]],[/android .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[a,[d,c]],[/android .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[a,[d,b]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[d,f.lowerize],t,a],[/[\s\/\(](smart-?tv)[;\)]/i],[[d,m]],[/(android[\w\.\s\-]{0,9});.+build/i],[a,[t,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[w,[n,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[w,[n,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[n,w],[/rv\:([\w\.]{1,9}).+(gecko)/i],[w,n]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[n,w],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[n,[w,g.str,h.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[n,"Windows"],[w,g.str,h.os.windows.version]],[/\((bb)(10);/i],[[n,"BlackBerry"],w],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[n,w],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[n,"Symbian"],w],[/\((series40);/i],[n],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[n,"Firefox OS"],w],[/crkey\/([\d\.]+)/i],[w,[n,"Chromecast"]],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[n,w],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[n,"Chromium OS"],w],[/(sunos)\s?([\w\.\d]*)/i],[[n,"Solaris"],w],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[n,w],[/(haiku)\s(\w+)/i],[n,w],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[w,/_/g,"."],[n,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[n,"Mac OS"],[w,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[n,w]]},x=function(e,o){if("object"==typeof e&&(o=e,e=s),!(this instanceof x))return new x(e,o).getResult();var r=e||(i&&i.navigator&&i.navigator.userAgent?i.navigator.userAgent:""),a=o?f.extend(v,o):v;return this.getBrowser=function(){var i={name:s,version:s};return g.rgx.call(i,r,a.browser),i.major=f.major(i.version),i},this.getCPU=function(){var i={architecture:s};return g.rgx.call(i,r,a.cpu),i},this.getDevice=function(){var i={vendor:s,model:s,type:s};return g.rgx.call(i,r,a.device),i},this.getEngine=function(){var i={name:s,version:s};return g.rgx.call(i,r,a.engine),i},this.getOS=function(){var i={name:s,version:s};return g.rgx.call(i,r,a.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(i){return r=i,this},this};x.VERSION="0.7.23",x.BROWSER={NAME:n,MAJOR:"major",VERSION:w},x.CPU={ARCHITECTURE:l},x.DEVICE={MODEL:a,VENDOR:t,TYPE:d,CONSOLE:u,MOBILE:c,SMARTTV:m,TABLET:b,WEARABLE:p,EMBEDDED:"embedded"},x.ENGINE={NAME:n,VERSION:w},x.OS={NAME:n,VERSION:w},typeof exports!==o?(typeof module!==o&&module.exports&&(exports=module.exports=x),exports.UAParser=x):"function"==typeof define&&define.amd?define((function(){return x})):i&&(i.UAParser=x);var k=i&&(i.jQuery||i.Zepto);if(k&&!k.ua){var y=new x;k.ua=y.getResult(),k.ua.get=function(){return y.getUA()},k.ua.set=function(i){y.setUA(i);var s=y.getResult();for(var e in s)k.ua[e]=s[e]}}}("object"==typeof window?window:this);