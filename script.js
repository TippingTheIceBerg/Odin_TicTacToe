let TicTacToe = {
    playerTurn: 0,
    init: function(){
        this.domCache();
        this.bindEvents();
        this.checkDiag();
        this.checkRows();
        this.checkColumns();
        this.getDataAttribute();
        this.decidePlayerTurn();
        this.player1Turn();
        this.player2Turn();
        this.placePlayerSymbol();
    },
    domCache: function(){
        this.el = document.querySelector(".playingField");

        this.player1Val = document.querySelector("#player1");
        this.player1Btn = this.el.querySelectorAll(".player1__btn");
        this.player1 = this.el.querySelectorAll(".player1__playerName");

        this.player2Val = document.querySelector("#player2");
        this.player2Btn = this.el.querySelectorAll(".player2__btn");
        this.player2 = this.el.querySelectorAll(".player2__playerName");

        this.getAllSpaces = this.el.querySelectorAll('.grid')

        this.row1 = this.el.querySelectorAll(".row1");
        this.row2 = this.el.querySelectorAll(".row2");
        this.row3 = this.el.querySelectorAll(".row3");

        this.column1 = this.el.querySelectorAll(".column1");
        this.column2 = this.el.querySelectorAll(".column2");
        this.column3 = this.el.querySelectorAll(".column3");

        this.diag1 = this.el.querySelectorAll(".diag1");
        this.diag2 = this.el.querySelectorAll(".diag2");
        
    } ,
    bindEvents: function(){
        this.player1Btn.forEach(btn => {
            btn.addEventListener("click",this.addPlayer1.bind(this));
        })
        this.player2Btn.forEach(btn => {
            btn.addEventListener("click",this.addPlayer2.bind(this));
        })

        this.getAllSpaces.forEach(space=>{
            space.addEventListener("click", () => this.getDataAttribute(space.getAttribute("data-attribute")))
        })
        
    },

    addPlayer1: function(){
        this.player1.forEach(a => a.textContent = this.player1Val.value)
        this.player1Val.value = ""
    },
    addPlayer2: function(){
        this.player2.forEach(b => b.textContent = this.player2Val.value)
        this.player2Val.value = ""
    },
    // da = data-attribute
    getDataAttribute:function(da){
        this.decidePlayerTurn(da)
    },
    decidePlayerTurn:function(da){
        if(this.playerTurn % 2 === 0){
            return this.player1Turn(da,this.playerTurn)
        }
        else{
            console.log(this.playerTurn);
            return this.player2Turn(da, this.playerTurn)
        }
    },
    player1Turn: function(da,playerTurn){
        this.playerTurn = 1
        this.placePlayerSymbol(da,playerTurn)
        
    },
    player2Turn:function(da, playerTurn){
        this.playerTurn = 2
        this.placePlayerSymbol(da,playerTurn)
    },
    placePlayerSymbol: function(da,playerTurn){
        console.log(da,playerTurn);
    },
    checkRows: function(){
        this.row1.forEach(spot => console.log(spot.children[0].getAttribute('data-symbol')));
        this.row2.forEach(spot => console.log(spot.children[0].getAttribute('data-symbol')));
        this.row3.forEach(spot => console.log(spot.children[0].getAttribute('data-symbol')));
    },
    checkColumns: function(){
        this.column1.forEach(spot => console.log(spot.children[0].getAttribute('data-symbol')));
        this.column2.forEach(spot => console.log(spot.children[0].getAttribute('data-symbol')));
        this.column3.forEach(spot => console.log(spot.children[0].getAttribute('data-symbol')));

    },
    checkDiag: function(){
        this.diag1.forEach(spot => console.log(spot.children[0].getAttribute('data-symbol')));
        this.diag2.forEach(spot => console.log(spot.children[0].getAttribute('data-symbol')));
    }

}

TicTacToe.init();