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
     createPlatform(550,650,300,30);
     createPlatform(550,420,150,30)
     createPlatform(200,550,210,30)
     createPlatform(900,300,100,30)
     createPlatform(970,270,30,870)
     createPlatform(1100,600,30,30)
     createPlatform(1300,500,30,30)
     createPlatform(400,300,-100,30)
     createPlatform(400,200,350,30,"rgb(173,230,230)")



    // TODO 3 - Create Collectables
     createCollectable("steve", 1100, 550,0.5,0.7);
     createCollectable("diamond", 350, 250);
     createCollectable("max",700,150,0.5,0.7)


    
    // TODO 4 - Create Cannons
     createCannon("top",400,800)
     createCannon("right",350,1500)
     createCannon("bottom",1000,800)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
