"use client"
import { LogoSmall } from '@/svgs/logo-small';
import Items from './items';
import { usePaths } from '@/hooks/use-paths';
import { Separator } from '@/components/ui/separator';
import ClerkAuthState from '../clerk-auth-state';
import { HelpDuoToneWhite } from '@/icons';

type Props = {
  slug: string;
}

const Sidebar = ({ slug }: Props) => {
  const { page } = usePaths();
  
  return (
    <div className="relative border-2 border-slate-500 rounded-2xl min-h-screen flex flex-col">
      <div className="p-5 flex flex-col items-center flex-grow">
        <div className="">
          <LogoSmall />
        </div>
        <div className="mt-10 flex-grow">
          <Items page={page} slug={slug} />
        </div>
        <Separator className="mt-5" />
        <div className="mt-5 w-full flex flex-col gap-5 px-3">
          <div className="flex gap-2 items-center">
            <ClerkAuthState />
            <span>Profile</span>
          </div>
          <div className="flex gap-x-3">
            <HelpDuoToneWhite />
            <p className="text-[#9B9CA0]">Help</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
