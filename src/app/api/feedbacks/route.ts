import prisma from "@/utils/db";
import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const feedbacks = await prisma.userFeedback.findMany({
    where: {
      active: true,
    },
  });

  return NextResponse.json({ feedbacks }, { status: 200 });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  await prisma.userFeedback.create({
    data: {
      id: randomUUID(),
      name: body.name,
      siteUrl: body.siteUrl,
      imageUrl: body.imageUrl,
      message: body.message,
    },
  });

  return NextResponse.json({}, { status: 201 });
}
