/*
   Deluxe Menu Data File
   Created by Deluxe Tuner v2.0
   http://deluxe-menu.com
*/

var key="165b1636esid";

// -- Deluxe Tuner Style Names
var itemStylesNames=[];
var menuStylesNames=[];
// -- End of Deluxe Tuner Style Names

//--- Common
var isHorizontal=0;
var smColumns=1;
var smOrientation=0;
var smViewType=0;
var dmRTL=0;
var pressedItem=-2;
var itemCursor="default";
var itemTarget="_self";
var statusString="link";
var blankImage="nini1.files/blank image filename";

//--- Dimensions
var menuWidth="125px";
var menuHeight="";
var smWidth="";
var smHeight="";

//--- Positioning
var absolutePos=0;
var posX="0";
var posY="0";
var topDX=0;
var topDY=0;
var DX=-5;
var DY=0;

//--- Font
var fontStyle="bold 11px Arial";
var fontColor=["#CC0000","#808000"];
var fontDecoration=["none","none"];
var fontColorDisabled="#FFFFFF";

//--- Appearance
var menuBackColor="#FFFFFF";
var menuBackImage="";
var menuBackRepeat="repeat";
var menuBorderColor="#FFFFFF";
var menuBorderWidth=0;
var menuBorderStyle="none";

//--- Item Appearance
var itemBackColor=["#FFFFFF","#FFFFFF"];
var itemBackImage=["",""];
var itemBorderWidth=0;
var itemBorderColor=["#FFFFFF","#FFFFFF"];
var itemBorderStyle=["none","none"];
var itemSpacing=10;
var itemPadding="0px";
var itemAlignTop="left";
var itemAlign="left";
var subMenuAlign="";

//--- Icons
var iconTopWidth=24;
var iconTopHeight=24;
var iconWidth=16;
var iconHeight=16;
var arrowWidth=9;
var arrowHeight=9;
var arrowImageMain=["",""];
var arrowImageSub=["",""];

//--- Separators
var separatorImage="";
var separatorWidth="100%";
var separatorHeight="3";
var separatorAlignment="left";
var separatorVImage="";
var separatorVWidth="3";
var separatorVHeight="100%";
var separatorPadding="0px";

//--- Floatable Menu
var floatable=0;
var floatIterations=6;
var floatableX=1;
var floatableY=1;

//--- Movable Menu
var movable=0;
var moveWidth=12;
var moveHeight=20;
var moveColor="#AA0000";
var moveImage="";
var moveCursor="default";
var smMovable=0;
var closeBtnW=15;
var closeBtnH=15;
var closeBtn="";

//--- Transitional Effects & Filters
var transparency="100";
var transition=0;
var transOptions="";
var transDuration=300;
var transDuration2=200;
var shadowLen=3;
var shadowColor="#777777";
var shadowTop=1;

//--- CSS Support (CSS-based Menu)
var cssStyle=0;
var cssSubmenu="";
var cssItem=["",""];
var cssItemText=["",""];

//--- Advanced
var dmObjectsCheck=0;
var saveNavigationPath=1;
var showByClick=0;
var noWrap=1;
var pathPrefix_img="";
var pathPrefix_link="";
var smShowPause=200;
var smHidePause=1000;
var smSmartScroll=1;
var smHideOnClick=1;
var dm_writeAll=0;

//--- AJAX-like Technology
var dmAJAX=0;
var dmAJAXCount=0;

//--- Dynamic Menu
var dynamic=0;

//--- Keystrokes Support
var keystrokes=0;
var dm_focus=1;
var dm_actKey=113;


var menuItems = [

    ["Home","index.html", , , , "_self", , , , ],
    ["Reiki Ryoho","ReikiRyoho.html", , , , , , , , ],
    ["Gendai Reiki Hô","GendaiReikiHo.html", , , , "_self", , , , ],
    ["Komyo ReikiDo","KomyoReikiKai.html", , , , "_self", , , , ],
    ["Reiki Courses","ReikiCourses.html", , , , "_self", , , , ],
    ["Reiki for Youngsters","ReikiforYoung.html", , , , "_self", , , , ],
    ["Reiki Practice Circles","ReikiPractice.html", , , , "_self", , , , ],
    ["Reiki Sessions","ReikiSessions.html", , , , "_self", , , , ],
    ["Who Is Elyssa?","WhoIsElyssa.html", , , , "_self", , , , ],
    //--- ["Photo Gallery","PhotoGallery.html", , , , "_self", , , , ],
    ["Contact","contact.html", , , , "_self", , , , ],
    ["Events","Links.html", , , , "_self", , , , ],
];

dm_init();