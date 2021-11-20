$(document).ready(function () {
    $('div').remove();
    $('body').removeAttr('style');
    const GAME_STEP_DELAY = 10;

    let currentGameStep = 0;

    function getGameStepTime() {
        let dateNow = new Date();
        return `${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}.${dateNow.getMilliseconds()}`;
    }

    function Ball(options) {
        this.id = Math.trunc(Math.random() * 1000);
        this.diametr = options.diametr;
        this.color = options.color;
        this.x = options.x;
        this.y = options.y;
        this.directionX = options.startDirectionX || 1;
        this.directionY = 1;

        console.log("ball", this.id, this.directionX);

        this.createView = function () {
            let result = document.createElement("div");
            result.style.cssText = `
                display: inline-block;
                position: absolute;
                border-radius: 50%;
                left: ${this.x}px;
                top: ${this.y}px;
                width: ${this.diametr}px;
                height: ${this.diametr}px;
                background: ${this.color}
                `;
            result.innerText = this.id;
            document.documentElement.append(result);
            return result;
        };

        this.div = this.createView();

        this.renderState = function () {
            this.x = this.x + this.directionX;
            this.y = this.y + this.directionY;
        };

        this.renderView = function () {
            this.div.style.left = this.x + 'px';
            this.div.style.top = this.y + 'px';
        };

        this.live = function () {
            this.renderState();
            this.renderView();
        };

        this.invertDirectionX = function () {
            this.directionX = this.directionX * -1;
        };

        this.invertDirectionY = function () {
            this.directionY = this.directionY * -1;
        };
    }

    function Wall(options) {
        this.id = Math.trunc(Math.random() * 1000);
        this.x = options.x;
        this.y = options.y;
        this.width = options.width;
        this.height = options.height;
        this.color = options.color;

        this.createView = function () {
            let result = document.createElement("div");
            result.style.cssText = `
                position: absolute;
                left: ${this.x}px;
                top: ${this.y}px;
                width: ${this.width}px;
                height: ${this.height}px;
                background: ${this.color};
                `;
            document.documentElement.append(result);
            return result;
        };

        this.div = this.createView();

        this.renderState = function () {};

        this.renderView = function () {};

        this.live = function () {
            this.renderState();
            this.renderView();
        };
    }

    function Racket(options) {
        this.id = Math.trunc(Math.random() * 1000);
        this.x = options.x;
        this.y = options.y;
        this.width = Math.min(options.width, 200);
        this.height = Math.min(options.height, 100);
        this.width = Math.max(this.width, 10);
        this.height = Math.max(this.height, 10);
        this.color = options.color;

        this.createView = function () {
            let result = document.createElement("div");
            result.style.cssText = `
                position: absolute;
                left: ${this.x}px;
                top: ${this.y}px;
                width: ${this.width}px;
                height: ${this.height}px;
                background: ${this.color};
                `;

            document.documentElement.append(result);
            return result;
        };

        this.div = this.createView();

        this.renderState = function () {};

        this.renderView = function () {
            this.div.style.left = this.x + 'px';
        };

        this.doMove = function (event) {
            this.x = event.x;
        };

        this.live = function () {
            this.renderState();
            this.renderView();
        };
    }

    function Brick(options) {
        this.id = Math.trunc(Math.random() * 1000);
        this.x = options.x;
        this.y = options.y;
        this.width = options.width;
        this.height = options.height;
        this.color = options.color;

        this.createView = function () {
            let result = document.createElement("div");
            result.style.cssText = `
                position: absolute;
                left: ${this.x}px;
                top: ${this.y}px;
                width: ${this.width}px;
                height: ${this.height}px;
                background: ${this.color};
                `;
            document.documentElement.append(result);
            return result;
        };

        this.div = this.createView();

        this.renderState = function () {};

        this.renderView = function () {};

        this.live = function () {
            this.renderState();
            this.renderView();
        };
    }

    let objects = [];

    objects.push(
        new Ball({
            diametr: 50,
            color: "blue",
            x: 100,
            y: 100,
            startDirectionX: -1,
        })
    );

    objects.push(
        new Ball({
            diametr: 40,
            color: "orange",
            x: 200,
            y: 200,
        })
    );

    objects.push(
        new Wall({
            x: 0,
            y: 0,
            width: document.documentElement.clientWidth,
            height: 10,
            color: "green",
        })
    );

    objects.push(
        new Wall({
            x: 0,
            y: 0,
            width: 10,
            height: document.documentElement.clientHeight,
            color: "green",
        })
    );

    objects.push(
        new Wall({
            x: document.documentElement.clientWidth - 10,
            y: 0,
            width: 10,
            height: document.documentElement.clientHeight,
            color: "green",
        })
    );
    let r = new Racket({
        x: 0,
        y: document.documentElement.clientHeight - 40,
        width: 150,
        height: 20,
        color: "red",
    });
    document.documentElement.onmousemove = r.doMove.bind(r);
    objects.push(r);

    function createBricks (number) {
        function getRandomPosition(min, max) {
            min = Number(min);
            max = Number(max);
            if (isNaN(min) || isNaN(max)) {
                return null;
            }
            let result = 0;
            let temp = Math.random();
            
            result = min + (max - min) * temp;
            result = Math.floor(result);
        
            return result;
        }
        let arrayPositionX = [];
        let arrayPositionY = [];
        let brickWidth = 60;
        let brickHeight = 30;
        for (let i = 0; i < number; i++) {
            let PositionX = null;
            let PositionY = null;
            while (!PositionX) {
                let searchPositionX = getRandomPosition(50, document.documentElement.clientWidth - (50 + brickWidth));
                let searchPositionY = getRandomPosition(50, document.documentElement.clientHeight - 200);
                let resultX = false;
                let resultY = false;
                let result = false;
                arrayPositionX.forEach(function(item) {
                    if (searchPositionX >= (item - 10 - brickWidth) && searchPositionX <= (item + 10 + brickWidth)) {
                        resultX = true;
                    }
                });
                arrayPositionY.forEach(function(item) {
                    if (searchPositionY >= (item - 10 - brickHeight) && searchPositionY <= (item + 10 + brickHeight)) {
                        resultY = true;
                    }
                });
                console.log(resultX && resultY);
                if (resultX && resultY) {
                    result = true;
                    }
                if (result) {
                    continue;
                }
                PositionX = searchPositionX;
                PositionY = searchPositionY;
                arrayPositionX.push(PositionX);
                arrayPositionY.push(PositionY);
            }
            objects.push(
                new Brick({
                    x: PositionX,
                    y: PositionY,
                    width: brickWidth,
                    height: brickHeight,
                    color: "mediumvioletred",
                })
            );
        }
    }
    createBricks (5);


    function checkCollision(objectA, objectB) {
        if (objectA !== objectB) {
            let ball = null;
            let ball2 = null;
            let wall = null;
            let racket = null;
            let brick = null;
            if (objectA instanceof Ball) {
                ball = objectA;
            } else if (objectB instanceof Ball) {
                ball = objectB;
            }

            if (objectA instanceof Ball) {
                ball2 = objectA;
            } else if (objectB instanceof Ball) {
                ball2 = objectB;
            }

            if (objectA instanceof Wall) {
                wall = objectA;
            } else if (objectB instanceof Wall) {
                wall = objectB;
            }

            if (objectA instanceof Racket) {
                racket = objectA;
            } else if (objectB instanceof Racket) {
                racket = objectB;
            }

            if (objectA instanceof Brick) {
                brick = objectA;
            } else if (objectB instanceof Brick) {
                brick = objectB;
            }

            if (ball && brick) {
                if (
                    ball.x < brick.x + brick.width &&
                    ball.x + ball.diametr > brick.x &&
                    ball.y < brick.y + brick.height &&
                    ball.diametr + ball.y > brick.y ||
                    (ball.x + ball.diametr === brick.x ||
                    ball.x === brick.x + brick.width) &&
                    ball.y > brick.y &&
                    ball.y < brick.y + brick.height
                    ) {
                    ball.invertDirectionX();
                    // objects.splice(0,objects.indexOf(brick));
                    // brick.remove();
                }

                if (
                    ball.x > brick.x &&
                    ball.x < brick.x + brick.width &&
                    ball.y === brick.y + brick.height
                ) {
                    ball.invertDirectionY();
                    // objects.splice(0,objects.indexOf(brick));
                    // brick.remove();
                }

                if (
                    ball.x >= brick.x &&
                    ball.x <= brick.x + brick.width &&
                    ball.y + ball.diametr === brick.y
                ) {
                    ball.invertDirectionY();
                }
            }

            if (ball && wall) {
                if (
                    (ball.x + ball.diametr === wall.x ||
                    ball.x === wall.x + wall.width) &&
                    ball.y > wall.y &&
                    ball.y < wall.y + wall.height
                    ) {
                    ball.invertDirectionX();
                }

                if (
                    ball.x > wall.x &&
                    ball.x < wall.x + wall.width &&
                    ball.y === wall.y + wall.height
                ) {
                    ball.invertDirectionY();
                }
            }

            if (ball && racket) {
                if (
                    ball.x >= racket.x &&
                    ball.x <= racket.x + racket.width &&
                    ball.y + ball.diametr === racket.y
                ) {
                    ball.invertDirectionY();
                }
            }

            if (ball && ball2) {
                console.log (`1= ${ball} '2= ${ball2}`)
            let dx = (ball.x + ball.diametr / 2) - (ball2.x + ball2.diametr / 2);
            let dy = (ball.y + ball.diametr / 2) - (ball2.y + ball2.diametr / 2) ;
            let distance = Math.sqrt(dx * dx + dy * dy);
                if (
                    distance < (ball.diametr / 2 + ball2.diametr / 2)
                ) {
                    ball.invertDirectionY();
                    ball2.invertDirectionY();
                }
            }
        }
    }

    function isGameOver() {
        let balls = objects.filter((item) => item instanceof Ball);
        let racket = objects.find((item) => item instanceof Racket);
        return !!balls.find((ball) => ball.y > racket.y);
    }

    function doGameStep() {
        let currentGameStepTime = getGameStepTime();

        //console.log('doGameStep', currentGameStep, currentGameStepTime);

        for (let i = 0; i < objects.length; i++) {
            objects[i].live();
        }

        for (let i = 0; i < objects.length; i++) {
            let objectA = objects[i];
            for (let j = i + 1; j < objects.length; j++) {
                let objectB = objects[j];
                checkCollision(objectA, objectB);
            }
        }

        let gameOver = isGameOver();

        currentGameStep++;
        if (currentGameStep < 10000 && !gameOver) {
            setTimeout(doGameStep, GAME_STEP_DELAY);
        } else {
            alert("Игра закончена");
        }
    }

    setTimeout(doGameStep, GAME_STEP_DELAY);
});



// function createBricks (number) {
//     function getRandomPosition(min, max) {
//         min = Number(min);
//         max = Number(max);
//         if (isNaN(min) || isNaN(max)) {
//             return null;
//         }
//         let result = 0;
//         let temp = Math.random();
        
//         result = min + (max - min) * temp;
//         result = Math.floor(result);
    
//         return result;
//     }
//     let arrayPositionX = [];
//     let arrayPositionY = [];
//     let brickWidth = 60;
//     let bricksHeight = 30;
//     for (let i = 0; i < number; i++) {
//         let PositionX = null;
//         while (!PositionX) {
//             let searchPositionX = getRandomPosition(50, document.documentElement.clientWidth - (50 + brickWidth));
//             let result = false;
//             arrayPositionX.forEach(function(item) {
//                 if (searchPositionX >= (item - 10 - brickWidth) && searchPositionX <= (item + 10 + brickWidth)) {
//                 result = true;
//                 }
//             });
//             if (result) {
//                 continue;
//             }
//             PositionX = searchPositionX;
//             arrayPositionX.push(PositionX);
//         }
//         console.log(arrayPositionX);
//         let PositionY = null;
//         while (!PositionY) {
//             let searchPositionY = getRandomPosition(50, document.documentElement.clientHeight - 200);
//             if (arrayPositionY.indexOf(searchPositionY) !== -1) {
//                 continue;
//             }
//             PositionY = searchPositionY;
//             // console.log('y= ' + PositionY);
//             arrayPositionY.push(PositionY);
//         }
//         objects.push(
//             new Brick({
//                 x: PositionX,
//                 y: PositionY,
//                 width: brickWidth,
//                 height: bricksHeight,
//                 color: "mediumvioletred",
//             })
//         );
//     }
// }