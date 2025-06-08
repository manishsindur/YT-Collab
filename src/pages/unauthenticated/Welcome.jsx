function Welcome() {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-red-400 text-6xl">Welcome page</h1>
			<p className="text-red-300 text-3xl">Under Development</p>
			<button className="bg-blue-500 px-4 py-2 text-xl rounded-full text-white hover:bg-blue-600 mt-4 cursor-pointer">
				Login
			</button>
		</div>
	);
}

export default Welcome;
