import React, { useState, useEffect } from 'react';

function CPU() {
	const [result, setResult] = useState(null);

	useEffect(() => {
		window.backend.basic().then((result) => setResult(result));
		setInterval(() => {
			window.backend.basic().then((result) => setResult(result));
		}, 1000);
	}, [])

	return (
		<div className="App">
			{result}
			<p>CPU USAGE</p>
		</div>
	);
}

export default CPU;
