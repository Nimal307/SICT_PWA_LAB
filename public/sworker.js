var responseContent =
"<html>"+
"<body>"+
"<style>"+
"body {text-align : center; background-color: #333; color: #eee;}"+
"</style>"+
"<h1>Gotham Imperial Hotel</h1>" +
"<p> There seems to be a problem with your connection.</p>"+
"<p> Come visit us at 1 Imperial plaza, Gotham City for free WiFi.</p>"+
"</body>"+
"</html>";

self.addEventListener("fetch", (event)=>{
    event.respondWith(
        fetch(event.request).catch(()=>{
        return new Response(
            responseContent,
            {headers: {"Content-Type": "text/html"}}
        );
    })
);
}
);