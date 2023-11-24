import './app-info.css'

const AppInfo = ({ data }) => {
	let counter = 0
	const employees = data.reduce((accumulator, item) => accumulator + 1, 0)
	data.forEach(item => (item.increase === true ? counter++ : null))

	return (
		<div className='app-info'>
			<h1>Облік співробітників у компанії</h1>
			<h2>Загальна кількість працівників {employees} </h2>
			<h2>Премію отримають {counter}</h2>
		</div>
	)
}

export default AppInfo
