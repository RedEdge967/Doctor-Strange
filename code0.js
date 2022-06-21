gdjs.Start_95sceneCode = {};
gdjs.Start_95sceneCode.GDNewBBTextObjects1= [];
gdjs.Start_95sceneCode.GDNewBBTextObjects2= [];
gdjs.Start_95sceneCode.GDStartButtonObjects1= [];
gdjs.Start_95sceneCode.GDStartButtonObjects2= [];
gdjs.Start_95sceneCode.GDNewBBText2Objects1= [];
gdjs.Start_95sceneCode.GDNewBBText2Objects2= [];
gdjs.Start_95sceneCode.GDDoctor_95StrangeObjects1= [];
gdjs.Start_95sceneCode.GDDoctor_95StrangeObjects2= [];
gdjs.Start_95sceneCode.GDDefender_95StrangeObjects1= [];
gdjs.Start_95sceneCode.GDDefender_95StrangeObjects2= [];
gdjs.Start_95sceneCode.GDSinister_95StrangeObjects1= [];
gdjs.Start_95sceneCode.GDSinister_95StrangeObjects2= [];
gdjs.Start_95sceneCode.GDSupreme_95StrangeObjects1= [];
gdjs.Start_95sceneCode.GDSupreme_95StrangeObjects2= [];
gdjs.Start_95sceneCode.GDZombie_95StrangeObjects1= [];
gdjs.Start_95sceneCode.GDZombie_95StrangeObjects2= [];
gdjs.Start_95sceneCode.GDNewBBText3Objects1= [];
gdjs.Start_95sceneCode.GDNewBBText3Objects2= [];
gdjs.Start_95sceneCode.GDStarButtonObjects1= [];
gdjs.Start_95sceneCode.GDStarButtonObjects2= [];

gdjs.Start_95sceneCode.conditionTrue_0 = {val:false};
gdjs.Start_95sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Start_95sceneCode.condition1IsTrue_0 = {val:false};


gdjs.Start_95sceneCode.mapOfGDgdjs_46Start_9595sceneCode_46GDStarButtonObjects1Objects = Hashtable.newFrom({"StarButton": gdjs.Start_95sceneCode.GDStarButtonObjects1});gdjs.Start_95sceneCode.mapOfGDgdjs_46Start_9595sceneCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.Start_95sceneCode.GDStartButtonObjects1});gdjs.Start_95sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StarButton"), gdjs.Start_95sceneCode.GDStarButtonObjects1);

gdjs.Start_95sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Start_95sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_95sceneCode.mapOfGDgdjs_46Start_9595sceneCode_46GDStarButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Start_95sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://github.com/RedEdge967", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Start_95sceneCode.GDStartButtonObjects1);

gdjs.Start_95sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Start_95sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_95sceneCode.mapOfGDgdjs_46Start_9595sceneCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Start_95sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level_01", false);
}}

}


};

gdjs.Start_95sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_95sceneCode.GDNewBBTextObjects1.length = 0;
gdjs.Start_95sceneCode.GDNewBBTextObjects2.length = 0;
gdjs.Start_95sceneCode.GDStartButtonObjects1.length = 0;
gdjs.Start_95sceneCode.GDStartButtonObjects2.length = 0;
gdjs.Start_95sceneCode.GDNewBBText2Objects1.length = 0;
gdjs.Start_95sceneCode.GDNewBBText2Objects2.length = 0;
gdjs.Start_95sceneCode.GDDoctor_95StrangeObjects1.length = 0;
gdjs.Start_95sceneCode.GDDoctor_95StrangeObjects2.length = 0;
gdjs.Start_95sceneCode.GDDefender_95StrangeObjects1.length = 0;
gdjs.Start_95sceneCode.GDDefender_95StrangeObjects2.length = 0;
gdjs.Start_95sceneCode.GDSinister_95StrangeObjects1.length = 0;
gdjs.Start_95sceneCode.GDSinister_95StrangeObjects2.length = 0;
gdjs.Start_95sceneCode.GDSupreme_95StrangeObjects1.length = 0;
gdjs.Start_95sceneCode.GDSupreme_95StrangeObjects2.length = 0;
gdjs.Start_95sceneCode.GDZombie_95StrangeObjects1.length = 0;
gdjs.Start_95sceneCode.GDZombie_95StrangeObjects2.length = 0;
gdjs.Start_95sceneCode.GDNewBBText3Objects1.length = 0;
gdjs.Start_95sceneCode.GDNewBBText3Objects2.length = 0;
gdjs.Start_95sceneCode.GDStarButtonObjects1.length = 0;
gdjs.Start_95sceneCode.GDStarButtonObjects2.length = 0;

gdjs.Start_95sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['Start_95sceneCode'] = gdjs.Start_95sceneCode;
