/* =========================================
   WEBSITE NAVIGATION
   This file can be used on EVERY page.
========================================= */


document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------
       PRIMARY NAVIGATION
    ----------------------------------------- */

    const navigation = `
        <div class="primary-navigation">

            <a href="index.html" data-page="index.html">
                Home
            </a>

            <a href="about.html" data-page="about.html">
                About Me
            </a>

            <a href="interests.html" data-page="interests.html">
                My Interests
            </a>

            <a href="games.html" data-page="games.html">
                Games
            </a>

        </div>


        <div class="secondary-navigation">

            <a href="about.html">
                Who I Am
            </a>

            <a href="interests.html">
                Favorites
            </a>

            <a href="games.html">
                Mini Games
            </a>

        </div>
    `;


    /* -----------------------------------------
       INSERT NAVIGATION
    ----------------------------------------- */

    const navContainer =
        document.getElementById("navigation");

    if (navContainer) {

        navContainer.innerHTML = navigation;

    }


    /* -----------------------------------------
       FIND CURRENT PAGE
    ----------------------------------------- */

    let currentPage =
        window.location.pathname.split("/").pop();


    /*
       If the page is the homepage, treat it
       as index.html.
    */

    if (
        currentPage === "" ||
        currentPage === "/"
    ) {

        currentPage = "index.html";

    }


    /* -----------------------------------------
       HIGHLIGHT CURRENT PAGE
    ----------------------------------------- */

    const navLinks =
        document.querySelectorAll(
            "[data-page]"
        );


    navLinks.forEach(function (link) {

        if (
            link.getAttribute("data-page")
            === currentPage
        ) {

            link.classList.add("active-page");

        }

    });


    /* -----------------------------------------
       SECONDARY NAVIGATION
    ----------------------------------------- */

    const primaryLinks =
        document.querySelectorAll(
            ".primary-navigation a"
        );

    const secondary =
        document.querySelector(
            ".secondary-navigation"
        );


    primaryLinks.forEach(function (link) {

        link.addEventListener(
            "mouseenter",
            function () {

                if (secondary) {

                    secondary.classList.add(
                        "show"
                    );

                }

            }
        );

    });


    if (secondary) {

        secondary.addEventListener(
            "mouseleave",
            function () {

                secondary.classList.remove(
                    "show"
                );

            }
        );

    }

});
