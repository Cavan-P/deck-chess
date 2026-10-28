import Piece from './Piece.jsx'

const FILES = 'abcdefgh'

const SQUARES = []
for(let rank = 8; rank >= 1; rank--){
    for(let f = 0; f < 8; f++){
        SQUARES.push({ id: FILES[f] + rank, light: (rank + f) % 2 == 0 })
    }
}

export default function Board({ position = {}, marks = {}, className = '' }) {
    return (
        <div className={`rounded-[20px] border border-line bg-surface p-3 shadow-[0_30px_60px_rgba(0,0,0,0.5)] ${className}`}>
            <div className='grid aspect-square grid-cols-8 grid-rows-8 overflow-hidden rounded-lg'>
                {SQUARES.map(sq => (
                    <div
                        key={sq.id}
                        className={`@container relative flex items-center justify-center ${sq.light ? 'bg-board-light' : 'bg-board-dark'}`}
                    >
                        {marks[sq.id] == 'from' && <div className='absolute inset-0 bg-accent/50' />}
                        {position[sq.id] && <Piece {...position[sq.id]} />}
                        {marks[sq.id] == 'dot' && <span className='size-[28%] rounded-full bg-accent' />}
                        {marks[sq.id] == 'ring' && <span className='size-[60%] rounded-full border-4 border-accent' />}
                    </div>
                ))}
            </div>
        </div>
    )
}