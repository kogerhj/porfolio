export default function About() {
return (
    <section id="about">
        <div className="w-3/4 bg-light-gray mx-auto my-20 flex px-10 py-20 md:flex-row flex-col align items-center rounded">
            <div className="m-auto flex flex-col mb-16 md:mb-0 items-center text-center">
                <h1 className="text-4xl mb-8 font-medium text-white m-auto">
                    My name is Levi.
                    {/*<br className="hidden lg:inline-block" /> I like to build things.*/}
                </h1>
                <p className="mb-8 leading-relaxed">
                    A software developer looking to
                    solve one more problem, to automate one more task,
                    to drink one more cup of coffee
                </p>
                <div className="m-auto flex-row justify-center">
                    <a
                    href="#contact"
                    className="inline-flex text-white bg-sky-blue border-0 py-2 px-6 ease-linear duration-200 focus:outline-non hover:bg-powder-blue hover:text-light-gray rounded text-lg">
                        Work with me
                    </a>
                    <a
                    href="#projects"
                    className="ml-4 inline-flex text-white bg-sky-blue border-0 py-2 px-6 ease-linear duration-200 focus:outline-non hover:bg-powder-blue hover:text-light-gray rounded text-lg">
                        See what I&apos;ve done
                    </a>
                </div>
            </div>
            {/*<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">*/}
            {/*    <img*/}
            {/*        className="object-cover object-center rounded"*/}
            {/*        alt="IMAGE/SVG"*/}
            {/*    />*/}
            {/*</div>*/}
        </div>
    </section>
)
}