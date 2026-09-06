export default function SearchBar({ value, onChange }) {
  return (
    <div className="search">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="견종 이름 검색 (예: 진돗개, 푸들...)"
      />
    </div>
  )
}
