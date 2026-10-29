import { useRef, useState } from 'react'
import Piece from './Piece.jsx'
import { useSettings } from '../../settings.jsx'

const FILES = 'abcdefgh'

function squaresFor(flipped) {
    const squares = []
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const rank = flipped ? row + 1 : 8 - row
            const file = flipped ? 7 - col : col
            squares.push({ id: FILES[file] + rank, light: (rank + file) % 2 === 0 })
        }
    }
    return squares
}

const WHITE_VIEW = squaresFor(false)
const BLACK_VIEW = squaresFor(true)

export default function Board({ position = {}, marks = {}, flipped = false, onMove, canMove = () => true, onSelect, className = '' }) {
    const { settings } = useSettings()
    const gridRef = useRef(null)
    const [selected, setSelected] = useState(null)
    const [drag, setDrag] = useState(null)

    const squares = flipped ? BLACK_VIEW : WHITE_VIEW
    const playable = Boolean(onMove)

    const select = square => {
        setSelected(square)
        onSelect?.(square)
    }

    const squareAt = (clientX, clientY) => {
        const rect = gridRef.current.getBoundingClientRect()
        const col = Math.floor(((clientX - rect.left) / rect.width) * 8)
        const row = Math.floor(((clientY - rect.top) / rect.height) * 8)
        if (col < 0 || col > 7 || row < 0 || row > 7) return null
        return squares[row * 8 + col].id
    }

    const finishMove = (from, to) => {
        select(null)
        if (to && to !== from) onMove(from, to)
    }

    const handlePointerDown = e => {
        const square = squareAt(e.clientX, e.clientY)
        const ownPiece = square && position[square] && canMove(square)

        if (settings.moveInput === 'click') {
            if (selected && !ownPiece) finishMove(selected, square)
            else select(ownPiece && square !== selected ? square : null)
            return
        }

        if (!ownPiece) return
        select(square)
        const rect = gridRef.current.getBoundingClientRect()
        setDrag({ from: square, x: e.clientX - rect.left, y: e.clientY - rect.top })
        gridRef.current.setPointerCapture(e.pointerId)
    }

    const handlePointerMove = e => {
        if (!drag) return
        const rect = gridRef.current.getBoundingClientRect()
        setDrag({ ...drag, x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    const handlePointerUp = e => {
        if (!drag) return
        finishMove(drag.from, squareAt(e.clientX, e.clientY))
        setDrag(null)
    }

    return (
        <div className={`rounded-[20px] border border-line bg-surface p-3 shadow-[0_30px_60px_rgba(0,0,0,0.5)] ${className}`}>
            <div
                ref={gridRef}
                onPointerDown={playable ? handlePointerDown : undefined}
                onPointerMove={playable ? handlePointerMove : undefined}
                onPointerUp={playable ? handlePointerUp : undefined}
                className={`relative grid aspect-square touch-none grid-cols-8 grid-rows-8 overflow-hidden rounded-lg select-none ${drag ? 'cursor-grabbing' : ''}`}
            >
                {squares.map(sq => {
                    const mark = sq.id === selected ? 'from' : marks[sq.id]
                    const piece = drag?.from === sq.id ? null : position[sq.id]

                    return (
                        <div
                            key={sq.id}
                            className={`@container relative flex items-center justify-center ${sq.light ? 'bg-board-light' : 'bg-board-dark'} ${playable && position[sq.id] && canMove(sq.id) && !drag ? 'cursor-pointer' : ''}`}
                        >
                            {mark == 'from' && <div className='absolute inset-0 bg-accent/50' />}
                            {piece && <Piece {...piece} />}
                            {mark == 'dot' && <span className='size-[28%] rounded-full bg-accent' />}
                            {mark == 'ring' && <span className='size-[60%] rounded-full border-4 border-accent' />}
                        </div>
                    )
                })}

                {drag && (
                    <div
                        className='@container pointer-events-none absolute z-10 flex size-[12.5%] -translate-1/2 items-center justify-center'
                        style={{ left: drag.x, top: drag.y }}
                    >
                        <Piece {...position[drag.from]} />
                    </div>
                )}
            </div>
        </div>
    )
}