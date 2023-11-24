import React, { useState } from 'react'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'

const App = () => {
	const [data, setData] = useState([
		{ name: 'John C.', salary: 800, increase: false, rise: true, id: 1 },
		{ name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2 },
		{ name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3 }
	])
	const [term, setTerm] = useState('')
	const [filter, setFilter] = useState('all')
	const [maxId, setMaxId] = useState(4)

	const deleteItem = id => {
		setData(prevData => prevData.filter(item => item.id !== id))
	}

	const addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			rise: false,
			id: maxId
		}
		setMaxId(prevMaxId => prevMaxId + 1)
		setData(prevData => [...prevData, newItem])
	}

	const onToggleProp = (id, prop) => {
		setData(prevData =>
			prevData.map(item =>
				item.id === id ? { ...item, [prop]: !item[prop] } : item
			)
		)
	}

	const searchEmp = (items, term) => {
		if (term.length === 0) {
			return items
		}
		return items.filter(item => item.name.toLowerCase().indexOf(term) > -1)
	}

	const onUpdateSearch = term => {
		setTerm(term)
	}

	const filterPost = (items, filter) => {
		switch (filter) {
			case 'rise':
				return items.filter(item => item.rise)
			case 'moreThen1000':
				return items.filter(item => item.salary > 1000)
			default:
				return items
		}
	}

	const onFilterSelect = filter => {
		setFilter(filter)
	}

	const visibleData = filterPost(searchEmp(data, term), filter)

	return (
		<div className='app'>
			<AppInfo data={visibleData} />

			<div className='search-panel'>
				<SearchPanel onUpdateSearch={onUpdateSearch} />
				<AppFilter filter={filter} onFilterSelect={onFilterSelect} />
			</div>

			<EmployeesList
				data={visibleData}
				onDelete={deleteItem}
				onToggleProp={onToggleProp}
			/>
			<EmployeesAddForm onAdd={addItem} />
		</div>
	)
}

export default App
