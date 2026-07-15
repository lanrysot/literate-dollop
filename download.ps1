$baseUrl = "https://femimaven.netlify.app/"

$files = @(
    "",
    "index.html",
    "style.css",
    "IMG_4387.webp",
    "IMG_4387.PNG",
    "FEMI-PICS.jpg.webp",
    "FEMI-PICS.jpg",
    "clients/Mr-Abraham.png",
    "clients/pol.png",
    "clients/Mr-olumide.jpg",
    "portfolio.html"
)

foreach ($file in $files) {
    if ($file -eq "") {
        $url = $baseUrl
        $localPath = "index.html"
    } else {
        $url = $baseUrl + $file
        $localPath = $file
    }

    $dir = Split-Path $localPath -Parent
    if ($dir -and -not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir | Out-Null
    }

    Write-Host "Downloading $url to $localPath"
    try {
        Invoke-WebRequest -Uri $url -OutFile $localPath
    } catch {
        Write-Host "Failed to download $url : $_"
    }
}
