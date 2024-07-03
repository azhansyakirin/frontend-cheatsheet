import { Layout } from "../../components/Layout"

export const ComingSoon = ({ }) => {
    return (
        <Layout>
            <main className="w-full m-auto md:p-12">
                <div className="my-8">
                    <p className="text-2xl font-poorstory text-spanLight dark:text-spanDark">Holla Dev!</p>
                    <h1 className="text-4xl md:text-6xl text-textLight dark:text-textDark">COMING <span className="text-spanLight dark:text-spanDark">SOON</span></h1>
                </div>
                <div className="my-8">
                    <p className="text-left font-lora text-lg md:text-2xl text-textLight dark:text-textDark">
                        “Quality apps needs longer timeline to build. Stay tuned!”
                    </p>
                    <p className="text-left font-lora text-lg md:text-2xl text-textLight dark:text-textDark italic">
                        -developer
                    </p>
                </div>
            </main>
        </Layout>
    )
}