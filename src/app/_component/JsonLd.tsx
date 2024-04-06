import type { ReactElement } from "react";
import type { Thing, WithContext } from "schema-dts";

type Props = {
  schema: WithContext<Thing>;
};

export default function JsonLd({ schema }: Props): ReactElement {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml:
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} // eslint-disable-next-line react/no-danger
    />
  );
}
