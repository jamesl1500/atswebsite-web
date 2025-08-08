/**
 * Type definitions for Heartbeat API responses
 */
export interface HeartbeatResponse {
    id: number;
    user_id: number | null;
    ip_address: string | null;
    user_agent: string | null;
    is_authenticated: boolean;
    created_at: string;
    updated_at: string;
}

export interface HeartbeatCreateRequest {
    user_id?: number | null;
    ip_address?: string | null;
    user_agent?: string | null;
    is_authenticated?: boolean;
}