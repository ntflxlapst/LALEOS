import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function App() {
  const videoPlayerRef = useRef<any>(null);
  const audioPlayerRef = useRef<any>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [audioReady, setAudioReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Charger l'API YouTube
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      // Créer le player vidéo (fond)
      videoPlayerRef.current = new window.YT.Player('video-player', {
        videoId: 'Bgqk6t9Be1Q',
        playerVars: {
          autoplay: 1,
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
          loop: 1,
          playlist: 'Bgqk6t9Be1Q',
          mute: 1,
          rel: 0,
          fs: 0,
          playsinline: 1,
          start: 0,
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
            setVideoReady(true);
          },
        },
      });

      // Créer le player audio (musique)
      audioPlayerRef.current = new window.YT.Player('audio-player', {
        videoId: 'HMuYfScGpbE',
        playerVars: {
          autoplay: 1,
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
          loop: 1,
          playlist: 'HMuYfScGpbE',
          rel: 0,
          fs: 0,
          playsinline: 1,
          start: 0,
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
            setAudioReady(true);
          },
        },
      });
    };
  }, []);

  useEffect(() => {
    if (videoReady && audioReady) {
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }
  }, [videoReady, audioReady]);

  return (
    <>
      {/* Écran de chargement */}
      <div
        className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-1000 ${
          isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="text-center">
          <div className="inline-block w-20 h-20 border-4 border-white/20 border-t-white rounded-full animate-spin mb-6"></div>
          <p className="text-white text-2xl font-light tracking-[0.3em]" style={{ fontFamily: "'Cinzel', serif" }}>
            LALEOS
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="relative w-full h-screen overflow-hidden bg-black">
        {/* Vidéo de fond */}
        <div className="absolute inset-0 w-full h-full">
          <div
            id="video-player"
            className="absolute top-1/2 left-1/2 w-[177.78vh] h-[56.25vw] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2"
          />
          {/* Overlay sombre pour améliorer la lisibilité */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Player audio caché */}
        <div id="audio-player" className="hidden" />

        {/* Contenu au premier plan */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center space-y-12 px-4 animate-fade-in">
            {/* Pseudo */}
            <div className="space-y-4">
              <h1 
                className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-white tracking-[0.15em] drop-shadow-2xl"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                laleos
              </h1>
            </div>

            {/* Informations de contact */}
            <div className="space-y-5 text-white max-w-lg mx-auto">
              <div className="backdrop-blur-lg bg-white/10 rounded-2xl px-8 py-5 border border-white/30 shadow-2xl hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.99 1.27-5.62 3.72-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.05-.49-.82-.27-1.47-.42-1.42-.88.03-.24.37-.48 1.02-.73 4-1.74 6.68-2.88 8.03-3.44 3.82-1.58 4.61-1.85 5.13-1.86.11 0 .37.03.54.17.14.11.18.26.2.37.01.08.03.29.01.45z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm font-medium mb-1">Telegram</p>
                    <p className="text-white text-2xl font-semibold tracking-wide">@laleosss</p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-lg bg-white/10 rounded-2xl px-8 py-5 border border-white/30 shadow-2xl hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm font-medium mb-1">Discord</p>
                    <p className="text-white text-2xl font-semibold tracking-wide">4h34</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
