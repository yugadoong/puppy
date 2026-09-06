import BreedCard from './BreedCard.jsx'

export default function BreedGrid({ breeds, onSelect }) {
  if (breeds.length === 0) {
    return <p className="empty show">검색 결과가 없어요 🐕</p>
  }

  return (
    <div className="grid">
      {breeds.map((breed) => (
        <BreedCard key={breed.id} breed={breed} onSelect={onSelect} />
      ))}
    </div>
  )
}
