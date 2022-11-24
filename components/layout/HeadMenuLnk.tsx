import Link from "next/link";

type HeadMenuLinkProps = {
    text: string,
    path: string,
    isActive: boolean
}

export default function HeadMenuLink({ text, path, isActive }:HeadMenuLinkProps) {

    return <Link href={path}>
                <span style={isActive ? { fontWeight: 'normal' } : {}}>{ text }</span>
            </Link>;
}