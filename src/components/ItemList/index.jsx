import React from 'react'
import './style.css'
import itemList from '../../resources/items.json'

export default function ItemList() {
	console.log(itemList)
	return (
		<aside className='shell-box-item-list-container'>
			{itemList.items.map(element => (
				<button type='button' onClick={console.log(element)} key={`btn-${element}`}>{element.toLocaleUpperCase()}</button>
			))}
		</aside>
	)
}