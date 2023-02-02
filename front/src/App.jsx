import axios from "axios";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		axios("http://127.0.0.1:3000/123").then((res) => {
			console.log(res.data);
		});
	}, []);

	return (
		<div className="App">
			<span>zxc</span>
		</div>
	);
}

export default App;
