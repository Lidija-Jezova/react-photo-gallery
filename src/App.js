import React from 'react';
import Card from './components/Card';
import Modal from './components/Modal';
import { useSearch } from './hooks/useSearch';

import data from './data.json'

import './scss/App.scss'

function App() {
	const categories = data.categories
	const galleryCollection = data.collections
	const [currentCategory, setCurrentCategory] = React.useState(categories[0].name)
	const [currentCollection, setCurrentCollection] = React.useState(galleryCollection)
	const [searchQuery, setSearchQuery] = React.useState('')
	const [isModalActive, setIsModalActive] = React.useState(false)
	const [chosenPhoto, setChosenPhoto] = React.useState('')
	const searchedCollections = useSearch(searchQuery, currentCollection)

	React.useEffect(() => {
		const collection = galleryCollection.filter(item => item.category === currentCategory)
		setCurrentCollection(collection.length ? collection : galleryCollection)
	}, [currentCategory])

	const onChangeCategory = (category) => {
		setCurrentCategory(category)
	}

	const openModal = (img) => {
		setChosenPhoto(img)
		setIsModalActive(true)
	}

	const closeModal = () => {
		setIsModalActive(false)
	}

	return (
		<div className='App'>
			<h1 className='title'>Photo Gallery</h1>
			<div className="actions">
				{categories.map((category, index) =>
					<button
						key={index}
						onClick={() => onChangeCategory(category.name)}
						className={`${(currentCategory === category.name) && 'active'}`}
					>
						{category.name}
					</button>
				)}
				<input
					className='search'
					type="text"
					placeholder='Search...'
					onChange={e => setSearchQuery(e.target.value)}
				/>
			</div>
			{
				searchedCollections.length
					?
					<div className="collections">
						{searchedCollections.map((collection, index) =>
							<Card
								key={index}
								{...collection}
								handleModal={openModal}
							/>
						)}
					</div>
					:
					<div className='empty'>There's no collections...</div>
			}
			<Modal
				isModalActive={isModalActive}
				handleModal={closeModal}
			>
				<img src={chosenPhoto} alt="img" />
			</Modal>
		</div>
	);
}

export default App;