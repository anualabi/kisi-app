export interface Lock {
  id: number;
  created_at: Date;
  updated_at: Date;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  configured: boolean;
  online: boolean;
  unlocked: boolean;
  unlocked_until: Date;
  locked_down: boolean;
  locked_down_since: Date;
  scheduling_conditions: string;
  open: boolean;
  geofence_restriction_enabled: boolean;
  geofence_restriction_radius: number;
  reader_restriction_enabled: boolean;
  time_restriction_enabled: boolean;
  time_restriction_time_zone: string;
  groups_count: number;
  order_id: number;
  favorite: boolean;
  place_id: number;
  place: {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
  };
  floor_id: number;
  integration_id: number;
}
