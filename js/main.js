$(".menu-open button").on("click", function (event) {
  event.stopPropagation();
  $(".sidebar").addClass("active");
  $("body").addClass("sidebar-open");
});
$(".menu-close button").on("click", function () {
  $(".sidebar").removeClass("active");
  $("body").removeClass("sidebar-open");
});

$(window).on("click", function () {
  $(".sidebar").removeClass("active");
  $("body").removeClass("sidebar-open");
});

$(".sidebar").on("click", function (event) {
  event.stopPropagation();
});

$(document).ready(function () {
  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
  });
  $("#example-1").DataTable({
    responsive: true,
    scrollX: true,
    language: {
      url: "/js/Arabic.json",
      paginate: {
        previous: "Previous page",
      },
    },
    
  });
  $('#example-1').on('page', function () {
    feather.replace();
  } );
  
  $("#example-2").DataTable({
    responsive: true,
    scrollX: true,
    language: {
      url: "/js/Arabic.json",
      paginate: {
        previous: "Previous page",
      },
    },
    
  });
  $("#example-3").DataTable({
    responsive: true,
    scrollX: true,
    language: {
      url: "/js/Arabic.json",
      paginate: {
        previous: "Previous page",
      },
    },
    
  });
  $("#example-4").DataTable({
    responsive: true,
    scrollX: true,
    language: {
      url: "/js/Arabic.json",
      paginate: {
        previous: "Previous page",
      },
    },
    
  });
  $("#example-5").DataTable({
    responsive: true,
    scrollX: true,
    language: {
      url: "/js/Arabic.json",
      paginate: {
        previous: "Previous page",
      },
    },
    
  });
});

(function () {
  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    var new_tab = "#" + $(this).attr("id") + "-note";
    $(new_tab).siblings(".notes").slideUp();
    $(new_tab).slideDown();
  });
  window.onload = function () {
    var current = "#" + $('a[data-toggle="tab"]').attr("id") + "-note";
    $(current).fadeIn();
    var totalProgress, progress;
    const circles = document.querySelectorAll(".progresss");
    for (var i = 0; i < circles.length; i++) {
      totalProgress = circles[i]
        .querySelector("circle")
        .getAttribute("stroke-dasharray");
      progress = circles[i].parentElement.getAttribute("data-percent");

      circles[i].querySelector(".bar").style["stroke-dashoffset"] =
        (totalProgress * progress) / 100;
    }
  };

  $(".choose-answer-question").on("click", function () {
    $(".choose-answer-question-note").slideToggle();
  });
})();
feather.replace();

$(".sidebar").load("../sidebar.html", function () {
  feather.replace();

  $(".sidebar #menu ul  .parent .child .child-parent .active")
    .parent()
    .parent()
    .fadeIn()
    .parent()
    .parent()
    .fadeIn()
    .parent()
    .addClass("active");

  $(".sidebar #menu ul  .parent .child .child-parent .active")
    .parent()
    .parent()
    .fadeIn()
    .siblings("a")
    .addClass("active-link");

  $(".sidebar #menu ul  .parent .child  .active")
    .parent()
    .parent()
    .fadeIn()
    .parent()
    .addClass("active");

  $(".sidebar #menu ul  .parent > a").on("click", function (e) {
    e.preventDefault();
    $(this).siblings("ul").slideToggle();
    $(this).parent().toggleClass("active");
  });

  $(".sidebar #menu ul  .parent  .child-parent")
    .siblings("a")
    .on("click", function (e) {
      e.preventDefault();
      $(this).siblings("ul").slideToggle();
      $(this).toggleClass("active-link");
    });
});

// Time picker plugin

$(function(){
  $('.timepicker').timepicker({});
});

// Date picker plugin
$('[data-toggle="datepicker"]').datepicker();

// charts

$(function () {
  var ctx = document.getElementById("barChart");

  var BarChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      datasets: [
        {
          label: "خدمة ناجحة",
          data: [90, 30, 60, 90, 120, 50, 70, 20, 60, 40],
          order: 1,
          maxBarThickness: 8,
          minBarLength: 2,
          backgroundColor: "#036fe7",
        },
        {
          label: "خدمة قيد الانشاء",
          data: [10, 50, 80, 90, 30, 50, 50, 70, 80, 100],
          order: 2,
          maxBarThickness: 8,
          minBarLength: 2,
          backgroundColor: "#f93a5a",
        },
        {
          label: "خدمة لم تكتمل",
          data: [50, 80, 30, 90, 80, 50, 0, 20, 40, 60],
          order: 3,
          maxBarThickness: 8,
          minBarLength: 2,
          backgroundColor: "#f7a556",
        },
      ],
    },
    options: {
     
      legend: {
        rtl:true,
        labels: {
          boxWidth: 12,
        },
      },
    },
  });


  var ctx2 = document.getElementById("DoughnutChart").getContext('2d');
  var data2 = {
    datasets: [{
      data: [1, 2, 3],
      backgroundColor: ["#3c8dbc", "#f56954", "#f39c12"],
  }],
  labels: ["من 17 الى 20 سنة", "من 25 الى 30 سنة", "اكثر من 30 سنة"],
  };
  var myDoughnutChart = new Chart(ctx2, {
      type: 'doughnut',
      data: data2,
      options: {
      
        maintainAspectRatio: true,
        legend: {
          position: "bottom",
          rtl:true,
          labels: {
            boxWidth: 12,
          },
        },
      },
  });




  var ctx_3 = document.getElementById("PieChart").getContext('2d');
  var data_3 = {
    datasets: [
      {
        data: [1, 2, 3,4],
        backgroundColor: ["#e11638", "#44861b", "#91d1e2", "#e6eff8"],
      },
    ],
    labels: ["دوام طبيعي", "دوام إضافي", "عطل رسمية", "إجازات مأذونة"],
  };
  var PieChart = new Chart(ctx_3, {
    type: "pie",
    data: data_3,
    options: {
      cutoutPercentage: 0,
     
      legend: {

        rtl:true,
        position: "bottom",
        labels: {
          boxWidth: 12,
        },
      },
    },
  });



  
  var ctx4 = document.getElementById("lineChart");

  var BarChart = new Chart(ctx4, {
    type: "line",
    data: {
      labels: [
        "January",
        "Febreuary",
        "March",
        "April",
        "May",
        "June",
        "July",
      ],
      datasets: [
        {
          label: "$أعلى من 400 ",
          data: [50, 30, 60, 30, 20, 50, 10],
          order: 1,
          borderColor: "#ff6384",
          fill: false,
          pointBackgroundColor:"#ff6384",
        },
        {
          label: "$أعلى من 1000",
          data: [10, 20, 30, 40, 30, 50, 10],
          order: 2,
          borderColor: "#38a3eb",
          fill: false,
          pointBackgroundColor:"#38a3eb",

        },
      ],
    },
    options: {
      responsive: true,
      legend: {
        rtl:true,
        position:'bottom',
        labels: {
          boxWidth: 12,
        },
      },
    },
  });



  var ctx5 = document.getElementById("DoughnutChart2").getContext('2d');
  var data5 = {
    datasets: [{
      data: [1, 2],
      backgroundColor: ["#035dea", "#0db0de"],
  }],
  labels: ['خدمات مكتملة', 'خدمات ملغية'],
  };
  var myDoughnutChart = new Chart(ctx5, {
      type: 'doughnut',
      data: data5,
      options: {
      
        maintainAspectRatio: true,
        legend: {
          position: "right",
          rtl:true,
          labels: {
            boxWidth: 12,
          },
        },
      },
  });


});
