
from http.server import HTTPServer, SimpleHTTPRequestHandler
from urllib.parse import parse_qs


class MyHandler(SimpleHTTPRequestHandler):

    def do_GET(self):
        if self.path == "/demo_test":
            response = "This is some text from an external server."

            self.send_response(200)
            self.send_header("Content-type", "text/plain; charset=utf-8")
            self.end_headers()
            self.wfile.write(response.encode("utf-8"))

        else:
            super().do_GET()

    def do_POST(self):
        if self.path == "/demo_test_post":

            content_length = int(self.headers.get("Content-Length", 0))
            post_data = self.rfile.read(content_length).decode("utf-8")

            form_data = parse_qs(post_data)

            name = form_data.get("name", [""])[0]
            city = form_data.get("city", [""])[0]

            response = f"Dear {name}. Hope you live well in {city}."

            self.send_response(200)
            self.send_header("Content-type", "text/plain; charset=utf-8")
            self.end_headers()
            self.wfile.write(response.encode("utf-8"))

        else:
            self.send_error(404, "Not Found")


server = HTTPServer(("0.0.0.0", 8000), MyHandler)

print("Server running at http://localhost:8000")

server.serve_forever()
