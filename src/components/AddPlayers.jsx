import React, { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { TbCirclePlus } from 'react-icons/tb';

const AddPlayers = ({ backToStart, addNewPlayer }) => {
	const [players, setPlayers] = useState([]);
	const [player, setPlayer] = useState('');
	const addPlayer = () => {
		setPlayers([...players, player]);
		addNewPlayer(player);
		setPlayer('');
	};

	return (
		<section className='addPlayerSection'>
			<div className='addPlayerNav'>
				<AiOutlineArrowLeft
					onClick={() => backToStart(players)}
					className='arrowBack'
				/>
				<p>Гравці</p>
			</div>
			<div className='playersDiv'>
				{players.map((x, index) => {
					return <p key={index}>{x}</p>;
				})}
			</div>
			<div className='addPlayerDiv'>
				<input
					value={player}
					onChange={(e) => setPlayer(e.target.value)}
					type='text'
				/>
				<TbCirclePlus onClick={addPlayer} className='plusBtn' />
			</div>
		</section>
	);
};

export default AddPlayers;
