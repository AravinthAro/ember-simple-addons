import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('home', { path: '/'});
  this.route('my-works');
  this.route('about-me');
  this.route('contact');
  this.route('gallery');
  this.route('testimony');
  this.route('careers');
  this.route('history');
  this.route('pricing');
});
