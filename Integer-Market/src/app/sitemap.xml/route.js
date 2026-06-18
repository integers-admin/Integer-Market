export async function GET() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/sitemap.xml`
  );

  const xml = await response.text();

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}