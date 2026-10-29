const FEN_TYPES = {
    q: 'queen',
    n: 'knight',
    b: 'bishop',
    r: 'rook',
    p: 'pawn',
    k: 'king'
}
const TYPE_LETTERS = Object.fromEntries(Object.entries(FEN_TYPES).map(([letter, type]) => [type, letter]))
const FILES = 'abcdefgh'

export const START_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'

export function positionFromFen(fen){
    const position = {}

    fen.split(' ')[0].split('/').forEach((row, i) => {
        let file = 0
        for(const ch of row){
            if(/\d/.test(ch)){
                file += +ch
                continue
            }

            position[FILES[file] + (8 - i)] = {
                type: FEN_TYPES[ch.toLowerCase()],
                color: ch == ch.toUpperCase() ? 'white' : 'black'
            }
            file++
        }
    })

    return position
}

export function placementFromPosition(position){
    const rows = []
    for(let rank = 8; rank >= 1; rank--){
        let row = ''
        let empty = 0
        for(const file of FILES){
            const piece = position[file + rank]
            if(!piece){
                empty++
                continue
            }

            if(empty) row += empty
            empty = 0

            const letter = TYPE_LETTERS[piece.type]
            row += piece.color == 'white' ? letter.toUpperCase() : letter
        }
        if(empty) row += empty
        rows.push(row)
    }
    
    return rows.join('/')
}