import React from 'react';
import { Background } from './styles';
import Deck from 'deck-of-cards';
import '../../../node_modules/deck-of-cards/example/example.css'

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.deck = null;
        this.topIndex = 60;
    }

    componentDidMount() {
        this.createDeck();
        this.giveCards();
    }

    createDeck() {
        let deck = new Deck()
        deck.mount(document.getElementById('deckAnchor'));

        /*
        for (let i = 0; i < 40; i++) {
            if ((deck.cards[i].rank === 8) || (deck.cards[i].rank === 9) || (deck.cards[i].rank === 10)) {
                deck.cards.splice(i, 1);
                deck.cards[i].unmount();

                console.log(deck.cards[i])
            }
        }
        */

        deck.shuffle();
        this.deck = deck;
    }

    giveCards() {

        console.log(this.deck);
        let deck = this.deck;

        let refZero = { height: (window.innerHeight / 10), width: -(window.innerWidth / 10) }

        for (let i = 0; i < 12; i++) {
            //give player
            if (i < 3) {
                deck.cards[i].animateTo({
                    delay: 1000 + i * 200, // wait 1 second + i * 2 ms
                    duration: 500,
                    ease: 'quartOut',

                    x: refZero.width + (window.innerWidth / 10) * (-1 + i),
                    y: refZero.height + (window.innerHeight / 4),
                    onComplete: () => { deck.cards[i].setSide('front') }
                });
            }
            //give right
            if ((2 < i) && (i < 6)) {
                deck.cards[i].animateTo({
                    delay: 1000 + i * 200, // wait 1 second + i * 2 ms
                    duration: 500,
                    ease: 'quartOut',
                    rot: 90,

                    x: refZero.width + (window.innerWidth / 3.5),
                    y: (window.innerHeight / 5) * (-1 + (i - 3)),
                    onComplete: () => { deck.cards[i].enableFlipping() }
                });
            }
            //giv left
            if ((5 < i) && (i < 9)) {
                deck.cards[i].animateTo({
                    delay: 1000 + i * 200, // wait 1 second + i * 2 ms
                    duration: 500,
                    ease: 'quartOut',
                    rot: 270,

                    x: refZero.width + -(window.innerWidth / 3.5),
                    y: (window.innerHeight / 5) * (-1 + (i - 6)),
                    onComplete: () => { deck.cards[i].enableFlipping() }
                });
            }
            //give top
            if ((8 < i) && (i < 12)) {
                deck.cards[i].animateTo({
                    delay: 1000 + i * 200, // wait 1 second + i * 2 ms
                    duration: 500,
                    ease: 'quartOut',
                    rot: 180,

                    x: refZero.width + (window.innerWidth / 10) * (-1 + (i - 9)),
                    y: refZero.height - (window.innerHeight / 2),
                    onComplete: () => { deck.cards[i].enableFlipping() }
                });
            }

            deck.cards[i].$el.addEventListener("mousedown", () => {
                deck.cards[i].animateTo({
                    delay: 200,
                    duration: 500,
                    ease: 'quartOut',
                    rot: 180 * Math.random(),

                    x: refZero.width,
                    y: 0,
                    //onComplete: () => {}
                })

                deck.cards[i].$el.style.zIndex = this.topIndex;
                this.topIndex++;

            })

        }
    }


    render() {
        return (
            <div>
                <Background >
                    <div id="deckAnchor" style={{ position: 'absolute', top: '40%', right: '40%' }} />
                </Background>
            </div>
        )
    }
}

export default Game;