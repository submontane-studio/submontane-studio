import Link from "next/link";
import Items from "./navigation.json";

export default function Navigation() {
	return (
		<nav>
			<ul>
				{Items.map((item) => (
					<li key={item.slug}>
						<Link href={item.slug}>{item.name}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
