import { useEffect, useRef } from 'react';
import API from '../lib/api';

type UseHeartbeatOptions = {
    interval?: number; // milliseconds
    authenticated?: boolean;
    token?: string; // required if authenticated
    endpoint: string;
};

export default function useHeartbeat({
    interval = 30000,
    authenticated = false,
    token,
    endpoint,
}: UseHeartbeatOptions) {
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const sendHeartbeat = async () => {
            try {
                const headers: Record<string, string> = {
                    'Content-Type': 'application/json',
                };
                if (authenticated) {
                    if (!token) {
                        console.warn('Authenticated heartbeat requires a token.');
                        return;
                    }
                    headers['Authorization'] = `Bearer ${token}`;
                }
                await API.post(endpoint, {
                    headers,
                    body: JSON.stringify({ timestamp: Date.now() }),
                });
            } catch (err) {
                console.error('Heartbeat failed:', err);
            }
        };

        timerRef.current = setInterval(sendHeartbeat, interval);

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [interval, authenticated, token, endpoint]);
}