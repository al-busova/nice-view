(() => {
	const refs = {
		openModalBtn: document.querySelectorAll("[data-modal-open]"),
		closeModalBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal]"),
		header: document.querySelector(".header"),
	};

	refs.openModalBtn[0].addEventListener("click", toggleModal);
	refs.openModalBtn[1].addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
		document.body.classList.toggle("no-scroll");
		if (refs.modal.classList.contains("is-hidden")) {
			refs.header.style.position = "fixed";
        } else {
           refs.header.style.position = "static"; 
        }
	}
})();
