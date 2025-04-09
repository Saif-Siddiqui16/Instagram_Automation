import Infobar from '@/components/global/infobar';
import Sidebar from '@/components/global/sidebar';
import React from 'react';

type Props = {
  children: React.ReactNode;
  params: { slug: string };
}

const Layout = async ({ children, params }: Props) => {
  const slug = await params.slug;
  return (
    <div className="bg-black text-white flex min-h-screen">
      <div className="p-2 hidden md:inline w-[250px]">
        <Sidebar slug={slug} />
      </div>
      <div className="flex flex-col flex-grow w-full">
        <Infobar slug={slug} />
        <div className="flex-grow">{children}</div> {/* This ensures content grows inside the layout */}
      </div>
    </div>
  );
}

export default Layout;
