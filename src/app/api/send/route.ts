import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export const POST = async (req: NextRequest) => {
  const request: {
    text01: string;
    text02: string;
  } = await req.json();

  const payload = {
    personalizations: [
      {
        to: [
          {
            email: request.text01,
            name: "テスト",
          },
        ],
        dkim_domain: "submontane.jp",
        dkim_selector: "mailchannels",
        dkim_private_key: process.env.DKIM_PRIVATE_KEY,
      },
    ],
    from: {
      name: "SUBMONTANE STUDIO",
      email: "info@submontane.jp",
    },
    subject: "お問い合わせありがとうございます",
    content: [
      {
        type: "text/plain",
        value: `お問い合わせありがとうございました。\n\nお問い合わせ内容 : ${request.text02}`,
      },
    ],
  };

  const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (response.status === 200 || response.status === 202) {
    return NextResponse.json("正常に送信されました", { status: 200 });
  }
  // const res = await req.json();

  // return NextResponse.json("", { status: 200 });
};
