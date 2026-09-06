import { SIZE_OPTIONS } from '../data/breeds.js'

export default function FilterBar({ active, onChange }) {
  return (
    <div className="filters">
      {SIZE_OPTIONS.map((option) => (
        <button
          key={option}
          className={active === option ? 'active' : ''}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
