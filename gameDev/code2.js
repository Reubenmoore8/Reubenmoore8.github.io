gdjs.NewScene3Code = {};
gdjs.NewScene3Code.GDNewObjectObjects1= [];
gdjs.NewScene3Code.GDNewObjectObjects2= [];
gdjs.NewScene3Code.GDNewObject2Objects1= [];
gdjs.NewScene3Code.GDNewObject2Objects2= [];
gdjs.NewScene3Code.GDNewObject3Objects1= [];
gdjs.NewScene3Code.GDNewObject3Objects2= [];
gdjs.NewScene3Code.GDreturnObjects1= [];
gdjs.NewScene3Code.GDreturnObjects2= [];

gdjs.NewScene3Code.conditionTrue_0 = {val:false};
gdjs.NewScene3Code.condition0IsTrue_0 = {val:false};
gdjs.NewScene3Code.condition1IsTrue_0 = {val:false};


gdjs.NewScene3Code.eventsList0xb2358 = function(runtimeScene) {

{


gdjs.NewScene3Code.condition0IsTrue_0.val = false;
{
gdjs.NewScene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "c");
}if (gdjs.NewScene3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


gdjs.NewScene3Code.condition0IsTrue_0.val = false;
{
gdjs.NewScene3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NewScene3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "D:\\Reuben\\Downloads\\Our-Mountain_v003_Looping.mp3", true, 50, 1);
}}

}


}; //End of gdjs.NewScene3Code.eventsList0xb2358


gdjs.NewScene3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.NewScene3Code.GDNewObjectObjects1.length = 0;
gdjs.NewScene3Code.GDNewObjectObjects2.length = 0;
gdjs.NewScene3Code.GDNewObject2Objects1.length = 0;
gdjs.NewScene3Code.GDNewObject2Objects2.length = 0;
gdjs.NewScene3Code.GDNewObject3Objects1.length = 0;
gdjs.NewScene3Code.GDNewObject3Objects2.length = 0;
gdjs.NewScene3Code.GDreturnObjects1.length = 0;
gdjs.NewScene3Code.GDreturnObjects2.length = 0;

gdjs.NewScene3Code.eventsList0xb2358(runtimeScene);
return;
}
gdjs['NewScene3Code'] = gdjs.NewScene3Code;
