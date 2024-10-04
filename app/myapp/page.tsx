import { auth } from '@/auth'
import PkgSelector from '@/components/pkgSelector'
import SignOut from '@/components/signout';

export default async function Page() {
    const session = await auth();
    if (!session) return <div>Please signin</div>

    return (
        <div className='text-center max-w-xl'>
            <SignOut/>
            <h1 className="border">Welcome the paid app!</h1>
            <PkgSelector/>
            <div className="text-start">{JSON.stringify(session)}</div>
        </div>
    )
}