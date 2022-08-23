import React from 'react'

const useSearch = (searchQuery, currentCollection) => {
	const searchedCollections = React.useMemo(() => {
		return currentCollection.filter(collection => collection.name.toLowerCase().includes(searchQuery.toLowerCase()))
	}, [searchQuery, currentCollection])
	return searchedCollections
}

export { useSearch }