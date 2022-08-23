import React from 'react'

import styles from './Modal.module.scss'

function Modal({ children, isModalActive, handleModal }) {
	return (
		<div
			onClick={handleModal}
			className={`${styles.overlay} ${isModalActive && styles.active}`}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className={styles.modal}
			>
				<header className={styles.header}>
					<button
						onClick={handleModal}
						className={styles.close}
					></button>
				</header>
				<div className={styles.body}>
					{children}
				</div>
			</div>
		</div>
	)
}

export default Modal