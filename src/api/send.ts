export const onRequest = async ({
  request,
  env,
}: { request: Request; env: Record<string, string> }) => {
  const recipientEmail = "info@submontane.jp";
  const sender = "SUBMONTANE STUDIO";
  const senderEmail = "info@submontane.jp";
  const form = await request.formData();
  const name = `${form.get("family-name")}  ${form.get("given-name")}`;
  const trade = form.get("trade-name");
  const email = form.get("email");
  const type = form.get("type");
  const detail = form.get("detail");

  console.log(request);
  const res = await fetch("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: recipientEmail }],
          dkim_domain: "submontane.jp",
          dkim_selector: "mailchannels",
          dkim_private_key: process.env.DKIM_PRIVATE_KEY,
        },
      ],
      from: { email: senderEmail, name: sender },
      subject: "お問い合わせがありました",
      content: [
        {
          type: "text/plain",
          value: `お名前: ${name}\n屋号・商号・会社名: ${trade}\nメールアドレス: ${email}\nお問い合わせ種別: ${type}\nお問い合わせ内容: ${detail}`,
        },
      ],
    }),
  });

  if (res.ok) {
    await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: email }],
          },
        ],
        from: { email: senderEmail, name: sender },
        subject: "お問い合わせありがとうございます",
        content: [
          {
            type: "text/plain",
            value: `${name} 様\n\nこの度はお問い合わせいただき、誠にありがとうございます。\n\nお問い合わせ内容を確認のうえ、担当者よりご連絡させていただきます。\n\n何卒よろしくお願いいたします。\n\nSUBMONTANE STUDIO`,
          },
        ],
      }),
    });

    return new Response("送信しました", { status: 200 });
  }

  return new Response("送信に失敗しました", { status: 500 });
};
