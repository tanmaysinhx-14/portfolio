import { NextResponse } from "next/server";

import { featuredWork } from "@/data/portfolio";

export const GET = async () => {
  return NextResponse.json({
    featuredWork,
  });
};
