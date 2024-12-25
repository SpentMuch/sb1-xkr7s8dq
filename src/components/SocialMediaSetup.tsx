import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface SocialPlatform {
  id: string;
  name: string;
  icon: React.ElementType;
  isConfigured: boolean;
}

const platforms: SocialPlatform[] = [
  { id: 'facebook', name: 'Facebook', icon: Facebook, isConfigured: false },
  { id: 'twitter', name: 'Twitter', icon: Twitter, isConfigured: false },
  { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, isConfigured: false },
  { id: 'instagram', name: 'Instagram', icon: Instagram, isConfigured: false },
];

export default function SocialMediaSetup() {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [config, setConfig] = useState({
    accessToken: '',
    apiKey: '',
    apiSecret: '',
  });

  const handleSave = async () => {
    // Save configuration to Supabase
    console.log('Saving configuration:', { platform: selectedPlatform, config });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Social Media Setup</h2>
        <p className="text-gray-600">
          Connect your social media accounts to start publishing campaigns
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {platforms.map((platform) => (
          <div
            key={platform.id}
            className={`border rounded-lg p-4 cursor-pointer transition-all ${
              selectedPlatform === platform.id
                ? 'border-blue-500 bg-blue-50'
                : 'hover:border-gray-300'
            }`}
            onClick={() => setSelectedPlatform(platform.id)}
          >
            <div className="flex items-center mb-3">
              <platform.icon className="w-6 h-6 mr-2" />
              <h3 className="font-semibold">{platform.name}</h3>
            </div>
            <div className="flex items-center text-sm">
              <div
                className={`w-2 h-2 rounded-full mr-2 ${
                  platform.isConfigured ? 'bg-green-500' : 'bg-gray-300'
                }`}
              />
              {platform.isConfigured ? 'Connected' : 'Not configured'}
            </div>
          </div>
        ))}
      </div>

      {selectedPlatform && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">Configuration</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Access Token
              </label>
              <input
                type="password"
                className="w-full p-2 border rounded-md"
                value={config.accessToken}
                onChange={(e) =>
                  setConfig({ ...config, accessToken: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                API Key (if required)
              </label>
              <input
                type="password"
                className="w-full p-2 border rounded-md"
                value={config.apiKey}
                onChange={(e) =>
                  setConfig({ ...config, apiKey: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                API Secret (if required)
              </label>
              <input
                type="password"
                className="w-full p-2 border rounded-md"
                value={config.apiSecret}
                onChange={(e) =>
                  setConfig({ ...config, apiSecret: e.target.value })
                }
              />
            </div>
            <button
              onClick={handleSave}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Save Configuration
            </button>
          </div>
        </div>
      )}
    </div>
  );
}