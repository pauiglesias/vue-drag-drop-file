
export default {

	prevent: function(e) {
		if (!e.target.className || !e.target.className.length || !e.target.className.split(' ').includes('droppable')) {
			e.preventDefault()
			e.dataTransfer.effectAllowed = 'none'
			e.dataTransfer.dropEffect = 'none'
		}
	},

	install(Vue, options) {
		window.addEventListener('dragover', this.prevent)
		window.addEventListener('dragenter', this.prevent, false)
		window.addEventListener('drop', this.prevent)
	}
}
