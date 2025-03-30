// components/settings/SettingsPage.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  IoColorPaletteOutline, IoNotificationsOutline, IoKeyOutline,
  IoPersonOutline, IoGlobeOutline, IoShieldCheckmarkOutline,
  IoCloudUploadOutline, IoSpeedometerOutline, IoBuildOutline,
  IoToggleOutline, IoLanguageOutline, IoTimeOutline 
} from 'react-icons/io5';
import { HiCheck, HiOutlinePlus } from 'react-icons/hi';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('appearance');

  const tabs = [
    {
      id: 'appearance',
      name: 'Appearance',
      icon: <IoColorPaletteOutline />,
      color: 'blue'
    },
    {
      id: 'notifications',
      name: 'Notifications',
      icon: <IoNotificationsOutline />,
      color: 'purple'
    },
    {
      id: 'security',
      name: 'Security',
      icon: <IoShieldCheckmarkOutline />,
      color: 'red'
    },
    {
      id: 'account',
      name: 'Account',
      icon: <IoPersonOutline />,
      color: 'green'
    }
  ];

  const settings = {
    appearance: [
      {
        id: 'theme',
        title: 'Theme',
        description: 'Choose your preferred color scheme',
        type: 'theme-selector',
        options: [
          { id: 'light', name: 'Light', color: 'bg-white' },
          { id: 'dark', name: 'Dark', color: 'bg-gray-900' },
          { id: 'system', name: 'System', color: 'bg-gradient-to-r from-gray-100 to-gray-900' }
        ],
        current: 'system'
      },
      {
        id: 'accent-color',
        title: 'Accent Color',
        description: 'Choose your preferred accent color',
        type: 'color-picker',
        options: [
          { id: 'blue', color: 'bg-blue-500' },
          { id: 'purple', color: 'bg-purple-500' },
          { id: 'green', color: 'bg-green-500' },
          { id: 'red', color: 'bg-red-500' },
          { id: 'yellow', color: 'bg-yellow-500' }
        ],
        current: 'blue'
      },
      {
        id: 'animations',
        title: 'Interface Animations',
        description: 'Enable or disable interface animations',
        type: 'toggle',
        enabled: true
      },
      {
        id: 'radius',
        title: 'Corner Radius',
        description: 'Adjust the corner roundness of elements',
        type: 'slider',
        min: 0,
        max: 20,
        current: 12
      }
    ],
    notifications: [
      {
        id: 'email-notifications',
        title: 'Email Notifications',
        description: 'Receive notifications via email',
        type: 'toggle',
        enabled: true
      },
      {
        id: 'push-notifications',
        title: 'Push Notifications',
        description: 'Receive push notifications on your device',
        type: 'toggle',
        enabled: true
      },
      {
        id: 'notification-sound',
        title: 'Notification Sound',
        description: 'Play a sound when receiving notifications',
        type: 'toggle',
        enabled: false
      }
    ],
    security: [
      {
        id: 'two-factor',
        title: 'Two-Factor Authentication',
        description: 'Add an extra layer of security to your account',
        type: 'toggle',
        enabled: true
      },
      {
        id: 'session-timeout',
        title: 'Session Timeout',
        description: 'Automatically log out after inactivity',
        type: 'select',
        options: [
          { id: '15', name: '15 minutes' },
          { id: '30', name: '30 minutes' },
          { id: '60', name: '1 hour' }
        ],
        current: '30'
      }
    ],
    account: [
      {
        id: 'profile',
        title: 'Profile Information',
        description: 'Update your profile details',
        type: 'form',
        fields: [
          { id: 'name', label: 'Name', type: 'text' },
          { id: 'email', label: 'Email', type: 'email' },
          { id: 'bio', label: 'Bio', type: 'textarea' }
        ]
      }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gray-50 p-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/20 mb-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-xl">
              <IoBuildOutline className="text-2xl text-blue-500" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Settings
              </h1>
              <p className="text-gray-500 mt-1">
                Customize your experience
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64">
            <div className="bg-white rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/20">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                      ${activeTab === tab.id 
                        ? `bg-${tab.color}-50 text-${tab.color}-600` 
                        : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    {tab.icon}
                    {tab.name}
                  </motion.button>
                ))}
              </nav>
            </div>
          </div>

          {/* Settings Content */}
          <div className="flex-1">
            <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/20">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                {settings[activeTab].map((setting) => (
                  <div key={setting.id} className="border-b border-gray-100 last:border-0 pb-8 last:pb-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {setting.title}
                        </h3>
                        <p className="text-gray-500 mt-1">
                          {setting.description}
                        </p>
                      </div>

                      {/* Setting Controls */}
                      {setting.type === 'toggle' && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                            ${setting.enabled ? 'bg-blue-500' : 'bg-gray-200'}`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                              ${setting.enabled ? 'translate-x-6' : 'translate-x-1'}`}
                          />
                        </motion.button>
                      )}

                      {setting.type === 'theme-selector' && (
                        <div className="flex gap-3">
                          {setting.options.map((option) => (
                            <motion.button
                              key={option.id}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className={`relative p-3 rounded-xl border-2 transition-all duration-200
                                ${option.id === setting.current 
                                  ? 'border-blue-500' 
                                  : 'border-gray-200'}`}
                            >
                              <div className={`w-12 h-12 rounded-lg ${option.color}`} />
                              <span className="block text-sm mt-2">{option.name}</span>
                              {option.id === setting.current && (
                                <div className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 rounded-full 
                                  flex items-center justify-center text-white">
                                  <HiCheck size={12} />
                                </div>
                              )}
                            </motion.button>
                          ))}
                        </div>
                      )}

                      {setting.type === 'color-picker' && (
                        <div className="flex gap-2">
                          {setting.options.map((option) => (
                            <motion.button
                              key={option.id}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className={`w-8 h-8 rounded-full ${option.color} 
                                ${option.id === setting.current 
                                  ? 'ring-2 ring-offset-2 ring-blue-500' 
                                  : ''}`}
                            />
                          ))}
                        </div>
                      )}

                      {setting.type === 'select' && (
                        <select
                          className="px-4 py-2 rounded-xl border border-gray-200 bg-gray-50 
                            text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          {setting.options.map((option) => (
                            <option key={option.id} value={option.id}>
                              {option.name}
                            </option>
                          ))}
                        </select>
                      )}

                      {setting.type === 'slider' && (
                        <div className="w-64">
                          <input
                            type="range"
                            min={setting.min}
                            max={setting.max}
                            value={setting.current}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none 
                              cursor-pointer accent-blue-500"
                          />
                          <div className="flex justify-between text-sm text-gray-500 mt-2">
                            <span>{setting.min}px</span>
                            <span>{setting.current}px</span>
                            <span>{setting.max}px</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Settings;