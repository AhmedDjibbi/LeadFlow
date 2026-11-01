const SPRITE = `
<symbol id="i-chip" viewBox="0 0 24 24">
    <rect x="7" y="7" width="10" height="10" rx="2.6" fill="none" stroke="currentColor" stroke-width="1.6"/>
    <rect x="10.3" y="10.3" width="3.4" height="3.4" rx="1" fill="currentColor"/>
    <path d="M9.6 3.6v3.1M14.4 3.6v3.1M9.6 17.3v3.1M14.4 17.3v3.1M3.6 9.6h3.1M3.6 14.4h3.1M17.3 9.6h3.1M17.3 14.4h3.1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  </symbol>
<symbol id="i-code" viewBox="0 0 24 24">
    <path d="M8.4 7.8 4.2 12l4.2 4.2M15.6 7.8 19.8 12l-4.2 4.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
<symbol id="i-robot" viewBox="0 0 24 24">
    <rect x="4.6" y="8" width="14.8" height="11" rx="3.2" fill="none" stroke="currentColor" stroke-width="1.6"/>
    <path d="M12 4v4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    <circle cx="12" cy="3.4" r="1.3" fill="currentColor"/>
    <circle cx="9.4" cy="13.1" r="1.35" fill="currentColor"/>
    <circle cx="14.6" cy="13.1" r="1.35" fill="currentColor"/>
    <path d="M9.6 16.2h4.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </symbol>
<symbol id="i-sparkles" viewBox="0 0 24 24">
    <path d="M11 3.4 12.7 8.6 17.9 10.3 12.7 12 11 17.2 9.3 12 4.1 10.3 9.3 8.6Z" fill="currentColor"/>
    <path d="M18.4 14.2 19.2 16.6 21.5 17.4 19.2 18.2 18.4 20.6 17.6 18.2 15.3 17.4 17.6 16.6Z" fill="currentColor"/>
    <path d="M18 3v2.6M16.7 4.3h2.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </symbol>
<symbol id="i-bolt" viewBox="0 0 24 24">
    <path d="M13.6 2.8 4.9 13.3h5.4l-.9 7.9 8.7-10.5h-5.4z" fill="currentColor"/>
  </symbol>
<symbol id="i-rocket" viewBox="0 0 24 24">
    <path d="M13.9 4.2c2.4-1.4 5-1.5 5.9-1.4.1.9 0 3.5-1.4 5.9l-3.9 6.1-6.6-6.6 6-4Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="m8.5 15.5-2.9 1 1-2.9M7.4 11.3 4.2 12l2.4 2.5M12.7 16.6l-.7 3.2-2.5-2.4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    <circle cx="15.4" cy="8.6" r="1.7" fill="none" stroke="currentColor" stroke-width="1.5"/>
  </symbol>
<symbol id="i-users" viewBox="0 0 24 24">
    <circle cx="9.4" cy="8" r="3.4" fill="none" stroke="currentColor" stroke-width="1.6"/>
    <path d="M3.2 20c0-3.4 2.8-5.8 6.2-5.8s6.2 2.4 6.2 5.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M16.2 5.1a3.1 3.1 0 0 1 0 5.9M18 14.7c2 .7 3.4 2.5 3.4 4.9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  </symbol>
<symbol id="i-globe" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="8.6" fill="none" stroke="currentColor" stroke-width="1.6"/>
    <ellipse cx="12" cy="12" rx="3.7" ry="8.6" fill="none" stroke="currentColor" stroke-width="1.6"/>
    <path d="M3.8 9.2h16.4M3.8 14.8h16.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  </symbol>
<symbol id="i-arrow" viewBox="0 0 24 24">
    <path d="M4.5 12h14M13 6.5l5.5 5.5L13 17.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
<symbol id="i-play" viewBox="0 0 24 24">
    <path d="M9 7.2 17 12l-8 4.8z" fill="currentColor"/>
  </symbol>
<symbol id="i-github" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 2.2A9.8 9.8 0 0 0 8.9 21.3c.5.1.7-.2.7-.5v-1.8c-2.7.6-3.3-1.3-3.3-1.3-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.4-2.1-.2-4.4-1.1-4.4-4.8 0-1.1.4-2 1-2.6-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.6 1 1.5 1 2.6 0 3.7-2.3 4.6-4.4 4.8.4.3.7 1 .7 1.9v2.9c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.2Z"/>
  </symbol>
<symbol id="i-linkedin" viewBox="0 0 24 24">
    <path fill="currentColor" d="M4.8 3.5a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3 9.3h3.7V21H3zM9.4 9.3h3.5v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.5V21h-3.7v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9.4z"/>
  </symbol>
<symbol id="i-x" viewBox="0 0 24 24">
    <path fill="currentColor" d="M17.5 3h3.1l-6.8 7.8L21.8 21h-6.2l-4.9-6.4L5.1 21H2l7.3-8.3L2.4 3h6.4l4.4 5.8zm-1.1 16.1h1.7L7.7 4.8H5.9z"/>
  </symbol>
<symbol id="i-youtube" viewBox="0 0 24 24">
    <path fill="currentColor" d="M21.6 7.5a2.6 2.6 0 0 0-1.8-1.8C18.2 5.2 12 5.2 12 5.2s-6.2 0-7.8.5A2.6 2.6 0 0 0 2.4 7.5 27 27 0 0 0 2 12a27 27 0 0 0 .4 4.5 2.6 2.6 0 0 0 1.8 1.8c1.6.5 7.8.5 7.8.5s6.2 0 7.8-.5a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.5ZM10 15.2V8.8l5.2 3.2z"/>
  </symbol>
<symbol id="i-cube" viewBox="0 0 24 24">
    <path d="M12 3.2 20 7.7v8.6L12 20.8 4 16.3V7.7z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M4.3 7.8 12 12.1l7.7-4.3M12 12.1v8.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  </symbol>
<symbol id="i-layers" viewBox="0 0 24 24">
    <path d="M12 3 3 7.5l9 4.5 9-4.5L12 3Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="m3 12 9 4.5 9-4.5M3 16.5 12 21l9-4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  </symbol>
<symbol id="i-shield" viewBox="0 0 24 24">
    <path d="M12 3 19 5.7v6.1c0 4.3-2.9 7.4-7 9.2-4.1-1.8-7-4.9-7-9.2V5.7z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="m8.9 12 2.2 2.2 4.2-4.3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
<symbol id="i-headset" viewBox="0 0 24 24">
    <path d="M4.6 14.2v-2.3a7.4 7.4 0 0 1 14.8 0v2.3" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    <rect x="2.8" y="13" width="3.8" height="6.2" rx="1.8" fill="none" stroke="currentColor" stroke-width="1.6"/>
    <rect x="17.4" y="13" width="3.8" height="6.2" rx="1.8" fill="none" stroke="currentColor" stroke-width="1.6"/>
    <path d="M19.3 19.2v.6a2.6 2.6 0 0 1-2.6 2.6h-3" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  </symbol>
<symbol id="i-chat" viewBox="0 0 24 24">
    <path d="M4 5.2h16v10.6H9.4L4.4 20z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M8 9.4h8M8 12.4h5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </symbol>
<symbol id="i-bulb" viewBox="0 0 24 24">
    <path d="M9.3 16.3a6.1 6.1 0 1 1 5.4 0v2.4H9.3z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M9.7 21h4.6M10.4 18.7h3.2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M12 2.2v1.4M6.4 4.6l1 1M17.6 4.6l-1 1" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  </symbol>
<symbol id="i-chevron" viewBox="0 0 24 24">
    <path d="m9.5 6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
<symbol id="i-mail" viewBox="0 0 24 24">
    <rect x="2.8" y="5.2" width="18.4" height="13.6" rx="2.6" fill="none" stroke="currentColor" stroke-width="1.6"/>
    <path d="m4 7.4 8 5.6 8-5.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
<symbol id="i-discord" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19.5 5.6A16.2 16.2 0 0 0 15.5 4.4l-.3.6c1.2.3 2.3.8 3.3 1.5a13.5 13.5 0 0 0-11 0c1-.7 2.1-1.2 3.3-1.5l-.3-.6a16.2 16.2 0 0 0-4 1.2C3.9 9.4 3.2 13.2 3.6 17a16.4 16.4 0 0 0 5 2.5l1-1.6c-.7-.2-1.3-.5-1.9-.9l.4-.3a11.7 11.7 0 0 0 11.8 0l.4.3c-.6.4-1.2.7-1.9.9l1 1.6a16.4 16.4 0 0 0 5-2.5c.5-4.4-.6-8.2-2.9-11.4ZM9.1 14.8c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Zm5.8 0c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Z"/>
  </symbol>
<symbol id="i-target" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="8.4" fill="none" stroke="currentColor" stroke-width="1.55"/>
    <circle cx="12" cy="12" r="5.1" fill="none" stroke="currentColor" stroke-width="1.55"/>
    <circle cx="12" cy="12" r="1.9" fill="none" stroke="currentColor" stroke-width="1.55"/>
    <circle cx="12" cy="12" r=".9" fill="currentColor"/>
    <path d="M12 3.6V1.4M12 20.4v2.2M3.6 12H1.4M20.4 12h2.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity=".55"/>
  </symbol>
<symbol id="i-eye" viewBox="0 0 24 24">
    <path d="M2.6 12s3.6-6.3 9.4-6.3S21.4 12 21.4 12s-3.6 6.3-9.4 6.3S2.6 12 2.6 12Z" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linejoin="round"/>
    <circle cx="12" cy="12" r="3.1" fill="none" stroke="currentColor" stroke-width="1.55"/>
    <circle cx="12" cy="12" r="1.2" fill="currentColor"/>
  </symbol>
<symbol id="i-diamond" viewBox="0 0 24 24">
    <path d="M7.6 3.6h8.8l4 5.4L12 20.8 3.6 9z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M3.9 9.2h16.2M7.9 3.9 12 9.2l4.1-5.3M12 9.2v11.1" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round"/>
  </symbol>
<symbol id="i-check" viewBox="0 0 24 24">
    <path d="m4.5 12.6 4.7 4.6L19.5 6.8" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
<symbol id="i-send" viewBox="0 0 24 24">
    <path d="M20.6 3.4 3.9 9.9l6.4 3.8 3.8 6.4 6.5-16.7Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="m10.3 13.7 4.4-4.4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  </symbol>
<symbol id="i-arrow-down" viewBox="0 0 24 24">
    <path d="M12 4.5v14M6.5 13l5.5 5.5L17.5 13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
<symbol id="i-user" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="3.6" fill="none" stroke="currentColor" stroke-width="1.6"/>
    <path d="M4.8 20c0-3.2 3.2-5.4 7.2-5.4s7.2 2.2 7.2 5.4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  </symbol>
<symbol id="i-phone" viewBox="0 0 24 24">
    <path d="M8.2 3.5 10 8.1l-2.1 1.8a13.2 13.2 0 0 0 5.9 5.9l1.8-2.1 4.6 1.8v3.1c0 .9-.7 1.6-1.6 1.6A17.6 17.6 0 0 1 3.4 5.1c0-.9.7-1.6 1.6-1.6z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  </symbol>
<symbol id="i-pin" viewBox="0 0 24 24">
    <path d="M12 21s6.5-5.5 6.5-11A6.5 6.5 0 0 0 5.5 10c0 5.5 6.5 11 6.5 11Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    <circle cx="12" cy="10" r="2.4" fill="none" stroke="currentColor" stroke-width="1.6"/>
  </symbol>
<symbol id="i-tag" viewBox="0 0 24 24">
    <path d="M20.4 12.6 12.6 20.4a1.8 1.8 0 0 1-2.5 0L3.6 13.7V4.4a1 1 0 0 1 1-1h9.3l6.5 6.6a1.9 1.9 0 0 1 0 2.6Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    <circle cx="8" cy="8" r="1.2" fill="currentColor"/>
  </symbol>
<symbol id="i-message" viewBox="0 0 24 24">
    <path d="M20.5 12.4c0 3.8-3.8 6.9-8.5 6.9-1 0-2-.1-2.9-.4L4 21l1.2-3.7C3.9 16 3 14.3 3 12.4 3 8.6 6.8 5.5 11.5 5.5s9 3.1 9 6.9Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    <circle cx="8" cy="12.4" r="1" fill="currentColor"/>
    <circle cx="11.5" cy="12.4" r="1" fill="currentColor"/>
    <circle cx="15" cy="12.4" r="1" fill="currentColor"/>
  </symbol>
<symbol id="i-external" viewBox="0 0 24 24">
    <path d="M13 5h6v6M19 5l-8 8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
`;

export default function IconSprite() {
  return (
    <svg className="sprite" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" dangerouslySetInnerHTML={{ __html: SPRITE }} />
  );
}
