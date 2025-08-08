import API from './api';
import { HeartbeatResponse, HeartbeatCreateRequest } from '../types/heartbeats';

/**
 * Create a heartbeat (unauthenticated)
 * 
 * @param data Heartbeat creation data
 * @returns Created HeartbeatResponse
 */
const createUnauthenticatedHeartbeat = async () =>{
    // Get IP Address and User Agent from the request context if available
    

    const response = await API.post('/heartbeats', {
        user_id: null,
        ip_address: null,
        user_agent: null,
        is_authenticated: false
    });
    return response.data;
};