export default class HomeScreen{
    get btnSearch() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_container")')}
    get searchResult() { return $('android=new UiSelector().className("android.view.ViewGroup").instance(0).childSelector(new UiSelector().text("saxofone"))')}
    get inpSearch() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")')}
    get btnMore() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/nav_tab_more")')}

    async clickBtnSearch() {
      await this.btnSearch.click()
    }
  
    async setValueInpSearch() {
      await this.inpSearch.setValue("saxofone")
    }

    async getSearchResult() {
      return await this.searchResult.getText()
        
    }

    async clickBtnMore() {
      await this.btnMore.click()
    }

}