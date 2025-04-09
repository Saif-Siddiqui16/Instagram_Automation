import { InstagramDuoToneBlue } from "@/icons";

type Props = {
    title: string;
    icon: React.ReactNode;
    description: string;
    strategy: 'INSTAGRAM' | 'CRM';
}

export const INTEGRATION_CARDS: Props[] = [
    {
        title: 'Connect Instagram',
        description: 'Using this you can connect the automation to your Instagram',
        icon: <InstagramDuoToneBlue />,
        strategy: 'INSTAGRAM',
    },
   
]