import React from 'react';
import { IoMdPersonAdd } from 'react-icons/io';
import { MdTimer } from 'react-icons/md';

const LowNavBar = (props) => {
	function btnClick(e) {
		e.stopPropagation();
		props.addPlayer();
	}
	return (
		<div className='navBar'>
			<IoMdPersonAdd
				style={{ color: props.iconsColor }}
				id='clickButton'
				onClick={btnClick}
				className='icons'
			/>
			<MdTimer style={{ color: props.iconsColor }} className='icons' />
		</div>
	);
};

export default LowNavBar;
