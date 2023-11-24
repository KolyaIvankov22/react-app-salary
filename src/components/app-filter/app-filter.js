import './app-filter.css'

const AppFilter = ({ filter, onFilterSelect }) => {
	const buttonsData = [
		{ name: 'all', label: 'Усі співробітники' },
		{ name: 'rise', label: 'На підвищення' },
		{ name: 'moreThen1000', label: 'З/П більше 1000$' }
	]

	const buttons = buttonsData.map(({ name, label }) => {
		const active = filter === name
		const classBtn = active ? 'btn-light' : 'btn-outline-light'
		return (
			<button
				type='button'
				className={`btn ${classBtn}`}
				key={name}
				onClick={() => onFilterSelect(name)}
			>
				{label}
			</button>
		)
	})

	return <div className='btn-group'>{buttons}</div>
}

export default AppFilter
