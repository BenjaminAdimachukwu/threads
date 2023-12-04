import AccountProfile from "@/components/forms/AccountProfile"
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation";

async function Page () {

    const user = await currentUser()

    if (!user) return null; 
  const userInfo = await fetchUser(user.id);
  if (userInfo?.onboarded) redirect("/");

    const userdata = {
        id: user?.id,
        objectId: userInfo?._id,
        username:userInfo? userInfo?.username : user?.username,
        name: userInfo?userInfo.name: user?.firstName || '',
        bio: userInfo?userInfo.bio :'',
        image: userInfo? userInfo.image: user?.imageUrl
        
    }
    return (
        <main className="mx-auto flex flex-col px-10 py-20">
            <h1 className="head-text">onboarding</h1>
            <p className="text-base-regular text-light-2 mt-3">Complete your profile now to use Threads</p>

            <section className="mt-9 bg-dark-2 p-10">
                < AccountProfile 
                 user = {userdata}
                 btnTitle='continue'
                />
            </section>
        </main>
    )
}
export default Page