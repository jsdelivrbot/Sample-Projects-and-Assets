var myGame = {
  config : {
    //  containerId:'game',//Probably not needed
    //  playerName : 'SpinyShell',//remove when possible
    //  mainCamera: 'Camera.Main',
      lives: 3,
      speed : 0.2,
      actionButton: 'leftmouse',
  //    collisionNames : ['Icosphere','Cube'],//remove when possible
      endTrigger : 'Trigger.End',
      screenImages : [
        {
          src:'/nickuGame/Start_Screen.png',
          id : 'mainScreen'
        },
        {
          src : '/nickuGame/Lose_Screen.png',
          id : 'loseScreen'
        },
        {
          src : '/nickuGame/Win_Screen.png',
          id : 'winScreen'
        }
      ],
      livesImage : {
        src : '/scroller/heart.png',
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
          z: 0.000
        }
      }
  },

  scripts : function(){
    //TODO this is where you can add your own game logic
  }
};

function start(){
    myGame.game = new A3D.Game.Scroller(myGame.config);
    myGame.game.loadScene('/matthewp/','Scroller.babylon',myGame.scripts);
}

document.addEventListener( "DOMContentLoaded", start, false );

