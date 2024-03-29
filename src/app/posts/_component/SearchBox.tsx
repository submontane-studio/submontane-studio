export default function SearchBox() {
  return (
    <div className="search-box">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="記事を検索"
        aria-label="記事を検索"
        // onKeyDown={}
      />
    </div>
  );
}
