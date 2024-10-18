const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')

//select tab content item 
function selectItem(e){
    removeBorder()
    //add border to current tab
    this.classList.add('tab-border')
    removeTabContent()
    document.getElementById(`${this.id}-content`).classList.add('show')
}

//remove border for every tab
function removeBorder(){
    tabItems.forEach(tabItem => tabItem.classList.remove('tab-border'))
}

//remove other tab content
function removeTabContent() {
    tabItems.forEach(tabItem => document.getElementById(`${tabItem.attributes.id.value}-content`).classList.remove('show'))
}

//listen for tab clicks
tabItems.forEach(tabItem => tabItem.addEventListener('click',selectItem))