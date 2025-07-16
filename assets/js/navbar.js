// Navbar Active State Handler
document.addEventListener("DOMContentLoaded", function () {
  // تحديد الصفحة النشطة
  setActiveNavLink();

  // إضافة تأثيرات إضافية للناف بار
  addNavbarEffects();
});

function setActiveNavLink() {
  // الحصول على اسم الصفحة الحالية
  let currentPage = window.location.pathname.split("/").pop();

  // إذا كانت الصفحة فارغة أو تحتوي على index، اعتبرها الصفحة الرئيسية
  if (
    currentPage === "" ||
    currentPage === "index.html" ||
    currentPage.includes("index")
  ) {
    currentPage = "index.html";
  }

  // الحصول على جميع روابط التنقل
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // إزالة class active من جميع الروابط
  navLinks.forEach((link) => link.classList.remove("active"));

  // إضافة class active للرابط المطابق للصفحة الحالية
  navLinks.forEach((link) => {
    let linkHref = link.getAttribute("href");
    if (linkHref === currentPage) {
      link.classList.add("active");
    }
  });
}

function addNavbarEffects() {
  // إغلاق القائمة عند النقر على رابط في الهاتف المحمول
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // التحقق من أن الشاشة صغيرة (هاتف محمول)
      if (window.innerWidth < 992) {
        // إغلاق القائمة
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bsCollapse.hide();
      }
    });
  });

  // تأثير التمرير للناف بار
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar-custom");
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)";
    } else {
      navbar.style.boxShadow = "0 2px 4px rgba(0,0,0,0.08)";
    }
  });
}
