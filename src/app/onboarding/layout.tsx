import { getUser } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function OnboardingLayout({ children }: { children: React.ReactNode }) {

    return (
        <div>
            {children}
        </div>
    );
}
