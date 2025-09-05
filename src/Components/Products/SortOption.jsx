import { useSearchParams } from 'react-router-dom'

const SortOption = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (sortBy === 'sort') {
      params.delete('SortBy');
    } else {
      params.set('SortBy', sortBy);
    }
    setSearchParams(params);
  };

  return (
    <div className='mb-4 flex items-center justify-end mx-5'>
      <select
        id="sort"
        className='border border-gray-300 rounded-md p-2 focus:outline-none'
        onChange={handleSortChange}
        value={searchParams.get('SortBy') || 'sort'}
      >
        <option value="sort">Default</option>
        <option value="PricAsc">Price: Low to High</option>
        <option value="PriceDsc">Price: High to Low</option>
        <option value="Popularity">Popularity</option>
      </select>
    </div>
  )
}

export default SortOption