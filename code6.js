gdjs.Last_32sceneCode = {};
gdjs.Last_32sceneCode.GDNewBBTextObjects1= [];
gdjs.Last_32sceneCode.GDNewBBTextObjects2= [];
gdjs.Last_32sceneCode.GDNewBBText2Objects1= [];
gdjs.Last_32sceneCode.GDNewBBText2Objects2= [];
gdjs.Last_32sceneCode.GDBlankButton2Objects1= [];
gdjs.Last_32sceneCode.GDBlankButton2Objects2= [];
gdjs.Last_32sceneCode.GDBlankButtonObjects1= [];
gdjs.Last_32sceneCode.GDBlankButtonObjects2= [];
gdjs.Last_32sceneCode.GDNewBBText3Objects1= [];
gdjs.Last_32sceneCode.GDNewBBText3Objects2= [];
gdjs.Last_32sceneCode.GDNewBBText4Objects1= [];
gdjs.Last_32sceneCode.GDNewBBText4Objects2= [];

gdjs.Last_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Last_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Last_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.Last_32sceneCode.mapOfGDgdjs_46Last_9532sceneCode_46GDBlankButtonObjects1Objects = Hashtable.newFrom({"BlankButton": gdjs.Last_32sceneCode.GDBlankButtonObjects1});gdjs.Last_32sceneCode.mapOfGDgdjs_46Last_9532sceneCode_46GDBlankButton2Objects1Objects = Hashtable.newFrom({"BlankButton2": gdjs.Last_32sceneCode.GDBlankButton2Objects1});gdjs.Last_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlankButton"), gdjs.Last_32sceneCode.GDBlankButtonObjects1);

gdjs.Last_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Last_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Last_32sceneCode.mapOfGDgdjs_46Last_9532sceneCode_46GDBlankButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Last_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://github.com/RedEdge967/Doctor-Strange", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlankButton2"), gdjs.Last_32sceneCode.GDBlankButton2Objects1);

gdjs.Last_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Last_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Last_32sceneCode.mapOfGDgdjs_46Last_9532sceneCode_46GDBlankButton2Objects1Objects, runtimeScene, true, false);
}if (gdjs.Last_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start_scene", false);
}}

}


};

gdjs.Last_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Last_32sceneCode.GDNewBBTextObjects1.length = 0;
gdjs.Last_32sceneCode.GDNewBBTextObjects2.length = 0;
gdjs.Last_32sceneCode.GDNewBBText2Objects1.length = 0;
gdjs.Last_32sceneCode.GDNewBBText2Objects2.length = 0;
gdjs.Last_32sceneCode.GDBlankButton2Objects1.length = 0;
gdjs.Last_32sceneCode.GDBlankButton2Objects2.length = 0;
gdjs.Last_32sceneCode.GDBlankButtonObjects1.length = 0;
gdjs.Last_32sceneCode.GDBlankButtonObjects2.length = 0;
gdjs.Last_32sceneCode.GDNewBBText3Objects1.length = 0;
gdjs.Last_32sceneCode.GDNewBBText3Objects2.length = 0;
gdjs.Last_32sceneCode.GDNewBBText4Objects1.length = 0;
gdjs.Last_32sceneCode.GDNewBBText4Objects2.length = 0;

gdjs.Last_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['Last_32sceneCode'] = gdjs.Last_32sceneCode;
