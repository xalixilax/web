import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardNote,
} from "@/components/ui/card";

export function CardResourcePack({
	name,
	description,
	icon,
	note,
}: { name: string; description: string; icon: string; note: string }) {
	return (
		<Card className="hover:bg-white/60 transition h-full">
			<CardHeader
				style={{
					backgroundImage: `url('${icon}')`,
					imageRendering: "pixelated",
				}}
			>
				<CardNote>{note}</CardNote>
			</CardHeader>
			<CardContent>
				<h3 className="card-title font-[800] text-xxl text-gray-500 uppercase leading-6 mb-2">
					{name}
				</h3>
				<p>{description}</p>
			</CardContent>
			<CardFooter className="text-indigo-600 text-sm font-bold">
				See More
			</CardFooter>
		</Card>
	);
}
