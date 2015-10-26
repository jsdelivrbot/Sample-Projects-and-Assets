A3D.config = {
  game:{
    forceResolution: true,
    targetRes : [640,480],
    startScene : 'first_level'
  },
  scenes : {
    first_level : {
      rootUrl : './scenes/',
      file : 'platformer.babylon'
    }
  },

      lives: 3,
      speed : 1,
      jumpButton : 32,
      leftButton : 65,
      rightButton : 68,
      gravity : -0.5,

      actionButton: 'leftmouse',
      playerSettings : {
        meshName: 'CircleMan',
        rootUrl: '/models/',
        file:'Circle_man.babylon',
        spawnPoint : 'InitialSpawn',
        jumpForce : 4,
        jumpAccel : 2,
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
            name : 'idle',
            start:80,
            end : 83,
            options : {
              loop : true,
              ratio : .2
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

};

function start(){
  new A3D.Game();
}

document.addEventListener( "DOMContentLoaded", start, false );
