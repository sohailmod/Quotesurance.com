interface SectionDividerProps {
  variant?: 'wave' | 'diagonal' | 'curve';
  flip?: boolean;
  className?: string;
}

export default function SectionDivider({
  variant = 'wave',
  flip = false,
  className = ''
}: SectionDividerProps) {
  const getPath = () => {
    switch (variant) {
      case 'wave':
        return 'M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z';
      case 'diagonal':
        return 'M0,0 L1440,96 L1440,0 Z';
      case 'curve':
        return 'M0,64 Q720,0 1440,64 L1440,0 L0,0 Z';
      default:
        return 'M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z';
    }
  };

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <svg
        className={`w-full h-16 md:h-24 ${flip ? 'rotate-180' : ''}`}
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="dividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="rgb(168, 85, 247)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d={getPath()}
          fill="url(#dividerGradient)"
        />
      </svg>
    </div>
  );
}
