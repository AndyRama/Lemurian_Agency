// External imports
import "bootstrap";

// Internal imports
import { initCookieBanner } from '../components/cookies'
document.addEventListener('turbolinks:load', () => {
  initCookieBanner();
  // Call your functions here, e.g:
  // initSelect2();
});

require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

var Turbolinks = require("turbolinks")
Turbolinks.start()