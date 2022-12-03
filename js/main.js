// "use strict";

// const isMobile = {
//   Android: function () {
//     return navigator.userAgent.match(/Android/i);
//   },
//   BlackBerry: function () {
//     return navigator.userAgent.match(/BlackBerry/i);
//   },
//   iOS: function () {
//     return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//   },
//   Opera: function () {
//     return navigator.userAgent.match(/Opera Mini/i);
//   },
//   Windows: function () {
//     return navigator.userAgent.match(/IEMobile/i);
//   },
//   any: function () {
//     return (
//       isMobile.Android() ||
//       isMobile.BlackBerry() ||
//       isMobile.iOS() ||
//       isMobile.Opera() ||
//       isMobile.Windows()
//     );
//   },
// };

// if (isMobile.any()) {
//   document.body.classList.add("_touch");
// } else {
//   document.body.classList.add("_pc");
// }

const burger = document.querySelector(".icon-menu");
const menu = document.querySelector(".nav-menu");

if (burger) {
  const menubefore = document.querySelector(".nav-menu-before");
  const iconx = document.querySelector(".icon-x");

  burger.addEventListener("click", function (e) {
    iconx.classList.toggle("_active");
    burger.classList.toggle("_active");
    menu.classList.toggle("_active");
    menubefore.classList.toggle("_active");
    document.body.classList.toggle("_lock");

    iconx.addEventListener("click", function (r) {
      burger.classList.remove("_active");
      menu.classList.remove("_active");
      iconx.classList.remove("_active");
      menubefore.classList.remove("_active");
      document.body.classList.remove("_lock");
    });
  });
}

// const li = document.querySelectorAll(".li");
// if (li.length > 0) {
//   for (let index = 0; index < li.length; index++) {
//     const l = li[index];
//     l.addEventListener("click", function (i) {
//       menu.classList.remove("_close");
//       // i.stopPropagation();
//       menu.addEventListener("click", function (c) {
//         menu.classList.add("_close");
//         l.classList.remove("_active");
//       });
//     });
//   }
// }

const lists = document.querySelectorAll(".nav-contentarrow");

if (lists.length > 0) {
  for (let index = 0; index < lists.length; index++) {
    const list = lists[index];
    list.addEventListener("click", function (a) {
      list.parentElement.classList.toggle("_active");
      menu.classList.remove("_close");
      a.stopPropagation();
    });
  }
}

const sublists = document.querySelectorAll(".nav-sublist");
if (sublists.length > 0) {
  for (let index = 0; index < sublists.length; index++) {
    const sublist = sublists[index];
    sublist.addEventListener("click", function (g) {
      menu.classList.remove("_close");
      g.stopPropagation();
    });
  }
}

// const lists = document.querySelectorAll(".li");

// for (let index = 0; index < lists.length; index++) {
//   const li = lists[index];

//   document.addEventListener("click", add);

//   function add(event) {
//     if (event.target.closest(".nav-contentarrow")) {
//       li.classList.toggle("_active");
//     }
//     if (!event.target.closest("nav-menu")) {
//       li.classList.remove("_active");
//     }
//   }
// }

const links = document.querySelectorAll(".nav-list-item[data-goto");
if (links.length > 0 && document.window > 768) {
  links.forEach((link) => {
    link.addEventListener("click", onlinkclick);
  });

  function onlinkclick(s) {
    const link = s.target;
    if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
      const gotoBlock = document.querySelector(link.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("nav").offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      s.preventDefault();
    }
  }
}
