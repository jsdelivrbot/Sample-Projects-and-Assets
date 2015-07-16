var myGame = {
  config : {
      lives: 3,
      speed : 1,
      jumpButton : 32,
      leftButton : 65,
      rightButton : 68,
      gravity : -0.5,
      jumpForce : 4,
      actionButton: 'leftmouse',
      playerSettings : {
        meshName: 'CircleMan',
        rootUrl: '/models/',
        file:'Circle_man.babylon',
        spawnPoint : 'InitialSpawn',
        animationsSetup : [
          {
            name : 'walk',
            start : 20,
            end : 59,
            options : {
              ratio: 2.4
            }
          },
          {
            name : 'hit',
            start:110,
            end : 120,
            options : {
              loop : true,
              ratio : .2
            }
          },
          {
            name : 'jump',
            start : 80,
            end : 100,
            options : {
              ratio : 2,
              loop : false
            }
          }
        ],
        rotationValues : {
          left : 3,
          right : 0
        },

        scale : {
          x: 3,
          y: 3,
          z : 3
        },
        boundsOffset : {
          z : -2,
          x : -2,
          y: 8.5
        }

      },
      screenImages : [
        {
          src:'/images/start.png',
          id : 'mainScreen'
        },
        {
          src : '/images/lose.png',
          id : 'loseScreen'
        },
        {
          src : '/images/win.png',
          id : 'winScreen'
        }
      ],
      livesImage : {
        src : '/images/heart.png',
        dX:0,
        dY:10,
        dWidth:30,
        dHeight:30
      },
      cameraSettings : {
        offset : {
          x : 30,
          y : 20,
          z : -40
        },
        rotation : {
          x: .3,
          y: -.3,
          z: 0
        }
      }
  },

  scripts : function(){
    //TODO this is where you can add your own game logic

  }
};

function start(){
    myGame.game = new A3D.Game.Platformer(myGame.config);
    myGame.game.loadScene('/scenes/','platformer.babylon',myGame.scripts);
}

document.addEventListener( "DOMContentLoaded", start, false );

