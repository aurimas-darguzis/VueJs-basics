new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            console.log('attack');
        },
        speacialAttack: function() {
            console.log('special attack');
        },
        heal: function() {
            console.log('heal');
        },
        giveUp: function() {
            console.log('give up');
        }
    }
});