import { NextRequest, NextResponse } from "next/server";
import { createFrames } from "frames.js/next";

let gmCount = 0;

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  const frames = createFrames();

  const { buttonIndex } = await frames.validateRequest(req);

  if (buttonIndex === 1) {
    gmCount++;
  }

  return frames.render({
    image: \`
      <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">
        <rect width="100%" height="100%" fill="white"/>
        <text x="50%" y="50%" font-size="48" text-anchor="middle" fill="black">
          GM Count: \${gmCount}
        </text>
      </svg>\`,
    buttons: [{ label: "Say GM 🙌" }],
  });
};

