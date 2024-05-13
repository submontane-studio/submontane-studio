import { request } from "http";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export const POST = async (req: NextRequest) => {
  const requestBody = await req.text();
  console.log(requestBody);
};
