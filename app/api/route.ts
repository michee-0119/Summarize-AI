import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const user = await prisma.user.create({
      data: {
        email: "test1@test.com",
        id: "2",
      },
    });
    console.log(user);
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 },
    );
  } catch (error) {
    return new Response("Error creating user", { status: 500 });
  }
}
