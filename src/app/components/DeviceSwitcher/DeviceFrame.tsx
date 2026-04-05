import { useState, ReactNode } from 'react';
import { DeviceSwitcher } from './DeviceSwitcher';
import { devices, Device } from './devices';

interface DeviceFrameProps {
  children: ReactNode;
}

export const DeviceFrame = ({ children }: DeviceFrameProps) => {
  const [selectedDevice, setSelectedDevice] = useState<Device>(
    devices.find((d) => d.id === 'desktop')!
  );
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');

  const isDesktop = selectedDevice.id === 'desktop';
  
  const width = orientation === 'landscape' && !isDesktop ? selectedDevice.height : selectedDevice.width;
  const height = orientation === 'landscape' && !isDesktop ? selectedDevice.width : selectedDevice.height;

  if (isDesktop) {
    // Desktop mode - no frame
    return (
      <>
        {children}
        <DeviceSwitcher
          selectedDevice={selectedDevice}
          onDeviceChange={setSelectedDevice}
          orientation={orientation}
          onOrientationChange={setOrientation}
        />
      </>
    );
  }

  // Device mode - wrap in frame
  return (
    <div className="min-h-screen bg-[#E5E7EB] flex items-start justify-center py-6">
      <div
        className="bg-white relative transition-all duration-300 ease-in-out"
        style={{
          width: `${width}px`,
          height: height > 0 ? `${height}px` : '100vh',
          borderRadius: selectedDevice.category === 'Apple' ? '44px' : '20px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          overflow: 'hidden',
        }}
      >
        {/* Device Bezel - Optional decorative frame */}
        {selectedDevice.category === 'Apple' && selectedDevice.type === 'mobile' && (
          <>
            {/* Dynamic Island for newer iPhones */}
            {(selectedDevice.id.includes('14-pro') ||
              selectedDevice.id.includes('15') ||
              selectedDevice.id.includes('16')) && (
              <div
                className="absolute top-2 left-1/2 -translate-x-1/2 bg-black rounded-full z-[100]"
                style={{ width: '120px', height: '34px', pointerEvents: 'none' }}
              />
            )}
            
            {/* Home bar for newer iPhones */}
            <div
              className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-full z-[100]"
              style={{ width: '120px', height: '5px', opacity: 0.5, pointerEvents: 'none' }}
            />
          </>
        )}

        {/* App Content */}
        <div className="w-full h-full overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </div>

      <DeviceSwitcher
        selectedDevice={selectedDevice}
        onDeviceChange={setSelectedDevice}
        orientation={orientation}
        onOrientationChange={setOrientation}
      />
    </div>
  );
};
