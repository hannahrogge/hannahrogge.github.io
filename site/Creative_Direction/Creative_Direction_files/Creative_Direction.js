// Created by iWeb 2.0.4 local-build-20131109

function createMediaStream_id3()
{return IWCreateMediaCollection("http://hannahrogge.com/site/Creative_Direction/Creative_Direction_files/rss.xml",true,2,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id3()
{createMediaStream_id3().load('http://hannahrogge.com/site/Creative_Direction',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget11'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id3',{pageIndex:0}));});}
function layoutMediaGrid_id3(range)
{createMediaStream_id3().load('http://hannahrogge.com/site/Creative_Direction',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id3',new IWPhotoGridLayout(2,new IWSize(296,222),new IWSize(296,34),new IWSize(296,271),27,27,0,new IWSize(29,29)),new IWPhotoFrame([IWCreateImage('Creative_Direction_files/ul.png'),IWCreateImage('Creative_Direction_files/top.png'),IWCreateImage('Creative_Direction_files/ur.png'),IWCreateImage('Creative_Direction_files/right.png'),IWCreateImage('Creative_Direction_files/lr.png'),IWCreateImage('Creative_Direction_files/bottom.png'),IWCreateImage('Creative_Direction_files/ll.png'),IWCreateImage('Creative_Direction_files/left.png')],null,0,0.500000,130.000000,10.000000,118.000000,45.000000,147.000000,30.000000,157.000000,83.000000,251.000000,120.000000,260.000000,120.000000,null,null,null,0.300000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget11',null,'widget12',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id3(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id3(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id3(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','../Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('Creative_Direction_files/Creative_DirectionMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');NotificationCenter.addObserver(null,relayoutMediaGrid_id3,'RangeChanged','id3')
Widget.onload();fixAllIEPNGs('../Media/transparent.gif');fixupAllIEPNGBGs();initializeMediaStream_id3()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
