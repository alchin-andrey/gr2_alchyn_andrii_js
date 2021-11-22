/* 
Задача 11
Игра арканоид
*/

$(document).ready(function () {
    $('div').remove();
    $('body').removeAttr('style');
    const GAME_STEP_DELAY = 5;

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
        this.directionY = options.startDirectionY || 1;

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
            // result.innerText = this.id;
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
                border-radius: 0 0 50% 50%;
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
            if ((event.x < objects[3].x - (this.width / 2))
            && event.x > objects[3].width + (this.width / 2))
            this.x = event.x - (this.width / 2);
        };

        this.live = function () {
            this.renderState();
            this.renderView();
        };
    }

    function Brick(options) {
        this.id = Math.trunc(Math.random() * 10000);
        this.x = options.x;
        this.y = options.y;
        this.width = options.width;
        this.height = options.height;
        this.color = options.color;

        this.createView = function () {
            let result = document.createElement("div");
            result.className = this.id;
            result.id = this.id;
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


    // objects.push(
    //     new Ball({
    //         diametr: 50,
    //         color: "blue",
    //         x: 100,
    //         y: 100,
    //         startDirectionX: -1,
    //     })
    // );

    objects.push(
        new Ball({
            diametr: 30,
            color: "orange",
            x: Math.floor(document.documentElement.clientWidth / 2),
            y: document.documentElement.clientHeight - 100,
            startDirectionY: -1,
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
        x: Math.floor(document.documentElement.clientWidth / 2),
        y: document.documentElement.clientHeight - 40,
        width: 150,
        height: 20,
        color: "red",
    });
    document.documentElement.onmousemove = r.doMove.bind(r);
    objects.push(r);

    function createBricks (numberOfBricks) {
        function evenArray(min, max, step) {
            min = Number(min);;
            max = Number(max);
            step = Number(step);
            if (isNaN(min) || isNaN(max)) {
                return null;
            }
            let array = [];
            for (let i = min; i <= max; i += step) {
                array.push(i);
            }
            return array;
        }
    
        function getRandomPosition(arr) {
            if (!Array.isArray(arr)) {
                return null;
            }
            let result;
            let random_index = Math.floor(Math.random() * arr.length);
            result = arr[random_index];
            return result;
        }
        let arrayPositionX = [];
        let arrayPositionY = [];
        let arrayPositionXY = [];
        let brickWidth = 60;
        let brickHeight = 30;
        let gap = 10;
        let stepX = brickWidth + gap;
        let stepY = brickHeight + gap;
        let IndentX = 20;
        let topIndentY = 20;
        let bottomIndentY = 200;
        let screenWidth = document.documentElement.clientWidth;
        let screenHeight = document.documentElement.clientHeight;
        let bricksOnX = Math.floor ((screenWidth - IndentX * 2 + gap) / stepX);
        let bricksOnY = Math.floor ((screenHeight - topIndentY - bottomIndentY + gap) / stepY);
        let lengthBricksOnX = brickWidth * bricksOnX + gap * (bricksOnX - 1);
        let lengthToLastBricksOnX = lengthBricksOnX - brickWidth;
        let minPositionX = Math.floor ((screenWidth - lengthBricksOnX) / 2);
        let maxPositionX = minPositionX + lengthToLastBricksOnX;
        let lengthBricksOnY = brickHeight * bricksOnY + gap * (bricksOnY - 1);
        let lengthToLastBricksOnY = lengthBricksOnY - brickHeight;
        let minPositionY = topIndentY;
        let maxPositionY = minPositionY + lengthToLastBricksOnY;
        let generalArrayPositionX = evenArray (minPositionX, maxPositionX, stepX);
        let generalArrayPositionY = evenArray (minPositionY, maxPositionY, stepY);
        let maximumNumberOfBricks = bricksOnX * bricksOnY;

        numberOfBricks = Math.min(numberOfBricks, maximumNumberOfBricks);
        quantityOfBricks = numberOfBricks;
        for (let i = 0; i < numberOfBricks; i++) {
            let PositionX = null;
            let PositionY = null;
            while (!PositionX) {
                let searchPositionX = getRandomPosition(generalArrayPositionX);
                let searchPositionY = getRandomPosition(generalArrayPositionY);
                let indexXY = arrayPositionXY.indexOf(`${searchPositionX} : ${searchPositionY}`);
                if (indexXY !== -1) {continue;}
                PositionX = searchPositionX;
                PositionY = searchPositionY;
                arrayPositionXY.push(`${PositionX} : ${PositionY}`);
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
    let quantityOfBricks = null;
    createBricks (30);
    let score = 0;


    function checkCollision(objectA, objectB) {
        if (objectA !== objectB) {
            let ball = null;
            // let ball2 = null;
            let wall = null;
            let racket = null;
            let brick = null;
            if (objectA instanceof Ball) {
                ball = objectA;
            } else if (objectA instanceof Wall) {
                wall = objectA;
            }
            if (objectB instanceof Ball) {
                ball = objectB;
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
            if (ball.x < brick.x + brick.width &&
                ball.x + ball.diametr > brick.x &&
                ball.y < brick.y + brick.height &&
                ball.diametr + ball.y > brick.y
            ) {
                score ++;
                let forDelete = document.getElementById(brick.id);
                forDelete.remove();
                for (let i = 0; i < objects.length; i++) {
                    let newString = Object.values(objects[i]);
                    if (newString.indexOf(brick.id) !== -1) {
                        objects.splice(i, 1)
                    }
                }

                if (ball.y < brick.y + brick.height ||
                    ball.diametr + ball.y > brick.y) {
                        ball.invertDirectionY();
                }
                else {
                    ball.invertDirectionX();
                }
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
        if (quantityOfBricks === score) {
            alert("ПОБЕДА");
        } else if (currentGameStep < Infinity && !gameOver) {
            setTimeout(doGameStep, GAME_STEP_DELAY);
        } else {
            alert("Игра закончена");
        }
    }

    setTimeout(doGameStep, GAME_STEP_DELAY);
});
