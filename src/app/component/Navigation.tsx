import Link from "next/link";
import Items from "./navigation.json";

export default function Navigation() {
	return (
		<nav>
			<ul>
				{Items.map((item) => (
					<li key={item.slug}>
						<Link href={item.slug}>{item.name}</Link>
						{item.subpages?.map((subItem) => (
							<Link key={subItem.slug} href={`${item.slug}/${subItem.slug}`}>
								{subItem.name}
							</Link>
						))}
					</li>
				))}
			</ul>
		</nav>
	);
}
