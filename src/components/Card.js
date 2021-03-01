import React, { useState } from 'react'; 
import ReactCardFlip from 'react-card-flip'; 
import { withStyles } from '@material-ui/core/styles'; 

import { Card, CardContent } from '@material-ui/core'; 
import { Typography } from '@material-ui/core'; 

import styles from '../styles/CardStyles'; 

const FlashCard = ({ card, classes }) => {
    // isFlipped controls the react-card-flip status 
    // False on start 
    const [isFlipped, setIsFlipped] = useState(false); 

    // Now we need a function (a click handler) to update isFlipped state 
    const flipCard = (event) => {
        event.preventDefault(); 
        setIsFlipped(!isFlipped); 
    }

    // Now we must connect the ReactFlipCard component to the isFlipped State, so that it will know at any time what the state value is 
    // flipDirection is a react-flip-card library property that specifies how the card flips
    return (
        <Card className={classes.root}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                {/* 2 main DIVS will go inside the parent ReactCardFlip component - they are the front and back respectively */}
                {/*//* can I use MATERIAL UI with this library? Try replacing divs in a moment, perhaps it can be 2 child elements*/}
                <CardContent onClick={flipCard}>
                        <Typography variant="h4" component="p">{card.card_front}</Typography>
                </CardContent>

                <CardContent onClick={flipCard}>
                        <Typography variant="h5" component="p">{card.card_back}</Typography>
                </CardContent>
            </ReactCardFlip>
        </Card>
    ); 
}

export default withStyles(styles)(FlashCard); 

//TODO From here I need to finish that quick youtube video and add a flipping card 
//? How to use pagination to show one card at a time
//? How can a user flag a card they want to study more, or move one they no longer want to study? 
//? How can I track the time a user spends studying a deck, and studying overall? Start by solving for tracking time overall. 