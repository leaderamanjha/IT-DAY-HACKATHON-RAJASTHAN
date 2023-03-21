// window.requestAnimFrame = (function(){
//   return  window.requestAnimationFrame       ||
//         window.webkitRequestAnimationFrame ||
//         window.mozRequestAnimationFrame    ||
//         function( callback ){
//           window.setTimeout(callback, 1000 / 60);
//         };
// })();

// (function(window, document, undefined){
// $(document).ready(function (){
// init();
// });

// var can, ctx, origin = {}, particles = [], G=-0.01, frame=0, 
// dir = ['up', 'left', 'down', 'right'],
// mDir={
//   up: [1, 0, 0, 1],
//   left: [0, 1, -1, 0],
//   down: [-1, 0, 0, -1],
//   right: [0, -1, 1, 0]
// },
// colDir={
//   up: function(){
//     return "rgb("+(255-Math.floor(Math.random()*50))+","+Math.floor(Math.random()*200)+","+Math.floor(Math.random()*50)+")";
//   },
//   left: function(){
//     return "rgb("+(255-Math.floor(Math.random()*50))+","+(255-Math.floor(Math.random()*50))+","+Math.floor(Math.random()*50)+")";
//   },
//   down: function(){
//     return "rgb("+Math.floor(Math.random()*50)+","+Math.floor(Math.random()*200)+","+(255-Math.floor(Math.random()*50))+")";
//   },
//   right: function(){
//     return "rgb("+Math.floor(Math.random()*200)+","+(255-Math.floor(Math.random()*50))+","+Math.floor(Math.random()*50)+")";
//   }
// },
// keysDown={
//   up: false,
//   left: false,
//   down: false,
//   right: false
// },
// spinSpeed = 3, 
// bounce = 2,
// damping = 0.5,
// diminish = 1, 
// moveSpeed = 6;

// function init(){

// can = document.getElementById('canvas');

// ctx = can.getContext('2d');	

//   ctx.canvas.width  = window.innerWidth;
//   ctx.canvas.height = window.innerHeight;

//   origin.x = ctx.canvas.width/2;
//   origin.y = ctx.canvas.height/2;
//   origin.dX = 0;
//   origin.dY = 0;

// keyListener();

// resizeListener();

// docs();

//   renderLoop();

// }



// function keyListener(){
// $(window)
// .on('keydown', function(e){
//   var code = e.keyCode || e.which;
//   if(code === 87){
//     keysDown.up = true;
//   }else if(code === 83){
//     keysDown.down = true;
//   }else if(code === 65){
//     keysDown.left = true;
//   }else if(code === 68){
//     keysDown.right = true;
//   }
// })
// .on('keyup', function(e){
//   var code = e.keyCode || e.which;
//   if(code === 87){
//     keysDown.up = false;
//   }else if(code === 83){
//     keysDown.down = false;
//   }else if(code === 65){
//     keysDown.left = false;
//   }else if(code === 68){
//     keysDown.right = false;
//   }		
// })
// .on('keypress', function(e){
//   var code = e.keyCode || e.which;
//   console.log(code)
//   if(code === 61){
//     spinSpeed++;
//   }else if(code === 45){
//     spinSpeed--;
//   }else if(code === 103){
//     G -= 0.01;
//   }else if(code === 102){
//     G += 0.01;
//   }else if(code === 98){
//     if(bounce){
//       bounce--;
//     }else{
//       bounce = 2;
//     }
//   }else if(code === 44){
//     diminish*=2;
//   }else if(code === 46){
//     diminish*=0.5;
//   }else if(code === 110){
//     if(damping < 1){
//       damping += 0.1;
//     }
//   }else if(code === 109){
//     if(damping > 0){
//       damping -= 0.1;
//     }
//   }

// });
// }

// function resizeListener(){
// $(window).on('resize', function(){
//   requestAnimFrame(resize);
// });
// }
// function resize(){
//   ctx.canvas.width  = window.innerWidth;
//   ctx.canvas.height = window.innerHeight;
// }

// function docs(){
// var $key = $('.key');
// $('.close', $key).on('click', function(){
//   $key.addClass('hide');
// });
// $('.open', $key).on('click', function(){
//   $key.removeClass('hide');
// });


// }

// function cX(m){
// return m*(Math.random()*0.8 - 0.4);
// }

// function cY(m){
// return m*(Math.random() - 3);
// }

// function d(m1, m2, m3, m4){
// return cX(m1) * Math.cos( spinSpeed*frame*(2*Math.PI/360) )  +  cY(m2) * Math.sin( spinSpeed*frame*(2*Math.PI/360) ) + cX(m3) * Math.sin( spinSpeed*frame*(2*Math.PI/360) )  +  cY(m4) * Math.cos( spinSpeed*frame*(2*Math.PI/360) );
// }

// function newParticle(m, col){
// return {
//   x: origin.x,
//   y: origin.y,
//   w: Math.random()*2 + 1,
//   dX: d(m[0], m[0], m[1], m[1]),
//   dY: d(m[2], m[2], m[3], m[3]),
//   age: 0,
//   colour: col,
//   dir: '',
//   draw: function(){
//     ctx.beginPath();
//     ctx.arc(this.x - this.w/2, this.y, this.w, 0, Math.PI*2, true);
//     ctx.closePath();
//     ctx.fillStyle = this.colour;
//     ctx.fill();
//   }
// };
// }

// function renderLoop(){
// requestAnimFrame(renderLoop); 
// render();
// }


// function render(){

// frame+=1;

// ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);

// originMovement();


// catherineWheelDirection();

// }


// function originMovement(){
// if(keysDown.up && keysDown.down){
//   origin.dY = 0;
// }else if(keysDown.up){
//   origin.dY = -moveSpeed;
// }else if(keysDown.down){
//   origin.dY = moveSpeed;
// }else{
//   origin.dY = 0;
// }
// if(keysDown.left && keysDown.right){
//   origin.dX = 0;
// }else if(keysDown.left){
//   origin.dX = -moveSpeed;
// }else if(keysDown.right){
//   origin.dX = moveSpeed;
// }else{
//   origin.dX = 0;
// }

// origin.x += origin.dX;
// origin.y += origin.dY

// switch(bounce){
//   case 2: 
//     if(origin.y < 0){
//       origin.y = 0;
//     }
//     if(origin.x < 0){
//       origin.x = 0;
//     }else if(origin.x > ctx.canvas.width){
//       origin.x = ctx.canvas.width;
//     }
//   case 1:
//     if(origin.y > ctx.canvas.height){
//       origin.y = ctx.canvas.height;
//     }
//   default:

//     break;

// }


// }

// function catherineWheelDirection(){
// for( var j = 0; j < dir.length; j++){
//   particles.push(newParticle(mDir[dir[j]], colDir[dir[j]]()));	
// }

// for( var i = 0; i < particles.length; i++){
//   particles[i].draw();

//   particles[i].dY -= G;
//   particles[i].y += particles[i].dY;
//   particles[i].x += particles[i].dX;


//   switch(bounce){
//     case 2:
//       if(particles[i].y < 0){
//         particles[i].y = -particles[i].y;
//         particles[i].dY = -particles[i].dY * damping;
//       }
//       var pastX = particles[i].x - ctx.canvas.width;
//       if(particles[i].x < 0){
//         particles[i].x = -particles[i].x;
//         particles[i].dX = -particles[i].dX * damping;
//       }else if(pastX > 0){
//         particles[i].x = ctx.canvas.width - pastX;	
//         particles[i].dX = -particles[i].dX * damping;
//       }
//     case 1:
//       var pastY = particles[i].y - ctx.canvas.height;
//       if(pastY > 0){
//         particles[i].y = ctx.canvas.height - pastY;	
//         particles[i].dY = -particles[i].dY * damping;
//       }
//     default: 
//       break;
//   }


//   particles[i].w *= (1-(particles[i].age/(diminish*1000)));

//   if( particles[i].w < 0.25 ){
//     particles.splice(i,1);
//   }
//   particles[i].age++;
// }	
// }
// }(window, document));

//tsParticles library - https://github.com/matteobruni/tsparticles

tsParticles.load("tsparticles", {
  fullScreen: {
    enable: true
  },
  detectRetina: true,
  background: {
    color: "transparent"
  },
  fpsLimit: 60,
  emitters: {
    direction: "top",
    life: {
      count: 0,
      duration: 0.1,
      delay: 0.1
    },
    rate: {
      delay: 0.15,
      quantity: 1
    },
    size: {
      width: 100,
      height: 00
    },
    position: {
      y: 100,
      x: 50
    }
  },
  particles: {
    number: {
      value: 0
    },
    destroy: {
      mode: "split",
      split: {
        count: 1,
        factor: { value: 1 / 3 },
        rate: {
          value: 100
        },
        particles: {
          stroke: {
            color: {
              value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"]
            },
            width: 1
          },
          number: {
            value: 0
          },
          collisions: {
            enable: false
          },
          opacity: {
            value: 0.8,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: true,
              startValue: "max",
              destroy: "min"
            }
          },
          size: {
            value: 75,
            animation: {
              enable: true,
              speed: 150,
              minimumValue: 1,
              destroy: "max",
              startValue: "min",
              sync: true
            }
          },
          life: {
            count: 1
          },
          move: {
            enable: true,
            gravity: {
              enable: false
            },
            speed: 5,
            direction: "none",
            random: false,
            straight: false,
            outMode: "destroy"
          }
        }
      }
    },
    life: {
      count: 1
    },
    shape: {
      type: "line"
    },
    size: {
      value: 50,
      animation: {
        enable: true,
        speed: 150,
        startValue: "max",
        destroy: "min"
      }
    },
    stroke: {
      color: {
        value: "#ffffff"
      },
      width: 1
    },
    rotate: {
      path: true
    },
    move: {
      enable: true,
      gravity: {
        acceleration: -15,
        enable: true,
        maxSpeed: 100
      },
      speed: 15,
      outModes: {
        default: "destroy",
        top: "none"
      },
      trail: {
        fillColor: "transparent",
        enable: true,
        length: 4
      }
    }
  }
});
