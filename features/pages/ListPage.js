import { APP_BASE_URL, API_BASE_URL } from '../constants'

export default class ListPage {
  constructor(browser) {
    this.browser = browser
  }

  async initialize() {
    this.page = await this.browser.newPage()
    await this.page.goto(`${APP_BASE_URL}/books/${this.id}`)
  }

  async getHeading() {
    await this.page.waitForSelector('h1')
    const result = await this.page.evaluate(() => {
      return document.querySelector('h1').innerText
    })
    return result
  }
}
