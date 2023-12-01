'use client'

    import { Button } from "@/components/ui/button";
    import * as z from "zod"


    import {
      Form,
      FormControl,
      FormDescription,
      FormField,
      FormItem,
      FormLabel,
      FormMessage,
    } from "@/components/ui/form"
    
    import { Input } from "@/components/ui/input"
    
    import { useForm } from 'react-hook-form';

import {zodResolver} from '@hookform/resolvers/zod'
import { usePathname, useRouter } from "next/navigation";
import { commentValidation } from '@/lib/validations/thread';
import Image from "next/image";
import { addCommentToThread } from "@/lib/actions/thread.actions";
//import { createThread } from "@/lib/actions/thread.actions";

interface Props {
    threadId: string;
    currentUserImg: string;
    currentUserId: string;
}

const Comment = ({threadId, currentUserId, currentUserImg} : Props) => {


    const router = useRouter()
    const pathname = usePathname()

    const form = useForm({
        resolver : zodResolver(commentValidation),
       defaultValues: {
        thread: '',
      
       }
        
    })

    const onSubmit = async(values: z.infer<typeof commentValidation>) => {
        await addCommentToThread( threadId,  values.thread, JSON.parse(currentUserId), pathname )
       form.reset()

    }
  return (
    
    <Form {...form}>
    {/* <form
     onSubmit={form.handleSubmit(onSubmit)}
      className='comment-form'>
      <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="flex gap-3 w-full items-center">
              <FormLabel>
               <Image
               src={currentUserImg}
               alt="profile image"
               width={48}
               height={48}
               className="rounded-full object-cover"
               />
              </FormLabel>
              <FormControl className='border-none bg-transparent'>
                <Input
                type="text"
                placeholder="Comment ..."
                className="no-focus text-light-1 outline-none"
                {...field}
                 />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type ='submit' className="comment-form_btn">
            Reply
        </Button>
     </form> */}

<form className='comment-form' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='thread'
          render={({ field }) => (
            <FormItem className='flex w-full items-center gap-3'>
              <FormLabel>
                <Image
                  src={currentUserImg}
                  alt='current_user'
                  width={48}
                  height={48}
                  className='rounded-full object-cover'
                />
              </FormLabel>
              <FormControl className='border-none bg-transparent'>
                <Input
                  type='text'
                  {...field}
                  placeholder='Comment...'
                  className='no-focus text-light-1 outline-none'
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type='submit' className='comment-form_btn'>
          Reply
        </Button>
      </form>
    </Form>
  )
}

export default Comment