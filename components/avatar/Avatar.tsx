import * as Avatar from '@radix-ui/react-avatar';

export default function UserAvater (){
    return(
        <Avatar.Root className="flex items-center justify-center overflow-hidden w-14 h-14 rounded-full">
            <Avatar.Image
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                alt="Wallace Mukoka" />
            <Avatar.AvatarFallback  delayMs={600}>
                WM
            </Avatar.AvatarFallback>

        </Avatar.Root>
    )
}