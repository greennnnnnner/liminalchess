
////////////////Howard's move toolkit/////////////by Chen Haoyang/////////
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
        if (obj.change <= (Math.PI / 2)) {
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
        if (obj.change <= (Math.PI / 2)) {
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



//simple move, grid
//direct can be 'x','-x','y','-y','z','-z'
function moveGrid(obj, direct, speed, distance) {
  if (obj.change == 0) {
    let tempPosX = obj.position.x;
    let tempPosY = obj.position.y;
    let tempPosZ = obj.position.z;
    console.log("The position of " + obj.name + " is " + "X:" + tempPosX + " Y:" + tempPosY + "Z:" + tempPosZ);

    if (direct == "x") {
      let observer = scene.onBeforeRenderObservable.add(function() {
        if (obj.change <= distance) {
          obj.position.x += speed;
          obj.change += speed;
        } else {
          scene.onBeforeRenderObservable.remove(observer);
          obj.change = 0;
          obj.position.x = tempPosX + distance;
        }
      });
    } else if (direct == "-x") {
      let observer = scene.onBeforeRenderObservable.add(function() {
        if (obj.change <= distance) {
          obj.position.x -= speed;
          obj.change += speed;
        } else {
          scene.onBeforeRenderObservable.remove(observer);
          obj.change = 0;
          obj.position.x = tempPosX - distance;
        }
      });
    } else if (direct == "y") {
      let observer = scene.onBeforeRenderObservable.add(function() {
        if (obj.change <= distance) {
          obj.position.y += speed;
          obj.change += speed;
        } else {
          scene.onBeforeRenderObservable.remove(observer);
          obj.change = 0;
          obj.position.y = tempPosY + distance;
        }
      });
    } else if (direct == "-y") {
      let observer = scene.onBeforeRenderObservable.add(function() {
        if (obj.change <= distance) {

          obj.position.y -= speed;
          obj.change += speed;
        } else {
          scene.onBeforeRenderObservable.remove(observer);
          obj.change = 0;
          obj.position.y = tempPosY - distance;
        }
      });
    } else if (direct == "z") {
      let observer = scene.onBeforeRenderObservable.add(function() {
        if (obj.change <= distance) {

          obj.position.z += speed;
          obj.change += speed;
        } else {
          scene.onBeforeRenderObservable.remove(observer);
          obj.change = 0;
          obj.position.z = tempPosZ + distance;
        }
      });
    } else if (direct == "-z") {
      let observer = scene.onBeforeRenderObservable.add(function() {
        if (obj.change <= distance) {
          obj.position.z -= speed;
          obj.change += speed;
        } else {
          scene.onBeforeRenderObservable.remove(observer);
          obj.change = 0;
          obj.position.z = tempPosZ - distance;
        }
      });
    }
  }
}


//control of moving
let onControling = false;

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

//move the object by W, rotate the object by AD
function movingControlType2(camera, obj, speed, rotateStep, distance) {

  camera.parent = obj;
  camera.position.z = -2;
  camera.rotation.x = Math.PI / 10;

  if (onControling == true) {
    scene.onKeyboardObservable.remove(movingControling);
  }
  let movingControling = scene.onKeyboardObservable.add((kbInfo) => {
    switch (kbInfo.type) {
      case BABYLON.KeyboardEventTypes.KEYDOWN:
        if (obj.change == 0) {
          if (kbInfo.event.code == "KeyW") {
            if (obj.direct == 0) {
              moveGrid(obj, 'x', speed, distance);
              obj.playerStep++;
            } else if (obj.direct == 2) {
              moveGrid(obj, '-x', speed, distance);
              obj.playerStep++;
            } else if (obj.direct == 1) {
              moveGrid(obj, 'z', speed, distance);
              obj.playerStep++;
            } else if (obj.direct == 3) {
              moveGrid(obj, '-z', speed, distance);
              obj.playerStep++;
            }
          } else if (kbInfo.event.code == "KeyA") {
            rotateGrid(obj, false, rotateStep)
            obj.playerStep++;
          } else if (kbInfo.event.code == "KeyD") {
            rotateGrid(obj, true, rotateStep)
            obj.playerStep++;
          }
          console.log("playerStep: " + obj.playerStep);
        }
        console.log("KEY DOWN: ", kbInfo.event.key);
        console.log(obj.name, obj.direct);
        break;
      case BABYLON.KeyboardEventTypes.KEYUP:
        console.log("KEY UP: ", kbInfo.event.code);
        break;
    }
  });
  onControling = true;
}

///////////////////////////end of move toolkit//////////////////////////////////
