import { useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import SearchBar from './components/SearchBar.jsx'
import FilterBar from './components/FilterBar.jsx'
import BreedGrid from './components/BreedGrid.jsx'
import BreedModal from './components/BreedModal.jsx'
import Footer from './components/Footer.jsx'
import { breeds } from './data/breeds.js'

export default function App() {
  const [query, setQuery] = useState('')
  const [sizeFilter, setSizeFilter] = useState('전체')
  const [selectedBreed, setSelectedBreed] = useState(null)

  const filteredBreeds = useMemo(() => {
    const q = query.trim().toLowerCase()
    return breeds.filter((b) => {
      const matchFilter = sizeFilter === '전체' || b.size === sizeFilter
      const matchQuery =
        !q || b.name.toLowerCase().includes(q) || b.en.toLowerCase().includes(q)
      return matchFilter && matchQuery
    })
  }, [query, sizeFilter])

  return (
    <>
      <Header />

      <div className="controls">
        <SearchBar value={query} onChange={setQuery} />
        <FilterBar active={sizeFilter} onChange={setSizeFilter} />
      </div>

      <p className="count">총 {filteredBreeds.length}개 견종</p>

      <BreedGrid breeds={filteredBreeds} onSelect={setSelectedBreed} />

      <Footer />

      <BreedModal breed={selectedBreed} onClose={() => setSelectedBreed(null)} />
    </>
  )
}
