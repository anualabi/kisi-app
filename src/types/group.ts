export interface Group {
  id: number;
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  geofence_restriction_enabled: boolean;
  geofence_restriction_radius: number;
  primary_device_restriction_enabled: boolean;
  reader_restriction_enabled: boolean;
  time_restriction_enabled: boolean;
  login_enabled: boolean;
  members_count: number;
  locks_count: number;
  elevator_stops_count: number;
  place_id: number;
  place: {
    id: number;
    name: string;
  };
  time_restriction_time_zone: string;
  time_restriction_time_slots: [];
}

export type GroupPayload = Pick<
  Group,
  | 'id'
  | 'name'
  | 'locks_count'
  | 'members_count'
  | 'time_restriction_enabled'
  | 'geofence_restriction_enabled'
  | 'primary_device_restriction_enabled'
  | 'reader_restriction_enabled'
>;
