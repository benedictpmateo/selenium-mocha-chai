import { until } from 'selenium-webdriver'
import { expect } from 'chai';
export default function elementLocated (build, msg = 'Locates an element and runs a callback', by, callback = () => {}) {
  it (msg, () => {
    return build
      .wait(until.elementLocated(by))
      .then(callback)
  })
}