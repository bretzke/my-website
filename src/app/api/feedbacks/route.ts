import prisma from "@/utils/db";
import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  await prisma.userFeedback.create({
    data: {
      id: randomUUID(),
      name: body.name,
      siteUrl: body.siteUrl,
      imageUrl: body.imageUrl,
      message: body.message.replace(/\n/g, "<br />"),
    },
  });

  return NextResponse.json({}, { status: 201 });
}
