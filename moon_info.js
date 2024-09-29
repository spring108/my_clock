var todayall = new Date();//(2017, 02, 02, 08, 0, 0, 0) // 2017, 01, 15, 22, 25, 0, 0
var exdate='15 Feb 2017 22:25:00';
if (location.search.length > 1) {
  var argstr = location.search.substring(1,location.search.length);
  var args = argstr.split('&');
  for (var x in  args) eval(decodeURI(args[x]));
  todayall = new Date(exdate)
  }
var zod = "Овен, Телец, Близнецы, Рак, Лев, Дева, Весы, Скорпион, Стрелец, Козерог, Водолей, Рыбы, Змееносец, Кит";
var zodur = "znak_oven,znak-telets,znak-bliznetsy,znak-rak,znak_lev,znak-deva,znak-vesy,znak-skorpion,znak-strelets,znak-kozerog,znak-vodoley,znak-ryby";
var Mnfrs = "супер Луна, сильная Луна, средняя Луна, слабая Луна, микро Луна";
var phazreg=0, dti=0.5, idt='', TimeMachine = todayall.getTime();
var out1, int2, out2;

function getPos(){var b,c,d,f,k;todayall.getTimezoneOffset();b=todayall.getFullYear();c=todayall.getMonth()+1;d=todayall.getDate();f=todayall.getHours()+todayall.getTimezoneOffset()/60;k=todayall.getMinutes();b=day2000(b,c,d,f+k/60);EcMoon=[0,0,0,0];EqMoon=[0,0,0,0];Nutat=[0,0,0,0];EcMoonNut=[0,0,0,0];EcMoon=Moon(b);nutat=nutation(b);EcMoonNut[1]=EcMoon[1]+nutat[1];EcMoonNut[2]=EcMoon[2]+nutat[2];EcMoonNut[3]=EcMoon[3]+nutat[3];EqMoon=equatorial(b,EcMoonNut);b=round(EcMoonNut[1]*RAD2DEG,3);c=round(EcMoonNut[2]*
RAD2DEG,3);d=round(EcMoonNut[3],0);f=round(EqMoon[1]/15*RAD2DEG,4);k=round(EqMoon[2]*RAD2DEG,3);7<c&&(c=round(c-360,3));return{MnLong:b,MnLat:c,MnDist:d,MnRA:f,MnDec:k}}
function selenogr(){var b,c,d,f,k,m,h,n,r,g,l,e,p,t,q;b=todayall.getFullYear();k=todayall.getMonth()+1;c=todayall.getDate();f=todayall.getHours()+todayall.getTimezoneOffset()/60;l=todayall.getMinutes();b=day2000(b,k,c,f+l/60)/36525;c=range(280.466+36000.8*b);d=range(357.529+35999*b-1.536E-4*b*b+b*b*b/2449E4);f=(1.915-.004817*b-1.4E-5*b*b)*dsin(d);f+=(.01999-1.01E-4*b)*dsin(2*d);f+=2.9E-4*dsin(3*d);k=.99972/(1+(.01671-4.204E-5*b-1.236E-7*b*b)*dcos(d+f));f=c+f;c=range(125.04-1934.1*b);c=f-.00569-.00478*
dsin(c);m=(84381.448-46.815*b)/3600;datan2(dsin(f)*dcos(m)-dtan(0)*dsin(m),dcos(f));dasin(dsin(0)*dcos(m)+dcos(0)*dsin(m)*dsin(f));h=range(93.2721+483202*b-.003403*b*b-b*b*b/3526E3);n=range(218.316+481268*b);r=range(125.045-1934.14*b+.002071*b*b+b*b*b/45E4);g=range(134.963+477199*b+.008997*b*b+b*b*b/69700);D2=2*range(297.85+445267*b-.00163*b*b+b*b*b/545900);b=1+(-20954*dcos(g)-3699*dcos(D2-g)-2956*dcos(D2))/385E3;f=b/k/379.168831168831;l=5.128*dsin(h)+.2806*dsin(g+h);l=l+.2777*dsin(g-h)+.1732*dsin(D2-
h);e=6.289*dsin(g)+1.274*dsin(D2-g)+.6583*dsin(D2);e=e+.2136*dsin(2*g)-.1851*dsin(d)-.1143*dsin(2*h);e+=.0588*dsin(D2-2*g);e=e+.0572*dsin(D2-d-g)+.0533*dsin(D2+g);e+=n;datan2(dsin(e)*dcos(m)-dtan(l)*dsin(m),dcos(e));dasin(dsin(l)*dcos(m)+dcos(l)*dsin(m)*dsin(e));p=range(c+180+180/Math.PI*f*dcos(l)*dsin(c-e));t=f*l;I=1.54242;q=e-r;g=dcos(q)*dcos(l);n=dsin(q)*dcos(l)*dcos(I)-dsin(l)*dsin(I);g=datan2(n,g);d=g-h;m=dasin(-dsin(q)*dcos(l)*dsin(I)-dsin(l)*dcos(I));q=range(p-r);g=dcos(q)*dcos(t);n=dsin(q)*
dcos(t)*dcos(I)-dsin(t)*dsin(I);g=datan2(n,g);SL=range(g-h);SB=dasin(-dsin(q)*dcos(t)*dsin(I)-dsin(t)*dcos(I));h=90>SL?90-SL:450-SL;h=90<h&&270>h?180-h:90>h?0-h:360-h;g=dcos(l)*dcos(e-c);c=90-datan(g/Math.sqrt(1-g*g));n=k*dsin(c);k=datan2(n,f-k*g);c=(1+dcos(k))/2;k=round(m,1);f=round(d,1);l=round(SB,1);e=round(SL,1);d=round(h,1);c=round(100*c,1);b=round(60.268511*b*6371,0);return{SLatLib:k,SLongLib:f,SLatSun:l,SLongSun:e,SLongTerm:d,"\u041cLum":c,SDist:b}}
var DEG2RAD=Math.PI/180,RAD2DEG=180/Math.PI,TwoPi=2*Math.PI;function dsin(b){return Math.sin(Math.PI/180*b)}function dcos(b){return Math.cos(Math.PI/180*b)}function dtan(b){return Math.tan(Math.PI/180*b)}function dasin(b){return 180/Math.PI*Math.asin(b)}function dacos(b){return 180/Math.PI*Math.acos(b)}function datan(b){return 180/Math.PI*Math.atan(b)}function datan2(b,c){var d;if(0==c&&0==b)return 0;d=datan(b/c);0>c&&(d+=180);0>b&&0<c&&(d+=360);return d}
function Moon(b){b/=36525;var c=b*b,d=c*b,f=d*b;ecliptic=[0,0,0,0];var k=angle(297.8502042+445267.1115168*b-.00163*c+d/545868+f/113065E3),m=angle(357.5291092+35999.0502909*b-1.536E-4*c+d/2449E4),h=angle(134.9634114+477198.8676313*b+.008997*c-d/3536E3+f/14712E3),n=angle(218.3164591+481267.88134236*b-.0013268*c+d/538841-f/65194E3),d=angle(93.2720993+483202.0175273*b-.0034029*c-d/3526E3+f/86331E4);DcA=[0,2,2,0,0,0,2,2,2,2,0,1,0,2,0,0,4,0,4,2,2,1,1,2,2,4,2,0,2,2,1,2,0,0,2,2,2,4,0,3,2,4,0,2,2,2,4,0,4,
1,2,0,1,3,4,2,0,1,2,2];McA=[0,0,0,0,1,0,0,-1,0,-1,1,0,1,0,0,0,0,0,0,1,1,0,1,-1,0,0,0,1,0,-1,0,-2,1,2,-2,0,0,-1,0,0,1,-1,2,2,1,-1,0,0,-1,0,1,0,1,0,0,-1,2,1,0,0];MpcA=[1,-1,0,2,0,0,-2,-1,1,0,-1,0,1,0,1,1,-1,3,-2,-1,0,-1,0,1,2,0,-3,-2,-1,-2,1,0,2,0,-1,1,0,-1,2,-1,1,-2,-1,-1,-2,0,1,4,0,-2,0,2,1,-2,-3,2,1,-1,3,-1];FcA=[0,0,0,0,0,2,0,0,0,0,0,0,0,-2,2,-2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,-2,2,0,2,0,0,0,0,0,0,-2,0,0,0,0,-2,-2,0,0,0,0,0,0,0,-2];ScA=[6288774,1274027,658314,213618,-185116,-114332,58793,
57066,53322,45758,-40923,-34720,-30383,15327,-12528,10980,10675,10034,8548,-7888,-6766,-5163,4987,4036,3994,3861,3665,-2689,-2602,2390,-2348,2236,-2120,-2069,2048,-1773,-1595,1215,-1110,-892,-810,759,-713,-700,691,596,549,537,520,-487,-399,-381,351,-340,330,327,-323,299,294];ScAR=[-20905355,-3699111,-2955968,-569925,48888,-3149,246158,-152138,-170733,-204586,-129620,108743,104755,10321,0,79661,-34782,-23210,-21636,24208,30824,-8379,-16675,-12831,-10445,-11650,14403,-7003,0,10056,6322,-9884,5751,0,
-4950,4130,0,-3958,0,3258,2616,-1897,-2117,2354,0,0,-1423,-1117,-1571,-1739,0,-4421,0,0,0,0,1165,0,0,8752];DcB=[0,0,0,2,2,2,2,0,2,0,2,2,2,2,2,2,2,0,4,0,0,0,1,0,0,0,1,0,4,4,0,4,2,2,2,2,0,2,2,2,2,4,2,2,0,2,1,1,0,2,1,2,0,4,4,1,4,1,4,2];McB=[0,0,0,0,0,0,0,0,0,0,-1,0,0,1,-1,-1,-1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,-1,0,0,0,0,1,1,0,-1,-2,0,1,1,1,1,1,0,-1,1,0,-1,0,0,0,-1,-2];MpcB=[0,1,1,0,-1,-1,0,2,1,2,0,-2,1,0,-1,0,-1,-1,-1,0,0,-1,0,1,1,0,0,3,0,-1,1,-2,0,2,1,-2,3,2,-3,-1,0,0,1,0,1,1,0,0,-2,-1,1,-2,2,-2,
-1,1,1,-1,0,0];FcB=[1,1,-1,-1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,-1,-1,1,3,1,1,1,-1,-1,-1,1,-1,1,-3,1,-3,-1,-1,1,-1,1,-1,1,1,1,1,-1,3,-1,-1,1,-1,-1,1,-1,1,-1,-1,-1,-1,-1,-1,1];ScB=[5128122,280602,277693,173237,55413,46271,32573,17198,9266,8822,8216,4324,4200,-3359,2463,2211,2065,-1870,1828,-1794,-1749,-1565,-1492,-1475,-1410,-1344,-1335,1107,1021,833,777,671,607,596,491,-451,439,422,421,-366,-351,331,315,302,-283,-229,223,223,-220,-220,-185,181,-177,176,166,-164,132,-119,115,107];for(var c=1-.002516*
b-7.4E-6*c,f=c*c,r=0,g=0,l=0,e=0;e<ScA.length;++e){var p=1;if(1==MpcA[e]||-1==MpcA[e])p=c;else if(2==MpcA[e]||-2==MpcA[e])p=f;r+=ScA[e]*Math.sin(DcA[e]*k+McA[e]*p*m+MpcA[e]*h+FcA[e]*d);l+=ScAR[e]*Math.cos(DcA[e]*k+McA[e]*p*m+MpcA[e]*h+FcA[e]*d)}for(e=0;e<ScB.length;++e){p=1;if(1==MpcB[e]||-1==MpcB[e])p=c;else if(2==MpcB[e]||-2==MpcB[e])p=f;g+=ScB[e]*Math.sin(DcB[e]*k+McB[e]*p*m+MpcB[e]*h+FcB[e]*d)}A1=angle(119.75+131.849*b);A2=angle(53.09+479264.29*b);A3=angle(313.45+481266*b);r+=3958*Math.sin(A1)+
1962*Math.sin(n-d)+318*Math.sin(A2);g+=382*Math.sin(A3)-2235*Math.sin(n)+175*Math.sin(A1-d)+175*Math.sin(A1+d)+127*Math.sin(n-h)-115*Math.sin(n+h);ecliptic[1]=modrad(n+angle(r/1E6));ecliptic[2]=angle(g/1E6);ecliptic[3]=l/1E3+385000.56;return ecliptic}function obliquity(b){b/=36525;return angle((84381.448+b*(-46.815+b*(-5.9E-4+.001813*b)))/3600)}
function nutation(b){var c=b/36525;b=angle(125.04452-1934.136261*c);var d=angle(218.3165+481267.8813*c),f=angle(280.4665+36000.7698*c),c=-17.2*Math.sin(b)-1.32*Math.sin(2*f)-.23*Math.sin(2*d)+.21*Math.sin(2*b);b=9.2*Math.cos(b)+.57*Math.cos(2*f)+.1*Math.cos(2*d)-.09*Math.cos(2*b);nut=[0,0,0,0];nut[1]=c*DEG2RAD/3600;nut[2]=b*DEG2RAD/3600;return nut}
function equatorial(b,c){var d=obliquity(b),f=Math.cos(d),d=Math.sin(d),k=Math.sin(c[1]),m=k*f-Math.tan(c[2])*d;eq=[0,0,0,0];eq[1]=ratan2(m,Math.cos(c[1]));eq[2]=Math.asin(Math.sin(c[2])*f+Math.cos(c[2])*d*k);eq[3]=c[3];return eq}function ratan2(b,c){var d;if(0==c&&0==b)return 0;d=Math.atan(b/c);0>c&&(d+=Math.PI);0>b&&0<c&&(d+=2*Math.PI);return d}function angle(b){return range(b)*DEG2RAD}function modrad(b){b/=TwoPi;b=TwoPi*(b-ipart(b));0>b&&(b+=TwoPi);return b}
function day2000(b,c,d,f){if(1==c||2==c)--b,c+=12;a=Math.floor(b/100);return 2-a+Math.floor(a/4)+Math.floor(365.25*b)+Math.floor(30.6001*(c+1))-730550.5+d+f/24}function isleap(b){var c;c=0;0==b%4&&(c=1);0==b%100&&(c=0);0==b%400&&(c=1);return c}function goodmonthday(b,c,d){var f;f=isleap(b);b=1;0==d&&(b=0);2==c&&1==f&&29<d&&(b=0);2==c&&28<d&&0==f&&(b=0);(4==c||6==c||9==c||11==c)&&30<d&&(b=0);31<d&&(b=0);return b}function ipart(b){return 0<b?Math.floor(b):Math.ceil(b)}function fpart(b){return b%1}
function range(b){b/=360;b=360*(b-ipart(b));0>b&&(b+=360);return b}function round(b,c){return Math.round(b*Math.pow(10,c))/Math.pow(10,c)}function zz(b){return(""+Mps.MnLong).replace(".",",")};

function showDate(todayall){
  var a=todayall,c="#3490F8",d=""+a.getHours(),d=2>d.length?"0"+d:d,e=""+a.getMinutes(),e=2>e.length?"0"+e:e,b=""+a.getSeconds(),b=2>b.length?"0"+b:b,f=""+a.getMonth(), pf=''+(a.getMonth()+1),h=""+a.getFullYear(),g=""+a.getDay();if(1>g||5<g)c="#F00";a=""+a.getDate();a=2>a.length?"0"+a:a; //*2017*/ if(f==1&&a==20)c="#3490F8"; 
  if((f==0&&a<9)||(f==1&&a==23)||(f==2&&a==8)||(f==4&&(a==1||a==9))||(f==5&&a==12)||(a==4&&f==10) )c="#F00";
  if(h==2019&&((f==4&&(a==2||a==3))||(f==4&&a==10)))c="#F00"; 
  var picD; picD = ''+a+'.'+ (pf=2>pf.length?"0"+pf:pf) +'.'+h + ' '+ d + ':'+e;
  if (phazreg==1) picD = '<b>'+picD+'</b>';// #CC9900 <b style="color: #b5ff77;"> <b style="color: #EECF00;">
  //document.getElementById("picDate").innerHTML=picD;
  };


function phaza() {

    showDate( todayall);

    var Mps = getPos();
    var slg = selenogr();

    //-----------------------------------------------

    //--------------------------------------------------------------------------

    var now=todayall; //(2017, 02, 23, 01, 0, 0, 0) //var now=new Date(2017, 01, 27, 7, 0, 0, 0);
    var Year=getNowFullYear(now);
    var Month=now.getMonth()+1;
    var Day=now.getDate();
    var TCR=now.getTimezoneOffset();
    var Place = "Москва";
    var Lat = +55.83; 
    var Long = 37.63;
    var TCR = 3;       //  Поправка временной зоны
    var TCRname="MSK"; // Наименование зоны

    var LunPh=MoonPhase(Year,Month,Day,(now.getHours()+(now.getMinutes()-24)/60-TCR)); //0-TCR - Moon phase

    var JDm=MoonMon(Year,Month,Day,0), CmD = julian(Year,Month,Day,now.getHours()), NmD = JDm.newm, FmD = JDm.fullm, Dnnm=NmD;//(Year,Month,Day) (2017,3,29.[-1,0,1})
    if (NmD < CmD) { JDm=MoonMon(Year,Month,Day,1); NmD = JDm.newm; 
    if ( FmD < CmD) { FmD = JDm.fullm; 
    };
    } 
    else { Dnnm = MoonMon(Year,Month,Day,-1).newm; };

    document.getElementById("svet").innerHTML = ''+LunPh.lum +"%";
    
    var  strqu ='', pzn, strfn; //strstad, strfazn, strrus=fzrus(0), strrusold=fzrusOld(0);
    if (LunPh.kt>=0 && LunPh.kt<0.25)   {strfn='1 четверть';  strqu =fzstat(0)};
    if (LunPh.lum<2)                   {pzn=0; strqu =''};
    if (LunPh.lum>=2 && LunPh.lum<49)  {pzn=1;};
    if (LunPh.kt>0.25 && LunPh.kt<0.5) {strfn='2 четверть';  strqu =fzstat(1)};
    if (LunPh.lum>=49 && LunPh.lum<51) {pzn=2; strqu =''};
    if (LunPh.lum>=51 && LunPh.lum<99) {pzn=3;};
    if (LunPh.lum>=99)                 {pzn=4; strqu =''};
    idt=window.location.href;//d в минутах 
    if (LunPh.kt>0.5) {
    if (LunPh.kt<=0.75)                {strfn='3 четверть';  strqu =fzstat(2)};
    if (LunPh.lum>=51 && LunPh.lum<99) {pzn=5;};
    if (LunPh.kt>0.75 && LunPh.kt<=1)  {strfn='4 четверть';  strqu =fzstat(3)};
    //28 Mar 2017 04:29:55 4 четверть 0.9983437201467799 4 четверть0.9991202238137905
    if (LunPh.lum>=49 && LunPh.lum<51) {pzn=6; strqu =''};
    if (LunPh.lum>=2 && LunPh.lum<49)  {pzn=7;};
    };
    
    document.getElementById("stadiya").innerHTML = fznam(pzn);
    //document.getElementById("phase_name").innerHTML = strfn;
    // id="vidzcopу">© 2016 - 2019 abc2home.ru <span style="float:right">Фазы Луны</span>
    //document.getElementById("vidzcopу").innerHTML = '© 2016-2019 abc2home.ru <a  href="http://www.abc2home.ru/lunnyj_calendar/faza_luny_seychas.html" style="float:right"  target="_blank">Фазы Луны</a>';
    
    
    var mnn = JDtoCD(Dnnm), MnEdg = new Date(mnn.yy, mnn.mm-1, mnn.dd, mnn.hh, mnn.hm, mnn.hs),  MnEdghm = Math.round(todayall.getTime() - MnEdg.getTime()-TCR*60*60*1000)/60000, Tst='';
    
    
    var Nzod = Math.floor(Mps.MnLong/30), wq=Mps.MnLong, eqmm, Nsoz; 
    //document.getElementById("zodiaс_name").innerHTML = zod.split(',')[Nzod]; if ((idt.slice(12,16) !== 'bc2h')&&(idt.slice(12,16)!== 'ites')) {('что за хак?').reload();};
    //document.getElementById("zodiaс-simbol").innerHTML = '<a target="_blank" href="http://www.abc2home.ru/znaki_zodiaka/'+zodur.split(',')[Nzod]+'/"><img src="http://www.abc2home.ru/znaki_zodiaka/img/'+zodur.split(',')[Nzod]+'-simbol.png" width="50" height="50" alt="'+ zod.split(',')[Nzod] +'" /></a>';

    
    dti = LunPh.kt;
    var out1, int2, out2;

    if (phazreg==1) {
        setTimeout(phaza,1E3);  todayall = new Date();
        };
    // document.getElementById("moontime").innerHTML = ''+((phazreg==1)?('<span class="sc2"> Часы </span>'): (' Часы '));
    if (phazreg==2) {
        setTimeout(phaza,1E3); todayall = new Date(TimeMachine); TimeMachine=TimeMachine+18060500; 
        }
    }

phaza();
 

//------------------------------------------------------------------------------------------------------OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
//-------------------------------------------------------------------------------------------------------------------------------------OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

function redraw() { 
    RL = 125, fdelay=1000; window.onclick = can.init; phazreg=phazreg+1; phaza();

    if (phazreg>2) phazreg=0; 
    };


function decTomin(f) { var mm; return ((mm = '' + Math.abs(Math.floor(f%1*60))).length<2?'0'+mm: mm) };
function fzstat(f) { return "в 1-й четверти. во 2-й четверти. в 3-й четверти. в последней четверти".split(".")[f] };
function fznam(f) { return "новолуние.растущая луна.четверть ровно.растущая луна.полнолуние.убывающая луна.последняя четверть.убывающая".split(".")[f] };


function MoonPhase(year,month,day,hours) {
  // the illuminated percentage from Meeus chapter 46
  var j=dayno(year,month,day,hours)+2451543.5;
  var T=(j-2451545.0)/36525;
  var T2=T*T;
  var T3=T2*T;
  var T4=T3*T;
  // Moons mean elongation Meeus first edition
  // var D=297.8502042+445267.1115168*T-0.0016300*T2+T3/545868.0-T4/113065000.0;
  // Moons mean elongation Meeus second edition
  var D=297.8501921+445267.1114034*T-0.0018819*T2+T3/545868.0-T4/113065000.0; 
  // Moons mean anomaly M' Meeus first edition
  // var MP=134.9634114+477198.8676313*T+0.0089970*T2+T3/69699.0-T4/14712000.0;
  // Moons mean anomaly M' Meeus second edition
  var MP=134.9633964+477198.8675055*T+0.0087414*T2+T3/69699.0-T4/14712000.0;
  // Suns mean anomaly
  var M=357.5291092+35999.0502909*T-0.0001536*T2+T3/24490000.0;
  // phase angle
  var pa=180.0-D-6.289*sind(MP)+2.1*sind(M)-1.274*sind(2*D-MP)
         -0.658*sind(2*D)-0.214*sind(2*MP)-0.11*sind(D);
  /*	var LPh = {kt:0.1, lum:0.1, an:0.1};*/
    var an=rev(pa);
  var kt=(an/360>0.5)?(1.5-an/360):(0.5-an/360);
  var lum=Math.round(100.0*(1.0+cosd(pa))/2.0);
  return {kt,lum,an};
  }

function MoonMon(year,month,day,dk) {
  // returns an array of Julian Ephemeris Days (JDE) for 
  // new moon, first quarter, full moon and last quarter
  // Meeus first edition chapter 47 with only the most larger additional corrections
  // Meeus code calculates Terrestrial Dynamic Time
  // TDT = UTC + (number of leap seconds) + 32.184
  // At the end of June 2015 the 26th leap second was added
  // 
  var newm, fullm;
  // k is an integer for new moon incremented by 0.25 for first quarter 0.5 for new etc.
  var k=Math.floor((year+((month-1)+day/30)/12-2000)*12.3685 +dk);
  // Time in Julian centuries since 2000.0
  var T=k/1236.85;
  // Sun's mean anomaly
  var E=1-0.002516*T-0.0000074*T*T;
  // Moons argument of latitude
  var M, P, F, Omega, JDE0, A = new Array();
  JDE0=2451550.09765+29.530588853*k+0.0001337*T*T-0.000000150*T*T*T+0.00000000073*T*T*T*T;
  // Correct for TDT since 1 July 2015
  JDE0=JDE0-58.184/(24*60*60);
  
  var getkoof=function(k) {
  M=rev(2.5534+29.10535669*k-0.0000218*T*T);
  // Moon's mean anomaly (M' in Meeus)
  MP=rev(201.5643+385.81693528*k+0.0107438*T*T+0.00001239*T*T*T-0.00000011*T*T*T);
  F=rev(160.7108+390.67050274*k-0.0016341*T*T-0.00000227*T*T*T+0.000000011*T*T*T*T);
  // Longitude of ascending node of lunar orbit
  Omega=rev(124.7746-1.56375580*k+0.0020691*T*T+0.00000215*T*T*T);
  // The full planetary arguments include 14 terms, only used the 7 most significant
  A[1]=rev(299.77+ 0.107408*k-0.009173*T*T);
  A[2]=rev(251.88+ 0.016321*k);
  A[3]=rev(251.83+26.651886*k);
  A[4]=rev(349.42+36.412478*k);
  A[5]=rev( 84.88+18.206239*k);
  A[6]=rev(141.74+53.303771*k);
  A[7]=rev(207.14+ 2.453732*k);
  };
  
  // New moon
  var c=getkoof(k); 
  var JDE=JDE0 -0.40720*sind(MP)      +0.17241*E*sind(M)      +0.01608*sind(2*MP)    +0.01039*sind(2*F)
               +0.00739*E*sind(MP-M)  -0.00514*E*sind(MP+M)   +0.00208*E*E*sind(2*M) -0.00111*sind(MP-2*F)
               -0.00057*sind(MP+2*F)  +0.00056*E*sind(2*MP+M) -0.00042*sind(3*MP)    +0.00042*E*sind(M+2*F)
               +0.00038*E*sind(M-2*F) -0.00024*E*sind(2*MP-M) -0.00017*sind(Omega)   -0.00007*sind(MP+2*M);

  newm=JDE+0.000325*sind(A[1])+0.000165*sind(A[2])+0.000164*sind(A[3])+0.000126*sind(A[4])
                 +0.000110*sind(A[5])+0.000062*sind(A[6])+0.000060*sind(A[7]);

  // Full moon k=k+0.5 
  c=getkoof(k+0.5);
  JDE=JDE0+29.530588853*0.5;

  JDE=JDE-0.40614*sind(MP)      +0.17302*E*sind(M)      +0.01614*sind(2*MP)    +0.01043*sind(2*F)
         +0.00734*E*sind(MP-M)  -0.00515*E*sind(MP+M)   +0.00209*E*E*sind(2*M) -0.00111*sind(MP-2*F)
         -0.00057*sind(MP+2*F)  +0.00056*E*sind(2*MP+M) -0.00042*sind(3*MP)    +0.00042*E*sind(M+2*F)
         +0.00038*E*sind(M-2*F) -0.00024*E*sind(2*MP-M) -0.00017*sind(Omega)   -0.00007*sind(MP+2*M);

  fullm=JDE+0.000325*sind(A[1])+0.000165*sind(A[2])+0.000164*sind(A[3])+0.000126*sind(A[4])
                 +0.000110*sind(A[5])+0.000062*sind(A[6])+0.000060*sind(A[7]);

  return {newm, fullm};
  }
//------------------------------------------------------------------------------------------------------------

function getNowFullYear(now) {
  var year = now.getYear();
  if (year==0) {year=2000};
  if (year<1900) {year=year+1900};
  return year;
  }

function getDatStr(year,month,day) {
  // provides a locale independent format - year:month:day
  var datestr = "" + ((day < 10) ? "0" : "") + day +((month < 10) ? ".0" : ".") + month + "."+year;
  return datestr;
  }

function rev(angle){return angle-Math.floor(angle/360.0)*360.0;}
function sind(angle){return Math.sin((angle*Math.PI)/180.0);}
function cosd(angle){return Math.cos((angle*Math.PI)/180.0);}
function tand(angle){return Math.tan((angle*Math.PI)/180.0);}
function asind(c){return (180.0/Math.PI)*Math.asin(c);}
function acosd(c){return (180.0/Math.PI)*Math.acos(c);}
function atan2d(y,x){return (180.0/Math.PI)*Math.atan(y/x)-180.0*(x<0);}

function dayno(year,month,day,hours) {
  // Day number is a modified Julian date, day 0 is 2000 January 0.0
  // which corresponds to a Julian date of 2451543.5
  var d= 367*year-Math.floor(7*(year+Math.floor((month+9)/12))/4)
         +Math.floor((275*month)/9)+day-730530+hours/24;
  return d;
  }

function julian(year,month,day,hours) {
   return  dayno(year,month,day,hours)+2451543.5
  }

function JDtoCD(jd) {
  // The calendar date from julian date
  // Returns year, month, day, day of week, hours, minutes, seconds
  var cdate ={};
  var Z=Math.floor(jd+0.5);
  var F=jd+0.5-Z;
  if (Z < 2299161){
    var A=Z;
  } else {
    var alpha=Math.floor((Z-1867216.25)/36524.25);
    var A=Z+1+alpha-Math.floor(alpha/4);
  }
  var B=A+1524;
  var C=Math.floor((B-122.1)/365.25);
  var D=Math.floor(365.25*C);
  var E=Math.floor((B-D)/30.6001);
  var d=B-D-Math.floor(30.6001*E)+F;
  if (E < 14) {var month=E-1;} else {var month=E-13;}
  if ( month>2) {var year=C-4716;} else {var year=C-4715;}
  var day=Math.floor(d);
  var h=(d-day)*24;
  var hours=Math.floor(h);
  var m=(h-hours)*60;
  var minutes=Math.floor(m);
  var seconds=Math.round((m-minutes)*60);
  if (seconds >= 60) {minutes=minutes+1;seconds=seconds-60;}
  if (minutes >= 60) {hours=hours+1;minutes=0;}
  var dw=Math.floor(jd+1.5)-7*Math.floor((jd+1.5)/7);
  return  cdate = {yy:year,mm:month,dd:day,wd:dw,hh:hours,hm:minutes,hs:seconds};  
  }
