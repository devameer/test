$("#success-btn").click(function () {
  swal({
    title: "تم التعديل  بنجاح",
    icon: "success",
    buttons: {
      confirm: false,
      cancel: "اغلاق",
    },
  });
});
$("#add-success-btn").click(function () {
  swal({
    title: "تمت الإضافة بنجاح",
    icon: "success",
    buttons: {
      confirm: false,
      cancel: "اغلاق",
    },
  });
});

$("#save-success-btn").click(function () {
  swal({
    title: "تم الحفظ بنجاح",
    icon: "success",
    buttons: {
      confirm: false,
      cancel: "اغلاق",
    },
  });
});

$("#delete-confirm-btn").click(function () {
  swal({
    title: "هل تريد تأكيد عملية الحذف ؟",
    icon: "error",
    buttons: {
      confirm: "نعم",
      cancel: "الغاء",
    },
  });
});

$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});


$("#fileInput").on('change', function() { 
  function showname () {
      var name = document.getElementById('fileInput'); 
     $('.input-file label').html(name.files.item(0).name)
    
    };
 showname()
});

$("#cancel").on('click', function() { 

  var name = document.getElementById('fileInput'); 
  $('.input-file label').html('اختر الملف');

});

$(".attach-file").on('change', function() { 
  function showname () {
      var name = document.getElementById('rule-file'); 
     $('.attach-file label .text span').html(name.files.item(0).name)
    
    };
 showname()
});