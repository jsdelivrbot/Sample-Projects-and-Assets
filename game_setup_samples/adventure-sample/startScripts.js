var myGame = {
  config : {
    playerSetup : {
      urlRoot : './models/',
      file : 'chris.babylon',
      importMeshName:'Chris',
      boundsSize : {
        x : 0.2,
        y: 0.7,
        z : 0.2
      },
      boundsOffset : {
        x : 0,
        y: 1,
        z: 0
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
          speed : 0.025
        },
        {
          animation : 'running',
          targetDistance : 3,
          speed : 0.075
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
      ]
    }
  },

  scripts : function(s){
    A3D.ActiveGame.run();
  }
};


function start(){
    new A3D.Game(myGame.config);
    A3D.ActiveGame._loadScene('./scenes/','first_city.babylon',function(){
      myGame.Adventure = new A3D.Module.Adventure(myGame.config);
      myGame.Adventure.loadModule(myGame.scripts);
    });
}

document.addEventListener( "DOMContentLoaded", start, false );
