import Sidebar from "../components/Sidebar";

function YouTubersDashboard() {
	return (
		<div className="h-screen bg-background grid grid-cols-[18%_1fr] gap-8 p-8">
			<div>
				<Sidebar />
			</div>
			<main className="grid gap-4 shadow-3xl shadow-border">
				<div className="bg-red-400 white rounded-xl">hello</div>
				<div className="bg-red-400 white rounded-xl">next</div>
			</main>
		</div>
	);
}

export default YouTubersDashboard;
