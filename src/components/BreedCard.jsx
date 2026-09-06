export default function BreedCard({ breed, onSelect }) {
  return (
    <div className="card" onClick={() => onSelect(breed)}>
      <div className="art" style={{ background: breed.color }}>
        <span className="size-tag">{breed.size}</span>
        {breed.emoji}
      </div>
      <div className="body">
        <h3>{breed.name}</h3>
        <p className="en">{breed.en}</p>
        <div className="meta">
          <span>⚖️ {breed.weight}</span>
        </div>
        <p className="desc">{breed.desc}</p>
        <div className="tags">
          {breed.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
