export async function server(): Promise<Response> {
  return new Response(
    `
      <html>
        <head>
          <title>Valentine's Day Invitation</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body { margin: 0; font-family: Arial, sans-serif; }
          </style>
        </head>
        <body>
          <div id="root"></div>
          <script type="module" src="${import.meta.url}"></script>
        </body>
      </html>
      `,
    { headers: { "content-type": "text/html" } }
  );
}
