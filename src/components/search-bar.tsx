import { Input } from "@/components/ui/input";
import { packs as resourcePacks } from "@/data/resource-packs";
import { useState } from "react";
import { CardResourcePack } from "./card-resource-pack";

export function SearchBar() {
	const [packs, setPacks] = useState(resourcePacks);
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		setInputValue(newValue);

		const filteredPacks = resourcePacks.filter((pack) => {
			return pack.name.toLowerCase().includes(newValue.toLowerCase());
		});
		setPacks(filteredPacks);
	};

	return (
		<>
			<Input
				type="text"
				value={inputValue}
				onChange={handleInputChange}
				className="flex bg-white border-2 border-foreground mb-8"
				placeholder="Search for pack names..."
			/>
			<div
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8"
				id="container"
			>
				{packs.map((pack) => (
					<a href={`/resource-pack/${pack.slug}`} key={pack.slug}>
						<CardResourcePack
							key={pack.slug}
							name={pack.name}
							description={pack.shortDescription}
							icon={pack.icon}
							note={pack.category}
						/>
					</a>
				))}
			</div>
		</>
	);
}
