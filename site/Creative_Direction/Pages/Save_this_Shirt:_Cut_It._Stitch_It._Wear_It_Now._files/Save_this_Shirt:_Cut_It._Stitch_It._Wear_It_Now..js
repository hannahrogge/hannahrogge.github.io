// Created by iWeb 2.0.4 local-build-20131109

function createMediaStream_id2()
{return IWCreatePhotocast("http://hannahrogge.com/site/Creative_Direction/Pages/Save_this_Shirt%3A_Cut_It._Stitch_It._Wear_It_Now._files/rss.xml",true,true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://hannahrogge.com/site/Creative_Direction/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://hannahrogge.com/site/Creative_Direction/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(2,new IWSize(248,248),new IWSize(248,32),new IWSize(306,295),27,27,0,new IWSize(24,26)),new IWPhotoFrame([IWCreateImage('Save_this_Shirt%3A_Cut_It._Stitch_It._Wear_It_Now._files/Modern_C_TL.png'),IWCreateImage('Save_this_Shirt%3A_Cut_It._Stitch_It._Wear_It_Now._files/Modern_S_T.png'),IWCreateImage('Save_this_Shirt%3A_Cut_It._Stitch_It._Wear_It_Now._files/Modern_C_TR.png'),IWCreateImage('Save_this_Shirt%3A_Cut_It._Stitch_It._Wear_It_Now._files/Modern_S_R.png'),IWCreateImage('Save_this_Shirt%3A_Cut_It._Stitch_It._Wear_It_Now._files/Modern_C_BR.png'),IWCreateImage('Save_this_Shirt%3A_Cut_It._Stitch_It._Wear_It_Now._files/Modern_S_B.png'),IWCreateImage('Save_this_Shirt%3A_Cut_It._Stitch_It._Wear_It_Now._files/Modern_C_BL.png'),IWCreateImage('Save_this_Shirt%3A_Cut_It._Stitch_It._Wear_It_Now._files/Modern_S_L.png')],null,2,0.700000,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,20.000000,40.000000,40.000000,40.000000,240.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'#000000',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','../../Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('Save_this_Shirt:_Cut_It._Stitch_It._Wear_It_Now._files/Save_this_Shirt:_Cut_It._Stitch_It._Wear_It_Now.Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('../../Media/transparent.gif');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
