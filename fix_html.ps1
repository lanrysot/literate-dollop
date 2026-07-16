$htmlFiles = @("portfolio.html", "portfolio/index.html")

foreach ($file in $htmlFiles) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        $content = $content.Replace('<p class="modal-tagline" id="mTagline">
          <div class="modal-grid" id="mSections"></div>
        </p>', '<p class="modal-tagline" id="mTagline">Project description</p>
        <div class="modal-grid" id="mSections"></div>')
        Set-Content -Path $file -Value $content -NoNewline
    }
}
