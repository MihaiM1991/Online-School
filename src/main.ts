import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
.then(() => {
  const scriptTag = document.createElement('script');
  scriptTag.src = environment.apiGoogle;
  document.head.appendChild(scriptTag);
})
  .catch(err => console.error(err));
