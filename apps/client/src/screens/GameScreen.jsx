import { useState } from 'react'
import { positionFromFen, START_FEN } from '@deckchess/game'
import Board from '../components/board/Board.jsx'
import IconButton from '../components/ui/IconButton.jsx'

export default function GameScreen({ onBack }) {
    const [position, setPosition] = useState(() => positionFromFen(START_FEN))
    const [turn, setTurn] = useState('white')

    const handleMove = (from, to) => {
        // TODO: your rules decide whether this move is legal, and what it does to the cards in play.
        setPosition(current => {
            const next = { ...current, [to]: current[from] }
            delete next[from]
            return next
        })
        setTurn(t => (t === 'white' ? 'black' : 'white'))
    }

    return (
        <div className='bg-checker flex min-h-screen flex-col items-center gap-6 px-6 py-8'>
            <header className='flex w-full max-w-160 items-center gap-4'>
                <IconButton icon='arrowLeft' label='Leave game' onClick={onBack} />
                <span className='text-muted'>{turn === 'white' ? 'White' : 'Black'} to move</span>
            </header>

            <Board
                position={position}
                onMove={handleMove}
                canMove={square => position[square]?.color === turn}
                className='w-full max-w-[min(640px,calc(100vh-180px))]'
            />

            {/* TODO: your hand of cards goes here, CardFan size='md' is a good start */}
        </div>
    )
}