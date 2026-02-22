
import React, { useEffect, useRef, useState } from 'react';

interface ARViewerProps {
  itemImage: string;
  itemName: string;
  onClose: () => void;
}

const ARViewer: React.FC<ARViewerProps> = ({ itemImage, itemName, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    async function startCamera() {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: 'environment' } 
        });
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (err) {
        console.error("Camera error:", err);
        setError("Unable to access camera. Please ensure permissions are granted.");
      }
    }

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    let clientX, clientY;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    setPosition({
      x: (clientX / window.innerWidth) * 100,
      y: (clientY / window.innerHeight) * 100
    });
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 w-full p-6 z-20 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent">
        <div className="text-white">
          <h2 className="text-lg font-bold uppercase tracking-widest">{itemName}</h2>
          <p className="text-[10px] text-primary font-bold uppercase tracking-[0.2em]">AR Visualization Mode</p>
        </div>
        <button 
          onClick={onClose}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      {/* Camera Feed */}
      <div className="flex-1 relative bg-stone-900">
        {error ? (
          <div className="absolute inset-0 flex items-center justify-center p-12 text-center text-white space-y-4 flex-col">
            <span className="material-symbols-outlined text-6xl text-primary">videocam_off</span>
            <p className="max-w-xs">{error}</p>
            <button onClick={onClose} className="bg-primary text-white px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-widest">Return to Showroom</button>
          </div>
        ) : (
          <video 
            ref={videoRef} 
            autoPlay 
            playsInline 
            className="w-full h-full object-cover"
          />
        )}

        {/* Floating Item */}
        {!error && (
          <div 
            className="absolute cursor-move select-none touch-none transition-transform duration-75"
            style={{ 
              left: `${position.x}%`, 
              top: `${position.y}%`, 
              transform: `translate(-50%, -50%) scale(${scale})`,
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            onMouseMove={handleMouseMove}
            onTouchMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchEnd={handleMouseUp}
          >
            <img 
              src={itemImage} 
              alt="Furniture Overlay" 
              className="max-w-[80vw] max-h-[60vh] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-none"
              draggable={false}
            />
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary/80 backdrop-blur-sm text-white px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest">
              Drag to move
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="absolute bottom-0 w-full p-10 z-20 flex flex-col items-center bg-gradient-to-t from-black/60 to-transparent gap-6">
        <div className="flex items-center gap-8">
           <button 
            onClick={() => setScale(prev => Math.max(0.2, prev - 0.1))}
            className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center text-white border border-white/10 hover:bg-primary transition-all"
          >
            <span className="material-symbols-outlined">remove</span>
          </button>
          <div className="text-center">
            <p className="text-white text-[10px] font-bold uppercase tracking-widest mb-1">Scale</p>
            <p className="text-primary font-black">{Math.round(scale * 100)}%</p>
          </div>
          <button 
            onClick={() => setScale(prev => Math.min(2, prev + 0.1))}
            className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center text-white border border-white/10 hover:bg-primary transition-all"
          >
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
        <p className="text-white/40 text-[9px] uppercase tracking-[0.3em] font-medium">Use two fingers to pinch or controls to adjust scale</p>
      </div>
    </div>
  );
};

export default ARViewer;
