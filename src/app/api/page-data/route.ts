import { NextResponse } from "next/server";

import { pageData } from "@/data/portfolio";

export const GET = async () => {
  return NextResponse.json(pageData);
};
