// export async function GET() {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/sitemap.xml`
//   );

//   const xml = await response.text();

//   console.log("Response Body:");
//   // console.log(xml);

//   return new Response(xml, {
//     headers: {
//       "Content-Type": "application/xml",
//     },
//   });
// }



export async function GET() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/sitemap.xml`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return new Response("Failed to fetch sitemap", {
        status: response.status,
      });
    }

    const xml = await response.text();

    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    });
  } catch (error) {
    console.error("Sitemap fetch error:", error);

    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}