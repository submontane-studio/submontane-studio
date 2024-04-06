export type BreadcrumbItem = {
  "@type": "ListItem";
  position: number;
  name: string; // title
  item?: string; // URL
};

export interface BreadcrumbJsonLd {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: BreadcrumbItem[];
}
