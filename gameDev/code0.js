gdjs.NewScene2Code = {};
gdjs.NewScene2Code.GDNewObjectObjects1= [];
gdjs.NewScene2Code.GDNewObjectObjects2= [];
gdjs.NewScene2Code.GDcontrolsObjects1= [];
gdjs.NewScene2Code.GDcontrolsObjects2= [];
gdjs.NewScene2Code.GDplayObjects1= [];
gdjs.NewScene2Code.GDplayObjects2= [];
gdjs.NewScene2Code.GDCopyOfcontrolsObjects1= [];
gdjs.NewScene2Code.GDCopyOfcontrolsObjects2= [];

gdjs.NewScene2Code.conditionTrue_0 = {val:false};
gdjs.NewScene2Code.condition0IsTrue_0 = {val:false};
gdjs.NewScene2Code.condition1IsTrue_0 = {val:false};
gdjs.NewScene2Code.condition2IsTrue_0 = {val:false};


gdjs.NewScene2Code.mapOfGDgdjs_46NewScene2Code_46GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.NewScene2Code.GDplayObjects1});gdjs.NewScene2Code.mapOfGDgdjs_46NewScene2Code_46GDcontrolsObjects1Objects = Hashtable.newFrom({"controls": gdjs.NewScene2Code.GDcontrolsObjects1});gdjs.NewScene2Code.mapOfGDgdjs_46NewScene2Code_46GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.NewScene2Code.GDplayObjects1});gdjs.NewScene2Code.mapOfGDgdjs_46NewScene2Code_46GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.NewScene2Code.GDplayObjects1});gdjs.NewScene2Code.mapOfGDgdjs_46NewScene2Code_46GDcontrolsObjects1Objects = Hashtable.newFrom({"controls": gdjs.NewScene2Code.GDcontrolsObjects1});gdjs.NewScene2Code.mapOfGDgdjs_46NewScene2Code_46GDcontrolsObjects1Objects = Hashtable.newFrom({"controls": gdjs.NewScene2Code.GDcontrolsObjects1});gdjs.NewScene2Code.eventsList0xb2358 = function(runtimeScene) {

{

gdjs.NewScene2Code.GDplayObjects1.createFrom(runtimeScene.getObjects("play"));

gdjs.NewScene2Code.condition0IsTrue_0.val = false;
gdjs.NewScene2Code.condition1IsTrue_0.val = false;
{
gdjs.NewScene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewScene2Code.mapOfGDgdjs_46NewScene2Code_46GDplayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.NewScene2Code.condition0IsTrue_0.val ) {
{
gdjs.NewScene2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.NewScene2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "NewScene", false);
}}

}


{

gdjs.NewScene2Code.GDcontrolsObjects1.createFrom(runtimeScene.getObjects("controls"));

gdjs.NewScene2Code.condition0IsTrue_0.val = false;
gdjs.NewScene2Code.condition1IsTrue_0.val = false;
{
gdjs.NewScene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewScene2Code.mapOfGDgdjs_46NewScene2Code_46GDcontrolsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.NewScene2Code.condition0IsTrue_0.val ) {
{
gdjs.NewScene2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.NewScene2Code.condition1IsTrue_0.val) {
}

}


{

gdjs.NewScene2Code.GDplayObjects1.createFrom(runtimeScene.getObjects("play"));

gdjs.NewScene2Code.condition0IsTrue_0.val = false;
{
gdjs.NewScene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewScene2Code.mapOfGDgdjs_46NewScene2Code_46GDplayObjects1Objects, runtimeScene, true, false);
}if (gdjs.NewScene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.NewScene2Code.GDplayObjects1 */
{for(var i = 0, len = gdjs.NewScene2Code.GDplayObjects1.length ;i < len;++i) {
    gdjs.NewScene2Code.GDplayObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.NewScene2Code.GDplayObjects1.createFrom(runtimeScene.getObjects("play"));

gdjs.NewScene2Code.condition0IsTrue_0.val = false;
{
gdjs.NewScene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewScene2Code.mapOfGDgdjs_46NewScene2Code_46GDplayObjects1Objects, runtimeScene, true, true);
}if (gdjs.NewScene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.NewScene2Code.GDplayObjects1 */
{for(var i = 0, len = gdjs.NewScene2Code.GDplayObjects1.length ;i < len;++i) {
    gdjs.NewScene2Code.GDplayObjects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.NewScene2Code.GDcontrolsObjects1.createFrom(runtimeScene.getObjects("controls"));

gdjs.NewScene2Code.condition0IsTrue_0.val = false;
{
gdjs.NewScene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewScene2Code.mapOfGDgdjs_46NewScene2Code_46GDcontrolsObjects1Objects, runtimeScene, true, false);
}if (gdjs.NewScene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.NewScene2Code.GDcontrolsObjects1 */
{for(var i = 0, len = gdjs.NewScene2Code.GDcontrolsObjects1.length ;i < len;++i) {
    gdjs.NewScene2Code.GDcontrolsObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.NewScene2Code.GDcontrolsObjects1.createFrom(runtimeScene.getObjects("controls"));

gdjs.NewScene2Code.condition0IsTrue_0.val = false;
{
gdjs.NewScene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewScene2Code.mapOfGDgdjs_46NewScene2Code_46GDcontrolsObjects1Objects, runtimeScene, true, true);
}if (gdjs.NewScene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.NewScene2Code.GDcontrolsObjects1 */
{for(var i = 0, len = gdjs.NewScene2Code.GDcontrolsObjects1.length ;i < len;++i) {
    gdjs.NewScene2Code.GDcontrolsObjects1[i].setColor("0;0;0");
}
}}

}


{


gdjs.NewScene2Code.condition0IsTrue_0.val = false;
{
gdjs.NewScene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NewScene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "D:\\Reuben\\Downloads\\Our-Mountain_v003_Looping.mp3", true, 50, 1);
}}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


}; //End of gdjs.NewScene2Code.eventsList0xb2358


gdjs.NewScene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.NewScene2Code.GDNewObjectObjects1.length = 0;
gdjs.NewScene2Code.GDNewObjectObjects2.length = 0;
gdjs.NewScene2Code.GDcontrolsObjects1.length = 0;
gdjs.NewScene2Code.GDcontrolsObjects2.length = 0;
gdjs.NewScene2Code.GDplayObjects1.length = 0;
gdjs.NewScene2Code.GDplayObjects2.length = 0;
gdjs.NewScene2Code.GDCopyOfcontrolsObjects1.length = 0;
gdjs.NewScene2Code.GDCopyOfcontrolsObjects2.length = 0;

gdjs.NewScene2Code.eventsList0xb2358(runtimeScene);
return;
}
gdjs['NewScene2Code'] = gdjs.NewScene2Code;
