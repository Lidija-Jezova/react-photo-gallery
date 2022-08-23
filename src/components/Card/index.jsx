import React from 'react'

import styles from './Card.module.scss'

function Card({ name, photos, handleModal }) {
	return (
		<div className={styles.card}>
			<div
				onClick={() => handleModal(photos[0])}
				className={styles.mainImg}
			>
				<img src={photos[0]} alt="img" />
			</div>
			<div className={styles.images}>
				{photos.slice(1).map((photo, index) =>
					<div
						onClick={() => handleModal(photo)}
						key={index}
						className={styles.image}
					>
						<img src={photo} alt="img" />
					</div>
				)}
			</div>
			<div className={styles.name}>{name}</div>
		</div >
	)
}

export default Card