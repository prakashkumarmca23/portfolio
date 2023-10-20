
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 100);
});

function toggleMenu() {
    var menu = document.querySelector(".navlist");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
}

function openModal(videoUrl) {
    var modal = document.getElementById('videoModal');
    var videoFrame = document.getElementById('videoFrame');
    videoFrame.src = videoUrl;
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById('videoModal');
    var videoFrame = document.getElementById('videoFrame');
    videoFrame.src = '';
    modal.style.display = 'none';
}


document.getElementById('playVideo').addEventListener('click', function () {
    openModal('https://www.youtube.com/embed/nK9cgHtvsvo?autoplay=1');
});


document.getElementById('closeModal').addEventListener('click', closeModal);

window.onclick = function (event) {
    var modal = document.getElementById('videoModal');
    if (event.target == modal) {
        closeModal();
    }
}



function runProject(url) {
    window.location.href = url;
}

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

document.getElementById('menu-icon').addEventListener('click', function () {
    var navlist = document.querySelector('.navlist');
    navlist.classList.toggle('active');
});
