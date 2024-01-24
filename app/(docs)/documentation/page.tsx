import type { Metadata } from 'next'
import { FC } from 'react'
import LargeHeading  from '@/ui/LargeHeading';
import Paragraph from '@/ui/Paragraph';
import DocumentationTabs from '@/components/DocumentationTabs';
import 'simplebar-react/dist/simplebar.min.css'

export const metadata: Metadata = {
  title: 'Similarity API | Documentation',
  description: 'Free & open-source text similarity API',
}
const wait = (ms:number)=> new Promise((resolve)=>{setTimeout(resolve,ms)})

const page: FC = async () => {
  await wait(3000)
  return (
    <div className='container max-w-7xl mx-auto mt-12'>
      <div className='flex flex-col items-center gap-6'>
      <LargeHeading>Making a request</LargeHeading>
        <Paragraph>api/v1/similarity</Paragraph>
        <DocumentationTabs />
      </div>
    </div>
  )
}

export default page
