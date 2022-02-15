
// Colocando o querySelector dentro do $, igual ao JQuery //
const $ = document.querySelector.bind(document)


// Sistema de navegação entre as tabs, replicável para qualquer outro elemento, basta mudar o "links"...
// e substituir o data-attribute (id) direto no html. 
class TabNavigator {
  html = {
    links: [...$(".tab-links").children],
    contents: [...$(".tab-content").children],
  }

  removeAllActiveClass() {
    this.html.links.forEach((link) => {
      link.className = link.classList.remove("active")
    })
  }

  hideAllTabContent() {
    this.html.contents.forEach((tab) => {
      tab.className = tab.classList.remove("active")
    })
  }

  showCurrentTab(id) {
    const tabContent = $(`#${id}`)
    tabContent.classList.add("active")
  }

  selectTab(event) {
    this.removeAllActiveClass()
    this.hideAllTabContent()

    const target = event.currentTarget
    this.showCurrentTab(target.dataset.id)

    target.classList.add("active")
  }

  listenForChange() {
    this.html.links.forEach((tab) => {
      tab.addEventListener("click", this.selectTab.bind(this))
    })
  }

  init() {
    this.listenForChange()
  }
}

window.addEventListener("load", () => {
  const tabNavigator = new TabNavigator()
  tabNavigator.init()
})
