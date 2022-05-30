export interface GroupLock {
  id: number;
  created_at: Date;
  updated_at: Date;
  group_id: number;
  group: {
    id: number;
    name: string;
  };
  lock_id: number;
  lock: {
    id: number;
    name: string;
    description: string;
  };
  place_id: number;
  place: {
    id: number;
    name: string;
  };
}
