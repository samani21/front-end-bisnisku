import { useEffect } from 'react';
import Script from 'next/script';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.ttq = window.ttq || [];
    window.ttq.methods = [
      "page", "track", "identify", "instances", "debug", "on", "off", "once",
      "ready", "alias", "group", "enableCookie", "disableCookie", "holdConsent",
      "revokeConsent", "grantConsent"
    ];
    window.ttq.setAndDefer = function (t, e) {
      t[e] = function () {
        t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
      };
    };
    for (var i = 0; i < window.ttq.methods.length; i++) {
      window.ttq.setAndDefer(window.ttq, window.ttq.methods[i]);
    }
    window.ttq.instance = function (t) {
      for (var e = window.ttq._i[t] || [], n = 0; n < window.ttq.methods.length; n++) {
        window.ttq.setAndDefer(e, window.ttq.methods[n]);
      }
      return e;
    };
    window.ttq.load = function (e, n) {
      var r = "https://analytics.tiktok.com/i18n/pixel/events.js";
      window.ttq._i = window.ttq._i || {};
      window.ttq._i[e] = [];
      window.ttq._i[e]._u = r;
      window.ttq._t = window.ttq._t || {};
      window.ttq._t[e] = +new Date;
      window.ttq._o = window.ttq._o || {};
      window.ttq._o[e] = n || {};
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = r + "?sdkid=" + e + "&lib=ttq";
      var f = document.getElementsByTagName("script")[0];
      f.parentNode.insertBefore(s, f);
    };
    window.ttq.load('CVJ18MRC77U2QJH96U3G');
    window.ttq.page();
  }, []);

  return (
    <>
      {/* Pastikan script tetap dimuat */}
      <Script
        strategy="lazyOnload"
        src="https://analytics.tiktok.com/i18n/pixel/events.js"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
