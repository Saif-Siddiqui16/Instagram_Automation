import PostNode from '@/components/global/automations/post/node';
import ThenNode from '@/components/global/automations/then/node';
import Trigger from '@/components/global/automations/trigger';
import AutomationsBreadCrumb from '@/components/global/bread-crumbs/automations';
import { Warning } from '@/icons';
import React from 'react';

type Props = {
    params: Promise<{ id: string }>;
}

const Page = async ({ params }: Props) => {
    const { id } = await params; // Resolve the Promise to get the 'id'

    return (
        <div className='flex flex-col items-center gap-y-20 min-h-screen'>
            <div>
                <AutomationsBreadCrumb id={id} />
                <div className='flex gap-x-5'>
                    <Warning />
                    When......
                </div>
                <Trigger id={id} />
            </div>
            <ThenNode id={id} />
            <PostNode id={id} />
        </div>
    );
}

export default Page;
