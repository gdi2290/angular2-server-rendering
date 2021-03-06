/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../typings/_custom/ng2.d.ts" />
/// <reference path="../typings/_custom/server.d.ts" />

// import {bootstrap} from './angular2_client/bootstrap.client';
console.time('angular2/angular2 in client');
import * as angular from 'angular2/angular2';
// import {bootstrap} from './angular2_client/bootstrap-defer';

import {bind, OpaqueToken} from 'angular2/di';
import {ShadowDomStrategy, NativeShadowDomStrategy} from 'angular2/render';
console.timeEnd('angular2/angular2 in client');
import {App} from './app/app';


export function main() {
  return angular.bootstrap(App, [
    // doesn't work with server rendering
    // bind(ShadowDomStrategy).toClass(NativeShadowDomStrategy),
  ]);
}
