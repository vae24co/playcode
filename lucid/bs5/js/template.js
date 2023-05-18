$(function () {
    ("use strict");
    skinChanger();

    // Page Loader
    setTimeout(function () {
        $(".page-loader-wrapper").fadeOut();
    }, 50);

    // Main Menu in MetisMenu
    $(".main-menu").metisMenu();

    // Navbar Search Form Width
    $('.navbar-form.search-form input[type="text"]')
        .on("focus", function () {
            $(this).animate(
                {
                    width: "+=50px",
                },
                300
            );
        })
        .on("focusout", function () {
            $(this).animate(
                {
                    width: "-=50px",
                },
                300
            );
        });

    // toggle fullwidth layout
    $(".btn-toggle-fullwidth").on("click", function () {
        if (!$("body").hasClass("layout-fullwidth")) {
            $("body").addClass("layout-fullwidth");
            $(this).find(".fa").toggleClass("fa-arrow-left fa-arrow-right");
        } else {
            $("body").removeClass("layout-fullwidth");
            $(this).find(".fa").toggleClass("fa-arrow-left fa-arrow-right");
        }
    });

    // off-canvas menu toggle
    $(".btn-toggle-offcanvas").on("click", function () {
        $("body").toggleClass("offcanvas-active");
    });

    $("#main-content").on("click", function () {
        $("body").removeClass("offcanvas-active");
    });

    //Skin changer
    function skinChanger() {
        $(".choose-skin li").on("click", function () {
            var $body = $("#layout");
            var $this = $(this);

            var existTheme = $(".choose-skin li.active").data("theme");
            $(".choose-skin li").removeClass("active");
            $body.removeClass("theme-" + existTheme);
            $this.addClass("active");
            $body.addClass("theme-" + $this.data("theme"));
        });
    }

    // LTR/RTL js
    $(".theme-rtl input:checkbox").on("click", function () {
        if ($(this).is(":checked")) {
            $("body").addClass("rtl_mode");
        } else {
            $("body").removeClass("rtl_mode");
        }
    });

    // Tooltip
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // light and dark theme setting js
    var toggleSwitch = document.querySelector(
        '.theme-switch input[type="checkbox"]'
    );
    var toggleHcSwitch = document.querySelector(
        '.theme-high-contrast input[type="checkbox"]'
    );
    var currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);

        if (currentTheme === "dark") {
            toggleSwitch.checked = true;
        }
        if (currentTheme === "high-contrast") {
            toggleHcSwitch.checked = true;
            toggleSwitch.checked = false;
        }
    }
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            $('.theme-high-contrast input[type="checkbox"]').prop("checked", false);
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
    }
    function switchHc(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute("data-theme", "high-contrast");
            localStorage.setItem("theme", "high-contrast");
            $('.theme-switch input[type="checkbox"]').prop("checked", false);
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
    }
    toggleSwitch.addEventListener("change", switchTheme, false);
    toggleHcSwitch.addEventListener("change", switchHc, false);
    // end

    // sparklines
    var randomizeArray = function (arg) {
        var array = arg.slice();
        var currentIndex = array.length,
            temporaryValue,
            randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };

    // data for the sparklines that appear below header area
    var sparklineData = [
        47,
        45,
        54,
        38,
        56,
        24,
        65,
        31,
        37,
        39,
        62,
        51,
        35,
        41,
        35,
        27,
        93,
        53,
        61,
        27,
        54,
        43,
        19,
        46,
    ];

    // Block Header Right Mini Bar Chart
    // Chart Visitors
    var options1 = {
        chart: {
            type: "bar",
            width: 60,
            height: 40,
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            width: 2,
        },
        colors: ["#ffd55d"],
        series: [
            {
                data: [25, 66, 41, 89, 63, 25, 44, 12],
            },
        ],

        tooltip: {
            fixed: {
                enabled: false,
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return "";
                    },
                },
            },
            marker: {
                show: false,
            },
        },
    };
    new ApexCharts(document.querySelector("#bh_visitors"), options1).render();

    // Visits
    var options1 = {
        chart: {
            type: "bar",
            width: 60,
            height: 40,
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            width: 2,
        },
        colors: ["#ffd55d"],
        series: [
            {
                data: [20, 18, 38, 95, 55, 23, 29, 36],
            },
        ],

        tooltip: {
            fixed: {
                enabled: false,
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return "";
                    },
                },
            },
            marker: {
                show: false,
            },
        },
    };
    new ApexCharts(document.querySelector("#bh_visits"), options1).render();

    // Chats
    var options1 = {
        chart: {
            type: "bar",
            width: 60,
            height: 40,
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            width: 2,
        },
        colors: ["#ffd55d"],
        series: [
            {
                data: [35, 76, 51, 99, 73, 35, 54, 22],
            },
        ],

        tooltip: {
            fixed: {
                enabled: false,
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return "";
                    },
                },
            },
            marker: {
                show: false,
            },
        },
    };
    new ApexCharts(document.querySelector("#bh_chats"), options1).render();
});