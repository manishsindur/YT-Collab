function Sidebar() {
	return (
		<aside className="p-4 h-full shadow-3xl shadow-border rounded-lg">
			<h1 className="text-white text-2xl">Dashboard Y</h1>
			<ul>
				<li className="text-white text-sm">Upload Video</li>
				<li className="text-white text-sm">Your Videos</li>
				<li className="text-white text-sm">Creator Chat</li>
				<li className="text-white text-sm">Settings</li>
				<li className="text-white text-sm">Logout</li>
			</ul>
		</aside>
	);
}

export default Sidebar;
