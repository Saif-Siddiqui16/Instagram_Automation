
type Props = {
    type: 'FREE' | 'PRO';
    children: React.ReactNode;
}

export const SubscriptioPlan = ({ children, type }: Props) => {
    // console.log('dataquery-->',data)
    return (
        <div>
            <h1>{type}</h1>
            {children}
        </div>
    )
}