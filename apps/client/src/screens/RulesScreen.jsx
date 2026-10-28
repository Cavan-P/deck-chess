import { CARD_GROUPS, CARD_TYPES, GENERAL_RULES } from '@deckchess/game'
import IconButton from '../components/ui/IconButton.jsx'
import CardFan from '../components/cards/CardFan.jsx'


const CHESS_RULES_URL = 'https://en.wikipedia.org/wiki/Rules_of_chess'

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
                    <div className='grid grid-cols-1 gap-6 xl:grid-cols-2'>
                        {CARD_GROUPS.map(group => {
                            const cards = group.preview
                                ? group.preview.map(id => CARD_TYPES.find(card => card.id == id))
                                : CARD_TYPES.filter(card => card.kind == group.id)

                            return (
                                <article
                                    key={group.id}
                                    className='flex flex-col items-center gap-5 rounded-2xl border border-line bg-surface p-6 sm:flex-row'
                                >
                                    <div className='flex shrink-0 justify-center sm:w-60'>
                                        <CardFan cards={cards} />
                                    </div>
                                    <div className='flex flex-1 flex-col gap-2'>
                                        <h3 className='font-display text-xl font-extrabold'>{group.name}</h3>
                                        <p className='leading-relaxed'>{group.description}</p>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </section>
            </div>
        </div>
    )
}