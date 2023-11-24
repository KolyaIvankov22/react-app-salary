import { useState } from 'react'

import './employees-add-form.css'

const EmployeesAddForm = ({ onAdd }) => {
	const [name, setName] = useState('')
	const [salary, setSalary] = useState('')

	const onValueChange = e => {
		setName(e.target.value)
	}

	const onSalaryChange = e => {
		setSalary(e.target.value)
	}

	const onSubmit = e => {
		e.preventDefault()
		if (name.trim().length === 0) {
			alert('Поле "Як його звати?" не може бути порожнім!')
		} else if (salary.trim().length === 0) {
			alert('Поле "З/П в $?" не може бути порожнім!')
		} else {
			onAdd(name, salary)
			setName('')
			setSalary('')
		}
	}

	return (
		<div className='app-add-form'>
			<h3>Додати нового співробітника</h3>
			<form className='add-form d-flex'>
				<input
					type='text'
					className='form-control new-post-label'
					placeholder='Як його звати?'
					name='name'
					value={name}
					onChange={onValueChange}
				/>
				<input
					type='number'
					className='form-control new-post-label'
					placeholder='З/П в $?'
					name='salary'
					value={salary}
					onChange={onSalaryChange}
				/>

				<button
					type='submit'
					className='btn btn-outline-light'
					onClick={onSubmit}
				>
					Додати
				</button>
			</form>
		</div>
	)
}

export default EmployeesAddForm
