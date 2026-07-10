const CLARITY_ID = import.meta.env.VITE_CLARITY_PROJECT_ID;

export const initClarity = (): void => {
  if (!CLARITY_ID) {
    return;
  }

  // Prevent duplicate script injection
  if (document.getElementById('clarity-script')) {
    return;
  }

  const script = document.createElement('script');
  script.id = 'clarity-script';
  script.type = 'text/javascript';
  script.async = true;
  script.innerHTML = `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window,document,"clarity","script","${CLARITY_ID}");
  `;
  document.head.appendChild(script);
};
