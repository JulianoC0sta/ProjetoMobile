import  HomeScreen from "../pageObjects/home.screen.js"
import  OnboardingScreen from "../pageObjects/onboarding.screen.js"

describe('Wikipedia', () =>{
    it('Validar pesquisa no aplicativo', async () => {
        const onboarding = new OnboardingScreen()
        const homescreen = new HomeScreen()
        await onboarding.clickBtnSkip()
        await homescreen.clickBtnSearch()
        await homescreen.setValueInpSearch()
        expect(await homescreen.getSearchResult()).toBe('saxofone')
    })
})