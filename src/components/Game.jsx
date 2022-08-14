import React, { useState } from 'react';
import LowNavBar from './LowNavBar';
import AddPlayers from './AddPlayers';
const Game = () => {
	const [showAddPlayers, setshowAddPlayers] = useState(false);
	const [players, setPlayers] = useState([]);
	const colors = [
		'rgb(250, 61, 61)',
		'rgb(7, 94, 255)',
		'rgb(14, 155, 14)',
		'rgb(221, 221, 18)',
	];
	const movement = ['лівна нога', 'права нога', 'ліва рука', 'права рука'];
	const [gameSettings, setGameSettings] = useState({
		title: 'Поїхали!',
		text: 'Торкніться екрану',
		textColor: 'rgb(143, 143, 143)',
		backgroundColor: 'rgb(24, 24, 24)',
	});
	const [playerTurn, setPlayerTurn] = useState(0);

	const startGame = () => {
		setGameSettings({
			...gameSettings,
			backgroundColor: colors[Math.floor(Math.random() * 4)],
			textColor: 'white',
			title: players[playerTurn],
			text: movement[Math.floor(Math.random() * 4)],
		});
		if (playerTurn > players.length - 2) {
			setPlayerTurn(0);
		} else {
			setPlayerTurn(playerTurn + 1);
		}

		console.log(players);
		console.log(playerTurn);
	};
	const addNewPlayer = (player) => {
		setPlayers([...players, player]);
	};
	const showAdding = () => {
		setshowAddPlayers(!showAddPlayers);
	};
	return (
		<div>
			{!showAddPlayers && (
				<section
					onClick={startGame}
					style={{ backgroundColor: gameSettings.backgroundColor }}
					className='startSection'
				>
					<h1 style={{ color: gameSettings.textColor }}>
						{gameSettings.title}
					</h1>
					<h3 style={{ color: gameSettings.textColor }}>{gameSettings.text}</h3>

					<LowNavBar
						iconsColor={gameSettings.textColor}
						addPlayer={showAdding}
					/>
				</section>
			)}
			{showAddPlayers && (
				<AddPlayers addNewPlayer={addNewPlayer} backToStart={showAdding} />
			)}
		</div>
	);
};

export default Game;
