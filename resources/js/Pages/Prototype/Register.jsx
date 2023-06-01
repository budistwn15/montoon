import InputLabel from "@/Components/InputLabel.jsx";
import {Input} from "postcss";
import TextInput from "@/Components/TextInput.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {Head, Link} from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton.jsx";

export default function register(){
    return <>
        <Head title="Sign Up"/>
        <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
            <div className="fixed top-[-50px] hidden lg:block">
                <img src="/images/signup-image.png"
                     className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt=""/>
            </div>
            <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                <div>
                    <img src="/images/moonton-white.svg" alt=""/>
                    <div className="my-[70px]">
                        <div className="font-semibold text-[26px] mb-3">
                            Sign Up
                        </div>
                        <p className="text-base text-[#767676] leading-7">
                            Explore our new movies and get <br/>
                            the better insight for your life
                        </p>
                    </div>
                    <form className="w-[370px]">
                        <div className="flex flex-col gap-6">
                            <div>
                                <InputLabel htmlFor="fullname" value="Full Name"/>
                                <TextInput type="text" name="fullname" placeholder="Your fullname..."/>
                            </div>
                            <div>
                                <InputLabel htmlFor="email" value="Email"/>
                                <TextInput type="email" name="email" placeholder="Your email address..."/>
                            </div>
                            <div>
                                <InputLabel htmlFor="password" value="Password"/>
                                <TextInput type="password" name="password" placeholder="Your password..."/>
                            </div>
                        </div>
                        <div className="grid space-y-[14px] mt-[30px]">
                            <PrimaryButton type="submit">
                                <span className="text-base font-semibold">
                                Sign Up
                            </span>
                            </PrimaryButton>
                            <Link href={route('prototype.login')}>
                                <SecondaryButton>
                                    <span className="text-base text-white">
                                        Sign In to My Account
                                    </span>
                                </SecondaryButton>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}
