// Enemies our player must avoid
var Enemy = function() {
    this.x = -10;
    var yValues = [60, 140, 220];
    this.y = yValues[Math.floor(Math.random()*3)];
    this.speed = Math.floor((Math.random() * 200) + 100);

    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt) {
    
    if (this.x <= 550) {
        this.x += this.speed * dt;
    }else{
        this.y = [60, 140, 220][Math.floor(Math.random()*3)];
        this.x = -10;
    }

    this.checkCollisions();
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.checkCollisions = function() {
    if (this.x < Player.x) {
        Player.x = 200;
        Player.y = 410;
    }
}

var Player = function() {

    this.x = 200;
    this.y = 410;
    this.sprite = 'images/char-boy.png';
}

Player.prototype.update = function(dt) {
    if (this.y < 50){
        this.y = 410;
        this.x = 200;
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    if (key === 'left') {
        if (this.x < 90) {

        }else{
            this.x -= 100;
        }
        

    }else if (key === 'up') {
        if (this.y < 0) {

        }else{
            this.y -= 90;
        }
        

    }else if (key === 'right') {
        if (this.x > 350) {

        }else{
            this.x += 100;
        }
        

    }else if (key === 'down') {
        if (this.y > 409) {

        }else{
            this.y += 90;
        }
    }
}

var player = new Player();
var allEnemies = [];

for (var i = 0; i < 3; i++) {
    allEnemies.push (new Enemy());
}

console.log(allEnemies);

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
