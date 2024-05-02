import { sendMessage } from "@/utils/Email/SendMessage";
import { NextResponse } from "next/server";

export async function POST(Request, Response) {
  try {
    const { name, email, message } = await Request.json();
    console.log(name, email, message);
    const options = {
      name,
      email,
      message,
    };
    await sendMessage(options);
    return NextResponse.json("Sent", {
      status: 200,
      statusText: "OK",
    });
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 501,
      statusText: "Server Error",
    });
  }
}
