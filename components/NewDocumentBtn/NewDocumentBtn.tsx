"use client'"
import { useTransition } from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation';

export default function NewDocumentBtn() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter()
  const handleCreateNewDocument = () =>{
    startTransition(async() => {
    const {docId} = await CreateNewDocument();
    router.push(`/doc/${docId}`)
    })
  return (
    <div className='p-2'>
      <Button disabled={isPending}  onClick={handleCreateNewDocument}>
        {isPending ? "Creating..." : "New Document"}
        </Button>
    </div>
  )
}
