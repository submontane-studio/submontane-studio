"use client";

import { useEffect } from "react";
import tocbot from "tocbot";

export default function Tocbot() {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc", //　目次を追加する class 名
      contentSelector: "#body", // 目次を取得するコンテンツの class 名
      headingSelector: "h2, h3, h4", // 目次として取得する見出しタグ
    });

    // 不要となったtocbotインスタンスを削除
    return () => tocbot.destroy();
  }, []);

  return <div className="toc" />;
}
