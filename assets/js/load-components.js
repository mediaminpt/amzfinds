$(document).ready(function () {
    // Helper function to load component and handle errors
    function loadComponent(url, placeholderId) {
        return $.get(url)
            .done(function(data) {
                $(placeholderId).replaceWith(data);
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console.error("Failed to load " + url, textStatus, errorThrown);
            });
    }

    var headerPromise = loadComponent("assets/components/header.html", "#header-placeholder");

    var navPromise = $.get("assets/components/nav.html")
        .done(function (data) {
            $("#nav-placeholder").replaceWith(data);
            
            var currentPage = window.location.pathname.split("/").pop();
            if (currentPage === "") currentPage = "index.html";

            $("#nav ul.links li a").each(function () {
                var linkHref = $(this).attr("href");
                if (linkHref === currentPage) {
                    $(this).parent("li").addClass("active");
                }
            });
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            console.error("Failed to load nav", textStatus, errorThrown);
        });

    var footerPromise = loadComponent("assets/components/footer.html", "#footer-placeholder");

    // When all components are loaded (or failed), initialize main.js
    // We use .always() so main.js runs even if a component fails to load
    $.when(headerPromise, navPromise, footerPromise).always(function() {
        // Wait a tick to ensure DOM updates are processed
        setTimeout(function() {
            if (window.initMain) {
                window.initMain(jQuery);
            }
        }, 50);
    });
});