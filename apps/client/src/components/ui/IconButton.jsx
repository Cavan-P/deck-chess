import Icon from './Icon.jsx'

export default function IconButton({ icon, label, onClick }){
    return (
        <button
            type='button'
            aria-label={label}
            title={label}
            onClick={onClick}
            className='flex size-12 cursor-pointer items-center justify-center rounded-xl border border-line bg-surface text-ivory transition-colors hover:bg-raised focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
        >
            <Icon name={icon} />
        </button>
    )
}