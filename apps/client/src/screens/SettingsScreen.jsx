import IconButton from '../components/ui/IconButton.jsx'
import Piece from '../components/board/Piece.jsx'
import Icon from '../components/ui/Icon.jsx'
import { useSettings } from '../settings.jsx'

const PIECE_LOOKS = [
    { id: 'glyph', name: 'Classic glyphs' },
    { id: 'image', name: 'Piece images' },
]

const PREVIEW_PIECES = [
    { type: 'knight', color: 'white' },
    { type: 'queen', color: 'black' },
    { type: 'rook', color: 'white' },
    { type: 'bishop', color: 'black' },
]

// A strip of board squares showing what pieces look like in one style.
function PiecePreview({ look }) {
    return (
        <div className='grid grid-cols-4 overflow-hidden rounded-lg'>
            {PREVIEW_PIECES.map((piece, i) => (
                <div
                    key={piece.type}
                    className={`@container flex aspect-square items-center justify-center ${i % 2 === 0 ? 'bg-board-light' : 'bg-board-dark'}`}
                >
                    <Piece {...piece} look={look} />
                </div>
            ))}
        </div>
    )
}

export default function SettingsScreen({ onBack }) {
    const { settings, update } = useSettings()

    return (
        <div className='bg-checker min-h-screen px-6 py-8 sm:px-16'>
            <div className='mx-auto flex max-w-3xl flex-col gap-12'>
                <header className='flex items-center gap-4'>
                    <IconButton icon='arrowLeft' label='Back to menu' onClick={onBack} />
                    <h1 className='font-display text-4xl font-extrabold sm:text-5xl'>Settings</h1>
                </header>

                <fieldset>
                    <legend className='mb-4 font-display text-2xl font-extrabold'>Pieces</legend>
                    <div className='grid gap-4 sm:grid-cols-2'>
                        {PIECE_LOOKS.map(look => (
                            <label
                                key={look.id}
                                className='group relative flex cursor-pointer flex-col gap-4 rounded-2xl border-2 border-line bg-surface p-5 transition-colors hover:bg-raised has-checked:border-accent has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-accent'
                            >
                                <input
                                    type='radio'
                                    name='pieceLook'
                                    value={look.id}
                                    checked={settings.pieceLook === look.id}
                                    onChange={() => update('pieceLook', look.id)}
                                    className='sr-only'
                                />
                                <PiecePreview look={look.id} />
                                <span className='font-semibold'>{look.name}</span>
                                <span
                                    aria-hidden='true'
                                    className='absolute top-3 right-3 hidden size-7 items-center justify-center rounded-full bg-accent text-ink group-has-checked:flex'
                                >
                                    <Icon name='check' size={16} strokeWidth={3} />
                                </span>
                            </label>
                            
                        ))}
                    </div>
                </fieldset>
            </div>
        </div>
    )
}