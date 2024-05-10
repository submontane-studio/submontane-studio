async function sendMail({
  content,
}: {
  content: string;
}) {
  const payload = {
    personalizations: [
      {
        to: [{ name: "NAME", email: "t.yamashita@submontane.jp" }],
        dkim_domain: "submontane.jp",
        dkim_selector: "mailchannels", // DKIMのレコード名と同じセレクタを指定
        dkim_private_key: process.env.DKIM_PRIVATE_KEY,
      },
    ],
    from: {
      name: "SUBMONTANE STUDIO",
      email: "contact@submontane.jp",
    },
    subject: "お問い合わせがありました",
    content: [{ type: 'text/plain; charset="UTF-8"', value: content }],
  };

  // MailChannels APIを利用してメール送信
  const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (response.status === 200 || response.status === 202) {
    return; // 正常に送信できた場合
  }

  try {
    const errors = ((await response.json()) as { errors?: string[] })?.errors;
    console.error({ errors });
  } catch {
    console.error(response.statusText);
  }
}
