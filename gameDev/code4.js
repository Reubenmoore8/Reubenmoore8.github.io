gdjs.NewScene5Code = {};
gdjs.NewScene5Code.GDNewObjectObjects1= [];
gdjs.NewScene5Code.GDNewObjectObjects2= [];
gdjs.NewScene5Code.GDcongratulationsObjects1= [];
gdjs.NewScene5Code.GDcongratulationsObjects2= [];
gdjs.NewScene5Code.GDcompletionTimeObjects1= [];
gdjs.NewScene5Code.GDcompletionTimeObjects2= [];
gdjs.NewScene5Code.GDcoinsCollectedObjects1= [];
gdjs.NewScene5Code.GDcoinsCollectedObjects2= [];
gdjs.NewScene5Code.GDdeathsObjects1= [];
gdjs.NewScene5Code.GDdeathsObjects2= [];

gdjs.NewScene5Code.conditionTrue_0 = {val:false};
gdjs.NewScene5Code.condition0IsTrue_0 = {val:false};
gdjs.NewScene5Code.condition1IsTrue_0 = {val:false};


gdjs.NewScene5Code.eventsList0xb2358 = function(runtimeScene) {

{


{
gdjs.NewScene5Code.GDcoinsCollectedObjects1.createFrom(runtimeScene.getObjects("coinsCollected"));
gdjs.NewScene5Code.GDcompletionTimeObjects1.createFrom(runtimeScene.getObjects("completionTime"));
gdjs.NewScene5Code.GDdeathsObjects1.createFrom(runtimeScene.getObjects("deaths"));
{for(var i = 0, len = gdjs.NewScene5Code.GDcoinsCollectedObjects1.length ;i < len;++i) {
    gdjs.NewScene5Code.GDcoinsCollectedObjects1[i].setString("Coins Collected: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.NewScene5Code.GDcompletionTimeObjects1.length ;i < len;++i) {
    gdjs.NewScene5Code.GDcompletionTimeObjects1[i].setString("Completion Time: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.NewScene5Code.GDdeathsObjects1.length ;i < len;++i) {
    gdjs.NewScene5Code.GDdeathsObjects1[i].setString("Deaths: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)));
}
}}

}


{


gdjs.NewScene5Code.condition0IsTrue_0.val = false;
{
gdjs.NewScene5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NewScene5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "D:\\Reuben\\Downloads\\Our-Mountain_v003_Looping.mp3", true, 50, 1);
}}

}


}; //End of gdjs.NewScene5Code.eventsList0xb2358


gdjs.NewScene5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.NewScene5Code.GDNewObjectObjects1.length = 0;
gdjs.NewScene5Code.GDNewObjectObjects2.length = 0;
gdjs.NewScene5Code.GDcongratulationsObjects1.length = 0;
gdjs.NewScene5Code.GDcongratulationsObjects2.length = 0;
gdjs.NewScene5Code.GDcompletionTimeObjects1.length = 0;
gdjs.NewScene5Code.GDcompletionTimeObjects2.length = 0;
gdjs.NewScene5Code.GDcoinsCollectedObjects1.length = 0;
gdjs.NewScene5Code.GDcoinsCollectedObjects2.length = 0;
gdjs.NewScene5Code.GDdeathsObjects1.length = 0;
gdjs.NewScene5Code.GDdeathsObjects2.length = 0;

gdjs.NewScene5Code.eventsList0xb2358(runtimeScene);
return;
}
gdjs['NewScene5Code'] = gdjs.NewScene5Code;
