import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(
    { messsage: "Deu tudo certo média açai" },
    {
      status: 200,
    },
  );
}
