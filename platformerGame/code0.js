gdjs.NewSceneCode = {};
gdjs.NewSceneCode.forEachIndex2 = 0;

gdjs.NewSceneCode.forEachObjects2 = [];

gdjs.NewSceneCode.forEachTemporary2 = null;

gdjs.NewSceneCode.forEachTotalCount2 = 0;

gdjs.NewSceneCode.GDPlayerObjects1= [];
gdjs.NewSceneCode.GDPlayerObjects2= [];
gdjs.NewSceneCode.GDPlayerObjects3= [];
gdjs.NewSceneCode.GDbackgroundObjects1= [];
gdjs.NewSceneCode.GDbackgroundObjects2= [];
gdjs.NewSceneCode.GDbackgroundObjects3= [];
gdjs.NewSceneCode.GDNewObjectObjects1= [];
gdjs.NewSceneCode.GDNewObjectObjects2= [];
gdjs.NewSceneCode.GDNewObjectObjects3= [];
gdjs.NewSceneCode.GDcoinObjects1= [];
gdjs.NewSceneCode.GDcoinObjects2= [];
gdjs.NewSceneCode.GDcoinObjects3= [];
gdjs.NewSceneCode.GDcoinsObjects1= [];
gdjs.NewSceneCode.GDcoinsObjects2= [];
gdjs.NewSceneCode.GDcoinsObjects3= [];
gdjs.NewSceneCode.GDSlimeEnemyObjects1= [];
gdjs.NewSceneCode.GDSlimeEnemyObjects2= [];
gdjs.NewSceneCode.GDSlimeEnemyObjects3= [];
gdjs.NewSceneCode.GDleftObjects1= [];
gdjs.NewSceneCode.GDleftObjects2= [];
gdjs.NewSceneCode.GDleftObjects3= [];
gdjs.NewSceneCode.GDrightObjects1= [];
gdjs.NewSceneCode.GDrightObjects2= [];
gdjs.NewSceneCode.GDrightObjects3= [];
gdjs.NewSceneCode.GDbonfireObjects1= [];
gdjs.NewSceneCode.GDbonfireObjects2= [];
gdjs.NewSceneCode.GDbonfireObjects3= [];
gdjs.NewSceneCode.GDActiveBonfireObjects1= [];
gdjs.NewSceneCode.GDActiveBonfireObjects2= [];
gdjs.NewSceneCode.GDActiveBonfireObjects3= [];
gdjs.NewSceneCode.GDKillBoxObjects1= [];
gdjs.NewSceneCode.GDKillBoxObjects2= [];
gdjs.NewSceneCode.GDKillBoxObjects3= [];
gdjs.NewSceneCode.GDHealthBarObjects1= [];
gdjs.NewSceneCode.GDHealthBarObjects2= [];
gdjs.NewSceneCode.GDHealthBarObjects3= [];
gdjs.NewSceneCode.GDtestObjects1= [];
gdjs.NewSceneCode.GDtestObjects2= [];
gdjs.NewSceneCode.GDtestObjects3= [];
gdjs.NewSceneCode.GDAttackTextObjects1= [];
gdjs.NewSceneCode.GDAttackTextObjects2= [];
gdjs.NewSceneCode.GDAttackTextObjects3= [];
gdjs.NewSceneCode.GDCheckpointTextObjects1= [];
gdjs.NewSceneCode.GDCheckpointTextObjects2= [];
gdjs.NewSceneCode.GDCheckpointTextObjects3= [];
gdjs.NewSceneCode.GDSpinningBladeTextObjects1= [];
gdjs.NewSceneCode.GDSpinningBladeTextObjects2= [];
gdjs.NewSceneCode.GDSpinningBladeTextObjects3= [];
gdjs.NewSceneCode.GDHelpTextObjects1= [];
gdjs.NewSceneCode.GDHelpTextObjects2= [];
gdjs.NewSceneCode.GDHelpTextObjects3= [];
gdjs.NewSceneCode.GDPositionYObjects1= [];
gdjs.NewSceneCode.GDPositionYObjects2= [];
gdjs.NewSceneCode.GDPositionYObjects3= [];
gdjs.NewSceneCode.GDPositionXObjects1= [];
gdjs.NewSceneCode.GDPositionXObjects2= [];
gdjs.NewSceneCode.GDPositionXObjects3= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition3IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition4IsTrue_0 = {val:false};
gdjs.NewSceneCode.conditionTrue_1 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition3IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition4IsTrue_1 = {val:false};


gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDKillBoxObjects1Objects = Hashtable.newFrom({"KillBox": gdjs.NewSceneCode.GDKillBoxObjects1});gdjs.NewSceneCode.eventsList0x6eedf8 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition0IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7253180);
}
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setAnimationName("jumping");
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x6eedf8
gdjs.NewSceneCode.eventsList0x69d960 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition0IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7477204);
}
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects2[i].setAnimationName("running");
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x69d960
gdjs.NewSceneCode.eventsList0x68f3e0 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition0IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7270836);
}
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects2.createFrom(gdjs.NewSceneCode.GDPlayerObjects1);

{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects2[i].setAnimationName("idle");
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x68f3e0
gdjs.NewSceneCode.eventsList0x690240 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition0IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6678628);
}
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects2.createFrom(gdjs.NewSceneCode.GDPlayerObjects1);

{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects2[i].setAnimationName("attacking");
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x690240
gdjs.NewSceneCode.eventsList0x711c98 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition0IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7157964);
}
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects2[i].setAnimationName("running");
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x711c98
gdjs.NewSceneCode.eventsList0x721b80 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition0IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7347796);
}
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setAnimationName("idle");
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x721b80
gdjs.NewSceneCode.eventsList0x6e96d0 = function(runtimeScene) {

{

gdjs.NewSceneCode.GDPlayerObjects2.createFrom(gdjs.NewSceneCode.GDPlayerObjects1);


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects2[k] = gdjs.NewSceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects2.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NewSceneCode.eventsList0x711c98(runtimeScene);} //End of subevents
}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NewSceneCode.eventsList0x721b80(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.NewSceneCode.eventsList0x6e96d0
gdjs.NewSceneCode.eventsList0x6cdd38 = function(runtimeScene) {

{

gdjs.NewSceneCode.GDPlayerObjects2.createFrom(gdjs.NewSceneCode.GDPlayerObjects1);


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects2[k] = gdjs.NewSceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects2.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NewSceneCode.eventsList0x69d960(runtimeScene);} //End of subevents
}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NewSceneCode.eventsList0x68f3e0(runtimeScene);} //End of subevents
}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NewSceneCode.eventsList0x690240(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].isCurrentAnimationName("attacking") ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].hasAnimationEnded() ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setAnimationName("idle");
}
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x6e96d0(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.NewSceneCode.eventsList0x6cdd38
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDSlimeEnemyObjects1Objects = Hashtable.newFrom({"SlimeEnemy": gdjs.NewSceneCode.GDSlimeEnemyObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDSlimeEnemyObjects1Objects = Hashtable.newFrom({"SlimeEnemy": gdjs.NewSceneCode.GDSlimeEnemyObjects1});gdjs.NewSceneCode.eventsList0x681d00 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition0IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7298756);
}
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setAnimationName("damaged");
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x681d00
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDbonfireObjects1Objects = Hashtable.newFrom({"bonfire": gdjs.NewSceneCode.GDbonfireObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDcoinObjects1Objects = Hashtable.newFrom({"coin": gdjs.NewSceneCode.GDcoinObjects1});gdjs.NewSceneCode.eventsList0x6d4080 = function(runtimeScene) {

}; //End of gdjs.NewSceneCode.eventsList0x6d4080
gdjs.NewSceneCode.eventsList0x6f5250 = function(runtimeScene) {

{

/* Reuse gdjs.NewSceneCode.GDcoinObjects1 */

for(gdjs.NewSceneCode.forEachIndex2 = 0;gdjs.NewSceneCode.forEachIndex2 < gdjs.NewSceneCode.GDcoinObjects1.length;++gdjs.NewSceneCode.forEachIndex2) {
gdjs.NewSceneCode.GDcoinObjects2.createFrom(gdjs.NewSceneCode.GDcoinObjects1);


gdjs.NewSceneCode.forEachTemporary2 = gdjs.NewSceneCode.GDcoinObjects1[gdjs.NewSceneCode.forEachIndex2];
gdjs.NewSceneCode.GDcoinObjects2.length = 0;
gdjs.NewSceneCode.GDcoinObjects2.push(gdjs.NewSceneCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.NewSceneCode.GDcoinObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDcoinObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).add(100);
}}
}

}


}; //End of gdjs.NewSceneCode.eventsList0x6f5250
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDSlimeEnemyObjects1Objects = Hashtable.newFrom({"SlimeEnemy": gdjs.NewSceneCode.GDSlimeEnemyObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.NewSceneCode.GDrightObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDSlimeEnemyObjects1Objects = Hashtable.newFrom({"SlimeEnemy": gdjs.NewSceneCode.GDSlimeEnemyObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.NewSceneCode.GDleftObjects1});gdjs.NewSceneCode.eventsList0x6fc7e8 = function(runtimeScene) {

}; //End of gdjs.NewSceneCode.eventsList0x6fc7e8
gdjs.NewSceneCode.eventsList0x6edfd8 = function(runtimeScene) {

{

gdjs.NewSceneCode.GDSlimeEnemyObjects1.createFrom(runtimeScene.getObjects("SlimeEnemy"));

for(gdjs.NewSceneCode.forEachIndex2 = 0;gdjs.NewSceneCode.forEachIndex2 < gdjs.NewSceneCode.GDSlimeEnemyObjects1.length;++gdjs.NewSceneCode.forEachIndex2) {
gdjs.NewSceneCode.GDSlimeEnemyObjects2.createFrom(gdjs.NewSceneCode.GDSlimeEnemyObjects1);


gdjs.NewSceneCode.forEachTemporary2 = gdjs.NewSceneCode.GDSlimeEnemyObjects1[gdjs.NewSceneCode.forEachIndex2];
gdjs.NewSceneCode.GDSlimeEnemyObjects2.length = 0;
gdjs.NewSceneCode.GDSlimeEnemyObjects2.push(gdjs.NewSceneCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.NewSceneCode.GDSlimeEnemyObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDSlimeEnemyObjects2[i].returnVariable(gdjs.NewSceneCode.GDSlimeEnemyObjects2[i].getVariables().getFromIndex(1)).setString("yes");
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDSlimeEnemyObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDSlimeEnemyObjects2[i].hide(false);
}
}}
}

}


}; //End of gdjs.NewSceneCode.eventsList0x6edfd8
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDtestObjects1Objects = Hashtable.newFrom({"test": gdjs.NewSceneCode.GDtestObjects1});gdjs.NewSceneCode.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDActiveBonfireObjects1.createFrom(runtimeScene.getObjects("ActiveBonfire"));
gdjs.NewSceneCode.GDKillBoxObjects1.createFrom(runtimeScene.getObjects("KillBox"));
gdjs.NewSceneCode.GDleftObjects1.createFrom(runtimeScene.getObjects("left"));
gdjs.NewSceneCode.GDrightObjects1.createFrom(runtimeScene.getObjects("right"));
{for(var i = 0, len = gdjs.NewSceneCode.GDleftObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDleftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDrightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDActiveBonfireObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDActiveBonfireObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDKillBoxObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDKillBoxObjects1[i].hide();
}
}}

}


{

gdjs.NewSceneCode.GDKillBoxObjects1.createFrom(runtimeScene.getObjects("KillBox"));
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDKillBoxObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setAnimationName("death");
}
}}

}


{


{
gdjs.NewSceneCode.GDtestObjects1.createFrom(runtimeScene.getObjects("test"));
{for(var i = 0, len = gdjs.NewSceneCode.GDtestObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDtestObjects1[i].rotate(-(60), runtimeScene);
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.NewSceneCode.GDPlayerObjects1[i].isCurrentAnimationName("damaged")) ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.NewSceneCode.eventsList0x6eedf8(runtimeScene);} //End of subevents
}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.NewSceneCode.GDPlayerObjects1[i].isCurrentAnimationName("damaged")) ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.NewSceneCode.eventsList0x6cdd38(runtimeScene);} //End of subevents
}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDSlimeEnemyObjects1.createFrom(runtimeScene.getObjects("SlimeEnemy"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDSlimeEnemyObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].isCurrentAnimationName("attacking") ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDSlimeEnemyObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDSlimeEnemyObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDSlimeEnemyObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDSlimeEnemyObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDSlimeEnemyObjects1[i].returnVariable(gdjs.NewSceneCode.GDSlimeEnemyObjects1[i].getVariables().getFromIndex(1)).setString("no");
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDSlimeEnemyObjects1.createFrom(runtimeScene.getObjects("SlimeEnemy"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
gdjs.NewSceneCode.condition2IsTrue_0.val = false;
gdjs.NewSceneCode.condition3IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDSlimeEnemyObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.NewSceneCode.GDPlayerObjects1[i].isCurrentAnimationName("attacking")) ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if ( gdjs.NewSceneCode.condition1IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition2IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1);
}if ( gdjs.NewSceneCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDSlimeEnemyObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDSlimeEnemyObjects1[i].getVariableString(gdjs.NewSceneCode.GDSlimeEnemyObjects1[i].getVariables().getFromIndex(1)) == "yes" ) {
        gdjs.NewSceneCode.condition3IsTrue_0.val = true;
        gdjs.NewSceneCode.GDSlimeEnemyObjects1[k] = gdjs.NewSceneCode.GDSlimeEnemyObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDSlimeEnemyObjects1.length = k;}}
}
}
if (gdjs.NewSceneCode.condition3IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).sub(25);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x681d00(runtimeScene);} //End of subevents
}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) <= 0;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setAnimationName("death");
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(100);
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDbonfireObjects1.createFrom(runtimeScene.getObjects("bonfire"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDbonfireObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDActiveBonfireObjects1.createFrom(runtimeScene.getObjects("ActiveBonfire"));
/* Reuse gdjs.NewSceneCode.GDbonfireObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDbonfireObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDbonfireObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDActiveBonfireObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDActiveBonfireObjects1[i].hide(false);
}
}{runtimeScene.getVariables().get("checkpointX").setNumber((( gdjs.NewSceneCode.GDbonfireObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDbonfireObjects1[0].getPointX("")));
}{runtimeScene.getVariables().get("checkpointY").setNumber((( gdjs.NewSceneCode.GDbonfireObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDbonfireObjects1[0].getPointY("")));
}{for(var i = 0, len = gdjs.NewSceneCode.GDActiveBonfireObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDActiveBonfireObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("checkpointX")),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("checkpointY")));
}
}}

}


{


{
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.NewSceneCode.GDPlayerObjects1.length !== 0 ? gdjs.NewSceneCode.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDcoinObjects1.createFrom(runtimeScene.getObjects("coin"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDcoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NewSceneCode.eventsList0x6f5250(runtimeScene);} //End of subevents
}

}


{


{
gdjs.NewSceneCode.GDHealthBarObjects1.createFrom(runtimeScene.getObjects("HealthBar"));
gdjs.NewSceneCode.GDcoinsObjects1.createFrom(runtimeScene.getObjects("coins"));
{for(var i = 0, len = gdjs.NewSceneCode.GDcoinsObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDcoinsObjects1[i].setString("Coins: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDHealthBarObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDHealthBarObjects1[i].setString("Health: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2))));
}
}}

}


{

gdjs.NewSceneCode.GDSlimeEnemyObjects1.createFrom(runtimeScene.getObjects("SlimeEnemy"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDSlimeEnemyObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDSlimeEnemyObjects1[i].getVariableString(gdjs.NewSceneCode.GDSlimeEnemyObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDSlimeEnemyObjects1[k] = gdjs.NewSceneCode.GDSlimeEnemyObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDSlimeEnemyObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDSlimeEnemyObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDSlimeEnemyObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDSlimeEnemyObjects1[i].addPolarForce(0, 100, 0);
}
}}

}


{

gdjs.NewSceneCode.GDSlimeEnemyObjects1.createFrom(runtimeScene.getObjects("SlimeEnemy"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDSlimeEnemyObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDSlimeEnemyObjects1[i].getVariableString(gdjs.NewSceneCode.GDSlimeEnemyObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDSlimeEnemyObjects1[k] = gdjs.NewSceneCode.GDSlimeEnemyObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDSlimeEnemyObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDSlimeEnemyObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDSlimeEnemyObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDSlimeEnemyObjects1[i].addPolarForce(180, 100, 0);
}
}}

}


{

gdjs.NewSceneCode.GDSlimeEnemyObjects1.createFrom(runtimeScene.getObjects("SlimeEnemy"));
gdjs.NewSceneCode.GDrightObjects1.createFrom(runtimeScene.getObjects("right"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDSlimeEnemyObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDrightObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDSlimeEnemyObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDSlimeEnemyObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDSlimeEnemyObjects1[i].returnVariable(gdjs.NewSceneCode.GDSlimeEnemyObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDSlimeEnemyObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDSlimeEnemyObjects1[i].flipX(true);
}
}}

}


{

gdjs.NewSceneCode.GDSlimeEnemyObjects1.createFrom(runtimeScene.getObjects("SlimeEnemy"));
gdjs.NewSceneCode.GDleftObjects1.createFrom(runtimeScene.getObjects("left"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDSlimeEnemyObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDSlimeEnemyObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDSlimeEnemyObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDSlimeEnemyObjects1[i].returnVariable(gdjs.NewSceneCode.GDSlimeEnemyObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDSlimeEnemyObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDSlimeEnemyObjects1[i].flipX(false);
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].isCurrentAnimationName("death") ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getAnimationFrame() == 9 ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
gdjs.NewSceneCode.GDbonfireObjects1.createFrom(runtimeScene.getObjects("bonfire"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("checkpointX")),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("checkpointY")) - ((gdjs.NewSceneCode.GDPlayerObjects1[i].getHeight()) - (( gdjs.NewSceneCode.GDbonfireObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDbonfireObjects1[0].getHeight())));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setAnimationName("idle");
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x6edfd8(runtimeScene);} //End of subevents
}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].isCurrentAnimationName("damaged") ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getAnimationFrame() == 3 ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setAnimationName("idle");
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDtestObjects1.createFrom(runtimeScene.getObjects("test"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDtestObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setAnimationName("death");
}
}}

}


{


{
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDPositionXObjects1.createFrom(runtimeScene.getObjects("PositionX"));
gdjs.NewSceneCode.GDPositionYObjects1.createFrom(runtimeScene.getObjects("PositionY"));
{runtimeScene.getVariables().getFromIndex(4).setNumber((( gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlayerObjects1[0].getPointX("")));
}{runtimeScene.getVariables().getFromIndex(5).setNumber((( gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlayerObjects1[0].getPointY("")));
}{for(var i = 0, len = gdjs.NewSceneCode.GDPositionXObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPositionXObjects1[i].setString("x position: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4))));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPositionYObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPositionYObjects1[i].setString("y position " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5))));
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0xb25a8


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.NewSceneCode.GDPlayerObjects1.length = 0;
gdjs.NewSceneCode.GDPlayerObjects2.length = 0;
gdjs.NewSceneCode.GDPlayerObjects3.length = 0;
gdjs.NewSceneCode.GDbackgroundObjects1.length = 0;
gdjs.NewSceneCode.GDbackgroundObjects2.length = 0;
gdjs.NewSceneCode.GDbackgroundObjects3.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects1.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects2.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects3.length = 0;
gdjs.NewSceneCode.GDcoinObjects1.length = 0;
gdjs.NewSceneCode.GDcoinObjects2.length = 0;
gdjs.NewSceneCode.GDcoinObjects3.length = 0;
gdjs.NewSceneCode.GDcoinsObjects1.length = 0;
gdjs.NewSceneCode.GDcoinsObjects2.length = 0;
gdjs.NewSceneCode.GDcoinsObjects3.length = 0;
gdjs.NewSceneCode.GDSlimeEnemyObjects1.length = 0;
gdjs.NewSceneCode.GDSlimeEnemyObjects2.length = 0;
gdjs.NewSceneCode.GDSlimeEnemyObjects3.length = 0;
gdjs.NewSceneCode.GDleftObjects1.length = 0;
gdjs.NewSceneCode.GDleftObjects2.length = 0;
gdjs.NewSceneCode.GDleftObjects3.length = 0;
gdjs.NewSceneCode.GDrightObjects1.length = 0;
gdjs.NewSceneCode.GDrightObjects2.length = 0;
gdjs.NewSceneCode.GDrightObjects3.length = 0;
gdjs.NewSceneCode.GDbonfireObjects1.length = 0;
gdjs.NewSceneCode.GDbonfireObjects2.length = 0;
gdjs.NewSceneCode.GDbonfireObjects3.length = 0;
gdjs.NewSceneCode.GDActiveBonfireObjects1.length = 0;
gdjs.NewSceneCode.GDActiveBonfireObjects2.length = 0;
gdjs.NewSceneCode.GDActiveBonfireObjects3.length = 0;
gdjs.NewSceneCode.GDKillBoxObjects1.length = 0;
gdjs.NewSceneCode.GDKillBoxObjects2.length = 0;
gdjs.NewSceneCode.GDKillBoxObjects3.length = 0;
gdjs.NewSceneCode.GDHealthBarObjects1.length = 0;
gdjs.NewSceneCode.GDHealthBarObjects2.length = 0;
gdjs.NewSceneCode.GDHealthBarObjects3.length = 0;
gdjs.NewSceneCode.GDtestObjects1.length = 0;
gdjs.NewSceneCode.GDtestObjects2.length = 0;
gdjs.NewSceneCode.GDtestObjects3.length = 0;
gdjs.NewSceneCode.GDAttackTextObjects1.length = 0;
gdjs.NewSceneCode.GDAttackTextObjects2.length = 0;
gdjs.NewSceneCode.GDAttackTextObjects3.length = 0;
gdjs.NewSceneCode.GDCheckpointTextObjects1.length = 0;
gdjs.NewSceneCode.GDCheckpointTextObjects2.length = 0;
gdjs.NewSceneCode.GDCheckpointTextObjects3.length = 0;
gdjs.NewSceneCode.GDSpinningBladeTextObjects1.length = 0;
gdjs.NewSceneCode.GDSpinningBladeTextObjects2.length = 0;
gdjs.NewSceneCode.GDSpinningBladeTextObjects3.length = 0;
gdjs.NewSceneCode.GDHelpTextObjects1.length = 0;
gdjs.NewSceneCode.GDHelpTextObjects2.length = 0;
gdjs.NewSceneCode.GDHelpTextObjects3.length = 0;
gdjs.NewSceneCode.GDPositionYObjects1.length = 0;
gdjs.NewSceneCode.GDPositionYObjects2.length = 0;
gdjs.NewSceneCode.GDPositionYObjects3.length = 0;
gdjs.NewSceneCode.GDPositionXObjects1.length = 0;
gdjs.NewSceneCode.GDPositionXObjects2.length = 0;
gdjs.NewSceneCode.GDPositionXObjects3.length = 0;

gdjs.NewSceneCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['NewSceneCode'] = gdjs.NewSceneCode;
