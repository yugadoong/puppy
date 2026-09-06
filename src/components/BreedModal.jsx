import { useEffect } from 'react'

export default function BreedModal({ breed, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!breed) return null

  return (
    <div
      className="overlay show"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="modal">
        <div className="art" style={{ background: breed.color }}>{breed.emoji}</div>
        <div className="content">
          <h2>{breed.name}</h2>
          <p className="en">{breed.en}</p>
          <div className="tags">
            {breed.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
          <table>
            <tbody>
              <tr><td>크기</td><td>{breed.size}</td></tr>
              <tr><td>체중</td><td>{breed.weight}</td></tr>
              <tr><td>체고</td><td>{breed.height}</td></tr>
              <tr><td>기대수명</td><td>{breed.life}</td></tr>
            </tbody>
          </table>
          <p className="desc">{breed.desc}</p>
          <button className="close" onClick={onClose}>닫기</button>
        </div>
      </div>
    </div>
  )
}
