import TextInput from "@/Components/TextInput.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {Head, Link, useForm } from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton.jsx";
import { useEffect } from 'react';
import InputError from "@/Components/InputError.jsx";


export default function Login({status, canResetPassword}){

    const {data, setData, post, processing, errors, reset} = useForm({
        email: '',
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    },[]);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    }

    return <>
        <Head title="Sign in"/>
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
                            Welcome Back
                        </div>
                        <p className="text-base text-[#767676] leading-7">
                            Explore our new movies and get <br/>
                            the better insight for your life
                        </p>
                    </div>
                    <form onSubmit={submit} className="w-[370px]">
                        <div className="flex flex-col gap-6">
                            <div>
                                <InputLabel htmlFor="email" value="Email"/>
                                <TextInput
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    variant="primary"
                                    id="email"
                                    value={data.email}
                                    autoComplete={"username"}
                                    isFocused={true}
                                    handleChange={(e) => setData('email', e.target.value)}
                                />
                                <InputError message={errors.email} className={"mt-2"}/>
                            </div>
                            <div>
                                <InputLabel htmlFor="password" value="Password"/>
                                <TextInput
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    id="password"
                                    value={data.password}
                                    autoComplete={"current-password"}
                                    handleChange={(e) => setData('password', e.target.value)}
                                />
                                <InputError message={errors.password} className={"mt-2"}/>
                            </div>
                        </div>
                        <div className="grid space-y-[14px] mt-[30px]">
                            <PrimaryButton type="button" disabled={processing}>
                                    <span className="text-base font-semibold">
                                        Start Watching
                                    </span>
                            </PrimaryButton>
                            <Link href={route('prototype.register')}>
                                <SecondaryButton type="button">
                                    <span className="text-base text-white">
                                        Create New Account
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
