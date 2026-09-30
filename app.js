// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}


// ===============================
// PORTFOLIO FILTER
// ===============================

const filters = document.querySelectorAll(".filter");
const videoCards = document.querySelectorAll(".video-card");

filters.forEach(filter => {
  filter.addEventListener("click", () => {

    filters.forEach(item => {
      item.classList.remove("active");
    });

    filter.classList.add("active");

    const category = filter.dataset.filter;

    videoCards.forEach(card => {

      if (
        category === "all" ||
        card.dataset.category === category
      ) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }

    });
  });
});


// ===============================
// VIDEO MODAL
// ===============================

const modal = document.querySelector(".modal");
const modalVideo = document.querySelector(".modal video");
const modalClose = document.querySelector(".modal-close");

document.querySelectorAll(".video-thumb").forEach(item => {

  item.addEventListener("click", () => {

    if (!modal) return;

    modal.classList.add("show");

    const video = item.querySelector("video");

    if (video && modalVideo) {
      modalVideo.src = video.currentSrc || video.src;
      modalVideo.play().catch(() => {});
    }

  });

});


function closeModal() {

  if (!modal) return;

  modal.classList.remove("show");

  if (modalVideo) {
    modalVideo.pause();
    modalVideo.currentTime = 0;
  }
}


if (modalClose) {
  modalClose.addEventListener("click", closeModal);
}


if (modal) {
  modal.addEventListener("click", event => {

    if (event.target === modal) {
      closeModal();
    }

  });
}


document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closeModal();
  }

});


// ===============================
// ORDER FORM
// ===============================

const orderForm = document.querySelector("#orderForm");
const successMessage = document.querySelector("#successMessage");

if (orderForm) {

  orderForm.addEventListener("submit", event => {

    event.preventDefault();

    const name = document.querySelector("#name")?.value.trim();
    const phone = document.querySelector("#phone")?.value.trim();
    const service = document.querySelector("#service")?.value;
    const message = document.querySelector("#message")?.value.trim();

    if (!name || !phone || !service) {
      alert("Vui lòng nhập đầy đủ họ tên, số điện thoại và dịch vụ.");
      return;
    }

    if (successMessage) {
      successMessage.style.display = "block";
      successMessage.innerHTML =
        "✅ Đã nhận yêu cầu! Mình sẽ liên hệ với bạn sớm nhất.";
    } else {
      alert("✅ Đã nhận yêu cầu! Mình sẽ liên hệ với bạn sớm nhất.");
    }

    console.log({
      name,
      phone,
      service,
      message
    });

    orderForm.reset();

  });

}


// ===============================
// CURRENT YEAR
// ===============================

const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}
