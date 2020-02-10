import { Builder } from 'selenium-webdriver'
import 'selenium-webdriver/chrome'
import cases from './cases/index'
import { expect } from 'chai';

const DELAY = 0; // 2secs

describe('chrome', () => {
  var build = new Builder()
    .forBrowser('chrome')
    .build();

  for (let i = 0; i < cases.length; i++) {
    let [ func, ...args ] = cases[i];
    func(build, ...args);
  }

  beforeEach(done => {
    setTimeout(() => {
      done()
    }, DELAY)
  });

  after(() => {
    // build.quit();
  })

})
