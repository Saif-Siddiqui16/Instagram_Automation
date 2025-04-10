
import { activateAutomation } from '@/actions/automations';
import { Button } from '@/components/ui/button';
import { useMutationData } from '@/hooks/use-mutation-data';
import { useQueryAutomation } from '@/hooks/user-queries';
import { ActiveAutomation } from '@/icons/active-automation';
import { Loader2 } from 'lucide-react';
import React from 'react';

type Props = {
  id: string
}

const ActivateAutomationButton = ({ id }: Props) => {
    const { data } = useQueryAutomation(id);
    const {isPending,mutate}=useMutationData(
        ['activate'],
        (data:{state:boolean})=>activateAutomation(id,data.state),
'automation-info'
    )
    return (
    <Button onClick={()=>mutate({state:!data?.data?.active})}
    className='lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352cc] font-medium to-[#1c2d70] ml-4'
    disabled={isPending}
    >
         {isPending ? <Loader2 className='animate-spin' /> : <ActiveAutomation />}
         <p className='lg:inline hidden'>
        {data?.data?.active ? 'Disable' : 'Activate'}
      </p>
        </Button>
  );
}

export default ActivateAutomationButton;
