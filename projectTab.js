let allTabs = document.querySelectorAll(".tab");
let content = document.querySelectorAll(".content")

allTabs.forEach(t=>{

  t.addEventListener('mouseover',e=>{
    switchTab(e);
  })

})

let switchTab = (e) => {

  allTabs.forEach(t=>{
    t.classList.remove('active');
  })
  e.target.classList.add('active');

  content.forEach(c=>{
    c.classList.remove('active');
  })

  let selectedTab = e.target.getAttribute("data-tab");
  let activeTab = document.querySelector(selectedTab);
  activeTab.classList.add('active');
}



/* $(document).ready(function () {
  $(".tabBtn1").click(function (e) {
    e.preventDefault();
    $(".tabBtn1").addClass("btnOnClick");
    $(".tabBtn2").removeClass("btnOnClick");
    $(".tabBtn3").removeClass("btnOnClick");
    $(".tabBtn4").removeClass("btnOnClick");
    $(".tab1").removeClass("displayNone");
    $(".tab1").addClass("active");
    $(".tab2").removeClass("active");
    $(".tab2").addClass("displayNone");
    $(".tab3").removeClass("active");
    $(".tab3").addClass("displayNone");
    $(".tab4").removeClass("active");
    $(".tab4").addClass("displayNone");
  });
  $(".tabBtn2").click(function (e) {
    e.preventDefault();
    $(".tabBtn2").addClass("btnOnClick");
    $(".tabBtn4").removeClass("btnOnClick");
    $(".tabBtn3").removeClass("btnOnClick");
    $(".tabBtn1").removeClass("btnOnClick");
    $(".tab2").removeClass("displayNone");
    $(".tab2").addClass("active");
    $(".tab1").removeClass("active");
    $(".tab1").addClass("displayNone");
    $(".tab3").removeClass("active");
    $(".tab3").addClass("displayNone");
    $(".tab4").removeClass("active");
    $(".tab4").addClass("displayNone");
  });
  $(".tabBtn3").click(function (e) {
    e.preventDefault();
    $(".tabBtn3").addClass("btnOnClick");
    $(".tabBtn2").removeClass("btnOnClick");
    $(".tabBtn4").removeClass("btnOnClick");
    $(".tabBtn1").removeClass("btnOnClick");
    $(".tab3").removeClass("displayNone");
    $(".tab3").addClass("active");
    $(".tab1").removeClass("active");
    $(".tab1").addClass("displayNone");
    $(".tab2").removeClass("active");
    $(".tab2").addClass("displayNone");
    $(".tab4").removeClass("active");
    $(".tab4").addClass("displayNone");
  });
  $(".tabBtn4").click(function (e) {
    e.preventDefault();
    $(".tabBtn4").addClass("btnOnClick");
    //$(".tabBtn2" && ".tabBtn3" && ".tabBtn1").removeClass("btnOnClick");
    $(".tabBtn2").removeClass("btnOnClick");
    $(".tabBtn3").removeClass("btnOnClick");
    $(".tabBtn1").removeClass("btnOnClick");
    $(".tab4").removeClass("displayNone");
    $(".tab4").addClass("active");
    $(".tab1").removeClass("active");
    $(".tab1").addClass("displayNone");
    $(".tab3").removeClass("active");
    $(".tab3").addClass("displayNone");
    $(".tab2").removeClass("active");
    $(".tab2").addClass("displayNone");
  });
});
 */