/**
 * Mocking client-server processing
 */
import _images from '../middleware/images.json';

const TIMEOUT = 100;

export default {
  getImages(cb, timeout) {
    setTimeout(() => cb(_images), timeout || TIMEOUT);
  }
}
