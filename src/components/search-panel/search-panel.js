import { useState } from 'react'

import './search-panel.css'

const SearchPanel = ({ onUpdateSearch }) => {
	const [term, setTerm] = useState('')

	const handleUpdateSearch = e => {
		const searchTerm = e.target.value
		setTerm(searchTerm)
		onUpdateSearch(searchTerm)
	}

	return (
		<input
			type='text'
			className='form-control'
			value={term}
			onChange={handleUpdateSearch}
			placeholder='Знайти співробітника'
		/>
	)
}

export default SearchPanel
