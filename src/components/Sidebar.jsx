import { useState } from "react";

function Sidebar() {
	const [activeTab, setActiveTab] = useState("Upload Video");
	const navItems = [
		"Upload Video",
		"Your Videos",
		"Creator Chat",
		"Settings",
		"Logout",
	];
	return (
		<aside className="p-4 h-full shadow-3xl shadow-Neutral-600 rounded-lg">
			<h1 className="text-white text-2xl mb-3">Dashboard Y</h1>
			<ul className="gap-4">
				{navItems.map((item) => (
					<li
						key={item}
						onClick={() => setActiveTab(item)}
						className={`nav-items ${
							activeTab === item ? "bg-Neutral-600" : "border-l-transparent"
						}`}
					>
						{item}
					</li>
				))}
			</ul>
		</aside>
	);
}

export default Sidebar;
