let TicTacToe = {
    playerTurn: 1,
    spaceTaken: [],
    repeatTurn: false,
    row1Space: [],
    row2Space: [],
    row3Space: [],
    col1Space: [],
    col2Space: [],
    col3Space: [],
    diag1Space: [],
    diag2Space: [],
    endGame: false,

    init: function(){
        this.domCache();
        this.bindEvents();
        this.decidePlayerTurn();
        this.checkTurn();

    },
    domCache: function(){
        this.el = document.querySelector(".playingField");

        this.player1Val = document.querySelector("#player1");
        this.player1Btn = this.el.querySelectorAll(".player1__btn");
        this.player1 = this.el.querySelectorAll(".player1__playerName");

        this.player2Val = document.querySelector("#player2");
        this.player2Btn = this.el.querySelectorAll(".player2__btn");
        this.player2 = this.el.querySelectorAll(".player2__playerName");

        this.getAllSpaces = this.el.querySelectorAll('.grid');

        this.getAllSymbolSpaces = this.el.querySelectorAll("i")

        this.space1 = this.el.querySelector(".ticTacToe__grid1")
        this.space2 = this.el.querySelector(".ticTacToe__grid2")
        this.space3 = this.el.querySelector(".ticTacToe__grid3")
        this.space4 = this.el.querySelector(".ticTacToe__grid4")
        this.space5 = this.el.querySelector(".ticTacToe__grid5")
        this.space6 = this.el.querySelector(".ticTacToe__grid6")
        this.space7 = this.el.querySelector(".ticTacToe__grid7")
        this.space8 = this.el.querySelector(".ticTacToe__grid8")
        this.space9 = this.el.querySelector(".ticTacToe__grid9")
        
        
    } ,
    bindEvents: function(){
        this.player1Btn.forEach(btn => {
            btn.addEventListener("click",this.addPlayer1.bind(this));
        })
        this.player2Btn.forEach(btn => {
            btn.addEventListener("click",this.addPlayer2.bind(this));
        })
            this.getAllSpaces.forEach(space=>{
                space.addEventListener("click", () => this.getDataAttribute(space.getAttribute("data-attribute")));
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
        if(this.player1[0].textContent === "" || this.player2[0].textContent === ""){
            return alert("Please enter players names")
        }
        if(this.endGame == true){
            return;
        }
        this.decidePlayerTurn(da)
    },
    decidePlayerTurn:function(da){
        if(this.playerTurn % 2 === 0){
            return this.player1Turn(da,this.playerTurn)
        }
        else{
            return this.player2Turn(da, this.playerTurn)
        }
    },
    // O symbol is 2
    player1Turn: function(da,playerTurn){
        this.playerTurn = 1        
        this.placePlayerSymbol(da,playerTurn)
        
    },
    // X symbol is 1
    player2Turn:function(da, playerTurn){ 
        this.playerTurn = 2
        this.placePlayerSymbol(da,playerTurn)
    },
    placePlayerSymbol: function(da,playerTurn){
    //    players can still place incorrect symbols if they try to place it on a space already taken.
    if(this.spaceTaken.indexOf(da) > -1) { 
        this.repeatTurn = true;
        return this.checkTurn();
    }

        if(this.spaceTaken.indexOf(da) == -1){
            this.spaceTaken.push(da)
        }

        this.getAllSpaces.forEach(space => {
            
            if(playerTurn == 2 ){
                symbol = "fa-solid fa-x"
                dataSymbol = "X"
            }
            if(playerTurn == 1){
                symbol = "fa-solid fa-o"
                dataSymbol = "O"

            } 
            if(space.getAttribute('data-attribute') == da){
                child = space.firstElementChild,
                child.setAttribute("class",symbol)
                child.setAttribute("data-symbol",dataSymbol)
                this.findIfSomeOneWon(da,dataSymbol,playerTurn)
            }   
        }
        )
    },

    checkTurn: function(){
        if(this.repeatTurn == true){
            if(this.playerTurn == 2){
                this.playerTurn = 1
            }
            else{
                this.playerTurn = 2
  
            }
        }
    },
    
    findIfSomeOneWon: function(da,dataSymbol){
        // 0 = X;
        // 1 = 0;
        if(dataSymbol === "X"){
            dataSymbol = 0
        }
        if(dataSymbol === "O"){
            dataSymbol = 1;
        }
        switch (Number(da)) {
            case 0:
                this.row1Space.push(dataSymbol)
                this.col1Space.push(dataSymbol)
                this.diag1Space.push(dataSymbol)
                break;
            case 1:
                this.row1Space.push(dataSymbol)
                this.col2Space.push(dataSymbol)
                break;
            case 2:
                this.row1Space.push(dataSymbol)
                this.col3Space.push(dataSymbol)
                this.diag2Space.push(dataSymbol)
                break;
            case 3:
                this.row2Space.push(dataSymbol)
                this.col1Space.push(dataSymbol)
                break;
            case 4:
                this.row2Space.push(dataSymbol)
                this.col2Space.push(dataSymbol)
                this.diag1Space.push(dataSymbol)
                this.diag2Space.push(dataSymbol)

                break;
            case 5:
                this.row2Space.push(dataSymbol)
                this.col3Space.push(dataSymbol)
                break;
            case 6:
                this.row3Space.push(dataSymbol)
                this.col1Space.push(dataSymbol)
                this.diag2Space.push(dataSymbol)
                break;
            case 7:
                this.row3Space.push(dataSymbol)
                this.col2Space.push(dataSymbol)
                break;
            case 8:
                this.row3Space.push(dataSymbol)
                this.col3Space.push(dataSymbol)
                this.diag1Space.push(dataSymbol)
                break;
        
            default:
                break;
        }
        if(this.row1Space.length == 3){
            this.declareWinner(this.row1Space)            
        }
        if(this.row2Space.length == 3){
            this.declareWinner(this.row2Space)           
        }
        if(this.row3Space.length == 3){
            this.declareWinner(this.row3Space)           
        }
        if(this.col1Space.length == 3){
            this.declareWinner(this.col1Space)
        }
        if(this.col2Space.length == 3){
            this.declareWinner(this.col2Space)        

        }
        if(this.col3Space.length == 3){
            this.declareWinner(this.col3Space)         
        }
        if(this.diag1Space.length == 3){
            this.declareWinner(this.diag1Space)       
        
        }
        if(this.diag2Space.length == 3){
            this.declareWinner(this.diag2Space)        

        }
    },
// declares winner if three in a row
    declareWinner: function(arr){
        if(arr.every(decide => decide == arr[0] )){

            this.player1Turn == 1? winner = this.player2[0].textContent:winner = this.player1[0].textContent
            alert(`player ${winner} wins`)
            this.endGame = true;
        }  
    },

}

TicTacToe.init();