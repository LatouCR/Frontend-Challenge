import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { ShortCodeResponse, FetchedData } from "@/types/type";

export async function GET() {
  try {
    const res = await fetch("http://localhost:3000");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const links: FetchedData = await res.json();
    return NextResponse.json(links);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: "No link was found!",
        },
        {
          status: 400,
        }
      );
    }
  }
}


export async function POST(request: NextRequest) {
    try {
      const url = new URL(request.url);
      const fullUrl = url.searchParams.get("full_url");
  
      if (!fullUrl) {
        return NextResponse.json(
          {
            message: "Missing full_url in request query",
          },
          {
            status: 400,
          }
        );
      }
  
      const res = await fetch("http://localhost:3000/short_urls.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ full_url: fullUrl }),
      });
  
      if (!res.ok) {
        throw new Error("Failed to create short URL");
      }
  
      const shortCodeResponse: ShortCodeResponse = await res.json();
      return NextResponse.json(shortCodeResponse);
    } catch (error) {
      if (error instanceof Error) {
        return NextResponse.json(
          {
            message: "Cannot create a new link!",
          },
          {
            status: 400,
          }
        );
      }
    }
  }
