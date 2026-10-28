
const PIECES = ['pawn', 'knight', 'bishop', 'rook', 'queen', 'king']
const COUNT_WORDS = { 1: 'one', 2: 'two', 3: 'three' }

const capitalize = word => word[0].toUpperCase() + word.slice(1)

function pieceDescription(piece, count) {
    const moves = count == 1 ? 'one legal move' : `${COUNT_WORDS[count]} legal moves in a row`

    if (piece == 'king') {
        return `Your king makes ${moves}.`
    }

    return `Pick one of your ${piece}s. It makes ${moves}. No ${piece} left? Tough.`
}

const PIECE_CARDS = PIECES.flatMap(piece =>
    [1, 2, 3].map(count => ({
        id: `${piece}-${count}`,
        name: `${capitalize(piece)} ${count}`,
        kind: 'piece',
        piece,
        count,
        value: String(count),
        description: pieceDescription(piece, count),
    }))
)

export const CARD_TYPES = [
    {
        id: 'move-1',
        name: 'Move 1',
        kind: 'move',
        count: 1,
        value: '1',
        description: 'Make one legal move.',
    },
    {
        id: 'move-2',
        name: 'Move 2',
        kind: 'move',
        count: 2,
        value: '2',
        description: 'Pick one piece. Make two consecutive legal moves with it.',
    },
    {
        id: 'move-3',
        name: 'Move 3',
        kind: 'move',
        count: 3,
        value: '3',
        description: 'Pick one piece. Make three consecutive legal moves with it.',
    },
    ...PIECE_CARDS,
    {
        id: 'wild-3',
        name: 'Wild 3',
        kind: 'wild',
        count: 3,
        value: '3',
        description: 'Make three legal moves with any pieces you want. Same piece three times, three different pieces, your call.',
    },
    {
        id: 'wild-2',
        name: 'Wild 2',
        kind: 'wild',
        count: 2,
        value: '2',
        description: 'Make two legal moves with any pieces you want. Same piece twice, two different pieces, your call.',
    },
    {
        id: 'plus-1',
        name: 'Plus 1',
        kind: 'place',
        count: 1,
        value: '+1',
        description: "Revive one of your captured pieces and place it on an empty square. It may not put your opponent in check, but it may block a check on your own king. Pawns may not be placed on your opponent's half of the board.",
    },
    {
        id: 'plus-2',
        name: 'Plus 2',
        kind: 'place',
        count: 2,
        value: '+2',
        description: "Revive two of your captured pieces and place them on empty squares. They may not put your opponent in check, but they may block a check on your own king. Pawns may not be placed on your opponent's half of the board.",
    },
    {
        id: 'swap',
        name: 'Swap',
        kind: 'swap',
        description: "Swap the positions of two of your own pieces. You can't leave your own king in check. A pawn cannot be swapped to the back rank.",
    },
    {
        id: 'promote',
        name: 'Promote',
        kind: 'promote',
        description: "Promote one of your pawns, wherever it is on the board, to anything. You're welcome. No, it can't be a king.",
    },

    {
        id: 'skip',
        name: 'Lose a Turn',
        kind: 'skip',
        description: 'Your opponent loses their next turn. Make any legal move, draw your card, and play again.',
    },
    {
        id: 'discard-1',
        name: 'Minus 1',
        kind: 'discard',
        count: 1,
        value: '-1',
        description: 'Your opponent discards one card of their choice. The game hands them a replacement at the end of their next turn.',
    },
    {
        id: 'discard-2',
        name: 'Minus 2',
        kind: 'discard',
        count: 2,
        value: '-2',
        description: 'Your opponent discards two cards of their choice. The game hands them replacements at the end of their next turn.',
    },
    {
        id: 'discard-3',
        name: 'Minus 3',
        kind: 'discard',
        count: 3,
        value: '-3',
        description: 'Your opponent discards three cards of their choice. The game hands them replacements at the end of their next turn.',
    },
    {
        id: 'freeze',
        name: 'Freeze',
        kind: 'freeze',
        description: "Pick one of your opponent's pieces other than their king. It can't move on their next turn.",
    },

    {
        id: 'rotate',
        name: 'Rotate',
        kind: 'rotate',
        description: "Rotate the board. You are now playing your opponent's pieces and they are playing yours.",
    },
]

export const CARD_GROUPS = [
    {
        id: 'move',
        name: 'Move cards',
        description: 'Pick one piece. Make as many legal moves as the card shows.',
    },
    {
        id: 'piece',
        name: 'Piece cards',
        description: "Pick one of the pieces shown on the card and move it as many times as the card shows. One piece makes every move, not one move each for every knight you own. None of that piece left? The card is dead. Use a turn to discard it, and cry about it.",
        preview: ['pawn-1', 'knight-2', 'queen-3'],
    },
    {
        id: 'wild',
        name: 'Wild',
        description: 'Make as many legal moves as the card shows. You may move more than one piece.',
    },

    {
        id: 'place',
        name: 'Place pieces',
        description: "Revive as many of your captured pieces as the card shows and place them on empty squares. They may not put your opponent in check, but they may block a check on your own king. Pawns may not be placed on your opponent's half of the board.",
    },
    {
        id: 'swap',
        name: 'Swap',
        description: "Swap the positions of two of your own pieces. You can't leave your own king in check. A pawn cannot be swapped to the back rank.",
    },
    {
        id: 'promote',
        name: 'Promote',
        description: "Promote one of your pawns, wherever it is on the board, to anything. You're welcome. No, it can't be a king.",
    },

    {
        id: 'skip',
        name: 'Lose a Turn',
        description: 'Your opponent loses their next turn. Make any legal move, draw your card, and play again.',
    },
    {
        id: 'discard',
        name: 'Discard',
        description: 'Your opponent discards as many cards of their choosing as the card shows. The game hands them replacements at the end of their next turn.',
    },
    {
        id: 'freeze',
        name: 'Freeze',
        description: "Pick one of your opponent's pieces other than their king. It can't move on their next turn.",
    },

    {
        id: 'rotate',
        name: 'Rotate',
        description: "The board rotates 180 degrees. You are now playing your opponent's pieces and they are playing yours.",
    },
]

export const GENERAL_RULES = [
    "You start with 5 cards. The game deals them. You're welcome.",
    "On your turn, play one card and do what it says, then draw a new one. Forget to draw before your opponent plays, and that card is gone forever. You're playing with 4 now. Congrats.  If you're the type to keep forgetting and end up with an empty hand, it's your lucky day. You can draw a new one before your next turn and play it.",
    "Nothing good in your hand? Discard one card and draw a new one. That's your whole turn. Enjoy watching.",
    "Got a card with more than one move? Pick one piece (unless it's Wild). It makes every one of those moves, and yes, you have to use all of them.",
    "Capture something or put your opponent in check and your turn ends right there. Leftover moves are gone. Greedy.",
    "If the piece you're moving runs out of legal moves, your turn ends.",
    "Checkmate wins. If nobody can move, it's a draw, which is somehow worse than losing.",
    'In check? Play a card that saves you, or burn any card to make one move out of it.',
]
