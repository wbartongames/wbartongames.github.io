// LOADS THE WB BLOG HTML TEMPLATE
// Configurable things:
// Title - replace text content
// Date - replace text content
// Content - html content of blog post

export function LoadBlogTemplate(config)
{
    $.ajaxSetup ({
        // Disable caching of AJAX responses
        cache: false
    });
    
    $("#blog-body").load("/blog/template/template.html", function(){
        // Blog Contents - it's handy to write this in markdown and convert to html later
        $("#blog-content").load("assets/content.html")
        // Blog Title
        document.getElementById("blog-title").textContent = config.title;
        // Blog Date
        document.getElementById("blog-date").textContent = config.date;
    });
}