import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

console.log("DKIM_PRIVATE_KEY", process.env.DKIM_PRIVATE_KEY);

export const onRequest: PagesFunction = (context) =>
  mailChannelsPlugin({
    personalizations: [
      {
        to: [{ name: "Some User", email: "goh.0911@gmail.com" }],
        // This value has to be the domain you added DKIM records to and where you are sending your email from
        dkim_domain: "submontane.jp",
        // This value has be the same as the selector you chose for your DKIM record name
        // For example, use "mailchannels" if you used "mailchannels._domainkey" as your record name
        dkim_selector: "mailchannels",
        dkim_private_key: context.env.DKIM_PRIVATE_KEY,
      },
    ],
    from: {
      name: "ACME Support",
      // The domain of your `from` address must be the same as the domain you set up MailChannels Domain Lockdown for
      email: "t.yamashita@submontane.jp",
    },
    respondWith: () => {
      return new Response(
        "Thank you for submitting your enquiry. A member of the team will be in touch shortly.",
      );
    },
  })(context);
