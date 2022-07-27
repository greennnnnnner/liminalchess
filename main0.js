//startup
let canvas = document.querySelector("#babylonCanvas");
const engine = new BABYLON.Engine(canvas, true);

const createScene = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color3(0.6, 1, 1);

  //all the stuff need to put here

  //set FollowCam
  const camera = new BABYLON.UniversalCamera("camera", new BABYLON.Vector3(0, 1, -3), scene);
  camera.attachControl(canvas, true); // this input controls a specific dom element, so if you have multiple canvases it may be useful


  ////////////////Howard's move toolkit/////////////by Chen Haoyang////////////////
  function delay(obj, time) {
    if (obj.change == 0) {
      let observer = scene.onBeforeRenderObservable.add(function() {
        if (obj.change <= 60 * time) {
          obj.change++;
        } else {
          scene.onBeforeRenderObservable.remove(observer);
          obj.change = 0;
        }
      });
    }
  }


  function rotateGrid(obj, clockwise, rotateStep) {
    if (obj.change == 0) {
      let tempRotateY = obj.rotation.y;

      if (clockwise == true) {
        let observer = scene.onBeforeRenderObservable.add(function() {
          if (obj.change < (Math.PI / 2)) {
            obj.rotation.y += (Math.PI / 2) / rotateStep;
            obj.change += (Math.PI / 2) / rotateStep;
          } else {
            scene.onBeforeRenderObservable.remove(observer);
            obj.rotation.y = tempRotateY + Math.PI / 2;
            if (obj.direct > 0) {
              obj.direct--;
            } else obj.direct = 3;
            obj.change = 0;
          }
        });
      }

      if (clockwise == false) {
        let observer = scene.onBeforeRenderObservable.add(function() {
          if (obj.change < (Math.PI / 2)) {
            obj.rotation.y -= (Math.PI / 2) / rotateStep;
            obj.change += (Math.PI / 2) / rotateStep;
          } else {
            scene.onBeforeRenderObservable.remove(observer);
            obj.rotation.y = tempRotateY - Math.PI / 2;
            if (obj.direct < 3) {
              obj.direct++;
            } else obj.direct = 0;
            obj.change = 0;
          }
        });
      }
    }
  }



  function moveGrid(obj, direct, speed, distance) {
    if (obj.change == 0) {
      let tempPosX = obj.position.x;
      let tempPosY = obj.position.y;
      let tempPosZ = obj.position.z;
      console.log("The position of " + obj.name + " is " + "X:" + tempPosX + " Y:" + tempPosY + "Z:" + tempPosZ);

      let observer = scene.onBeforeRenderObservable.add(function() {
        if (obj.change <= distance) {
          switch (direct) {
            case 'x':
              obj.position.x += speed;
              break;

            case 'z':
              obj.position.z += speed;
              break;

            case '-x':
              obj.position.x -= speed;
              break;

            case '-z':
              obj.position.z -= speed;
              break;

            case 'xz':
              obj.position.z += speed;
              obj.position.x += speed;
              break;

            case '-xz':
              obj.position.z += speed;
              obj.position.x -= speed;
              break;

            case 'x-z':
              obj.position.z -= speed;
              obj.position.x += speed;
              break;

            case '-x-z':
              obj.position.z -= speed;
              obj.position.x -= speed;
              break;

            default:
              console.log("invalid direction");

          }
          obj.change += speed;
        } else {
          scene.onBeforeRenderObservable.remove(observer);
          obj.change = 0;
          //To stick on the grid
          switch (direct) {
            case 'x':
              obj.position.x = tempPosX + distance;
              break;

            case 'z':
              obj.position.z = tempPosZ + distance;
              break;

            case '-x':
              obj.position.x = tempPosX - distance;
              break;

            case '-z':
              obj.position.z = tempPosX - distance;
              break;

            case 'xz':
              obj.position.x = tempPosX + distance;
              obj.position.z = tempPosZ + distance;
              break;

            case '-xz':
              obj.position.x = tempPosX - distance;
              obj.position.z = tempPosZ + distance;
              break;

            case 'x-z':
              obj.position.x = tempPosX + distance;
              obj.position.z = tempPosZ - distance;
              break;

            case '-x-z':
              obj.position.x = tempPosX - distance;
              obj.position.z = tempPosZ - distance;
              break;

            default:
              console.log("invalid direction");
          }
        }
      });
    }
  }

  ///////////////////////////end of move toolkit///////////////////////////////

  ///////////////////////////////Control///////////////////////////////////////
  //Type:player//

  //control of moving
  let onControling = false;

  /*
    //move the object by WSAD
    function movingControlType1(obj) {

      camera.parent = obj;
      camera.position.z = -2;
      camera.rotation.x = Math.PI / 10;

      if (onControling == true) {
        scene.onKeyboardObservable.remove(movingControling);
      }

      let movingControling = scene.onKeyboardObservable.add((kbInfo) => {
        switch (kbInfo.type) {
          case BABYLON.KeyboardEventTypes.KEYDOWN:
            if (kbInfo.event.code == "KeyW") {
              moveGrid(obj, 'x', 0.02, 1);
            }
            if (kbInfo.event.code == "KeyS") {
              moveGrid(obj, '-x', 0.02, 1);
            }
            if (kbInfo.event.code == "KeyA") {
              moveGrid(obj, 'z', 0.02, 1);
            }
            if (kbInfo.event.code == "KeyD") {
              moveGrid(obj, '-z', 0.02, 1);
            }
            console.log("KEY DOWN: ", kbInfo.event.key);
            break;
          case BABYLON.KeyboardEventTypes.KEYUP:
            console.log("KEY UP: ", kbInfo.event.code);
            break;
        }
      });
      onControling = true;
    }
  */

  //move the object by W, rotate the object by AD
  function movingControlType2(camera, obj, speed, rotateStep, distance) {
    //set player
    player = obj;
    let originalLifeTime = obj.lifeTime;
    //camera
    camera.parent = obj;
    camera.position.z = -2;
    camera.rotation.x = Math.PI / 10;

    //If the controling object changed, then remove the pervious controler
    if (onControling == true) {
      scene.onKeyboardObservable.remove(movingControling);
    }

    //control
    let movingControling = scene.onKeyboardObservable.add((kbInfo) => {
      switch (kbInfo.type) {
        case BABYLON.KeyboardEventTypes.KEYDOWN:
          //If the obj is not changing, then it can be controled
          if (obj.change == 0) {
            //If input key is vaild, then playerStep++, and continue
            if (kbInfo.event.code == "KeyW" ||kbInfo.event.code == "KeyA" ||kbInfo.event.code == "KeyD") {
              if (obj.playerStep >= 0) {
                obj.playerStep++;
                if (obj.playerStep > obj.lifeTime) {
                  //If player's life time is over, reset the game
                  initialize();
                  obj.position = new BABYLON.Vector3(0, 0.25, 0);
                  obj.playerStep = 0;
                  obj.lifeTime = originalLifeTime;
                } else {
                  //how to move
                  if (kbInfo.event.code == "KeyW") {
                    switch (obj.direct) {
                      case 0:
                        moveGrid(obj, 'x', speed, distance);
                        break;
                      case 1:
                        moveGrid(obj, 'z', speed, distance);
                        break;
                      case 2:
                        moveGrid(obj, '-x', speed, distance);
                        break;
                      case 3:
                        moveGrid(obj, '-z', speed, distance)
                        break;
                      default:console.log("invaild direct");
                    }
                  } else if (kbInfo.event.code == "KeyA") {
                    rotateGrid(obj, false, rotateStep)
                  } else if (kbInfo.event.code == "KeyD") {
                    rotateGrid(obj, true, rotateStep)
                  }
                }
              } else obj.playerStep = 0;
              console.log("playerStep: " + obj.playerStep);
              console.log("remainingStep: " + (obj.lifeTime - obj.playerStep));
            }
          }
          break;
      }
    });
    onControling = true;
  }

  /////////////////////////////end of control//////////////////////////////////////



  /////////////////////////background and skybox//////////////////////////////////


  //create background layer
  var layer = new BABYLON.Layer('', 'background.png', scene, true);

  //HemisphericLight
  const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

  //////////////////////end of background and skybox///////////////////////////

  ///////////////////////////////ground////////////////////////////////////////
  const ground0 = BABYLON.MeshBuilder.CreateGround("ground", {
    width: 1,
    height: 1
  }, scene);
  ground0.isVisible = false;

  const ground1 = BABYLON.MeshBuilder.CreateGround("ground", {
    width: 1,
    height: 1
  }, scene);
  ground1.isVisible = false;

  for (let j = -50; j < 50; j++) {
    for (let i = -25; i < 25; i++) {
      let newInstance0 = ground0.createInstance("i" + i);
      let newInstance1 = ground1.createInstance("i" + i);
      if (j % 2 == 0) {
        newInstance0.position.x = 2 * (i - 1);
        newInstance0.position.z = j - 1;
      } else {
        newInstance0.position.x = 2 * (i - 1) - 1;
        newInstance0.position.z = j - 1;
      }
      if (j % 2 == 0) {
        newInstance1.position.x = 2 * (i - 1) + 1;
        newInstance1.position.z = j - 1;
      } else {
        newInstance1.position.x = 2 * (i - 1);
        newInstance1.position.z = j - 1;
      }
    }
  }


  //create ground0 material
  ground0.material = new BABYLON.StandardMaterial('ground', scene);
  ground0.material.diffuseColor = new BABYLON.Color3(1, 1, 1);
  ground0.material.alpha = 0.8;
  ground0.material.backFaceCulling = false;
  //create ground1 material
  ground1.material = new BABYLON.StandardMaterial('ground', scene);
  ground1.material.diffuseColor = new BABYLON.Color3(0.2, 0.2, 0.2);
  ground1.material.alpha = 0.8;
  ground1.material.backFaceCulling = false;

  ////////////////////////////end of ground////////////////////////////////////////

  ///////////////////////////////Bonus/////////////////////////////////////

  //when player touched this obj with this function, increase player's lifeTime
  function timeBonus(obj, number, visibleAlter) {
    obj.actionManager = new BABYLON.ActionManager(scene);
    if (obj.isVisible == true) {
      obj.actionManager.registerAction(
        new BABYLON.CombineAction({
          trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
          parameter: {
            mesh: player,
            usePreciseIntersection: true
          }
        }, [(
          //To set objects invisible after touch player
          new BABYLON.SetValueAction({
              trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
              parameter: {
                mesh: player,
                usePreciseIntersection: true
              }
            },
            obj,
            "isVisible",
            visibleAlter
          )
        ), (
          //to add life time to plater
          new BABYLON.IncrementValueAction({
              trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
              parameter: {
                mesh: player,
                usePreciseIntersection: true
              }
            },
            player,
            "lifeTime",
            number
          )
        )]));

    }
  }
  ///////////////////////////////End of bonus/////////////////////////////////////

  //////////////////////////object in the scene///////////////////////////////

  /////////////////A test player////////////////////
  //create a sphere
  const sphere = BABYLON.Mesh.CreateSphere("sphere0", 16, 0.5, scene);
  sphere.position.y = 0.25;
  sphere.change = 0;
  sphere.direct = 1;
  sphere.playerStep = 0;
  sphere.lifeTime = 10;

  //a custom funtion by Howard, to control an object by keyboard WSAD
  //movingControlType2(camera, object, movingSpeed, rotationStep, movingDistance,lifeTime)
  let player = sphere;
  movingControlType2(camera, sphere, 0.04, 20, 1);

  //material of Sphere
  sphere.material = new BABYLON.StandardMaterial('sphere', scene);
  sphere.material.wireframe = true;


  //////////////A test object, auto moving, with timeBonus/////////////////
  //create a sphere at (0,1)
  const sphere1 = BABYLON.Mesh.CreateSphere("sphere1", 16, 0.5, scene);
  sphere1.position = new BABYLON.Vector3(0, 0.25, 1);
  sphere1.change = 0;
  sphere1.step = 0;
  timeBonus(sphere1, 5, false);

  //material of Sphere
  sphere1.material = new BABYLON.StandardMaterial('sphere', scene);

  //simple of auto-move object
  scene.onBeforeRenderObservable.add(function() {
    if (sphere1.change == 0) {
      switch (sphere1.step) {
        case 0:
          moveGrid(sphere1, 'x', 0.01, 1);
          sphere1.step++;
          break;

        case 1:
          moveGrid(sphere1, '-x', 0.02, 1);
          sphere1.step++;
          break;

        case 2:
          delay(sphere1, 2);
          sphere1.step++;
          break;

        case 3:
          moveGrid(sphere1, '-xz', 0.04, 3);
          sphere1.step++;
          break;

        case 4:
          moveGrid(sphere1, 'x-z', 0.04, 3);
          sphere1.step++;
          break;

        default:
          sphere1.step = 0;
      }

      console.log(sphere1.name + " is in step " + sphere1.step);
      console.log(sphere1.isVisible);
    }
  });

  ////////////////////////A test object//////////////////////////
  //create a sphere at (3,3)
  const sphere2 = BABYLON.Mesh.CreateSphere("sphere2", 16, 0.5, scene);
  sphere2.position = new BABYLON.Vector3(3, 0.25, 3);
  sphere2.change = 0;
  sphere2.step = 0;
  timeBonus(sphere2, -50, true);

  sphere2.material = new BABYLON.StandardMaterial('sphere', scene);
  sphere2.material.diffuseColor = new BABYLON.Color3(0.6, 0.2, 0.2);

  let isDEAD = false;
  let isEscaped = false;

  function initialize() {
    sphere.position.y = 0.25;
    sphere.change = 0;
    sphere.direct = 1;
    sphere.rotation.y = 0;
    sphere.playerStep = 0;
    sphere.lifeTime = 10;
    sphere.isVisible = true;
    isEscaped = false;

    sphere1.change = 0;
    sphere1.step = 0;
    sphere1.position = new BABYLON.Vector3(0, 0.25, 1);
    sphere1.isVisible = true;

    sphere2.position = new BABYLON.Vector3(3, 0.25, 3);
    sphere2.isVisible = true;

    isDEAD = false
  }


  scene.onBeforeRenderObservable.add(function() {
    if ((player.lifeTime - player.playerStep <= 0) && isDEAD == false) {
      console.log("You are DEAD \nPress any key to continue");
      player.isVisible = false;
      isDEAD = true;
    }
  });
  //////////////////////////object in the scene///////////////////////////////

  return scene;

}
let scene = createScene();
engine.runRenderLoop(function() {
  scene.render();
});

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  engine.resize();
});
