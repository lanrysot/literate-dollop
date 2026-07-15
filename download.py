import os
import urllib.request
from urllib.parse import urljoin, urlparse
import re

base_url = "https://femimaven.netlify.app/"

def download_file(url, local_path):
    print(f"Downloading {url} to {local_path}")
    os.makedirs(os.path.dirname(local_path), exist_ok=True)
    try:
        # Use headers to simulate a browser
        req = urllib.request.Request(
            url, 
            data=None, 
            headers={
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        )
        with urllib.request.urlopen(req) as response:
            with open(local_path, 'wb') as out_file:
                out_file.write(response.read())
    except Exception as e:
        print(f"Failed to download {url}: {e}")

def main():
    # download index.html
    html_url = base_url
    html_path = "index.html"
    download_file(html_url, html_path)

    try:
        with open(html_path, "r", encoding="utf-8") as f:
            html_content = f.read()
    except Exception as e:
        print(f"Error reading index.html: {e}")
        return

    # find basic assets using regex
    # href="..."
    # src="..."
    # we only want to download relative files or files on the same domain
    links = re.findall(r'(?:href|src)=["\']([^"\']+)["\']', html_content)
    
    for link in set(links):
        if link.startswith("http") and not link.startswith(base_url):
            continue
        if link.startswith("mailto:") or link.startswith("tel:") or link.startswith("#"):
            continue
        if link == "/":
            continue
            
        full_url = urljoin(base_url, link)
        
        parsed = urlparse(full_url)
        local_path = parsed.path
        if local_path.startswith("/"):
            local_path = local_path[1:]
        
        if not local_path or local_path == "":
            continue
            
        # Download local assets (css, js, images)
        if full_url.startswith(base_url):
            download_file(full_url, local_path)
            
            # If it's a CSS file, parse it for url() resources
            if local_path.endswith(".css"):
                try:
                    with open(local_path, "r", encoding="utf-8") as css_file:
                        css_content = css_file.read()
                    
                    css_urls = re.findall(r'url\([\'"]?([^\'"\)]+)[\'"]?\)', css_content)
                    for css_url in set(css_urls):
                        if css_url.startswith("http") or css_url.startswith("data:"):
                            continue
                        css_full_url = urljoin(full_url, css_url)
                        css_parsed = urlparse(css_full_url)
                        css_local = css_parsed.path
                        if css_local.startswith("/"):
                            css_local = css_local[1:]
                        if css_full_url.startswith(base_url):
                            download_file(css_full_url, css_local)
                except Exception as e:
                    print(f"Error processing css file {local_path}: {e}")

if __name__ == "__main__":
    main()
