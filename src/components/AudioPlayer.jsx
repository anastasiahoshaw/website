import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Music, Disc, Sparkles } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const tracks = [
    {
      title: "Prelude and Fugue in A Minor, BWV 543",
      composer: "Johann Sebastian Bach",
      duration: "9:45",
      durationSec: 585,
      organ: "E.M. Skinner / Casavant Frères Organ",
      description: "Dramatic Baroque masterpiece featuring intricate counterpoint and expressive pedal passages."
    },
    {
      title: "Choral No. 3 in A Minor",
      composer: "César Franck",
      duration: "12:10",
      durationSec: 730,
      organ: "French Romantic Pipe Organ",
      description: "Soaring French Romantic composition with lush swell shades and powerful tuttis."
    },
    {
      title: "Symphony No. 5, Op. 42: V. Toccata",
      composer: "Charles-Marie Widor",
      duration: "5:30",
      durationSec: 330,
      organ: "Grand Symphonic Organ",
      description: "Exhilarating, virtuoso festive organ toccata with triumphant pedal melody."
    },
    {
      title: "Carillon de Westminster, Op. 54 No. 6",
      composer: "Louis Vierne",
      duration: "6:50",
      durationSec: 410,
      organ: "Cathedral Pipe Organ",
      description: "Chimes motif building into a majestic, resonant cathedral climax."
    }
  ];

  const currentTrack = tracks[currentTrackIndex];

  // Simulating playback progress for smooth audio demo experience
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.5;
        });
      }, 500);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const togglePlay = (index = null) => {
    if (index !== null && index !== currentTrackIndex) {
      setCurrentTrackIndex(index);
      setProgress(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const formatProgressTime = (percentage, durationSec) => {
    const currentSec = Math.floor((percentage / 100) * durationSec);
    const mins = Math.floor(currentSec / 60);
    const secs = currentSec % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="audio-player-card">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Disc className={isPlaying ? "spin-slow" : ""} style={{ color: 'var(--accent-gold)' }} size={24} />
          <div>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-gold)' }}>Recorded Audio Highlight</span>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', margin: 0 }}>{currentTrack.title}</h3>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button 
            onClick={() => setIsMuted(!isMuted)} 
            style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.4rem' }}
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <span>{formatProgressTime(progress, currentTrack.durationSec)}</span>
          <span style={{ color: 'var(--accent-gold)' }}>{currentTrack.composer}</span>
          <span>{currentTrack.duration}</span>
        </div>

        {/* Progress Bar */}
        <div 
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickPos = (e.clientX - rect.left) / rect.width;
            setProgress(clickPos * 100);
          }}
          style={{
            height: '6px',
            width: '100%',
            background: 'var(--bg-surface-elevated)',
            borderRadius: '3px',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid var(--border-subtle)'
          }}
        >
          <div 
            style={{
              height: '100%',
              width: `${progress}%`,
              background: 'linear-gradient(90deg, var(--accent-gold-dark), var(--accent-gold))',
              borderRadius: '3px',
              transition: 'width 0.2s linear'
            }}
          />
        </div>
      </div>

      {/* Track Listing */}
      <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {tracks.map((track, idx) => {
          const isSelected = idx === currentTrackIndex;
          return (
            <div 
              key={idx} 
              className={`audio-track-item ${isSelected ? 'playing' : ''}`}
              onClick={() => togglePlay(idx)}
            >
              <button className="track-play-btn" onClick={(e) => { e.stopPropagation(); togglePlay(idx); }}>
                {isSelected && isPlaying ? <Pause size={18} /> : <Play size={18} style={{ marginLeft: '2px' }} />}
              </button>

              <div className="track-info">
                <div className="track-title">{track.title}</div>
                <div className="track-composer">{track.composer} • <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>{track.organ}</span></div>
              </div>

              <div className="track-duration">{track.duration}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
