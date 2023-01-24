import Logo from "@/assets/Logo.png";

type Props = {}

function Footer({}: Props) {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div
                className="mt-16 basis-1/2 md:mt-0"
                >
                    <img src={Logo} alt="logo" />
                    <p className="my-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint natus molestias ut sunt, consequatur quas accusantium optio qui quae labore reprehenderit amet doloribus non cum quia. Aspernatur soluta iure voluptates.
                    </p>
                    <p>&copy; MVMT Studio All Rights Reserved.</p>
                </div>
                <div
                className="mt-16 basis-1/4 md:mt-0"
                >
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Instagram</p>
                    <p className="my-5">LinkedIn</p>
                    <p className="my-5">Etc</p>
                </div>
                <div
                className="mt-16 basis-1/4 md:mt-0"
                >
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    <p>(222) 222-2222</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;