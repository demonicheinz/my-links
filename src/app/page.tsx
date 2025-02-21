import { Avatar } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";

const links = [
	{ title: "Website", url: "https://heinz.id" },
	{ title: "Blog", url: "https://heinz.id/blog" },
	{ title: "GitHub", url: "https://github.com/demonicheinz" },
	{ title: "Instagram", url: "https://instagram.com/demonicheinz" },
	{ title: "Twitter", url: "https://twitter.com/chrysantastixxx" },
];

export default function Home() {
	return (
		<main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-4">
			<Card className="w-full max-w-md bg-white shadow-lg">
				<CardHeader className="flex flex-col items-center space-y-4">
					<Avatar className="h-24 w-24">
						<img
							alt="Profile picture"
							src="/placeholder.svg?height=96&width=96"
							className="aspect-square h-full w-full"
						/>
					</Avatar>
					<div className="text-center">
						<h1 className="text-2xl font-bold text-slate-800">Heinz</h1>
						<p className="text-slate-600">One link to get to know me better.</p>
					</div>
				</CardHeader>
				<CardContent className="flex flex-col space-y-4">
					{links.map((link) => (
						<Button
							key={link.title}
							variant="outline"
							className="w-full justify-start text-left text-slate-700 hover:bg-slate-100"
							asChild>
							<a href={link.url} target="_blank" rel="noopener noreferrer">
								{link.title}
							</a>
						</Button>
					))}
				</CardContent>
			</Card>
		</main>
	);
}
