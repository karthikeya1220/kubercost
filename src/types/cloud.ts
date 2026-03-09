export type ProviderId = 'aws' | 'azure' | 'gcp' | 'onprem';

export type NodePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface CloudMetrics {
  cpu: number;
  gpu: number;
  ram: number;
  pv: number;
  network: number;
  cloud: number;
}

export interface CloudProvider {
  id: ProviderId;
  name: string;
  /** Raw hex — only for SVG attrs (stroke/fill), never used in CSS */
  color: string;
  podCount: number;
  metrics: CloudMetrics;
  /** Sum of all metric values */
  total: number;
}

export interface PathEntry {
  id: ProviderId;
  d: string;
  color: string;
  position: NodePosition;
}

export interface DummyUser {
  id: number;
  firstName: string;
  height: number;
  weight: number;
}

export interface DummyUsersResponse {
  users: DummyUser[];
  total: number;
  skip: number;
  limit: number;
}
