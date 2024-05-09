export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Max-Age": "86400",
      "Submontane-Header": "submontane-code",
    },
  });
};

// Set CORS to all /api responses
export const onRequest: PagesFunction = async (context) => {
  const response = await context.next();
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Max-Age", "86400");
  response.headers.set("Submontane-Header", "submontane-code");
  return response;
};

// import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

// export const onRequest: PagesFunction = (context) =>
//   mailChannelsPlugin({
//     personalizations: [
//       {
//         to: [{ name: "Some User", email: "goh.0911@gmail.com" }],
//         // This value has to be the domain you added DKIM records to and where you are sending your email from
//         dkim_domain: "submontane.jp",
//         // This value has be the same as the selector you chose for your DKIM record name
//         // For example, use "mailchannels" if you used "mailchannels._domainkey" as your record name
//         dkim_selector: "mailchannels",
//         dkim_private_key: context.env.DKIM_PRIVATE_KEY,
//       },
//     ],
//     from: {
//       name: "ACME Support",
//       // The domain of your `from` address must be the same as the domain you set up MailChannels Domain Lockdown for
//       email: "t.yamashita@submontane.jp",
//     },
//     respondWith: () => {
//       return new Response(
//         "Thank you for submitting your enquiry. A member of the team will be in touch shortly.",
//       );
//     },
//   })(context);
