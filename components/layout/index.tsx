import Head from './Head'

type layoutProps = {
    children: JSX.Element
}

export default function Layout({ children }: layoutProps) {
    return (
        <>
            <Head />
            <main>{children}</main>
        </>
    )
}