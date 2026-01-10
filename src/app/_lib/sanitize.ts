import DOMPurify from "isomorphic-dompurify";

/**
 * HTMLコンテンツをサニタイズして安全なHTMLを返す
 * @param html - サニタイズするHTML文字列
 * @returns サニタイズされたHTML文字列
 */
export function sanitizeHTML(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      "p",
      "br",
      "strong",
      "em",
      "a",
      "h2",
      "h3",
      "h4",
      "ul",
      "ol",
      "li",
      "img",
      "pre",
      "code",
      "blockquote",
      "span",
      "div",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
    ],
    ALLOWED_ATTR: ["href", "src", "alt", "class", "id", "target", "rel"],
    ALLOW_DATA_ATTR: false,
  });
}
