import IconButton from '../components/ui/IconButton.jsx'
import MenuButton from '../components/ui/MenuButton.jsx'
import Icon from '../components/ui/Icon.jsx'
import MiniBoard from '../components/board/MiniBoard.jsx'
import { CardFrame, PieceCard, ValueCard, RotateCard } from '../components/cards/PlayingCard.jsx'

const MENU_ITEMS = [
    { id: 'online', label: 'Play Online', variant: 'primary' },
    { id: 'private', label: 'Private Room', icon: 'lock', hint: 'Invite with a code' },
    { id: 'bot', label: 'Play vs Bot', icon: 'bot' },
    { id: 'rules', label: 'How to Play', icon: 'book', hint: 'Card rules' },
]

function CardFan(){
    return (
        <div aria-hidden='true' className='relative w-125 h-120 hidden lg:block shrink-0'>
            <ValueCard value='3' color='teal' rotate={-20} className='absolute' style={{ left: 60, top: 70 }}/>
            <PieceCard piece='knight' rotate={-6} className='absolute' style={{ left: 140, top: 40 }}/>
            <RotateCard
                rotate={10}
                className='absolute' style={{ left: 230, top: 60 }}
            >
                <MiniBoard />
            </RotateCard>
            <span className='absolute text-muted text-[13px] uppercase tracking-[2px] w-70 text-center' style={{ left: 150, top: 380 }}>Draw · Move · Rotate</span>
        </div>
    )
}

export default function MainMenu({ onNavigate }) {
    return (
        <div className='bg-checker flex min-h-screen flex-col px-6 py-8 sm:px-16'>
        <header className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <div className='flex size-10 items-center justify-center rounded-full bg-raised text-[15px] font-semibold'>
                    C
                </div>
                <div className='flex flex-col gap-0.5'>
                    <span className='text-[15px] font-semibold'>[YOUR NAME]</span>
                    <span className='text-[13px] text-muted'>Rating [ELO]</span>
                </div>
            </div>
            <div className='flex gap-3'>
                <IconButton icon='friends' label='Friends' onClick={_ => onNavigate('friends')} />
                <IconButton icon='settings' label='Settings' onClick={_ => onNavigate('settings')} />
            </div>
        </header>

        <div className='flex flex-1 items-center justify-between gap-12 py-12'>
            <main className='flex w-full max-w-[520px] flex-col gap-10'>
            <div className='flex flex-col gap-2.5'>
                <h1 className='font-display text-6xl leading-[0.9] font-extrabold tracking-[-3px] sm:text-[104px]'>
                Deck<span className='text-accent'>chess</span>
                </h1>
                <p className='text-lg text-muted'>Draw a card. Make your moves. Flip the board.</p>
            </div>

            <nav aria-label='Main menu' className='flex flex-col gap-3'>
                {MENU_ITEMS.map(button => (
                    <MenuButton key={button.id} icon={button.icon} variant={button.variant} hint={button.hint} onClick={_ => onNavigate(button.id)}>
                        {button.label}
                    </MenuButton>
                ))}
            </nav>
            </main>

            <CardFan />

        </div>

        <footer className='flex justify-between text-[13px] text-muted'>
            <span>v0.1 prototype</span>
        </footer>
        </div>
    )
}