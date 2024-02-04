(() => {
	const refs = {
		openModalBtn: document.querySelectorAll("[data-modal-open]"),
		closeModalBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal]"),
		openModalCatalog: document.querySelector(".apartment-btn"),
		modalCatalog: document.querySelector(".modal-catalog"),
		closeModalCatalog: document.querySelector(".btn-modal-catalog"),
		header: document.querySelector(".header"),
	};

	refs.openModalBtn[0].addEventListener("click", toggleModal);
	refs.openModalBtn[1].addEventListener("click", toggleModal);
	refs.openModalBtn[2].addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);
	refs.openModalCatalog.addEventListener("click", toggleModalCatalog);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
		document.body.classList.toggle("no-scroll");
		if (refs.modal.classList.contains("is-hidden")) {
			refs.header.style.position = "fixed";
        } else {
           refs.header.style.position = "static"; 
        }
	}
	function toggleModalCatalog() {
		refs.modalCatalog.classList.toggle("is-hidden");
		document.body.classList.toggle("no-scroll");
		if (refs.modalCatalog.classList.contains("is-hidden")) {
			refs.header.style.position = "fixed";
		} else {
			refs.header.style.position = "static";
		}
	}
})();
