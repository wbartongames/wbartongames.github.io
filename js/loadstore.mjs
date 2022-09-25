// LOADS THE WB STORE HTML TEMPLATE
// Configurable things:
// Title - replace text content
// Logo - image based on path
// Feature Graphic - image based on path
// Download Link - replace link attribute
// Version - replace text content
// Description - load html based on path
// Release Notes - load html based on path
// Screenshots - load html based on path

export function LoadStoreTemplate(config)
{
    $.ajaxSetup ({
        // Disable caching of AJAX responses
        cache: false
    });
    
    $("#store-body").load("/store/template/template.html", function(){
        // Store Description
        $("#store-description").load("assets/description.html")
        // Store Release Notes
        $("#store-release-notes").load("assets/release-notes.html")
        // Store Download Link
        document.getElementById("store-download").setAttribute("href", config.download_link);
        // Store Title
        document.getElementById("store-title").textContent = config.title;
        // Store Download Version
        document.getElementById("store-version").textContent = config.version;
        // Store Logo
        document.getElementById("store-logo").setAttribute("alt", config.title);
        // Store Feature Graphic
        document.getElementById("store-graphic").setAttribute("alt", config.title);
        // Store Screenshots
        const carousel = document.getElementById("store-screenshots");
        for (let i = 1; i < config.num_screenshots + 1; i++)
        {
            // Create div
            const div = document.createElement("div");
            div.classList.add("carousel-item");
            if (i == 1)
            {
                div.classList.add("active");
            }
            // Create img under div
            const img = document.createElement("img");
            img.classList.add("rounded");
            img.classList.add("mx-auto");
            img.classList.add("d-block");
            img.classList.add("w-75");
            img.setAttribute("src", "screenshots/" + i + ".png");
            img.setAttribute("alt", "Screenshot " + i);
            // Create clickable img + image preview
            const a = document.createElement("a");
            a.setAttribute("href", "javascript:;");
            a.onclick = function() {
                $("#store-imagepreview-img").attr("src", this.children[0].getAttribute("src"));
                $('#store-imagepreview-modal').modal('show');
            };
            // Add div to carousel
            a.appendChild(img);
            div.appendChild(a);
            carousel.appendChild(div);
        }
    });
}