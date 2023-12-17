let TicTacToe = {
    grid: [],
    init: function(){
        this.domCache();
        this.bindEvents();
        this.addPlayer1();
    },
    domCache: function(){
        this.el = document.querySelector(".playingField");

        this.player1Val = document.querySelector("#player1");
        this.player1Btn = this.el.querySelectorAll(".player1__btn");
        this.player1 = this.el.querySelectorAll(".player1__playerName");

        this.player2Val = document.querySelector("#player2");
        this.player2Btn = this.el.querySelectorAll(".player2__btn");
        this.player2 = this.el.querySelectorAll(".player2__playerName");
    } ,
    bindEvents: function(){
        this.player1Btn.forEach(btn => {
            btn.addEventListener("click",this.addPlayer1.bind(this));
        })
        this.player2Btn.forEach(btn => {
            btn.addEventListener("click",this.addPlayer2.bind(this));
        })
        
    },

    addPlayer1: function(){
        this.player1.forEach(a => a.textContent = this.player1Val.value)
        this.inti
        this.player1Val.value = ""
    },
    addPlayer2: function(){
        this.player2.forEach(b => b.textContent = this.player2Val.value)
        this.init
        this.player2Val.value = ""
    }

    




}

TicTacToe.init();