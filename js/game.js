// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You come across a dark and creepy home on Halloween",
            choices: [
                {
                    text: "Enter the House",
                    nextLevel: "House",
                },

                {
                    text: "Keep going past the house",
                    nextLevel: "ghost",
                },
            ]
        },

        House: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You find some gold!!",
            choices: [
                {
                    text: "keep going",
                    nextLevel: "Food",
                },
                {
                
                    text: "Go back outside",
                    nextLevel: "Ghost",
                },
                
            ]
        },


        Food: {
            message:"look at all this food! now will you keep going?",
            choices: [
            { text:"keep going?",
            nextlevel: "Die",
        },
        {
            text: "eat too much food",
            nextLevel: "Die",
        },
        
        {
            text: "run outside",
            nextLevel: "Ghost",
            
            },
]
},

candy: {
            message: "You survived!!!!",
            
},

Die: {
            message: "Aww youu tried, but remember silly you can't survive!",
            
                },
                
            
},

        Ghost: {
            message: "oh you thought you would get out so easy...you encounter a ghost!",
            choices: [
                
                {
                 text: "run back to the house",
                    nextLevel: "house",
                },
                {
                text: "fight it",
                    nextLevel: "candy",
                    
                },
                
            ]
        },

    }
;
