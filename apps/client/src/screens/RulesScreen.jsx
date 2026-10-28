import { CARD_TYPES, GENERAL_RULES } from '@deckchess/game'
import IconButton from '../components/ui/IconButton.jsx'
import { RotateCard, ValueCard, PieceCard, IconCard } from '../components/cards/PlayingCard.jsx'

const CHESS_RULES_URL = 'https://en.wikipedia.org/wiki/Rules_of_chess'

const KIND_COLORS = {
    move: 'blue',
    place: 'coral',
    swap: 'coral',
    promote: 'coral',
    skip: 'teal',
    discard: 'teal',
    freeze: 'teal',
    rotate: 'accent',
}

const KIND_ICONS = {
    skip: 'skip',
    freeze: 'freeze',
    swap: 'swap',
    promote: 'promote',
}

function CardFace({ card, size }) {
    const color = KIND_COLORS[card.kind]

    if (card.kind === 'rotate') {
        return <RotateCard size={size} color={color} />
    }

    if (card.value) {
        return <ValueCard size={size} value={card.value} color={color} />
    }

    return <IconCard size={size} color={color} icon={KIND_ICONS[card.kind]} label={card.name.toUpperCase()} />
}

export default function RulesScreen({ onBack }) {
    return (
        <div className='bg-checker min-h-screen px-6 py-8 sm:px-16'>
            <div className='mx-auto flex max-w-6xl flex-col gap-12'>
                <header className='flex items-center gap-4'>
                    <IconButton icon='arrowLeft' label='Back to menu' onClick={onBack} />
                    <h1 className='font-display text-4xl font-extrabold sm:text-5xl'>How to Play</h1>
                </header>

                <section className='flex max-w-3xl flex-col gap-4'>
                    <h2 className='font-display text-2xl font-extrabold'>General rules</h2>
                    <ol className='flex list-decimal flex-col gap-2 pl-6 leading-relaxed marker:font-semibold marker:text-accent'>
                        {GENERAL_RULES.map((rule, i) => (
                            <li key={i}>{rule}</li>
                        ))}
                    </ol>
                    <p className='rounded-2xl border border-line bg-surface p-5 text-muted'>
                        Every move still follows normal chess rules. Don't know them?{' '}
                        <a
                            href={CHESS_RULES_URL}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-accent underline underline-offset-4 hover:text-ivory'
                        >
                            Go learn chess
                        </a>
                        , then come back and flip the board on someone.
                    </p>
                </section>

                <section className='flex flex-col gap-6'>
                    <h2 className='font-display text-2xl font-extrabold'>The cards</h2>
                    <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
                        {CARD_TYPES.map(card => (
                            <article
                                key={card.id}
                                className='flex flex-col items-center gap-5 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-start'
                            >
                                <div className='shrink-0'>
                                    <CardFace card={card} size='sm' />
                                </div>
                                <div className='flex flex-1 flex-col gap-2'>
                                    <h3 className='font-display text-xl font-extrabold'>{card.name}</h3>
                                    <p className='leading-relaxed'>{card.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}