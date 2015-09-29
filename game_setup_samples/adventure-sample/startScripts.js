var myGame = {
  config : {
    playerSetup : {
      urlRoot : './models/',
      file : 'chris.babylon',
      importMeshName:'Chris',
      boundsSize : {
        x : 0.1,
        y: 0.3,
        z : 0.1
      },
      boundsOffset : {
        x : 0,
        y: 0.5,
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
  },

  scripts : function(s){
    A3D.ActiveGame.run();
  }
};


function start(){
    new A3D.Game(myGame.config);
    A3D.ActiveGame._loadScene('./scenes/','sampleLevel.babylon',function(){
      myGame.Adventure = new A3D.Module.Adventure(myGame.config);
      myGame.Adventure.loadModule(myGame.scripts);
    });
}

document.addEventListener( "DOMContentLoaded", start, false );
