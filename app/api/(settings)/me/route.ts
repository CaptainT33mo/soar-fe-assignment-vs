import { dummyAccount } from "@/lib/data";
import { AccountDataRequest } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ account: dummyAccount }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Something went wrong, please try again!" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const userData: AccountDataRequest = await req.json();

    // Omit password from response
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...secureData } = userData.account;

    return NextResponse.json({ account: secureData }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Something went wrong, please try again!" },
      { status: 500 }
    );
  }
}