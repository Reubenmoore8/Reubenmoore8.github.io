gdjs.NewScene4Code = {};
gdjs.NewScene4Code.GDNewObjectObjects1= [];
gdjs.NewScene4Code.GDNewObjectObjects2= [];
gdjs.NewScene4Code.GDshopObjects1= [];
gdjs.NewScene4Code.GDshopObjects2= [];
gdjs.NewScene4Code.GDdamageObjects1= [];
gdjs.NewScene4Code.GDdamageObjects2= [];
gdjs.NewScene4Code.GDhealthObjects1= [];
gdjs.NewScene4Code.GDhealthObjects2= [];
gdjs.NewScene4Code.GDtotalHealthObjects1= [];
gdjs.NewScene4Code.GDtotalHealthObjects2= [];
gdjs.NewScene4Code.GDtotalDamageObjects1= [];
gdjs.NewScene4Code.GDtotalDamageObjects2= [];
gdjs.NewScene4Code.GDavailableCoinsObjects1= [];
gdjs.NewScene4Code.GDavailableCoinsObjects2= [];
gdjs.NewScene4Code.GDexitObjects1= [];
gdjs.NewScene4Code.GDexitObjects2= [];

gdjs.NewScene4Code.conditionTrue_0 = {val:false};
gdjs.NewScene4Code.condition0IsTrue_0 = {val:false};
gdjs.NewScene4Code.condition1IsTrue_0 = {val:false};
gdjs.NewScene4Code.condition2IsTrue_0 = {val:false};


gdjs.NewScene4Code.eventsList0xb2358 = function(runtimeScene) {

{


{
gdjs.NewScene4Code.GDavailableCoinsObjects1.createFrom(runtimeScene.getObjects("availableCoins"));
gdjs.NewScene4Code.GDtotalDamageObjects1.createFrom(runtimeScene.getObjects("totalDamage"));
gdjs.NewScene4Code.GDtotalHealthObjects1.createFrom(runtimeScene.getObjects("totalHealth"));
{for(var i = 0, len = gdjs.NewScene4Code.GDtotalHealthObjects1.length ;i < len;++i) {
    gdjs.NewScene4Code.GDtotalHealthObjects1[i].setString("Total Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{for(var i = 0, len = gdjs.NewScene4Code.GDtotalDamageObjects1.length ;i < len;++i) {
    gdjs.NewScene4Code.GDtotalDamageObjects1[i].setString("Total Damage: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.NewScene4Code.GDavailableCoinsObjects1.length ;i < len;++i) {
    gdjs.NewScene4Code.GDavailableCoinsObjects1[i].setString("Coins: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.NewScene4Code.condition0IsTrue_0.val = false;
gdjs.NewScene4Code.condition1IsTrue_0.val = false;
{
gdjs.NewScene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if ( gdjs.NewScene4Code.condition0IsTrue_0.val ) {
{
gdjs.NewScene4Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= 500;
}}
if (gdjs.NewScene4Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(50);
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(500);
}}

}


{


gdjs.NewScene4Code.condition0IsTrue_0.val = false;
gdjs.NewScene4Code.condition1IsTrue_0.val = false;
{
gdjs.NewScene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "h");
}if ( gdjs.NewScene4Code.condition0IsTrue_0.val ) {
{
gdjs.NewScene4Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= 500;
}}
if (gdjs.NewScene4Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).add(50);
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(500);
}}

}


{


{
{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) - gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}}

}


{


gdjs.NewScene4Code.condition0IsTrue_0.val = false;
{
gdjs.NewScene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
}if (gdjs.NewScene4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


gdjs.NewScene4Code.condition0IsTrue_0.val = false;
{
gdjs.NewScene4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NewScene4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "D:\\Reuben\\Downloads\\Our-Mountain_v003_Looping.mp3", true, 50, 1);
}}

}


}; //End of gdjs.NewScene4Code.eventsList0xb2358


gdjs.NewScene4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.NewScene4Code.GDNewObjectObjects1.length = 0;
gdjs.NewScene4Code.GDNewObjectObjects2.length = 0;
gdjs.NewScene4Code.GDshopObjects1.length = 0;
gdjs.NewScene4Code.GDshopObjects2.length = 0;
gdjs.NewScene4Code.GDdamageObjects1.length = 0;
gdjs.NewScene4Code.GDdamageObjects2.length = 0;
gdjs.NewScene4Code.GDhealthObjects1.length = 0;
gdjs.NewScene4Code.GDhealthObjects2.length = 0;
gdjs.NewScene4Code.GDtotalHealthObjects1.length = 0;
gdjs.NewScene4Code.GDtotalHealthObjects2.length = 0;
gdjs.NewScene4Code.GDtotalDamageObjects1.length = 0;
gdjs.NewScene4Code.GDtotalDamageObjects2.length = 0;
gdjs.NewScene4Code.GDavailableCoinsObjects1.length = 0;
gdjs.NewScene4Code.GDavailableCoinsObjects2.length = 0;
gdjs.NewScene4Code.GDexitObjects1.length = 0;
gdjs.NewScene4Code.GDexitObjects2.length = 0;

gdjs.NewScene4Code.eventsList0xb2358(runtimeScene);
return;
}
gdjs['NewScene4Code'] = gdjs.NewScene4Code;
