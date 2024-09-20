import prisma from "@/utils/db";
import { v4 as uuidv4 } from "uuid";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const body = await req.json();

  await prisma.userFeedback.create({
    data: {
      id: uuidv4(),
      name: body.name,
      siteUrl: body.siteUrl,
      imageUrl: body.imageUrl,
      message: body.message.replace(/\n/g, "<br />"),
    },
  });

  return NextResponse.json({}, { status: 201 });
}
