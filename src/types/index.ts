export type CarrierType = 'Econet' | 'NetOne' | 'Telecel' | 'Other';

export type NetworkSpeed = '4g' | '2g_edge' | 'offline';

export type OfflineTheme = 'daylight' | 'oled_blackout' | 'kariba_navy' | 'jacaranda' | 'mist';

export interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  carrier: CarrierType;
  avatar: string; // Base64 data URL
  avatarBytes: number;
  isVerified: boolean;
  trustScore: number;
  location: string;
  joinedAt: string;
  bio?: string;
}

export interface DataTrackerState {
  dailyBudgetMb: number; // 2, 5, or 10
  bytesUsedToday: number;
  bytesSent: number;
  bytesReceived: number;
  bytesMedia: number;
  bytesAvatars: number;
  textOnlyMode: boolean;
  aggressiveCompression: boolean;
  offlineQueueActive: boolean;
  lastResetDate: string;
}

export type MessageStatus = 'queued' | 'sending' | 'sent' | 'delivered' | 'read';

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  senderName: string;
  senderAvatar?: string;
  senderCarrier?: CarrierType;
  content: string;
  timestamp: number;
  status: MessageStatus;
  sizeBytes: number;
  mediaType?: 'none' | 'image' | 'audio' | 'video' | 'ai_music' | 'ai_video';
  mediaUrl?: string;
  mediaName?: string;
  mediaDuration?: number; // seconds for audio
  highResAvailable?: boolean;
}

export interface Chat {
  id: string;
  type: 'direct' | 'group' | 'channel' | 'gemini_bot';
  name: string;
  avatar: string;
  description?: string;
  members: string[]; // User IDs
  memberDetails?: {
    id: string;
    name: string;
    carrier: CarrierType;
    verified: boolean;
    avatar: string;
    role?: 'admin' | 'member';
  }[];
  lastMessage?: Message;
  unreadCount: number;
  dataPolicy?: 'strict_text' | 'balanced' | 'standard';
  isVerifiedOrg?: boolean;
  locationTag?: string;
  carrierBadge?: CarrierType;
  isOnline?: boolean;
}

export interface GeneratedMedia {
  id: string;
  type: 'image' | 'music' | 'video';
  title: string;
  url: string;
  sizeBytes: number;
  timestamp: number;
  prompt: string;
  duration?: number;
}
