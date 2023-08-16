import { prisma } from '@/utils/db'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
const createNewUser = async () => {
  console.log('running')
  const clerkUser = await currentUser()
  console.log(clerkUser)
  const match = await prisma.user.findUnique({
    where: {
      clerkId: clerkUser?.id as string,
    },
  })

  if (!match) {
    const newUser = await prisma.user.create({
      data: {
        clerkId: clerkUser?.id,
        email: clerkUser?.emailAddresses[0].emailAddress,
      },
    })
    redirect('/home')
  }
}

const NewUser = async () => {
  await createNewUser()
  return <div>...loading</div>
}

export default NewUser
