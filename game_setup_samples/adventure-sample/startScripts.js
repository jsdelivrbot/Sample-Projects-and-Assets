A3D.config = {
  game:{
    forceResolution: true,
    targetRes : [640,480],
    startScene : 'sampleLevel'
  },
  scenes : {
    sampleLevel : {
      rootUrl : './scenes/',
      file : 'scene1.babylon',
      onload : function(){
        var pat = {
            speed:0.03,
            patrolPoints:[
              {speed:0.1,gotoPoint:{x:0,y:0,z:0},lookTo:true},
              {gotoPoint:{x:3,y:0,z:3},lookTo:{x:0,y:0,z:0}},
              {gotoPoint:{x:8,y:0,z:-5},lookTo:true},
              {gotoPoint:{x:-7,y:0,z:3},wait:2000,lookTo:true,speed:0.01}
            ]
          };
        console.log('this is nice');
        for(var e in A3D.ActiveGame.mainScene.Enemy){
          var me = A3D.ActiveGame.mainScene.Enemy[e];
          me.makePatrol(pat);
          me.startPatrol();
        }
      }
    }
  },
    playerSetup : {
      urlRoot : './models/',
      file : 'chris.babylon',
      importMeshName:'Chris',
      boundsSize : {
        x : 0.2,
        y: 0.5,
        z : 0.2
      },
      boundsOffset : {
        x : 0,
        y: 0.9,
        z: 0
      },
      scale : {
        x: 0.3,
        y:0.3,
        z:0.3
      },
      animationsMap : [
        {
          name : 'idle',
          start : 80,
          end : 100
        },
        {
          name : 'running',
          start : 50,
          end : 70
        },
        {
          name : 'walking',
          start : 10,
          end : 40
        }
      ],
      speedAnimationMap : [
        {
          animation : 'idle',
          targetDistance : null,
          speed: 0
        },
        {
          animation : 'walking',
          targetDistance : 0,
          speed : 0.01
        },
        {
          animation : 'running',
          targetDistance : 1,
          speed : 0.025
        }
      ]
    },

    targetSetup : {
      rootUrl : './models/',
      file : 'gototarget1.babylon',
      animationsSetup : [
        {
          name : 'active',
          start: 0,
          end : 100
        }
      ],
      scale : {
        x: 0.3,
        y:0.3,
        z:0.3
      }
    },

    cameraSetup : {
      offset: {
        x:0,
        y: 6,
        z: -3
      },
      rotation : {
        x: 1.09,
        y:0,
        z:0
      }
    }
  };


function start(){
  new A3D.Game();
  A3D.ActiveGame.run();
    /*
    A3D.ActiveGame._loadScene('./scenes/','sampleLevel.babylon',function(){
      myGame.Adventure = new A3D.Module.Adventure(myGame.config);
      myGame.Adventure.loadModule(myGame.scripts);
    });
    */
}

document.addEventListener( "DOMContentLoaded", start, false );
