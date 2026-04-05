import { useState } from 'react';
import { devices, Device } from './devices';
import { Smartphone, ChevronDown, ChevronUp, Check, Monitor } from 'lucide-react';

interface DeviceSwitcherProps {
  selectedDevice: Device;
  onDeviceChange: (device: Device) => void;
  orientation: 'portrait' | 'landscape';
  onOrientationChange: (orientation: 'portrait' | 'landscape') => void;
}

export const DeviceSwitcher = ({
  selectedDevice,
  onDeviceChange,
  orientation,
  onOrientationChange,
}: DeviceSwitcherProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'All' | 'Apple' | 'Android' | 'Custom'>('All');
  const [customWidth, setCustomWidth] = useState('');
  const [customHeight, setCustomHeight] = useState('');

  const filteredDevices = devices.filter((device) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Custom') return false;
    return device.category === activeTab;
  });

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'Apple':
        return 'bg-[#1D4ED8] text-white';
      case 'Android':
        return 'bg-[#15803D] text-white';
      case 'Desktop':
        return 'bg-[#7C3AED] text-white';
      case 'Custom':
        return 'bg-[#B45309] text-white';
      default:
        return 'bg-[#6B7280] text-white';
    }
  };

  const applyCustomSize = () => {
    const width = parseInt(customWidth);
    const height = parseInt(customHeight);
    if (width && height && width > 0 && height > 0) {
      const customDevice: Device = {
        id: 'custom',
        name: 'Custom',
        width,
        height,
        category: 'Custom',
        type: 'mobile',
      };
      onDeviceChange(customDevice);
    }
  };

  if (!isExpanded) {
    return (
      <button
        onClick={() => setIsExpanded(true)}
        className="fixed bottom-5 right-5 w-11 h-11 rounded-full bg-[#1A6FD4] shadow-lg hover:shadow-xl transition-shadow z-[9999] flex items-center justify-center"
        style={{ boxShadow: '0 4px 16px rgba(26, 111, 212, 0.4)' }}
      >
        <Smartphone className="w-5 h-5 text-white" />
      </button>
    );
  }

  return (
    <div
      className="fixed bottom-5 right-5 w-[260px] bg-[#1F2937] border border-[#374151] rounded-xl p-4 z-[9999]"
      style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-white text-xs font-bold">Nellore.IN</span>
        <span className="text-[#9CA3AF] text-[11px]">Device Preview</span>
        <button
          onClick={() => setIsExpanded(false)}
          className="text-white hover:text-[#9CA3AF] transition"
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Current Device Display */}
      <div className="mb-3">
        <div className="text-white text-[13px] font-bold mb-1">
          {selectedDevice.name} {selectedDevice.width}×{selectedDevice.height > 0 ? selectedDevice.height : '100vh'}
        </div>
        <span className={`inline-block px-2 py-0.5 rounded text-[10px] ${getCategoryBadgeColor(selectedDevice.category)}`}>
          {selectedDevice.category}
        </span>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-1 mb-3">
        {(['All', 'Apple', 'Android', 'Custom'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-2 py-1 rounded text-[10px] transition ${
              activeTab === tab
                ? 'bg-[#1A6FD4] text-white'
                : 'bg-[#374151] text-[#9CA3AF] hover:bg-[#4B5563]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Orientation Toggle */}
      {selectedDevice.id !== 'desktop' && (
        <div className="flex gap-1 mb-3">
          <button
            onClick={() => onOrientationChange('portrait')}
            className={`flex-1 px-2 py-1.5 rounded text-[10px] transition ${
              orientation === 'portrait'
                ? 'bg-[#1A6FD4] text-white'
                : 'bg-[#374151] text-[#9CA3AF] hover:bg-[#4B5563]'
            }`}
          >
            Portrait ▯
          </button>
          <button
            onClick={() => onOrientationChange('landscape')}
            className={`flex-1 px-2 py-1.5 rounded text-[10px] transition ${
              orientation === 'landscape'
                ? 'bg-[#1A6FD4] text-white'
                : 'bg-[#374151] text-[#9CA3AF] hover:bg-[#4B5563]'
            }`}
          >
            Landscape ▭
          </button>
        </div>
      )}

      {/* Device List or Custom Inputs */}
      {activeTab === 'Custom' ? (
        <div className="space-y-2">
          <div>
            <label className="text-[#9CA3AF] text-[10px] uppercase tracking-wide block mb-1">Custom Size</label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Width"
                value={customWidth}
                onChange={(e) => setCustomWidth(e.target.value)}
                className="flex-1 bg-[#374151] text-white border border-[#4B5563] rounded px-2 py-1 text-xs"
              />
              <span className="text-[#9CA3AF] self-center">×</span>
              <input
                type="number"
                placeholder="Height"
                value={customHeight}
                onChange={(e) => setCustomHeight(e.target.value)}
                className="flex-1 bg-[#374151] text-white border border-[#4B5563] rounded px-2 py-1 text-xs"
              />
            </div>
          </div>
          <button
            onClick={applyCustomSize}
            className="w-full bg-[#1A6FD4] text-white px-3 py-1.5 rounded text-xs hover:bg-[#185FA5] transition"
          >
            Apply
          </button>
        </div>
      ) : (
        <div className="max-h-[320px] overflow-y-auto">
          {/* Group devices by category */}
          {activeTab === 'All' && (
            <>
              {/* Apple Section */}
              <div className="mb-2">
                <div className="text-[#6B7280] text-[10px] uppercase tracking-wider mb-1">Apple</div>
                {devices
                  .filter((d) => d.category === 'Apple')
                  .map((device) => (
                    <button
                      key={device.id}
                      onClick={() => onDeviceChange(device)}
                      className={`w-full flex items-center justify-between h-8 px-2 border-b border-[#374151] transition ${
                        selectedDevice.id === device.id
                          ? 'bg-[#1A6FD4]'
                          : 'hover:bg-[#374151]'
                      }`}
                    >
                      <span className="text-white text-xs">{device.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[#9CA3AF] text-[11px] font-mono">
                          {device.width}×{device.height}
                        </span>
                        {selectedDevice.id === device.id && <Check className="w-3 h-3 text-white" />}
                      </div>
                    </button>
                  ))}
              </div>

              {/* Android Section */}
              <div className="mb-2">
                <div className="text-[#6B7280] text-[10px] uppercase tracking-wider mb-1">Android</div>
                {devices
                  .filter((d) => d.category === 'Android')
                  .map((device) => (
                    <button
                      key={device.id}
                      onClick={() => onDeviceChange(device)}
                      className={`w-full flex items-center justify-between h-8 px-2 border-b border-[#374151] transition ${
                        selectedDevice.id === device.id
                          ? 'bg-[#1A6FD4]'
                          : 'hover:bg-[#374151]'
                      }`}
                    >
                      <span className="text-white text-xs">{device.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[#9CA3AF] text-[11px] font-mono">
                          {device.width}×{device.height}
                        </span>
                        {selectedDevice.id === device.id && <Check className="w-3 h-3 text-white" />}
                      </div>
                    </button>
                  ))}
              </div>

              {/* Desktop Section */}
              <div>
                <div className="text-[#6B7280] text-[10px] uppercase tracking-wider mb-1">Desktop</div>
                {devices
                  .filter((d) => d.category === 'Desktop')
                  .map((device) => (
                    <button
                      key={device.id}
                      onClick={() => onDeviceChange(device)}
                      className={`w-full flex items-center justify-between h-8 px-2 border-b border-[#374151] transition ${
                        selectedDevice.id === device.id
                          ? 'bg-[#1A6FD4]'
                          : 'hover:bg-[#374151]'
                      }`}
                    >
                      <span className="text-white text-xs">{device.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[#9CA3AF] text-[11px] font-mono">1280+</span>
                        {selectedDevice.id === device.id && <Check className="w-3 h-3 text-white" />}
                      </div>
                    </button>
                  ))}
              </div>
            </>
          )}

          {activeTab !== 'All' && (
            <div>
              {filteredDevices.map((device) => (
                <button
                  key={device.id}
                  onClick={() => onDeviceChange(device)}
                  className={`w-full flex items-center justify-between h-8 px-2 border-b border-[#374151] transition ${
                    selectedDevice.id === device.id
                      ? 'bg-[#1A6FD4]'
                      : 'hover:bg-[#374151]'
                  }`}
                >
                  <span className="text-white text-xs">{device.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#9CA3AF] text-[11px] font-mono">
                      {device.width}×{device.height > 0 ? device.height : '100vh'}
                    </span>
                    {selectedDevice.id === device.id && <Check className="w-3 h-3 text-white" />}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
