$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      speedrunStartTime = performance.now();
      speedrunTimerInterval = setInterval(updateSpeedrunTimer, 100);
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
     createPlatform(550,650,300,30,"blue");
     createPlatform(550,420,150,30,"blue")
     createPlatform(200,550,210,30,"blue")
     createPlatform(900,300,100,30,"blue")
     createBadPlatform(970,270,30,870,"red")
     createPlatform(1000,270,30,870,"rgb(216, 140, 223)")
     createPlatform(1100,600,30,30,"blue")
     createPlatform(1300,500,30,30,"blue")
     createPlatform(400,300,-100,30,"red")
     createPlatform(400,200,350,30,"rgb(216, 140, 223)")
     


    // TODO 3 - Create Collectables
     createCollectable("steve", 1100, 550,0.5,0.7);
     createCollectable("diamond", 350, 250);
     createCollectable("max",700,150,0.5,0.7)


    
    // TODO 4 - Create Cannons
     createCannon("top",400,850,20,10,100,400,2)
     createCannon("right",350,1500,20,10,100,400,2)
     createCannon("bottom",1000,800)
     createCannon("right",1000,1000)
     

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
    
  }

  registerSetup(setup);

  function updateSpeedrunTimer() {
    if (player.winConditionMet) {
      clearInterval(speedrunTimerInterval);
      return;
    }

    const elapsedSeconds = (performance.now() - speedrunStartTime) / 1000;
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = Math.floor(elapsedSeconds % 60);
    const milliseconds = Math.floor((elapsedSeconds % 1) * 1000);
    document.getElementById("speedrun-timer").textContent =
      `${minutes}:${String(seconds).padStart(2, "0")}.${String(milliseconds).padStart(3, "0")}`;
  }
});
