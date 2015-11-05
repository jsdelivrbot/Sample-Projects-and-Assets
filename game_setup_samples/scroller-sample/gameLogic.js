A3D.config = {
  game : {
    forceResolution: true,
    targetRes : [640,480],
    startScene : 'sampleLevel'
  },
    scenes: {
      sampleLevel : {
        rootUrl : './scenes/',
        file : 'myGame.babylon',

      }
    },
      lives: 3,
      speed : 0.2,
      actionButton: 'leftmouse',
      endTrigger : 'Trigger.End',
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
          x : 0,
          y : 0,
          z : -20
        },
        rotation : {
          x: 0,
          y: 0,
          z: 0
        }
      }
  };

function start(){
  new A3D.Game();
}

document.addEventListener( "DOMContentLoaded", start, false );
