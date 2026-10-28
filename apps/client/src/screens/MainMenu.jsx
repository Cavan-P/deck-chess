import IconButton from '../components/ui/IconButton.jsx'
import MenuButton from '../components/ui/MenuButton.jsx'
import { ValueCard } from '../components/cards/PlayingCard.jsx'
import Board from '../components/board/Board.jsx'

const MENU_ITEMS = [
    { id: 'online', label: 'Play Online', variant: 'primary' },
    { id: 'private', label: 'Private Room', icon: 'lock', hint: 'Invite with a code' },
    { id: 'bot', label: 'Play vs Bot', icon: 'bot' },
    { id: 'rules', label: 'How to Play', icon: 'book', hint: 'Card rules' },
]

const MENU_POSITION = {
    a8: { type: 'rook', color: 'black' }, f8: { type: 'rook', color: 'black' }, g8: { type: 'king', color: 'black' },
    e7: { type: 'queen', color: 'black' }, b7: { type: 'bishop', color: 'black' }, c6: { type: 'knight', color: 'black' },
    a7: { type: 'pawn', color: 'black' }, c7: { type: 'pawn', color: 'black' }, f7: { type: 'pawn', color: 'black' },
    g7: { type: 'pawn', color: 'black' }, h7: { type: 'pawn', color: 'black' }, b6: { type: 'pawn', color: 'black' },
    d6: { type: 'pawn', color: 'black' },
    a1: { type: 'rook', color: 'white' }, f1: { type: 'rook', color: 'white' }, g1: { type: 'king', color: 'white' },
    d1: { type: 'queen', color: 'white' }, c4: { type: 'bishop', color: 'white' }, f3: { type: 'knight', color: 'white' },
    a2: { type: 'pawn', color: 'white' }, b2: { type: 'pawn', color: 'white' }, f2: { type: 'pawn', color: 'white' },
    g2: { type: 'pawn', color: 'white' }, h2: { type: 'pawn', color: 'white' }, c3: { type: 'pawn', color: 'white' },
    d4: { type: 'pawn', color: 'white' },
}

const MENU_MARKS = { f3: 'from', g5: 'dot', e6: 'ring' }

export default function MainMenu({ onNavigate }) {
    return (
        <div className='bg-checker flex min-h-screen flex-col px-6 py-8 sm:px-16'>
            <div className='mx-auto flex w-full max-w-6xl flex-1 flex-col'>
                <header className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <div className='flex size-10 items-center justify-center rounded-full bg-raised text-[15px] font-semibold'>
                            C
                        </div>
                        <div className='flex flex-col gap-0.5'>
                            <span className='text-[15px] font-semibold'>Cavan</span>
                            <span className='text-[13px] text-muted'>Rating 3269</span>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <IconButton icon='friends' label='Friends' onClick={() => onNavigate('friends')} />
                        <IconButton icon='settings' label='Settings' onClick={() => onNavigate('settings')} />
                    </div>
                </header>

                <div className='flex flex-1 items-center justify-between gap-12 py-12'>
                    <main className='flex w-full max-w-130 flex-col gap-10'>
                    <div className='flex flex-col gap-2.5'>
                        <h1 className='font-display text-6xl leading-[0.9] font-extrabold tracking-[-3px] sm:text-[104px]'>
                        Deck<span className='text-accent'>chess</span>
                        </h1>
                        <p className='text-lg text-muted'>Chess, dealt differently.</p>
                    </div>

                    <nav aria-label='Main menu' className='flex flex-col gap-3'>
                        {MENU_ITEMS.map(button => (
                            <MenuButton key={button.id} icon={button.icon} variant={button.variant} hint={button.hint} onClick={() => onNavigate(button.id)}>
                                {button.label}
                            </MenuButton>
                        ))}
                    </nav>
                    </main>

                    <div aria-hidden='true' className='relative hidden w-114 shrink-0 xl:block'>
                        <Board position={MENU_POSITION} marks={MENU_MARKS} />
                        <ValueCard value='2' color='blue' rotate={-12} className='absolute -bottom-15 -left-17' />
                    </div>

                </div>

                <footer className='flex justify-between text-[13px] text-muted'>
                    <span>v0.1 prototype</span>
                </footer>
            </div>
        </div>
    )
}